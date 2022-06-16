import { Worker } from 'worker_threads';
const worker = new Worker('./worker.js');
const s = "The quick brown fox jumped over the lazy dog";
let iter = s[Symbol.iterator](),
    res = iter.next(),
    value = res.value;
worker.postMessage({ value: value });
worker.on('message', (msg) => {
    console.log(`msg from worker: ${JSON.stringify(msg)}`);
    worker.terminate();
});
worker.on('exit', (code) => {
    console.log('our worker stopped with the following code: ',
        code);
});


