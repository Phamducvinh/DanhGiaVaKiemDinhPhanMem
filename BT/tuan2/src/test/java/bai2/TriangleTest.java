package bai2;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TriangleTest {
    
    // Trường hợp kiểm tra phương thức lTamGiac
    @Test
    public void testTamGiac() {
        assertTrue(Triangle.TamGiac(3, 4, 5));
        assertFalse(Triangle.TamGiac(1, 2, 3));
        assertFalse(Triangle.TamGiac(0, 1, 1));
        assertFalse(Triangle.TamGiac(-1, 1, 1));
    }

    // Trường hợp kiểm tra phương thức TamGiacDeu
    @Test
    public void testTamGiacDeu() {
        assertTrue(Triangle.TamGiacDeu(5, 5, 5));
        assertFalse(Triangle.TamGiacDeu(3, 3, 4));
    }

    // Trường hợp kiểm tra phương thức TamGiacCan
    @Test
    public void testTamGiacCan() {
        assertTrue(Triangle.TamGiacCan(5, 5, 3));
        assertTrue(Triangle.TamGiacCan(4, 5, 5));
        assertTrue(Triangle.TamGiacCan(5, 3, 5));
        assertFalse(Triangle.TamGiacCan(3, 4, 5));
    }

    // Trường hợp kiểm tra phương thức TamGiacThuong
    @Test
    public void testTamGiacThuong() {
        assertTrue(Triangle.TamGiacThuong(3, 4, 5));
        assertFalse(Triangle.TamGiacThuong(1, 2, 2));
    }
}
