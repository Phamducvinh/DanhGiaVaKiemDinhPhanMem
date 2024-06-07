class Auth_User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isComplete() {
    return this.email && this.password ? true : false;
  }

  isValidEmail() {
    return this.email.includes("@gmail.com") && !this.email.includes(" ");
  }

  isValidPassword() {
    return (
      this.password.length >= 8 &&
      this.password.length <= 20 &&
      !this.password.includes(" ")
    );
  }

  isValidEmailAndPassword() {
    return this.isComplete() && this.isValidEmail() && this.isValidPassword();
  }
}

export default Auth_User;
