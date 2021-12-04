const clientModel = require("../models/client.model")


class ClientController {
    getAll = (req, res)=>{
        clientModel.find((error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(docs);
            }
        });
    }
    getSorted = (req, res) => {
        clientModel.find((error, docs) => {
            if(error){
                res.status(500).json({error})
            }else{
                res.status(200).json(docs)
            }
        }).sort({date: -1}).limit(5)
    }
    getByCode = (req, res)=> {
            let identification = req.params.identification;
            clientModel.findOne( {"identification": identification}, (error, docs) => {
                if(error){
                    res.status(500).json({error});
                }else{
                    res.status(200).json(docs);
                }
            } );
            
    }
    create = (req, res)=>{
        let {firstname, lastname, mail, contact, identification, typeid} = req.body;
        clientModel.create({firstname, lastname, mail, contact, identification, typeid}, (error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(201).json(docs);
            }
        });
    }
    update = (req, res)=>{
        let {firstname, lastname, mail, contact, identification, typeid} = req.body;
        clientModel.findOneAndUpdate({"identification": identification}, {firstname, lastname, mail, contact, identification, typeid}, (error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json({info: 'Cliente actualizado'});
            }
        });
    }
    delete = (req, res)=>{
        let {identification} = req.body;
        clientModel.findOneAndRemove({"identification": identification},  (error, doc) => {
            if(error){
                res.status(500).json({error});
            }else{
                if(doc){
                    res.status(200).json({removed: true})
                }else{
                    res.status(200).json({removed: false})
                }
            }
        });
    }
    count = (req, res) => {
        clientModel.estimatedDocumentCount((error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(docs);
            }
        })
    }

}
module.exports = ClientController