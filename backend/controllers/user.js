const db = require("../config/database.js");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next)=> {
    const user = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const prenom = req.body.prenom;
    const nom = req.body.nom;

    db.query("SELECT * FROM utilisateur WHERE email = ?", [user], (err, result) => {
        if (err) console.log(err);
        console.log("JSON.stringify(result).length: "+ JSON.stringify(result).length);
        if(JSON.stringify(result).length === 2){
            db.query("INSERT INTO utilisateur (email, nom, prenom, password) VALUES (?,?,?,?)", [user, nom, prenom, hashedPassword], (err, result) => {
            if(err) console.log(err);
            console.log('un utilisateur ajouté!');
            });
            db.query("SELECT * FROM utilisateur WHERE email = ?", [user], (err, result) => {
                res.status(200).json({
                    message: "Absent",
                    userId: result[0].id,
                    token: jwt.sign(
                        {userId: result[0].id},
                        'RANDOM_TOKEN_SECRET',
                        {expiresIn: '24h'}
                    )
                });
            })
        }else{
            res.json({message: "Present"});
        };
        console.log('Les données de la table utilisateur avec le même email sont: ' + JSON.stringify(result));
    });
};

exports.login = async (req, res, next) =>{
    const user = req.body.email;
    const enteredPassword = req.body.password;

    db.query("SELECT * FROM utilisateur WHERE email = ?", [user], function(err, result){
        if (err) console.log(err);
        console.log("JSON.stringify(result) donne: " + JSON.stringify(result));
        console.log("JSON.stringify(result).length: "+ JSON.stringify(result).length);
        console.log("typeof result: " + typeof result);
        if(JSON.stringify(result).length === 2){
            res.json({message: "Utilisateur non trouvé"});
        }else{
            console.log("result[0].password: " + result[0].password);
            console.log("result[0].id: " + result[0].id);
            bcrypt.compare(enteredPassword, result[0].password)
            .then(valid => {
                if (!valid) {
                    res.json({message: 'Mot de passe incorrect!'});
                }else{
                    res.status(200).json({
                        message: "Identifiants valides",
                        userId: result[0].id,
                        token: jwt.sign(
                            {userId: result[0].id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                        )
                    });
                }
            })
            .catch(err => console.log(err));
        }
    })
}



    /*db.query("INSERT INTO utilisateur (email, nom, prenom, password) VALUES (?,?,?,?)", [user, nom, prenom, hashedPassword], (err, result) => {
        if(err) throw err;
        console.log('un utilisateur ajouté!');
    });*/

    
    /*
    db.getConnection( async (err, connection) => {
        if(err) throw (err);

        const sqlSearch = "SELECT * FROM utilisateur WHERE user = ?";
        const search_query = mysql.format(sqlSearch, [user]);

        const sqlInsert = "INSERT INTO utilisateur VALUES (0, ?, ?, ?, ?)";
        const insert_query = mysql.format(sqlInsert, [user, hashedPassword, nom, prenom]);

        await connection.query(search_query, async (err, result) => {
            if(err) throw(err);
            console.log("----------> Search Results");
            console.log(result.length);

            if(result.length != 0) {
                connection.release();
                console.log("------------> User already exists");
                res.sendStatus(409);
            }else{
                await connection.query (insert_query, (err, result) => {
                    connection.release();
                    if(err) throw (err);
                    console.log("----------> Created new User");
                    console.log(result.insertId);
                    res.sendStatus(201);
                })
            }

        })
    });
    */

    /*db.connect( async function (err, connection) {
        if(err) throw (err);
        console.log("Connecté, page user controllers!");

        const sqlSearch = "SELECT * FROM utilisateur WHERE user = ?";
        const search_query = mysql.format(sqlSearch, [user]);

        const sqlInsert = "INSERT INTO utilisateur VALUES (0, ?, ?, ?, ?)";
        const insert_query = mysql.format(sqlInsert, [user, hashedPassword, nom, prenom]);

        await connection.query(search_query, async (err, result) => {
            if(err) throw(err);
            console.log("----------> Search Results");
            console.log(result.length);

            if(result.length != 0) {
                connection.release();
                console.log("------------> User already exists");
                res.sendStatus(409);
            }else{
                await connection.query (insert_query, (err, result) => {
                    connection.release();
                    if(err) throw (err);
                    console.log("----------> Created new User");
                    console.log(result.insertId);
                    res.sendStatus(201);
                })
            }

        })
    });*/




























/**export const getUserByEmail = (email, result) => {
    db.query("SELECT * FROM utilisateur WHERE email = ?", [email], (err, results) =>{
        if(err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results[0]);
        }
    });
}

export const insertUser = (data, result) => {
    db.query("INSERT INTO utilisateur SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

export const updateUserByEmail = (data, email, result) => {
    db.query("UPDATE utilisateur SET nom = ?, prenom = ?, password = ? WHERE email =?", [data.nom, data.prenom, data.password, email], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

export const deleteUserProfileByEmail = (email, result) => {
    db.query("DELETE FROM utilisateur WHERE email = ?", [email], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}
**/