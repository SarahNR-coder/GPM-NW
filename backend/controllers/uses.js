const db = require("../config/database.js");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const jwt = require('jsonwebtoken');

exports.write = async (req, res, next) => {
    const title = req.body.title;
    const article = req.body.article;
    const userId = req.body.userId;
    let likes = 0;
    let date = new Date().toISOString().slice(0,19).replace('T', ' ');

    db.query("SELECT * FROM article WHERE titre = ?", [title], (err, result) => {
        if(err) console.log(err);
        console.log("JSON.stringify(result).length: "+ JSON.stringify(result).length);
        if(JSON.stringify(result).length === 2){
            db.query("INSERT INTO article (titre, contenu, date_publication, nombre_likes, user_id) VALUES (?,?,?,?,?)", [title, article, date, likes, userId], (err, result) => {
                if(err) console.log(err);
                res.status(200).json({message: "Ajout de l'article"})
            })
        }else{
            res.json({message: "Article déjà ajouté"});
        }
    })
};

exports.getRecent = async (req, res, next) =>{
    db.query("SELECT * FROM( SELECT * FROM article ORDER BY id DESC ) AS subquery LIMIT 4", (err, result) =>{
        if(err) console.log(err);
        res.status(201).json(result);
    })
};