const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please Enter Correct Name!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Please Enter Correct Email!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please Enter Strong Password!");
  }
  //   else if(firstName.length<4 || firstName.lenght>50) {
  //     throw new Error("FirstName should be 4-50 charcters");
  // }
};

module.exports = {
  validateSignUpData,
};
