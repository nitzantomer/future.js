# future.js

A simple wrapper for the promise object which can be used when the logic of the async operation should not be implemented 
inside the promise.

A simple example:

```typescript
class MyRemoteDataFetcher {
	fetch(): Promise<string> {
		let future = new Future<string>();
		
		// make a remote request, when it returns:
		future.resolve(VALUE_FROM_REMOTE);
		// or if it fails:
		future.reject(MESSAGE);
		
		return future.asPromise();
	}
}
```