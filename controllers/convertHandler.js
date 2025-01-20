function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if(input.includes("/")) {
      const slashNum = input.match(/(\/)/g).length;
      if(slashNum > 1) {
        result = "invalid number"
      } else {
        const [numerator,denominator] = input.match(/(^(?:[0-9]+|\d+\.\d{0,2})\/(?:[0-9]+|\d+\.\d{0,2}))/g)[0].match(/(\d+\.\d{0,2})|([0-9]+)/g);
        result = Number(numerator) / Number(denominator);
      }
    } else if(Number.isNaN(parseFloat(input))) {result = 1}
    else {result = parseFloat(input)}
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    const unitSearch = input.match(/(km|L|mi|gal|lbs|kg)/gi);
    if(unitSearch === null) {
      result = "invalid unit"
    } else {result = unitSearch[0]}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
