import { parentPort } from 'worker_threads';
import utils from '../utils/utils.js';
import { promises } from 'fs';

const s = 'The quick brown fox jumped over the lazy dog',
    iter = s[Symbol.iterator]();
function main() {
    if (doWork()) {
        console.log('worker done');
    }
}
function doWork() {
    const inc = i => ++i,
        compare = utils.compare;
    let i = 0,
        res = iter.next(),
        c = res.value,
        arr = [];
    while (!res.done) {
        let val = compare(c, res.value);
        if (val == -1) {
            arr.push.apply(arr, [s[s.length - i++], c]);
            c = s[s.length - i];
            i = s.lastIndexOf(res.value);
            parentPort.postMessage({ i: i, c: c, arr: arr });
            return true;
        }
        else if (val == 1) {            
            (async () => {
                res = iter.next();
                res = iter.next();
                arr.unshift(res.value);
                await promises.writeFile('data.txt', arr.toString());                
            })();
            arr = [];
        }
        else {
            let _c = c.toLowerCase();
            arr.splice(i, i, _c, String.fromCharCode(inc(_c.charCodeAt(i++))));
            res = iter.next();
            c = res.value;
        }
        res = iter.next();
    }
}
main();
parentPort.on('message', (msg) => {
    console.log(`msg from parent: ${JSON.stringify(msg)}`);
});