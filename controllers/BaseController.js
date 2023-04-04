const BaseController = class BaseController {

    #msg = "hello world";

  constructor() {
    this.id = "ID_01";
  }

  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  

  sayHi() {
    console.log("Hi, " + this.name + ", your ID is " + this.id);
  }

  getId(){
    // this.id = idnew;
    return 'ID';
  }

  redirect(req, res) {
    res.redirect('/home');
  }
}

module.exports = BaseController;
