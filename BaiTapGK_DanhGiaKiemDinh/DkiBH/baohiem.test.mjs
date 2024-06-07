import { describe, expect, test } from "@jest/globals";
import BaoHiem from "./baohiem";

describe("Đăng kí bảo hiểm", () => {
  // Test case 1: Bảo hiểm đầy đủ thông tin hợp lệ => True
  test("Bảo hiểm đầy đủ thông tin hợp lệ", () => {
    const baohiem = new BaoHiem("VIP", 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Thiếu trường thông tin

  // Test case 2: Thiếu thông tin loại bảo hiểm => False
  test("Thiếu thông tin loại bảo hiểm", () => {
    const baohiem = new BaoHiem("", 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 3: Thiếu thông tin thời hạn bảo hiểm => False
  test("Thiếu thông tin thời hạn bảo hiểm", () => {
    const baohiem = new BaoHiem("Vip", "");
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 4: Thiếu thông tin loại bảo hiểm và thời hạn bảo hiểm => False
  test("Thiếu thông tin loại bảo hiểm và thời hạn bảo hiểm", () => {
    const baohiem = new BaoHiem("", "");
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  //  Loại bảo hiểm

  // Test case 5: Loại bảo hiểm không được chọn => False
  test("Loại bảo hiểm không hợp lệ", () => {
    const baohiem = new BaoHiem(null, 3);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Thời hạn bảo hiểm

  // Test case 6: Thời hạn bảo hiểm không hợp lệ (dưới 1 năm) => False
  test("Thời hạn bảo hiểm không hợp lệ (dưới 1 năm)", () => {
    const baohiem = new BaoHiem("Vip", 0);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 7: Thời hạn bảo hiểm không hợp lệ (trên 5 năm) => False
  test("Thời hạn bảo hiểm là kí tự khác chữ số", () => {
    const baohiem = new BaoHiem("Vip", 6);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 8: Thời hạn bảo hiểm hợp lệ (đúng bằng biên (5 năm)) => False
  test("Thời hạn bảo hiểm hợp lệ (đúng bằng biên (5 năm)) => False", () => {
    const baohiem = new BaoHiem("Vip", 5);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 9: Thời hạn bảo hiểm hợp lệ (đúng bằng biên (5 năm)) => False
  test("Thời hạn bảo hiểm hợp lệ (đúng bằng biên (5 năm)) => False", () => {
    const baohiem = new BaoHiem("Vip", 5);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 9: Thời hạn bảo hiểm hợp lệ (đúng bằng biên (1 năm)) => False
  test("Thời hạn bảo hiểm hợp lệ (đúng bằng biên (1 năm)) => False", () => {
    const baohiem = new BaoHiem("Vip", 1);
    expect(baohiem.isValidTypeAndDuration()).toBe(true);
  });

  // Test case 10: Thời hạn bảo hiểm không phải là số nguyên => False
  test("Thời hạn bảo hiểm không phải là số nguyên", () => {
    const baohiem = new BaoHiem("Vip", 3.5);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 11: Thời hạn bảo hiểm là số âm => False
  test("Thời hạn bảo hiểm không phải là số âm", () => {
    const baohiem = new BaoHiem("Vip", -3);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });

  // Test case 12: Kiểm tra loại bảo hiểm hợp lệ và thời hạn bảo hiểm trống => False
  test("Kiểm tra loại bảo hiểm hợp lệ và thời hạn bảo hiểm trống", () => {
    const baohiem = new BaoHiem("Vip", null);
    expect(baohiem.isValidTypeAndDuration()).toBe(false);
  });
});
