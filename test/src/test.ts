"use strict";

import chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;
const should = chai.should();

import Future = require("../../scripts/bin/future");

describe("#Future", () => {
	it("should resolve", (done) => {
		let future = new Future<string>(),
			promise = future.asPromise();

		promise.should.be.fulfilled.eventually.equal("string").notify(done);
		future.resolve("string");
	});

	it("should resolve asynchronously", (done) => {
		let future = new Future<number>(),
			promise = future.asPromise();

		promise.should.be.fulfilled.eventually.equal(4).notify(done);
		setTimeout(() => {
			future.resolve(4);
		}, 100);
	});

	it("should reject", (done) => {
		let future = new Future<string>(),
			promise = future.asPromise();

		promise.should.be.rejected.eventually.equal("no good").notify(done);
		future.reject("no good");
	});

	it("should reject asynchronously", (done) => {
		let future = new Future<number>(),
			promise = future.asPromise();

		promise.should.be.rejected.eventually.deep.equal(new Error("no good")).notify(done);
		setTimeout(() => {
			future.reject(new Error("no good"));
		}, 100);
	});
});