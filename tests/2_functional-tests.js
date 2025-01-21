const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    this.timeout(5000);
    suite("e2e Testing",() => {
        test("Test GET /api/convert with valid input",(done) => {
            chai.request(server)
            .keepOpen()
            .get("/api/convert?input=10L")
            .end((req, res) => {
                assert.equal(res.status,200);
                assert.equal(res.text,'{"initNum":10,"initUnit":"l","returnNum":2.6417217685798895,"returnUnit":"gal","string":"10 liters converts to 2.6417217685798895 gallons"}')
                done()
            })
        })
    })

});
