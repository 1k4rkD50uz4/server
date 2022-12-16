import Util from "./util.js";
function Adder() {    
    let value = false, carry = false, result = false,
        i = 0, arr = [], x = 2, y = 0, n=2;
    function inc() {
        result = value || carry;
        carry = value ^ carry ? false : true;         
    }
    return function() {
        n = n ** 2;
        while (y < n) {
            y += (x * (result?1:0))**(i++);
            inc();
        }
    }
} 
const BinaryOperations = {
    namespace: `${Util.getNamespace.call({
        namespace: 'BinaryOperations'
    })}`,
    adder: Adder
};
export default BinaryOperations;