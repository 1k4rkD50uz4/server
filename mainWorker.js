import { Worker } from 'worker_threads';
const worker = new Worker('./worker.js'),
    s = "The quick brown fox jumped over the lazy dog",
    iter = s[Symbol.iterator](),
    i = 0,
    inc = i => ++i,
    workerData = { value: undefined, done: false };
let res = iter.next(),
    fName = 'toLowerCase',
    f = c => c[fName](i),
    value = f(res.value);
worker.postMessage({ value: value, done: false });
worker.on('message', (msg) => {
    console.log(`msg from worker: ${JSON.stringify(msg)}`);
    value = msg.value;
    workerData.value = value;
    //worker.terminate();
});
worker.on('exit', (code) => {
    console.log('our worker stopped with the following code: ',
        code);
});
export default workerData;