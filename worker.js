import { parentPort } from 'worker_threads';
import { fork } from 'child_process';
const child = fork('child.js');
child.on('message', (msg) => {
    switch (msg) {
        case 'CONNECT': {
            console.log(`our child is connected to us. Tell it to dispose 
             of itself`);
            child.send('DISCONNECT');
            break;
        }
        case 'DISCONNECT': {
            console.log(`our child is disposing of itself. Time for us to 
             do the same`);
            process.exit();
            break;
        }
        default: {
            console.log(`msg: ${msg}`);
            process.exit();
            break;
        }
    }
});
parentPort.on('message', (msg) => {
    console.log(`msg from parent: ${JSON.stringify(msg)}`);
});