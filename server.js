import sort from './app.js';
import net from 'net';
let PORT = process.env.PORT || 8000;
const server = net.createServer((c) => {
    // 'connection' listener.
    console.log('client connected');    
    c.on('data', (data) => {
        console.log(data.toString());
        client.write('world!\r\n');
        client.end();
    });
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(PORT, () => {
    console.log(`Server started.\nListening on port: ${PORT}.\nDebugger port: ` + 5858);    
    sort();
});