// não otimizado, pois tem muitas chamadas recursivas
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// demora p krl
console.time("fib");
console.log(fibonacci(40));
console.timeEnd("fib");

// guarda o resultado em cache (if (n in memo) return memo[n])
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];

    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// muito mais rápido
console.time("fibMemo");
console.log(fibonacciMemo(50));
console.timeEnd("fibMemo");