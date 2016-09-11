"use strict";
class Future {
    constructor(promise) {
        if (!(this instanceof Future)) {
            return new Future(promise);
        }
        this.promise = promise || new Promise(this.promiseExecutor.bind(this));
    }
    asPromise() {
        return this.promise;
    }
    then(onfulfilled, onrejected) {
        return new Future(this.promise.then(onfulfilled, onrejected));
    }
    catch(onrejected) {
        return new Future(this.promise.catch(onrejected));
    }
    resolve(value) {
        this.resolveFunction(value);
    }
    reject(reason) {
        this.rejectFunction(reason);
    }
    promiseExecutor(resolve, reject) {
        this.resolveFunction = resolve;
        this.rejectFunction = reject;
    }
}
module.exports = Future;
//# sourceMappingURL=future.js.map