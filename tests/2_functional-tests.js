const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    this.timeout(5000);
    suite("e2e Testing",() => {
        test("Convert a valid input such as 10L: GET request to /api/convert",(done) => {
            chai.request(server)
            .keepOpen()
            .get("/api/convert?input=10L")
            .end((req, res) => {
                assert.equal(res.status,200);
                assert.equal(res.text,'{"initNum":10,"initUnit":"l","returnNum":2.6417217685798895,"returnUnit":"gal","string":"10 liters converts to 2.6417217685798895 gallons"}')
                done()
            })
        });
        test("Convert an invalid input such as 32g: GET request to /api/convert",(done) => {
            chai.request(server)
            .keepOpen()
            .get("/api/convert?input=32g")
            .end((req, res) => {
                assert.equal(res.status,200);
                assert.equal(res.text,"invalid unit")
                done()
            })
        });
        test("Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert",(done) => {
            chai.request(server)
            .keepOpen()
            .get("/api/convert?input=3/7.2/4kg")
            .end((req, res) => {
                assert.equal(res.status,200);
                assert.equal(res.text,"invalid number")
                done()
            })
        });
        test("Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert",(done) => {
            chai.request(server)
            .keepOpen()
            .get("/api/convert?input=3/7.2/4g")
            .end((req, res) => {
                assert.equal(res.status,200);
                assert.equal(res.text,"invalid number and unit")
                done()
            })
        });
        test("Convert with no number such as kg: GET request to /api/convert",(done) => {
            chai.request(server)
            .keepOpen()
            .get("/api/convert?input=kg")
            .end((req, res) => {
                assert.equal(res.status,200);
                assert.equal(res.text,'{"initNum":1,"initUnit":"kg","returnNum":2.2046244201837775,"returnUnit":"lbs","string":"1 kilograms converts to 2.2046244201837775 pounds"}')
                done()
            })
        });
    })

});
