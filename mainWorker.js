import { Worker } from 'worker_threads';
const worker = new Worker('./worker.js');
//worker.postMessage({ value: value, done: false });
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
const mainWorker = {
    worker: worker
}
export default mainWorker;