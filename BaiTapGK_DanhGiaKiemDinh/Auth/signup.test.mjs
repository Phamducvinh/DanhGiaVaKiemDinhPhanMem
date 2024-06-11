import { describe, expect, test } from "@jest/globals";
import Auth_UserSignUp from "./signup";

describe("Kiểm tra đăng ký tài khoản người dùng", () => {
  // Test case 1: Email và mật khẩu đúng định dạng, xác nhận mật khẩu khớp => True
  test("Email và mật khẩu đúng định dạng, xác nhận mật khẩu khớp", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "12345678abc",
      "12345678abc"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Thiếu trường thông tin

  // Test case 2: Email bỏ trống => False
  test("Email bỏ trống", () => {
    const user_SignUp = new Auth_UserSignUp("", "12345678abc", "12345678abc");
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 3: Mật khẩu và xác nhận mật khẩu bỏ trống => False
  test("Mật khẩu và xác nhận mật khẩu bỏ trống", () => {
    const user_SignUp = new Auth_UserSignUp("viet2k3nguyen@gmail.com", "", "");
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 4: Mật khẩu bỏ trống => False
  test("Mật khẩu bỏ trống", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "",
      "12345678abc"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 5: Xác nhận mật khẩu bỏ trống => False
  test("Xác nhận mật khẩu bỏ trống", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "12345678abc",
      ""
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 6: Bỏ trống tất cả trường thông tin => False
  test("Bỏ trống tất cả trường thông tin", () => {
    const user_SignUp = new Auth_UserSignUp("", "", "");
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Email không đúng định dạng

  // Test case 7: Email không đúng định dạng (không có @gmail.com) => False
  test("Email không đúng định dạng (không có @gmail.com)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail",
      "12345678abc",
      "12345678abc"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 8: Email và mật khẩu không hợp lệ => False
  test("Email và mật khẩu không hợp lệ", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail",
      "123456",
      "123456"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 9: Email có thêm dấu cách => False
  test("Email có thêm dấu cách", () => {
    const user_SignUp = new Auth_UserSignUp(
      " viet2k3nguyen@gmail.com ",
      "12345678abc",
      "12345678abc"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 10: Email và mật khẩu chứa khoảng trắng => False
  test("Email và mật khẩu chứa khoảng trắng", () => {
    const user_SignUp = new Auth_UserSignUp(
      "tha nhbr06@gmail.com",
      "abcd efgh",
      "abcd efgh"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 11: Mật khẩu và xác nhận mật khẩu khớp, đúng biên độ (8 ký tự) => True
  test("Mật khẩu và xác nhận mật khẩu khớp, đúng biên độ (8 ký tự)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "abcd1234",
      "abcd1234"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  /* CHECK trường hợp biên cho mật khẩu */

  // Test case 12: Mật khẩu và xác nhận mật khẩu khớp, đúng biên độ (8 ký tự) => True
  test("Mật khẩu và xác nhận mật khẩu khớp, đúng biên độ (8 ký tự)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "12345678",
      "12345678"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 13: Mật khẩu và xác nhận mật khẩu khớp, đúng biên độ (20 ký tự) => True
  test("Mật khẩu và xác nhận mật khẩu khớp, đúng biên độ (20 ký tự)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "a".repeat(20),
      "a".repeat(20)
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 14: Mật khẩu và xác nhận mật khẩu vượt quá biên (21 ký tự) => False
  test("Mật khẩu và xác nhận mật khẩu vượt quá biên (21 ký tự)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "a".repeat(21),
      "a".repeat(21)
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 15: Mật khẩu và xác nhận mật khẩu ngắn hơn biên (7 ký tự) => False
  test("Mật khẩu và xác nhận mật khẩu ngắn hơn biên (7 ký tự)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "abc1234",
      "abc1234"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Email hợp lệ, Mật khẩu không hợp lệ

  // Test case 16: Email hợp lệ, mật khẩu chứa khoảng trắng => False
  test("Email hợp lệ, mật khẩu chứa khoảng trắng", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "abcd efgh",
      "abcd efgh"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 17: Email hợp lệ, mật khẩu chỉ chứa dấu cách => False
  test("Email hợp lệ, mật khẩu chỉ chứa dấu cách", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "        ",
      "        "
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 18: Email hợp lệ, mật khẩu chứa ký tự unicode => False
  test("Email hợp lệ, mật khẩu chứa ký tự unicode", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "mậtkhẩu123",
      "mậtkhẩu123"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Email hợp lệ, Mật khẩu hợp lệ

  // Test case 19: Email hợp lệ, mật khẩu chứa ký tự đặc biệt => True
  test("Email hợp lệ, mật khẩu chứa ký tự đặc biệt", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "1234$$5678",
      "1234$$5678"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 20: Email hợp lệ, mật khẩu chỉ chứa ký tự số => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự số", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "12345678",
      "12345678"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 21: Email hợp lệ, mật khẩu chỉ chứa ký tự chữ => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự chữ", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "abcdefgh",
      "abcdefgh"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 22: Email hợp lệ, mật khẩu hợp lệ nhưng xác nhận mật khẩu không khớp => False
  test("Email hợp lệ, mật khẩu hợp lệ nhưng xác nhận mật khẩu không khớp", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "abcdefgh",
      "abcd5678"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Additional Test Cases

  // Test case 23: Email hợp lệ, mật khẩu và xác nhận mật khẩu trùng khớp nhưng chứa ký tự đặc biệt => True
  test("Email hợp lệ, mật khẩu và xác nhận mật khẩu trùng khớp nhưng chứa ký tự đặc biệt", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "P@ssw0rd!",
      "P@ssw0rd!"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 24: Email không có đuôi miền => False
  test("Email không có đuôi miền", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@",
      "12345678abc",
      "12345678abc"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 25: Email có hai dấu @ => False
  test("Email có hai dấu @", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@@gmail.com",
      "12345678abc",
      "12345678abc"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 26: Email chỉ chứa ký tự số => True
  test("Email chỉ chứa ký tự số", () => {
    const user_SignUp = new Auth_UserSignUp(
      "1234567890@gmail.com",
      "password123",
      "password123"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 27: Email chứa ký tự đặc biệt => True
  test("Email chứa ký tự đặc biệt", () => {
    const user_SignUp = new Auth_UserSignUp(
      "user-name123@example.com",
      "securePass123",
      "securePass123"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 28: Email với domain khác => True
  test("Email với domain khác", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@st.phenikaa-edu.com.vn",
      "securePass1!",
      "securePass1!"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 29: Mật khẩu chứa tất cả các ký tự chữ in hoa => True
  test("Mật khẩu chứa tất cả các ký tự chữ in hoa", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@gmail.com",
      "ABCDEFGH",
      "ABCDEFGH"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 30: Email không có phần tên miền (domain) => False
  test("Email không có phần tên miền (domain)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "viet2k3nguyen@",
      "password123",
      "password123"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 31: Email chỉ chứa phần tên miền (domain) => False
  test("Email chỉ chứa phần tên miền (domain)", () => {
    const user_SignUp = new Auth_UserSignUp(
      "@gmail.com",
      "password123",
      "password123"
    );
    expect(user_SignUp.isValidEmailAndPassword()).toBe(false);
  });

});