"use strict";
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const should = chai.should();
const Future = require("../../scripts/bin/future");
describe("#Future", () => {
    it("should resolve", (done) => {
        let future = new Future();
        future.should.be.fulfilled.eventually.equal("string").notify(done);
        future.resolve("string");
    });
    it("should resolve as promise", (done) => {
        let future = new Future();
        future.asPromise().should.be.fulfilled.eventually.equal("string").notify(done);
        future.resolve("string");
    });
    it("should resolve asynchronously", (done) => {
        let future = new Future();
        future.should.be.fulfilled.eventually.equal(4).notify(done);
        setTimeout(() => {
            future.resolve(4);
        }, 100);
    });
    it("should resolve asynchronously as promise", (done) => {
        let future = new Future();
        future.asPromise().should.be.fulfilled.eventually.equal(4).notify(done);
        setTimeout(() => {
            future.resolve(4);
        }, 100);
    });
    it("should reject", (done) => {
        let future = new Future();
        future.should.be.rejected.eventually.equal("no good").notify(done);
        future.reject("no good");
    });
    it("should reject as promise", (done) => {
        let future = new Future();
        future.asPromise().should.be.rejected.eventually.equal("no good").notify(done);
        future.reject("no good");
    });
    it("should reject asynchronously", (done) => {
        let future = new Future();
        future.should.be.rejected.eventually.deep.equal(new Error("no good")).notify(done);
        setTimeout(() => {
            future.reject(new Error("no good"));
        }, 100);
    });
    it("should reject asynchronously as promise", (done) => {
        let future = new Future();
        future.asPromise().should.be.rejected.eventually.deep.equal(new Error("no good")).notify(done);
        setTimeout(() => {
            future.reject(new Error("no good"));
        }, 100);
    });
    it("should be resolved with chaining", (done) => {
        let future1 = new Future(), future2 = future1.then(num => num.toString());
        future2.should.be.fulfilled.eventually.equal("4").notify(done);
        future1.resolve(4);
    });
    it("should be rejected with chaining", (done) => {
        let future1 = new Future(), future2 = future1.then(num => num.toString());
        future2.should.be.rejected.eventually.equal("no good").notify(done);
        future1.reject("no good");
    });
});
//# sourceMappingURL=test.js.map