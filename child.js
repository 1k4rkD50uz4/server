import utils from '../../utils/utils.js';
import { readFile, writeFile } from 'fs/promises';

const s = utils.sentence,
    iter = s[Symbol.iterator]();

async function doWork() {
    const inc = i => ++i,
        compare = utils.compare;
    let i = 0,
        argv = process.argv[2],
        res = iter.next(),        
        c = await (async () => {
            await writeFile('data.txt', res.value, (err, data) => {
                if (err) throw err;
            });
            res = iter.next();
            return s[s.length - inc(i)];            
        })(),
        arr = [c, res.value];
    while (!res.done) {
        res = iter.next();
        let val = compare(c, res.value);
        if (val == -1) {
            arr.push(res.value);
            try {
                c = await (async () => {
                    return await readFile('data.txt', 'utf-8', (err, data) => {
                        if (err) throw err;
                    }).then(data => data.toLowerCase());
                })();
                console.log(c);
            }
            catch (ex) {
                console.log(ex);
            }
            
        }
        else if (val == 1) {
            c = argv;
            arr.unshift.apply(arr, [c, res.value]);
            res = iter.next();
        }
        else {
                        
        }
        i++;
    }
}
doWork();
process.on('message', (msg) => {
    switch (msg) {
        case 'DISCONNECT': {
            console.log(`child received a message from the parent: ${msg}`);
            process.send(msg);
            process.exit();
            break;
        }
    }
});