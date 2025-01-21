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
    const unitSearch = input.match(/(km$|L$|mi$|gal$|lbs$|kg$)/gi);
    if(unitSearch === null) {
      result = "invalid unit"
    } else {result = unitSearch[0].toLowerCase()}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    const returnUnit = {
      gal: "L",
      l: "gal",
      kg: "lbs",
      lbs: "kg",
      km: "mi",
      mi:"km"
    }

    result = returnUnit[initUnit.toLowerCase()]
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    const unitSpellouts = {
      km: "kilometers",
      kg: "kilograms",
      l: "liters",
      mi: "miles",
      gal: "gallons",
      lbs: "pounds"
    }

    result = unitSpellouts[unit.toLowerCase()]
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const conversion = {
      gal: () => initNum * galToL,
      lbs: () => initNum * lbsToKg,
      mi: () => initNum * miToKm,
      L: () => initNum / galToL,
      kg: () => initNum / lbsToKg,
      km: () => initNum / miToKm
    }
    
    let result = conversion[initUnit === "l" ? initUnit.toUpperCase() : initUnit]();
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    if( initNum === "invalid number" && initUnit === "invalid unit") {
      result = "invalid number and unit"
      return
    }
    if(initNum === "invalid number") {
      result = "invalid number"
      return
    }
    if(initUnit === "invalid unit") {
      result = "invalid unit"
      return
    }

    result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
    
    return result;
  };
  
}

module.exports = ConvertHandler;
