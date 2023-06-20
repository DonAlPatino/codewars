function nthFibo(n) {

    if (n <= 1) return n;
    return nthFibo(n-1) + nthFibo(n-2);
}
console.log(nthFibo(4))