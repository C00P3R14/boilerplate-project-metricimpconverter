const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();


suite('Unit Tests', function(){
    suite('Number Format Test',() => {
        test('should correctly read a whole number input',() => {
            assert.isTrue(Number.isInteger(convertHandler.getNum("2km")),"input read correct whole number")
        });
        test('should correctly read a decimal number input',() => {
            assert.isTrue(convertHandler.getNum("0.5km") === 0.5,"input read correct decimal number")
        });
        test('should correctly read a fraction input',() => {
            assert.isTrue(convertHandler.getNum("1/2km") === 0.5,"input read correct fraction input")
        });
        test('should correctly read a fractional input with a decimal',() => {
            assert.isTrue(convertHandler.getNum("0.5/2km") === 0.25,"input read correct fraction with decimal number")
        });
        test("return an error on a double-fraction (i.e. 3/2/3)",() => {
            assert.isTrue(convertHandler.getNum("0.5/2/3km") === 'invalid number',`input does not result in invalid number`)
        });
        test("should correctly default to a numerical input of 1 when no numerical input is provided",() => {
            assert.isTrue(convertHandler.getNum("km") === 1,"returns 1 by default if unit is provided")
        })
    })
    suite("Unit Validation",() => {
        test("should correctly read each valid input unit",() => {
            assert.isTrue(convertHandler.getUnit("1km") === "km")
        });
        test("should correctly return an error for an invalid input unit",() => {
            assert.isTrue(convertHandler.getUnit("1kw") === "invalid unit")
        });
        test("should return the correct return unit for each valid input unit",() => {
            assert.isTrue(convertHandler.getUnit("1km") === "km")
        });
        test("should correctly return the spelled-out string unit for each valid input unit.",() => {
            assert.isTrue(convertHandler.spellOutUnit("l") === "liters")
        });

    suite("Conversion Tests",() => {
        test("should correctly convert gal to L",() => {
            assert.isAbove(
                convertHandler
                .convert(
                    convertHandler.getNum("2gal"),
                    convertHandler.getUnit("2gal")
                ),2);
        });
        test("should correctly convert L to gal",() => {
            assert.isBelow(
                convertHandler
                .convert(
                    convertHandler.getNum("2L"),
                    convertHandler.getUnit("2L")
                ),2);
            });
            test("should correctly convert mi to km",() => {
                assert.isAbove(
                    convertHandler
                    .convert(
                        convertHandler.getNum("2mi"),
                        convertHandler.getUnit("2mi")
                    ),2);
            });
            test("should correctly convert km to mi",() => {
                assert.isBelow(
                    convertHandler
                    .convert(
                        convertHandler.getNum("2km"),
                        convertHandler.getUnit("2km")
                    ),2);
                });
                test("should correctly convert lbs to kg",() => {
                    assert.isBelow(
                        convertHandler
                        .convert(
                            convertHandler.getNum("2lbs"),
                            convertHandler.getUnit("2lbs")
                        ),1);
                });
                test("should correctly convert kg to lbs",() => {
                    assert.isAbove(
                        convertHandler
                        .convert(
                            convertHandler.getNum("2kg"),
                            convertHandler.getUnit("2kg")
                        ),1);
                    });        

    })

    })
});