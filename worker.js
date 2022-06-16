import { parentPort } from 'worker_threads';
const s = "The quick brown fox jumped over the lazy dog";
const inc = i => ++i,
    dec = i => --i;
let i = 0,
    c = s[s.length - inc(i)],
    arr,
    iter = s[Symbol.iterator](),
    res = iter.next(),
    value = String.fromCharCode(+('' + ('' + res.value.charCodeAt(i)).charCodeAt(i)).split('').reverse().join(''));  
parentPort.on('message', (msg) => {
    console.log(`msg from parent: ${JSON.stringify(msg)}`);
    if (compare(msg.value, value)) {
        parentPort.postMessage({ value: value });
    }
});
//function doWork() {
//    res = iter.next();
//    parentPort.postMessage(setData(compare(c,res.value)));
//    if (min<)
//}
//doWork();
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
function setData(res) {
    let obj = {};
    if (res) {
        obj.c = c;
    }
    else {

    }
    return obj;
}
function seek(c) {
    let i = 0;
    const peekNext = i => s[i];
    for (let ch of arr) {
        if (c < ch) {
            arr.splice(i, 0, c);
            c = null;
            break;
        }
        else if(c > ch){
            
        }
        i++;
    }
}
function updateVars(i,c,res) {
    if (c == null) {
        c = res.value;
    }
    else {
        let next = peekNext(i);
        if (res.value < next) {
            arr.push.apply(arr, c, res.value);
            setNextChar();
            c = res.value;
            setNextChar();
        }
    }
}

