const Model = class Model {

    constructor(){
        // this.connectionDB();
    }

    connectionDB() {

        if(process.env.DBDRIVER == 'mysql'){
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

                return mysqlConnection;
        }
    }
}

module.exports = Model;