const getValue = (i, c, s) => !i ? c.charCodeAt(0) :
    String.fromCharCode(s.charCodeAt(i));
let s = "The quick brown fox jumped over the lazy dog",
    iter = s[Symbol.iterator](),
    i = 0,
    res = iter.next(),
    c = res.value,
    vowels = ['a', 'e', 'i', 'o', 'u'],
    vow,
    number,
    arr,
    states = ['start', 'read', 'write', 'idle', 'stop'],
    state = states[states.length - 1];
export default function next() {
    while (state != 'stop' || state != 'idle' || !res.done) {
        number = 97;

        //if (!number) {
        //    i = 0;
        //    c = res.value.toLowerCase();
        //    console.log(`c: ${c}`);
        //    console.log(`c: ${String.fromCharCode(number)}`);
        //    arr = [];
        //    i++;
        //    vow = vowels[i];
        //    console.log(`last: ${s[s.length - i]}`);
        //    number++;
        //    console.log(`c: ${String.fromCharCode(number)}`);
        //    res = iter.next();
        //    console.log(`res.value: ${res.value}`);
        //}
        //else {

        //    let val = getValue(undefined, c) + 1;
        //    let _c = String.fromCharCode(val);
        //    console.log(`c: ${_c}`);
        //    i = s.indexOf(_c);
        //    c = s.charAt(i++ - 1);
        //    console.log(`c: ${c}`);
        //    c = s.charAt(i);
        //    console.log(`c: ${c}`);
        //    number++;
        //    console.log(`c: ${String.fromCharCode(number)}`);
        //}
    }
    function append() {
        let _c = res.value;
        arr.push(_c);
    }
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
}



