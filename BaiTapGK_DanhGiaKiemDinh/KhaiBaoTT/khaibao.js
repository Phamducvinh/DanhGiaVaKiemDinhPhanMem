class User_Infor {
  constructor(name, age, sex, phone, add) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.phone = phone;
    this.add = add;
  }

  isComplete() {
    return this.name && this.age && this.sex && this.phone && this.add
      ? true
      : false;
  }

  isValidName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  isValidAge(age) {
    return Number.isInteger(age) && age > 0 && age < 101;
  }

  isValidSex(sex) {
    return sex === "Nam" || sex === "Nữ";
  }

  isValidPhone(phone) {
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phone);
  }

  isValidAddress(add) {
    const addressRegex = /^[a-zA-Z0-9\s]+$/;
    return addressRegex.test(add);
  }
  isValidUser() {
    return (
      this.isComplete() &&
      this.isValidName(this.name) &&
      this.isValidAge(this.age) &&
      this.isValidSex(this.sex) &&
      this.isValidPhone(this.phone) &&
      this.isValidAddress(this.add)
    );
  }
}

export default User_Infor;
