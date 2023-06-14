import { Worker } from 'worker_threads';
import utils from '../utils/utils.js';
const worker = new Worker('./worker.js');
//worker.postMessage({ value: value, done: false });
worker.on('message', (msg) => {
    main.call(msg);
    //worker.terminate();
});
worker.on('exit', (code) => {
    console.log('our worker stopped with the following code: ',
        code);
});
function main() {
    let i = this.i,
        c = this.c,
        arr = this.arr,
        s = utils.sentence;
    s = s.substring(s.indexOf(c) - i, s.length - i);
    const iter = s[Symbol.iterator]();
    let res = iter.next();
    while (!res.done) {
        arr.splice(i, 0, res.value, s[s.indexOf(arr[0]) - i]);
    }
}
const mainWorker = {
    worker: worker
}
export default mainWorker;