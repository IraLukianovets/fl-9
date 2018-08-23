function isPrime(digit) {
    for (let i = 2; i < digit; i++) {
        if (digit % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}