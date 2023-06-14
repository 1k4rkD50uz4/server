import net from 'net';
const address = "localhost",
    PORT = 8000,
    server = net.createServer((c) => {
        c.on('end', () => {
            console.log('client disconnected');
        });
        c.on('error', (err) => {
            throw err;
        });
        c.on('data', (data) => {
            let res = main();
            c.write(res);
        });
    });
server.listen(PORT, address, () => {
    console.log('server bound');
});

function adder() {
    let arr = [];
    function inc() {
        let n = 16, res = this.x;
        for (let i = 0; i < n; i++) {
            this.res = !this.res ? this.x : this.x | this.y;
            this.x = !this.x ? 1 : this.x;
            this.carry = this.x ^ this.y;
            arr[i] = this;
        }
        return arr;
    }
    return inc;
}
function main() {
    let inc = adder();
    return inc.call({ x: 0, y: 0 });
}
