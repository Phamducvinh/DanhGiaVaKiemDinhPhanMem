package resources;

public class TriangleClassifier {

    public String classifyTriangle(int side1, int side2, int side3) {
        if (isValidTriangle(side1, side2, side3)) {
            if (side1 == side2 && side2 == side3) {
                return "Equilateral";
            } else if (side1 == side2 || side1 == side3 || side2 == side3) {
                return "Isosceles";
            } else {
                return "Scalene";
            }
        } else {
            return "NotATriangle";
        }
    }

    private boolean isValidTriangle(int side1, int side2, int side3) {
        return side1 > 0 && side2 > 0 && side3 > 0 &&
               side1 + side2 > side3 &&
               side1 + side3 > side2 &&
               side2 + side3 > side1;
    }
}

