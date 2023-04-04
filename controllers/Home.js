const  BaseController  = require("../controllers/BaseController");

// const index = (req, res) => {

//     res.render("home/index", {
//       data: 'Hello World'
//     });
//   };

//   module.exports = {
//     index,
//   };
// extends BaseController





module.exports = class Home extends BaseController  {

    
    #akunya = 'Hello Aku';
    constructor() {
        super();
        this.id = 788;
        super.name = 'Zail';
      }

  index(req, res) {
    // super.getId();
    // this.halo();
    res.render("home/index", {
      data: "Hello World",
      dataid: super.getId(),
      msg : this.#akunya
    });
  }

  hallo(){
    return 'my name is saepulfariz';
  }

  home(){
    
    res.render("home/index", {
        data: "Hello World"
      });
  }

  res(){
    super.redirect();
  }
};

