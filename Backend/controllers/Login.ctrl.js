const userModel = require("../models/user.model");
const jsonwebtoken = require('jsonwebtoken');

class LoginController {
    login(req, res) {
        let { username, password} = req.body;
        userModel.find({ username, password}, (error, docs) => {
            if (error) {
                console.log(error);
                res.status(500).send();
            } else {
                if (docs.length >0 ) {
                    let token = jsonwebtoken.sign({identification: docs[0].identification}, process.env.NODE_PRIVATE_KEY);
                    res.status(200).json({token});
                }else{
                    res.status(401).json({info: 'No son válidas las credenciales'});
                }
            }
        })
    }
}

module.exports = LoginController