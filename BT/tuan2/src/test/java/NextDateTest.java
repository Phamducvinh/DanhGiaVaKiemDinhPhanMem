import org.junit.jupiter.api.Test;
import resources.NextDate;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class NextDateTest {

    @Test
    // Kiểm tra xem phương thức nextDate() trả về ngày kế tiếp trong cùng một tháng
    public void testNextDateWithinMonth() {
        NextDate calculator = new NextDate();
        assertEquals("2/2/2022", calculator.nextDate(1, 2, 2022));
    }

    @Test
    // Kiểm tra xem phương thức nextDate() trả về ngày kế tiếp khi ngày đầu vào là ngày cuối cùng của tháng
    public void testNextDateEndOfMonth() {
        NextDate calculator = new NextDate();
        assertEquals("1/3/2022", calculator.nextDate(28, 2, 2022));
    }

    @Test
    // Kiểm tra xem phương thức nextDate() trả về ngày kế tiếp khi ngày đầu vào là ngày cuối cùng của năm
    public void testNextDateEndOfYear() {
        NextDate calculator = new NextDate();
        assertEquals("1/1/2023", calculator.nextDate(31, 12, 2022));
    }

    @Test
    // Kiểm tra xem phương thức nextDate() trả về ngày kế tiếp trong năm nhuận
    public void testNextDateLeapYear() {
        NextDate calculator = new NextDate();
        assertEquals("29/2/2020", calculator.nextDate(28, 2, 2020));
    }

    @Test
    // Kiểm tra xem phương thức nextDate() xử lý ngày không hợp lệ đúng cách
    public void testInvalidDate() {
        NextDate calculator = new NextDate();
        assertEquals("Invalid date", calculator.nextDate(32, 13, 2023));
    }
}
