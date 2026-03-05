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
console.log(fibonacciMemo(200));
console.timeEnd("fibMemo");

// solução iterativa, sem recursão e sem cache
function fibonacciIterativo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

//também muito rápido e sem alocar memoria para o cache
console.time("fibIterativo");
console.log(fibonacciIterativo(300));
console.timeEnd("fibIterativo");