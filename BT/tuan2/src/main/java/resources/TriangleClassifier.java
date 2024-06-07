package resources;

public class TriangleClassifier {

    // Phương thức classifyTriangle() nhận vào độ dài của ba cạnh của tam giác
    // và trả về true nếu tam giác là hợp lệ và false nếu không.
    public boolean classifyTriangle(int side1, int side2, int side3) {
        if (isValidTriangle(side1, side2, side3)) {
            // Tam giác hợp lệ
            if (side1 == side2 && side2 == side3) {
                //System.out.println("true"); // Tam giác đều
                return true;
            } else if (side1 == side2 || side1 == side3 || side2 == side3) {
                //System.out.println("true"); // Tam giác cân
                return true;
            } else {
                //System.out.println("true"); // Tam giác thường
                return true;
            }
        } else {
            // Tam giác không hợp lệ
            //System.out.println("false");
            return false;
        }
    }

    // Phương thức isValidTriangle() kiểm tra xem các cạnh của tam giác có đủ điều kiện không
    // - Tất cả các cạnh phải có độ dài dương.
    // - Tổng độ dài hai cạnh bất kỳ phải lớn hơn độ dài cạnh còn lại.
    private boolean isValidTriangle(int side1, int side2, int side3) {
        return side1 > 0 && side2 > 0 && side3 > 0 && // Độ dài dương
               side1 + side2 > side3 &&              // Điều kiện tam giác
               side1 + side3 > side2 &&              // Điều kiện tam giác
               side2 + side3 > side1;                // Điều kiện tam giác
    }
}

