const suplierModel = require("../models/suplier.model")

class SuplierController {
    getAll = (req, res)=>{
        suplierModel.find((error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(docs);
            }
        });
    }
    getByCode = (req, res)=> {
            let ruc = req.params.ruc;
            suplierModel.findOne( {"ruc": ruc}, (error, docs) => {
                if(error){
                    res.status(500).json({error});
                }else{
                    res.status(200).json(docs);
                }
            } );
            
    }
    create = (req, res)=>{
        let {name, mail, contact, ruc} = req.body;
        suplierModel.create({name, mail, contact, ruc}, (error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(201).json(docs);
            }
        });
    }
    update = (req, res)=>{
        let {name, mail, contact, ruc} = req.body;
        suplierModel.findOneAndUpdate({"ruc": ruc}, {name, mail, contact, ruc}, (error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json({info: 'Proveedor actualizado'});
            }
        });
    }
    delete = (req, res)=>{
        let {ruc} = req.body;
        suplierModel.findOneAndRemove({"ruc": ruc},  (error, doc) => {
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
        suplierModel.estimatedDocumentCount((error, docs) => {
            if(error){
                res.status(500).json({error});
            }else{
                res.status(200).json(docs);
            }
        })
    }

}
module.exports = SuplierController