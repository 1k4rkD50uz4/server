import net from 'net';
import workerData from './mainWorker.js';
const hostName = "127.0.0.1",
    port = process.env.PORT || 8000,
    inData = {value:undefined, done: false},
    server = net.createServer((c) => {
        console.log('client connected'); 
        c.on('data', (data) => {
            inData.value = data.toString();
            console.log(`msg from client: ${inData.value}`);
        });
        c.on('end', () => {
            console.log('client disconnected');
        }); 
        c.write(String.fromCharCode(workerData.value));
        c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(port, hostName, () => {    
    console.log(`server listening on ${hostName}:${port}`);
});