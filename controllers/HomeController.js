const db = require('../models/Database');


const homeIndex = (req, res) => {

    db.get().then(result => {
        // console.log(result);
        result.query('SELECT * FROM mahasiswa', function (error, results, fields) {
                if (error) throw error;
                // var res = results;
                // console.log(res);
                // return res;
                res.render("home/index", {
                  data: 'Hello World',
                  mahasiswa: results
                });
              });
    }).catch((error) => console.log(error.message));
  };

  const homeShow = (req, res)=> {
    // buat tangkap segment id nya
    const id = parseInt(req.params.id);

    db.get().then(result => {
        result.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, results, fields) {
                if (error) throw error;

                if (results.length == 0) {
                    // jika tidak ada id nya maka redirect
                    res.redirect('/mahasiswa');
                } else {
                    res.render("home/show", {
                      data: 'Hello World',
                      mahasiswa: results[0]
                    });

                }
              });
    }).catch((error) => console.log(error.message));
  }

  const homeNew = (req, res) => {

    res.render("home/new", {
        data: 'Hello World',
      });
  };

  
  const homeCreate = (req, res)=> {
    // buat tangkap form data nya

    const {
        nama,
        email,
        npm,
        jurusan
    } = req.body


    db.get().then(result => {
        // var sql = 'INSERT INTO users (nama, email, npm, jurusan) VALUES (' + nama + ', ' + email + ', ' + npm + ',' + jurusan + ' )';
        var sql = 'INSERT INTO mahasiswa (nama, email, npm, jurusan) VALUES (?, ?, ?, ?)';
        param = [nama, email, npm, jurusan];
        result.query(sql, param, function (error, results, fields) {
                if (error) throw error;
                res.redirect('/mahasiswa');
              });
    }).catch((error) => console.log(error.message));
  }


  const homeEdit = (req, res)=> {
    // buat tangkap segment id nya
    const id = parseInt(req.params.id);

    db.get().then(result => {
        result.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, results, fields) {
                if (error) throw error;

                if (results.length == 0) {
                    // jika tidak ada id nya maka redirect
                    res.redirect('/mahasiswa');
                } else {
                    res.render("home/edit", {
                      data: 'Hello World',
                      mahasiswa: results[0]
                    });

                }
              });
    }).catch((error) => console.log(error.message));
  }


  const homeUpdate = (req, res)=> {

    const id = parseInt(req.params.id);


    // buat tangkap form data nya
    const {
        nama,
        email,
        npm,
        jurusan
    } = req.body


    db.get().then(result => {
        var sql = 'UPDATE mahasiswa SET nama = ?, email = ?, npm = ?, jurusan = ? WHERE id = ?';
        param = [nama, email, npm, jurusan, id];
        result.query(sql, param, function (error, results, fields) {
                if (error) throw error;
                res.redirect('/mahasiswa');
              });
    }).catch((error) => console.log(error.message));
  }

  const homeDelete = (req, res)=> {
    // buat tangkap segment id nya
    const id = parseInt(req.params.id);

    db.get().then(result => {
        result.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, results, fields) {
                if (error) throw error;

                if (results.length == 0) {
                    // jika tidak ada id nya maka redirect
                    res.redirect('/mahasiswa');
                } else {
                    db.get().then(result => {
                        result.query('DELETE FROM mahasiswa WHERE id = ?', [id], function (error, results, fields) {
                                if (error) throw error;
                
                                res.redirect('/mahasiswa');
                              });
                    }).catch((error) => console.log(error.message));

                }
              });
    }).catch((error) => console.log(error.message));

  }

  module.exports = {
    homeIndex,
    homeShow,
    homeNew,
    homeCreate,
    homeEdit,
    homeUpdate,
    homeDelete,
  };