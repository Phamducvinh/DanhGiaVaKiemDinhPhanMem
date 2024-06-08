import { describe, expect, test } from "@jest/globals";
import User_Infor from "./khaibao";

describe("Khai báo thông tin đăng kí bảo hiểm", () => {
  // Test case 1: User có đầy đủ thông tin hợp lệ => True
  test("User có đầy đủ thông tin hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Thiếu trường thông tin

  // Test case 2: User thiếu tên
  test("User thiếu tên", () => {
    const user = new User_Infor("", 30, "Nam", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 3: Thiếu tuổi => False
  test("Thiếu tuổi", () => {
    const user = new User_Infor(
      "John Doe",
      null,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 4: Thiếu giới tính => False
  test("Thiếu giới tính", () => {
    const user = new User_Infor("John Doe", 30, "", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 5: Thiếu số điện thoại => False
  test("Thiếu số điện thoại", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 6: Thiếu địa chỉ => False
  test("Thiếu Địa chỉ", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 7: User thiếu nhiều trường thông tin => False
  test("User không có đầy đủ thông tin", () => {
    const user = new User_Infor("", 30, "", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 7: User thiếu tất cả trường thông tin => False
  test("User không có đầy đủ thông tin", () => {
    const user = new User_Infor("", "", "", "", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Check Thông tin không hợp lệ và thông tin hợp lệ

  // Tên
  // Test case 8: Tên User không hợp lệ (bao gồm chữ số hoặc kí tự đặc biệt)
  test("Tên User không hợp lệ (bao gồm chữ số hoặc kí tự đặc biệt)", () => {
    const user = new User_Infor(
      "John Doe12!",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 9: Tên User bao gồm có dấu cách
  test("Tên User bao gồm có dấu cách", () => {
    const user = new User_Infor(
      "Ko Pin Yi",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 10: Tên User chỉ toàn là dấu cách
  test("Tên User chỉ toàn là dấu cách", () => {
    const user = new User_Infor(
      "        ",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Check tuổi

  // Test case 11: Tuổi đúng biên => True
  test("Tuổi User đúng bằng biên (biên 100)", () => {
    const user = new User_Infor(
      "John Doe",
      100,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 12: Tuổi đúng biên => True
  test("Tuổi User đúng bằng biên (biên 1)", () => {
    const user = new User_Infor(
      "John Doe",
      1,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 13: Tuổi lớn hơn biên 100 => False
  test("Tuổi User không hợp lệ (Lớn hơn biên)", () => {
    const user = new User_Infor(
      "John Doe",
      101,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 14: Tuổi nhỏ hơn biên 1 => False
  test("Tuổi User không hợp lệ (nhỏ hơn biên)", () => {
    const user = new User_Infor(
      "John Doe",
      0,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 15: Tuổi User là số âm => False
  test("Tuổi User không hợp lệ (số nguyên và nằm trong khoảng từ (0, 100))", () => {
    const user = new User_Infor(
      "John Doe",
      -5,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 16: Tuổi User không phải là số nguyên dương => False
  test("Tuổi User không hợp lệ (số nguyên và nằm trong khoảng từ (0, 100))", () => {
    const user = new User_Infor(
      "John Doe",
      3.5,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Giới tính

  // Test case 17: Giới tính không được chọn => False
  test("Giới tính không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      null,
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Số điện thoại

  // Test case 18: User có số điện thoại không hợp lệ (không bắt đầu bằng số 0) => False
  test("User có số điện thoại không hợp lệ (không bắt đầu bằng số 0)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "1234567890",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 19: User có số điện thoại không hợp lệ (không đủ đủ 10 số) => False
  test("User có số điện thoại không hợp lệ (không đủ đủ 10 số)", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "1234567", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 20: User có số điện thoại không hợp lệ (có kí tự đặc biệt hoặc chữ cái) => False
  test("User có số điện thoại không hợp lệ (có kí tự đặc biệt hoặc chữ cái)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "1234567ab!",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 21: User có số điện thoại bằng giá trị biên (10 chữ số) => True
  test("User có số điện thoại bằng giá trị biên (10 chữ số)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "1234567ab!",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 22: User có số điện thoại lơn hơn giá trị biên => False
  test("User có số điện thoại bằng giá trị biên (10 chữ số)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "12345678999",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 23: User có số điện thoại có dấu cách => False
  test("User có số điện thoại bằng giá trị biên (10 chữ số)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "01234567 899",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 24: User có số điện thoại chỉ toàn dấu cách => False
  test("User có số điện thoại bằng giá trị biên (10 chữ số)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "01234567 899",
      "        "
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Địa chỉ

  // Test case 26: Địa chỉ Có dấu cách) => False
  test("User có địa chỉ Địa chỉ Có dấu cách)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 27: Địa chỉ không hợp lệ (Có kí tự đặc biệt) => False
  test("User có địa chỉ không hợp lệ (Có kí tự đặc biệt)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street!@#"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 28: Địa chỉ không hợp lệ (Chỉ toàn là dấu cách) => False
  test("User có địa chỉ địa chỉ không hợp lệ (Chỉ toàn là dấu cách)", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "         "
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Check nhiều trường thông tin không hợp lệ

  // Test case 29: User có nhiều trường thông tin không hợp lệ => False
  test("User có nhiều trường thông tin không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe",
      40.5,
      "Other",
      "0123456",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 30: User có tất cả trường thông tin không hợp lệ => False
  test("User có nhiều trường thông tin không hợp lệ", () => {
    const user = new User_Infor(
      "John Doe123",
      40.5,
      "Other",
      "0123456",
      "123 Street@@@"
    );
    expect(user.isValidUser()).toBe(false);
  });
  // Kiểm tra khi tất cả các trường đều trống
  test("Tất cả các trường đều trống", () => {
    const user = new User_Infor("", "", "", "", "");
    expect(user.isValidUser()).toBe(false);
  });
  // Kiểm tra khi chỉ có một trường cụ thể nào đó là trống
  // Test case 31: Tên trống
  test("Tên trống", () => {
    const user = new User_Infor("", 30, "Nam", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 32: Tuổi trống
  test("Tuổi trống", () => {
    const user = new User_Infor(
      "John Doe",
      "",
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 33: Giới tính trống
  test("Giới tính trống", () => {
    const user = new User_Infor("John Doe", 30, "", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 34: Số điện thoại trống
  test("Số điện thoại trống", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "", "123 Street");
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 35: Địa chỉ trống
  test("Địa chỉ trống", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "0123456789", "");
    expect(user.isValidUser()).toBe(false);
  });

  // Kiểm tra khi các trường có giá trị đặc biệt
  // Test case 36: Tên chứa ký tự đặc biệt
  test("Tên chứa ký tự đặc biệt", () => {
    const user = new User_Infor(
      "John@Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 37: Tuổi là giá trị ngoại lệ
  test("Tuổi là giá trị ngoại lệ", () => {
    const user = new User_Infor(
      "John Doe",
      -10,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 38: Giới tính là giá trị ngoại lệ
  test("Giới tính là giá trị ngoại lệ", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Other",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 39: Số điện thoại chứa ký tự đặc biệt
  test("Số điện thoại chứa ký tự đặc biệt", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789!",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Test case 40: Địa chỉ chứa ký tự đặc biệt
  test("Địa chỉ chứa ký tự đặc biệt", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street@"
    );
    expect(user.isValidUser()).toBe(false);
  });

  // Kiểm tra khi các trường có giá trị ở giới hạn cao nhất hoặc thấp nhất của phạm vi hợp lệ
  // Test case 41: Tên có giá trị ở giới hạn cao nhất
  test("Tên có giá trị ở giới hạn cao nhất", () => {
    const user = new User_Infor(
      "John Doe".repeat(100),
      30,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 42: Tên có giá trị ở giới hạn thấp nhất
  test("Tên có giá trị ở giới hạn thấp nhất", () => {
    const user = new User_Infor("J", 30, "Nam", "0123456789", "123 Street");
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 43: Tuổi có giá trị ở giới hạn cao nhất
  test("Tuổi có giá trị ở giới hạn cao nhất", () => {
    const user = new User_Infor(
      "John Doe",
      100,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 44: Tuổi có giá trị ở giới hạn thấp nhất
  test("Tuổi có giá trị ở giới hạn thấp nhất", () => {
    const user = new User_Infor(
      "John Doe",
      1,
      "Nam",
      "0123456789",
      "123 Street"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 45: Số điện thoại có giá trị ở giới hạn cao nhất
  test("Số điện thoại có giá trị ở giới hạn cao nhất", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "1234567890"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 46: Số điện thoại có giá trị ở giới hạn thấp nhất
  test("Số điện thoại có giá trị ở giới hạn thấp nhất", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123456789"
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 47: Địa chỉ có giá trị ở giới hạn cao nhất
  test("Địa chỉ có giá trị ở giới hạn cao nhất", () => {
    const user = new User_Infor(
      "John Doe",
      30,
      "Nam",
      "0123456789",
      "123 Street".repeat(100)
    );
    expect(user.isValidUser()).toBe(true);
  });

  // Test case 48: Địa chỉ có giá trị ở giới hạn thấp nhất
  test("Địa chỉ có giá trị ở giới hạn thấp nhất", () => {
    const user = new User_Infor("John Doe", 30, "Nam", "0123456789", "1");
    expect(user.isValidUser()).toBe(true);
  });
  
});
