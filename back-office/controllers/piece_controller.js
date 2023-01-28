require("dotenv").config(); 
const { Router } = require("express"); // import router from express
const Piece = require("../models/piece"); 

const router = Router();

router.post("/financier/add_piece", async (req, res) =>{
    try {
        const piece = await Piece.create({
            photo: req.body.photo,
            piece_name: req.body.piece_name,
            prix: req.body.prix,
            main_oeuvre: req.body.main_oeuvre
        });
        res.status(200).json({ status:200,piece });
    } catch (error) {
      res.status(400).json({ error });
    }
});

router.get("/financier/get_piece", async (req, res) =>{
    try {
        const piece = await Piece.find();
        res.status(200).json({ status:200,piece });
    } catch (error) {
      res.status(400).json({ error });
    }
});

module.exports = router;