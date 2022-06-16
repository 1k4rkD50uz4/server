import net from 'net';
import { Worker } from 'worker_threads';
import { Buffer } from 'buffer';

const worker = new Worker('./worker.js'),
    s = "The quick brown fox jumped over the lazy dog",
    hostName = "127.0.0.1",
    port = process.env.PORT || 8000;
let iter = s[Symbol.iterator](),
    res = iter.next(),
    value = res.value,
    inData = { value: value },
    outData = { value: null };
worker.postMessage(inData);
worker.on('message', (msg) => {
    console.log(`msg from worker: ${JSON.stringify(msg)}`);
    outData.value = msg.value;
});
worker.on('exit', (code) => {
    console.log('our worker stopped with the following code: ',
        code);
});
const server = net.createServer((c) => {
    console.log('client connected'); 
    c.on('data', (data) => {
        console.log(`msg from client: ${data.toString()}`);
    });
    c.on('end', () => {
        console.log('client disconnected');
    });
    Buffer.  
    c.write(outData);
    c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(port, hostName, () => {    
    console.log(`server listening on ${hostName}:${port}`);
});