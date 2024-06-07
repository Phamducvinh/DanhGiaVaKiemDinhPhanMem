import org.junit.jupiter.api.Test;

import resources.TriangleClassifier;

import static org.junit.jupiter.api.Assertions.*;
/*
Tam giác đều
Tam giác cân
Tam giác thường
Tam giác không thể tạo ra
Các cạnh là số âm
Các cạnh bằng 0
Độ dài các cạnh không hợp lệ
 */


 
 public class TriangleClassifierTest {
 
     // Kiểm tra tam giác đều
     @Test
     public void testClassifyTriangle_EquilateralTriangle_ReturnsTrue() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertTrue(classifier.classifyTriangle(3, 3, 3));
     }
 
     // Kiểm tra tam giác cân
     @Test
     public void testClassifyTriangle_IsoscelesTriangle_ReturnsTrue() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertTrue(classifier.classifyTriangle(3, 3, 2));
         assertTrue(classifier.classifyTriangle(3, 2, 3));
         assertTrue(classifier.classifyTriangle(2, 3, 3));
     }
 
     // Kiểm tra tam giác thường
     @Test
     public void testClassifyTriangle_ScaleneTriangle_ReturnsTrue() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertTrue(classifier.classifyTriangle(3, 4, 5));
     }
 
     // Kiểm tra tam giác không hợp lệ
     @Test
     public void testClassifyTriangle_NotATriangle_ReturnsFalse() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertFalse(classifier.classifyTriangle(1, 2, 3));
     }
 
     // Kiểm tra tam giác với các cạnh là số âm
     @Test
     public void testClassifyTriangle_NegativeSides_ReturnsFalse() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertFalse(classifier.classifyTriangle(-1, 2, 3));
         assertFalse(classifier.classifyTriangle(1, -2, 3));
         assertFalse(classifier.classifyTriangle(1, 2, -3));
     }
 
     // Kiểm tra tam giác với các cạnh bằng 0
     @Test
     public void testClassifyTriangle_ZeroSides_ReturnsFalse() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertFalse(classifier.classifyTriangle(0, 2, 3));
         assertFalse(classifier.classifyTriangle(1, 0, 3));
         assertFalse(classifier.classifyTriangle(1, 2, 0));
     }
 
     // Kiểm tra tam giác với độ dài các cạnh không hợp lệ
     @Test
     public void testClassifyTriangle_InvalidSideLengths_ReturnsFalse() {
         TriangleClassifier classifier = new TriangleClassifier();
         assertFalse(classifier.classifyTriangle(1, 2, 4));
         assertFalse(classifier.classifyTriangle(1, 4, 2));
         assertFalse(classifier.classifyTriangle(4, 1, 2));
     }
 }
 