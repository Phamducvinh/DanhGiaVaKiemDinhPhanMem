import org.junit.jupiter.api.Test;

import resources.TriangleClassifier;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TriangleClassifierTest {

    @Test
    public void testEquilateralTriangle() {
        TriangleClassifier classifier = new TriangleClassifier();
        assertEquals("Equilateral", classifier.classifyTriangle(3, 3, 3));
    }

    @Test
    public void testIsoscelesTriangle() {
        TriangleClassifier classifier = new TriangleClassifier();
        assertEquals("Isosceles", classifier.classifyTriangle(5, 5, 3));
        assertEquals("Isosceles", classifier.classifyTriangle(3, 5, 5));
        assertEquals("Isosceles", classifier.classifyTriangle(5, 3, 5));
    }

    @Test
    public void testScaleneTriangle() {
        TriangleClassifier classifier = new TriangleClassifier();
        assertEquals("Scalene", classifier.classifyTriangle(3, 4, 5));
    }

    @Test
    public void testNotATriangle() {
        TriangleClassifier classifier = new TriangleClassifier();
        assertEquals("NotATriangle", classifier.classifyTriangle(1, 2, 4));
    }

    @Test
    public void testRightTriangle() {
        TriangleClassifier classifier = new TriangleClassifier();
        assertEquals("Scalene", classifier.classifyTriangle(3, 4, 5));
    }
}
