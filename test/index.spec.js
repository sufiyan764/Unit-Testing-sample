const supertest = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("GET /", function () {
    it("it should have status code of 200", function (done) {
        supertest(app)
            .get("/")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            })
    });
    it("it should have response with hope key with value of loop", function (done) {
        supertest(app)
            .get("/")
            .expect({ hope: "loop" })
            .end(function (err, res) {
                if (err) done(err);
                done();
            })
    })
});

describe("POST /", function () {
    it("it should return status code of 200 if name exist ", function (done) {
        supertest(app)
            .post("/")
            .send({ name: "sufiyan" })
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
    it("it should return status code of 400 if name does not exist", function (done) {
        supertest(app)
            .post("/")
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) done(err);
                done();
            })
    });
});