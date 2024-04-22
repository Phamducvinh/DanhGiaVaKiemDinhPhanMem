import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import resources.PrimeNumber;

public class PrimeNumberTest1 {
    
    // Issue 1: Viết các ca kiểm thử JUnit để bao phủ tất cả các lệnh trong chương trình
    
    @Test
    public void testIsPrime_WithPrimeNumber_ReturnsTrue() {
        assertTrue(PrimeNumber.isPrime(2));
        assertTrue(PrimeNumber.isPrime(3));
        assertTrue(PrimeNumber.isPrime(5));
        assertTrue(PrimeNumber.isPrime(7));
        assertTrue(PrimeNumber.isPrime(11));
    }
    
    @Test
    public void testIsPrime_WithNonPrimeNumber_ReturnsFalse() {
        assertFalse(PrimeNumber.isPrime(1));
        assertFalse(PrimeNumber.isPrime(4));
        assertFalse(PrimeNumber.isPrime(6));
        assertFalse(PrimeNumber.isPrime(8));
        assertFalse(PrimeNumber.isPrime(9));
        assertFalse(PrimeNumber.isPrime(10));
    }
    
    // Issue 2: Viết các ca kiểm thử JUnit để bao phủ tất cả các đường đi trong chương trình
    
    @Test
    public void testIsPrime_WithNegativeNumber_ReturnsFalse() {
        assertFalse(PrimeNumber.isPrime(-5));
    }
    
    @Test
    public void testIsPrime_WithZero_ReturnsFalse() {
        assertFalse(PrimeNumber.isPrime(0));
    }
    
    @Test
    public void testIsPrime_WithLargePrimeNumber_ReturnsTrue() {
        assertTrue(PrimeNumber.isPrime(104729)); // 10001st prime number
    }
    
    @Test
    public void testIsPrime_WithLargeNonPrimeNumber_ReturnsFalse() {
        assertFalse(PrimeNumber.isPrime(104730)); // 10001st non-prime number
    }
}
