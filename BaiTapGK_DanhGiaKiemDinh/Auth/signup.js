class Auth_UserSignUp {
  constructor(email, password, confirmPassword) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  isComplete() {
    return this.email && this.password && this.confirmPassword ? true : false;
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

  passwordsMatch() {
    return this.password === this.confirmPassword;
  }

  isValidEmailAndPassword() {
    return (
      this.isComplete() &&
      this.isValidEmail() &&
      this.isValidPassword() &&
      this.passwordsMatch()
    );
  }
}

export default Auth_UserSignUp;
