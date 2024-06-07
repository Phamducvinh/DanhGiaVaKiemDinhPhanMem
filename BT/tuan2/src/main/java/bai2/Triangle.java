package bai2;

public class Triangle {
    // Hàm kiểm tra ba cạnh có tạo thành tam giác hay không
    public static boolean TamGiac(int a, int b, int c) {
        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    // Hàm kiểm tra Tam giác đều
    public static boolean TamGiacDeu(int a, int b, int c) {
        // Đầu tiên kiểm tra xem nó có phải là tam giác không
        if (!TamGiac(a, b, c)) return false;

        // Tam giác đều có ba cạnh bằng nhau
        return (a == b) && (b == c);
    }

    // Hàm kiểm tra Tam giác cân
    public static boolean TamGiacCan(int a, int b, int c) {
        // Đầu tiên kiểm tra xem nó có phải là tam giác không
        if (!TamGiac(a, b, c)) return false;

        // Tam giác cân có ít nhất hai cạnh bằng nhau
        return (a == b) || (a == c) || (b == c);
    }

    // Hàm kiểm tra Tam giác thường
    public static boolean TamGiacThuong(int a, int b, int c) {
        // Đầu tiên kiểm tra xem nó có phải là tam giác không
        if (!TamGiac(a, b, c)) return false;

        // Tam giác thường có ba cạnh đều khác nhau
        return (a != b) && (a != c) && (b != c);
    }
}
