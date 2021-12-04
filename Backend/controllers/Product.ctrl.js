const productModel = require("../models/product.model");

class ProductController {
  getAll = (req, res)=>{
      productModel.find((error, docs) => {
          if(error){
              res.status(500).json({error});
          }else{
              res.status(200).json(docs);
          }
      });
  }
  getSorted = (req, res) => {
      productModel.find((error, docs) => {
          if(error){
              res.status(500).json({error})
          }else{
              res.status(200).json(docs)
          }
      }).sort({date: -1}).limit(5)
  }
  getByCode = (req, res)=> {
          let reference = req.params.reference;
          productModel.findOne( {"reference": reference}, (error, docs) => {
              if(error){
                  res.status(500).json({error});
              }else{
                  res.status(200).json(docs);
              }
          } );
          
  }
  create = (req, res)=>{
      let {reference, name, description, stock, pricein, priceout, category} = req.body;
      productModel.create({reference, name, description, stock, pricein, priceout, category}, (error, docs) => {
          if(error){
              res.status(500).json({error});
          }else{
              res.status(201).json(docs);
          }
      });
  }
  update = (req, res)=>{
      let {reference, name, description, stock, pricein, priceout, category} = req.body;
      productModel.findOneAndUpdate({"reference": reference}, {nreference, name, description, stock, pricein, priceout, category}, (error, docs) => {
          if(error){
              res.status(500).json({error});
          }else{
              res.status(200).json({info: 'Producto actualizado'});
          }
      });
  }
  delete = (req, res)=>{
      let {reference} = req.body;
      productModel.findOneAndRemove({"reference": reference},  (error, doc) => {
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
      productModel.estimatedDocumentCount((error, docs) => {
          if(error){
              res.status(500).json({error});
          }else{
              res.status(200).json(docs);
          }
      })
  }

}
module.exports = ProductController
