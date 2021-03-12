//functions for validations of username, password, email
export const checkUsername = (username) => {
  return username && username.length >= 5 && username.length <= 20;
};

export const checkEmail = (email) => {
  return email && email.includes("@") && email.includes(".");
};

export const checkPassword = (password) => {
  return password && password.length >= 8;
};
