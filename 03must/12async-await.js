function promises() {
  const succesfulPromise = timeout(100).then((result) => `success: ${result}`);
  const failingPromise = timeout(200, true).then(null, (error) =>
    Promise.reject(`niepowodzenie: ${error}`)
  );
  const recoveredPromise = timout(300, true).then(null, (error) =>
    Promise.resolve(`nie powiodło się i odzyskano: ${error}`)
  );
  succesfulPromise.then(log, logError);
  failingPromise.then(log, logError);
  recoveredPromise.then(log, logError);
}

function asyncAwaits() {
  async function succesfulAsyncAwait() {
    const result = await timeout(100);
    return `success: ${result}`;
  }
  async function failedAsyncAwait() {
    const result = await timeout(200, true);
    return `nie powiodlo sie: ${result}`;
  }
  async function recoveredAsyncAwait() {
    let result;
    try {
      result = await timeout(300, true);
      return `nie powiodlo sie: ${result}`;
    } catch (error) {
      return `nie powiodlo sie i odzyskano: ${error}`;
    }
  }
  succesfulAsyncAwait.then(log, logError);
  failedAsyncAwait.then(log, logError);
  recoveredAsyncAwait.then(log, logError);
}

function log(...args) {
  console.log(...args);
}
function logError(...args) {
  console.error(...args);
}

function timeout(duration = 0, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`rejected after ${duration}ms`);
      } else {
        resolve(`resolved after ${duration}ms`);
      }
    }, duration);
  });
}
