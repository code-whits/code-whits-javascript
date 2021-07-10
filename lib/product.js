function product(n) {
    prod = 1
    for (let i = 1; i <= n ; i++) {
        prod *= i
    }
    return prod
}
module.exports = product
