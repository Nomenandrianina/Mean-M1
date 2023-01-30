require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const Reparation = require("../models/reparation"); 
const Car = require("../models/car"); 
const db = require("../db/connection");
const Paiement= require("../models/paiement")
const router = Router();

router.post("/add_reparation", async (req, res) => {
    try {
        const reparation = [];
        const body = req.body.reparation;
        const datenow = Date.now();
        
        console.log("Reparation: ",body);
            for(var i=0;i<body.length;i++){
                data = 
                    {
                        "Piece": body[i].piece,
                        "date_debut": datenow,
                        "date_fin": null,
                        "description": body[i].description,
                        "avancement": 0,
                        "quantite": body[i].quantite,
                        "status": 'En cours',
                        "Car": req.body.Car
                    };
                    reparation.push(data);
            }
        const rep = await Reparation.create(reparation);
        if(rep){
            const car = await Car.findByIdAndUpdate(req.body.Car,  { $set:{status: '1'} });
        }
        res.status(200).json({status:200,rep});
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.get("/all_reparation", async (req, res) => {
    try {
        const reparation = await Reparation.find().populate(["Car","Piece"]);
        res.status(200).json({ status:200,reparation });
    } catch (error) {
        res.status(400).json({ error });
    }
  });

  router.post("/reparation/id", async (req, res) =>{
    try {
      const reparation = await Reparation.findById(req.body.id).populate(["Car","Piece"]);
      res.status(200).json({ status:200,reparation });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.post("/update/avancement", async (req, res) =>{
    try {
      const reparation = await Reparation.findByIdAndUpdate(req.body.id,  { $set:{avancement: req.body.avancement} });
      res.status(200).json({ status:200,reparation });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  router.post("/terminer/reparation", async (req, res) =>{
    try {
      const reparation = await Reparation.findByIdAndUpdate(req.body.id,  { $set:{status: 'Terminer', date_fin: Date.now()} });
      res.status(200).json({ status:200,reparation });
    } catch (error) {
      res.status(400).json({ error });
    }
  });


  router.get("/financier/statistique_hebdomadaire", async (req, res) =>{
    try {

      const all_date=Array.from(Array(6).keys()).map((idx) => {
        const d = new Date(); d.setDate(d.getDate() - d.getDay() + idx);
        return d;
      });
      const test={
        datepaie:new Date("2023-01-29"),
      }
      var liste_date=[];
      const paiement = await Paiement.find().populate(["Reparation"]);
      
      var value_rep=[];
      for (let index = 0; index < paiement.length; index++) {
          value_rep.push(paiement[index].Reparation);
      }
      var value_piece=[];
      var repartion_test=[]; 
      // console.log("yyyyy",value_rep);
      const paie = await Paiement.find().populate(["Reparation"]);
      var reparation = [];
      for(var i=0;i<paie.length;i++){
        for(var j=0; j<paie[i].Reparation.length;j++){
          reparation.push(await Reparation.findById(paie[i].Reparation[j]).populate(["Piece"]));
        }
      }

      var resultat=[];
      if(paie.length>0){
        for (let a = 0; a < paie.length; a++) {
          console.log("day",all_date[a].getDay());
          for (let i = 0; i < all_date.length; i++) {
            if(new Date(paie[a].datepaie).getDay()==all_date[i].getDay()){
              resultat.push({id:paie[a],jour:all_date[i].getDay()});
              break;
            }
            if(new Date(paie[a].datepaie).getDay()!=all_date[i].getDay()){
              resultat.push({id:'',jour:new Date(paie[a].datepaie).getDay()});
              // break;
            }
          }
        }
        console.log("resultat",resultat);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });


  router.get("/financier/moyenne_reparation", async (req, res) =>{
    try {
      
      var response_final = [];
      const reparation = await Reparation.find({'avancement':100});
      var reponses=[];
      var reponse_length=[];

      reparation.forEach(element => {
        var date1 = new Date("2023-01-29");
        var date2 = new Date("2023-01-30");
        var dateDiff = date2.getTime() - date1.getTime();  
        reponses.push({id:element._id,dateDiff: dateDiff,car:element.Car});
        reponse_length.push({id:element._id,dateDiff: dateDiff,car:element.Car});
      });

      const nombre_voiture =[...new Map(reponse_length.map(item => [item['car'], item])).values()];
      const somme_test=reponses.reduce((n, {dateDiff}) => n + dateDiff, 0);
      const somme_moyenne=somme_test/nombre_voiture.length;
      const final_moyenne=Math.floor(somme_moyenne/1000/60/60/24);
      console.log(final_moyenne);
      res.status(200).json({ status:200,final_moyenne});

    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });

  module.exports = router;
