/**
 * Created by nitzan on 10/09/2016.
 */

class Future<T> implements PromiseLike<T> {
	private promise: Promise<T>;
	private resolveFunction: (value?: T | PromiseLike<T>) => void;
	private rejectFunction: (reason?: any) => void;

	constructor(promise?: Promise<T>) {
		if (!(this instanceof Future)){
			return new Future(promise);
		}

		this.promise = promise || new Promise(this.promiseExecutor.bind(this));
	}

	public asPromise(): Promise<T> {
		return this.promise;
	}

	public then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Future<TResult>;
	public then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Future<TResult>;
	public then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => any): Future<TResult> {
		return new Future(this.promise.then(onfulfilled, onrejected));
	}

	public catch(onrejected?: (reason: any) => T | PromiseLike<T>): Future<T>;
	public catch(onrejected?: (reason: any) => void): Future<T>;
	public catch(onrejected?: (reason: any) => any): Future<T> {
		return new Future(this.promise.catch(onrejected));
	}

	public resolve(value?: T | PromiseLike<T>) {
		this.resolveFunction(value);
	}

	public reject(reason?: any) {
		this.rejectFunction(reason);
	}

	private promiseExecutor(resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) {
		this.resolveFunction = resolve;
		this.rejectFunction = reject;
	}
}

export = Future;
