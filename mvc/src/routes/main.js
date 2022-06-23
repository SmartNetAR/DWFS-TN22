const express = require("express");
const router = express.Router();

router.get("/ejs", (req, res)=>{
    res.render("header")
})

router.get("/", (req, res)=>{

    res.send("el mensaje");

})

module.exports = router;
