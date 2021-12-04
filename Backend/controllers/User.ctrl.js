const userModel = require("../models/user.model");
const jsonwebtoken = require('jsonwebtoken')

class UserController {
    getAll = (req, res) => {
        userModel.find((error, docs) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(docs);
            }
        });
    }
    getSorted = (req, res) => {
        userModel.find((error, docs) => {
            if (error) {
                res.status(500).json({ error })
            } else {
                res.status(200).json(docs)
            }
        }).sort({ date: -1 }).limit(5)
    }
    getByCode = (req, res) => {
        let identification = req.params.identification;
        userModel.findOne({ "identification": identification }, (error, docs) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(docs);
            }
        });

    }
    create = (req, res) => {
        let { firstname, lastname, mail, contact, username, password, identification, role } = req.body;
        userModel.create({ firstname, lastname, mail, contact, username, password, identification, role }, (error, doc) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                console.log(doc);
                let token = jsonwebtoken.sign({identification: doc.identification}, process.env.NODE_PRIVATE_KEY);
                res.status(201).json(token);
            }
        });
    }
    update = (req, res) => {
        let { firstname, lastname, mail, contact, username, password, identification, role } = req.body;
        userModel.findOneAndUpdate({ "identification": identification }, { firstname, lastname, mail, contact, username, password, identification, role }, (error, docs) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json({ info: 'Proveedor actualizado' });
            }
        });
    }
    delete = (req, res) => {
        let { identification } = req.body;
        userModel.findOneAndRemove({ "identification": identification }, (error, doc) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                if (doc) {
                    res.status(200).json({ removed: true })
                } else {
                    res.status(200).json({ removed: false })
                }
            }
        });
    }
    count = (req, res) => {
        userModel.estimatedDocumentCount((error, docs) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(docs);
            }
        })
    }

}
module.exports = UserController
