import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import resources.PrimeNumber;

public class PrimeNumberTest {
    @Test
    void testIsPrime() {
        assertTrue(PrimeNumber.isPrime(2));
        assertTrue(PrimeNumber.isPrime(3));
        assertTrue(PrimeNumber.isPrime(5));
        assertTrue(PrimeNumber.isPrime(7));
        assertTrue(PrimeNumber.isPrime(11));
        assertTrue(PrimeNumber.isPrime(13));
        assertTrue(PrimeNumber.isPrime(17));
        assertTrue(PrimeNumber.isPrime(19));
        assertFalse(PrimeNumber.isPrime(1));
        assertFalse(PrimeNumber.isPrime(4));
        assertFalse(PrimeNumber.isPrime(6));
        assertFalse(PrimeNumber.isPrime(8));
        assertFalse(PrimeNumber.isPrime(9));
        assertFalse(PrimeNumber.isPrime(10));
        assertFalse(PrimeNumber.isPrime(15));
    }
}
