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
            assert.isNaN(convertHandler.getNum("0.5/2/3km"),`input does not result in NaN`)

        })
    })

});