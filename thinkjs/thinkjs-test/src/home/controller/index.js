'use strict';

import Base from './base.js';

//var Base = require("./base.js");

//module.exports = think.controller(Base, {
//
//});

export default class extends Base {

  __before(){
    console.log("before");
  }

  __after(){
    console.log("after");
  }

  __call(){
    console.log("call");
  }

  init(http){
    console.log("init");
    super.init(http);
  }


  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(self){

    let config = this.config("config.secrue");

    console.log(" ============ ");

    console.log( self.http.headers );

    console.log( config );

    console.log( self.http.host );
    console.log( self.http.url );

    console.log(" ============ ");

    let gets = parseInt(self.get("page_id"), 10);

    let isAjax = self.isAjax();

    let tempalte = await self.fetch("index.html");

    //console.log( tempalte );

    //self.download("index.html");

    console.log("is ajax: " + isAjax);

    let home = this.model("home");
    let data = await home.field(["name","age"]).select();

    //this.fail("GET_DATA_ERROR");
    this.json(data);
    //this.error("Params Error.");
    //this.success( data );

    //auto render template file index_index.html
    //return this.display("index.html");
  }
}