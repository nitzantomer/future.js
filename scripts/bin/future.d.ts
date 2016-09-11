declare class Future<T> implements PromiseLike<T> {
    private promise;
    private resolveFunction;
    private rejectFunction;
    constructor(promise?: Promise<T>);
    asPromise(): Promise<T>;
    then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Future<TResult>;
    then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Future<TResult>;
    catch(onrejected?: (reason: any) => T | PromiseLike<T>): Future<T>;
    catch(onrejected?: (reason: any) => void): Future<T>;
    resolve(value?: T | PromiseLike<T>): void;
    reject(reason?: any): void;
    private promiseExecutor(resolve, reject);
}
export = Future;
