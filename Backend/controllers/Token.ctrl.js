const jwt = require('jsonwebtoken');

class TokenController {

    verifyAuth = (req, res, next)=>{
        let token = this.getToken(req);
        jwt.verify(token, process.env.NODE_PRIVATE_KEY, (error, decode) =>{
            if(error){
                res.status(401).json({info: 'No se pudo autenticar usuario'});
            }else{
                next();
            }
        });
    }

    getToken = (req) => {
        let token = null
        let authorization = req.headers.authorization;
        if (authorization != null && authorization != undefined) {
            token =authorization.split(" ")[1];
        }
        return token;
    }


}

module.exports = TokenController