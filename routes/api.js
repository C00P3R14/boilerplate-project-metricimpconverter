'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route("/api/convert")
  .get((req,res) => {
    //res.send(`hlleo ${req.query.input}`)
    
    res.status(200).json(
      convertHandler
      .getString(
        convertHandler.getNum(req.query.input),
        convertHandler.getUnit(req.query.input),
        convertHandler.convert(
          convertHandler.getNum(req.query.input),
          convertHandler.getUnit(req.query.input)
        ),
        convertHandler.getReturnUnit(convertHandler.getUnit(req.query.input))
      )
    )
  })

};
