let EventEmitter = require('events').EventEmitter; 
function StringOperations () {
    function init(s) { 
        let iterator = s[Symbol.iterator](),
            res = iterator.next(),
            i = 0,
            vowels = ['a', 'e', 'i', 'o', 'u'],
            c = res.value,
            arr = [];
        
        //function setState(newState) {
        //    state = newState;
        //    onStateChange();
        //}
        //function onStateChange() {
        //    switch (state) {
        //        case 'start':
        //            sort();
        //    }
        //}
        //while (state != 'stop' || state != 'idle') {
        //    if (res.value != res.value.toLowerCase()) {
        //        i = s.indexOf(vowels[i++]);
        //        c = res.value.toLowerCase();
        //    }
        //    else {
        //        c = res.value;
        //    }
        //    next(c, arr, iter, res);
        //    state = 'idle';
        //}
        
        function main() {
            let _i = s.indexOf(vowels[i++]),
                _c = c.toLowerCase(),
                _state='running',
                self = {
                    get state() {
                        return _state;
                    },
                    set state(newState) {
                        _state = newState;
                    },
                    moveNext: function () {
                        this.emit('moveNext');
                        while (this.state == 'running' && !res.done) {
                            res = iter.next();
                            let compRes = this.compare(res.value, _c);
                            if (compRes == -1) {
                                arr.push(_c);
                            }
                            else if (compRes == 1) {

                            }
                            else {

                            }
                        }
                    },
                    compare: function (a, b) {
                        if (a < b) {
                            return -1;
                        }
                        else if (a > b) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    },
                    toggleState: function () {
                        if (this.state == 'paused') {
                            this.state = 'running';
                        }
                        else {
                            this.state = 'paused';
                        }
                        this.emit('onStateChanged');
                    }
                };
            return self;
        }
        return main;
    }
};
const sorter = Object.create(StringOperations,
    {
        s: "The quick brown fox jumped over the lazy dog",

    }
)




