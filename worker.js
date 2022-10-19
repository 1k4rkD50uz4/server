import { parentPort } from 'worker_threads';
const s = "The quick brown fox jumped over the lazy dog",
    i = 0,
    iter = s[Symbol.iterator](),
    inc = i => ++i;
let res = iter.next(),
    fName = 'charCodeAt',
    f = c => c[fName](i),
    value;
parentPort.on('message', (msg) => {
    console.log(`msg from parent: ${JSON.stringify(msg)}`);
    value = f(msg.value);
    parentPort.postMessage({ value: ++value, done: false });
});