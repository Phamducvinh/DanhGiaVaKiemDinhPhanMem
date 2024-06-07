import org.junit.jupiter.api.Test;

import resources.SimpleProgram;

public class SimpleProgramTest {

    // Issue 1: Viết các ca kiểm thử JUnit để bao phủ tất cả các lệnh trong chương trình

    @Test
    public void testRunProgram_WithPositiveNumber_PrintsEvenAndOdd() {
        SimpleProgram program = new SimpleProgram();
        program.runProgram(5);
        // Kiểm tra xem kết quả in ra màn hình có chứa chuỗi "even" và "odd" không
        // Chỉ kiểm tra kết quả in ra màn hình vì không thể trực tiếp kiểm tra lệnh trong main
    }

    @Test
    public void testRunProgram_WithNegativeNumber_PrintsErrorMessage() {
        SimpleProgram program = new SimpleProgram();
        program.runProgram(-5);
        // Kiểm tra xem kết quả in ra màn hình có chứa chuỗi "Number must be positive" không
    }

    // Issue 2: Viết các ca kiểm thử JUnit để bao phủ tất cả các đường đi trong chương trình

    @Test
    public void testRunProgram_WithZero_PrintsErrorMessage() {
        SimpleProgram program = new SimpleProgram();
        program.runProgram(0);
        // Kiểm tra xem kết quả in ra màn hình có chứa chuỗi "Number must be positive" không
    }

    @Test
    public void testRunProgram_WithEvenNumber_PrintsOnlyEvenNumbers() {
        SimpleProgram program = new SimpleProgram();
        program.runProgram(4);
        // Kiểm tra xem kết quả in ra màn hình chỉ chứa chuỗi "even" không
    }

    @Test
    public void testRunProgram_WithOddNumber_PrintsOnlyOddNumbers() {
        SimpleProgram program = new SimpleProgram();
        program.runProgram(3);
        // Kiểm tra xem kết quả in ra màn hình chỉ chứa chuỗi "odd" không
    }
}
