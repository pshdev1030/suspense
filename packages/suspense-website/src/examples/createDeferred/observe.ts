import { createDeferred } from "suspense";

const deferred = createDeferred<string>();

// REMOVE_BEFORE
deferred.then(
  function onFulfill(value: string) {
    // ..
  },
  function onReject(error: Error) {
    // ...
  }
);
