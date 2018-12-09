const API = {
    primeSum(array = []) {
        return API.sum(array.filter(API.isPrime));
    },
    sum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    },
    isPrime(num) {
        if (num === 0 || num === 1) {
            return false;
        }
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
};

module.exports = API;
