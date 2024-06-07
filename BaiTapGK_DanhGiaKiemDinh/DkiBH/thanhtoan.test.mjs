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
});
