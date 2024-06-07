import { describe, expect, test } from "@jest/globals";
import Auth_User from "./login";

describe("Kiểm tra tài khoản người dùng", () => {
  // Test case 1: Tên đăng nhập và mật khẩu đúng định dạng => True
  test("Tên đăng nhập và mật khẩu đúng định dạng", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "12345678abc");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Thiếu trường thông tin

  // Test case 2: Tên đăng nhập bỏ trống => False
  test("Tên đăng nhập bỏ trống", () => {
    const user_Login = new Auth_User("", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 3: Mật khẩu bỏ trống => False
  test("Mật khẩu bỏ trống", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 4: Tên đăng nhập và mật khẩu bỏ trống => False
  test("Tên đăng nhập và mật khẩu bỏ trống", () => {
    const user_Login = new Auth_User("", "");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Email không hợp lệ

  // Test case 5: Email không đúng định dạng (không có @gmail.com) => False
  test("Email không đúng định dạng (không có @gmail.com)", () => {
    const user_Login = new Auth_User("thanhbr06@gmail", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 6: Email và mật khẩu không hợp lệ => False
  test("Email và mật khẩu không hợp lệ", () => {
    const user_Login = new Auth_User("thanhbr06@gmail", "123456");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 7: Email có thêm dấu cách => False
  test("Email có thêm dấu cách", () => {
    const user_Login = new Auth_User(" thanhbr06@gmail.com ", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 8: Email và mật khẩu chứa khoảng trắng => False
  test("Email và mật khẩu chứa khoảng trắng", () => {
    const user_Login = new Auth_User("tha nhbr06@gmail.com", "abcd efgh");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  /* CHECK trường hợp biên cho mật khẩu */

  // Test case 9: Mật khẩu đúng biên độ (8 ký tự) => True
  test("Mật khẩu đúng biên độ (8 ký tự)", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "abcd1234");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 10: Mật khẩu đúng biên độ (20 ký tự) => True
  test("Mật khẩu đúng biên độ (20 ký tự)", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "a".repeat(20));
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 11: Mật khẩu vượt quá biên (21 ký tự) => False
  test("Mật khẩu vượt quá biên (21 ký tự)", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "a".repeat(21));
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 12: Mật khẩu ngắn hơn biên (7 ký tự) => False
  test("Mật khẩu ngắn hơn biên (7 ký tự)", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "abc1234");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Email hợp lệ, Mật khẩu không hợp lệ

  // Test case 13: Email hợp lệ, mật khẩu chứa khoảng trắng => False
  test("Email hợp lệ, mật khẩu chứa khoảng trắng", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "abcd efgh");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 14: Email hợp lệ, mật khẩu chỉ chứa dấu cách => False
  test("Email hợp lệ, mật khẩu chỉ chứa dấu cách", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "        ");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Test case 15: Email hợp lệ, mật khẩu chứa ký tự unicode => False
  test("Email hợp lệ, mật khẩu chứa ký tự unicode", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "mậtkhẩu123");
    expect(user_Login.isValidEmailAndPassword()).toBe(false);
  });

  // Email hợp lệ, Mật khẩu hợp lệ

  // Test case 16: Email hợp lệ, mật khẩu chứa ký tự đặc biệt => True
  test("Email hợp lệ, mật khẩu chứa ký tự đặc biệt", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "1234$$5678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 17: Email hợp lệ, mật khẩu chỉ chứa ký tự số => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự số", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "12345678");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });

  // Test case 18: Email hợp lệ, mật khẩu chỉ chứa ký tự chữ => True
  test("Email hợp lệ, mật khẩu chỉ chứa ký tự chữ", () => {
    const user_Login = new Auth_User("thanhbr06@gmail.com", "abcdefgh");
    expect(user_Login.isValidEmailAndPassword()).toBe(true);
  });
});
