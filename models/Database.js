
const mysql = require('mysql');

const db = async () => {
    var mysqlConnection;

    if(process.env.DBDRIVER == 'mysql'){
        mysqlConnection = mysql.createConnection({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME,
            multipleStatements: true
            });
    
            mysqlConnection.connect((err)=> {
                if(!err)
                console.log('Connection Established Successfully');
                else
                console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
            });
    }else if(process.env.DBDRIVER == 'postgre'){
        // const pool = new Pool({
        //     user: process.env.LOCALPGUSER,
        //     host: process.env.LOCALPGHOST,
        //     database: process.env.LOCALPGDATABASE,
        //     password: process.env.LOCALPGPASSWORD,
        //     port: process.env.LOCALPGPORT,
        // })

        // await pool.connect()
        // const res = await pool.query(sql, params)
        // // console.log(res)
        // return res;
    }

    return await mysqlConnection;
}



const get1 = async (sql) => {
    try {
        var mysqlConnection = mysql.createConnection({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME,
            multipleStatements: true
            });
    
        mysqlConnection.connect((err)=> {
            if(!err)
            console.log('Connection Established Successfully');
            else
            console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });

        return mysqlConnection.query(sql, async (err, rows, fields) => {
           if(!err){
            // console.log(rows);
            const data = await rows;
            return data;
           }else{
            console.log(err);
           }
        })
    } catch (error) {
        console.log(error)
    }
}

const get = async (sql, params) => {


        var pool = mysql.createPool({
            // connectionLimit: 5,
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME,
        });

        // await pool.query(sql, function (error, results, fields) {
        //     if (error) throw error;
        //     var res = results;
        //     console.log(res);
        //     return res;
        //   });

        return pool;

        

        // const pool = new mysql({
        //     host: process.env.DBHOST,
        //         user: process.env.DBUSER,
        //         password: process.env.DBPASSWORD,
        //         database: process.env.DBNAME,
        // })

        //   await pool.connect()
        // const res = await pool.query(sql, params)
        // console.log(res)
        // return res;


}



const query = async (sql, params) => {
    try {
        var mysqlConnection = mysql.createConnection({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME,
            multipleStatements: true
            });
    
            mysqlConnection.connect((err)=> {
                if(!err)
                console.log('Connection Established Successfully');
                else
                console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
            });
            mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err)
                return true;
            else
                console.log(err);
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    db,
    query,
    get,
}





