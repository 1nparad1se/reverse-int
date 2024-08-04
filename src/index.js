module.exports = function reverse(n) {
    let total = '';
    n = n.toString();
    for (let i = 0; i < n.length; ++i) {
        if (n[i] === '-') {
            total = total
        } else {
            total = `${n[i]}${total}`
        }
    }
    return Number(total);
}
