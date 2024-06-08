import { describe, expect, test } from "@jest/globals";
import BaoHiem from "./baohiem";

describe("Thanh toán tiền bảo hiểm", () => {
  // Test case 1: Tính số tiền bảo hiểm loại VIP với thời hạn 3 năm
  test("Tính số tiền bảo hiểm loại VIP với thời hạn 3 năm", () => {
    const baohiem = new BaoHiem("Vip", 3);
    expect(baohiem.calculateInsuranceCost()).toBe(2400000);
  });

  // Test case 2: Tính số tiền bảo hiểm loại Thường với thời hạn 2 năm
  test("Tính số tiền bảo hiểm loại Thường với thời hạn 2 năm", () => {
    const baohiem = new BaoHiem("Thường", 2);
    expect(baohiem.calculateInsuranceCost()).toBe(1000000);
  });

  // Test case 3: Tính số tiền bảo hiểm loại VIP với thời hạn 5 năm
  test("Tính số tiền bảo hiểm loại VIP với thời hạn 5 năm", () => {
    const baohiem = new BaoHiem("Vip", 5);
    expect(baohiem.calculateInsuranceCost()).toBe(4000000);
  });

  // Test case 4: Tính số tiền bảo hiểm loại Thường với thời hạn 1 năm
  test("Tính số tiền bảo hiểm loại Thường với thời hạn 1 năm", () => {
    const baohiem = new BaoHiem("Thường", 1);
    expect(baohiem.calculateInsuranceCost()).toBe(500000);
  });

  // Test case 5: Tính số tiền bảo hiểm loại VIP với thời hạn ngoài phạm vi (6 năm)
  test("Tính số tiền bảo hiểm loại VIP với thời hạn ngoài phạm vi (6 năm)", () => {
    const baohiem = new BaoHiem("Vip", 6);
    expect(baohiem.calculateInsuranceCost()).toBe("Invalid input");
  });

  // Test case 6: Tính số tiền bảo hiểm loại Thường với thời hạn dưới 1 năm (0 năm)
  test("Tính số tiền bảo hiểm loại Thường với thời hạn dưới 1 năm (0 năm)", () => {
    const baohiem = new BaoHiem("Thường", 0);
    expect(baohiem.calculateInsuranceCost()).toBe("Invalid input");
  });

  // Test case 7: Tính số tiền bảo hiểm loại không xác định
  test("Tính số tiền bảo hiểm loại không xác định", () => {
    const baohiem = new BaoHiem("Không xác định", 3);
    expect(baohiem.calculateInsuranceCost()).toBe("Invalid input");
  });

});
