const db = require("../config/database.js");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

exports.signup = async (req, res, next)=> {
    const user = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const prenom = req.body.prenom;
    const nom = req.body.nom;

    db.query("SELECT * FROM utilisateur WHERE email = ?", [user], (err, result) => {
        if (err) throw err;
        console.log('Les données de la table utilisateur avec le même email sont: ' + JSON.stringify(result));
    });
    db.query("INSERT INTO utilisateur (email, nom, prenom, password) VALUES (?,?,?,?)", [user, nom, prenom, hashedPassword], (err, result) => {
        if(err) throw err;
        console.log('un utilisateur ajouté!');
    });
    
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
}



























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