package resources;

public class NextDate {

    public String nextDate(int day, int month, int year) {
        if (isValidDate(day, month, year)) {
            int maxDay = getMaxDayOfMonth(month, year);
            if (day < maxDay) {
                // Nếu ngày không phải là ngày cuối cùng của tháng, chỉ cần tăng ngày lên 1
                return (day + 1) + "/" + month + "/" + year;
            } else {
                // Nếu ngày là ngày cuối cùng của tháng, kiểm tra xem có phải là cuối năm không
                if (month < 12) {
                    // Nếu không phải cuối năm, chuyển sang ngày đầu tiên của tháng tiếp theo
                    return "1/" + (month + 1) + "/" + year;
                } else {
                    // Nếu là cuối năm, chuyển sang ngày đầu tiên của năm tiếp theo
                    return "1/1/" + (year + 1);
                }
            }
        } else {
            // Trả về thông báo ngày không hợp lệ nếu ngày không nằm trong phạm vi cho phép
            return "Invalid date";
        }
    }

    private boolean isValidDate(int day, int month, int year) {
        // Kiểm tra xem ngày, tháng và năm có nằm trong phạm vi cho phép không
        return day >= 1 && day <= getMaxDayOfMonth(month, year) &&
               month >= 1 && month <= 12 &&
               year >= 1812 ;
    }

    private int getMaxDayOfMonth(int month, int year) {
        // Trả về số ngày tối đa của một tháng trong một năm cụ thể
        if (month == 2) {
            // Nếu tháng là tháng 2, kiểm tra xem có phải là năm nhuận không
            return isLeapYear(year) ? 29 : 28;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            // Các tháng có 30 ngày
            return 30;
        } else {
            // Các tháng có 31 ngày
            return 31;
        }
    }

    private boolean isLeapYear(int year) {
        // Kiểm tra xem một năm có phải là năm nhuận không
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }
}
