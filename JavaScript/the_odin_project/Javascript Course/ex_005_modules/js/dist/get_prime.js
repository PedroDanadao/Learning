/**
 * Returns a list of prime numbers that are smaller than 'max'
 */
export function get_primes(max) {
    const is_prime = Array.from({ length: max }, () => true);
    is_prime[0] = is_prime[1] = false;
    is_prime[2] = true;
    for (let i = 2; i * i < max; i++) {
        if (is_prime[i]) {
            for (let j = i ** 2; j < max; j += i) {
                is_prime[j] = false;
            }
        }
    }
    return [...is_prime.entries()].filter(([, is_prime]) => is_prime).map(([number]) => number);
}
