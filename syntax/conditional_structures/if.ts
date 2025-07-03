const num: any = 10;

if (num === "10") {
  // '==' checks for value equality, while '===' checks for both value and type equality.
  console.log("The number is '10' .");
} else if (num < 0) {
  console.log("The number is negative.");
} else if (num > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is zero.");
}

const typeUser = {
  admin: "Type admin",
  user: "Type user",
  guest: "Type guest",
};

function checkUserType(userType: string) {
  console.log(typeUser[userType as keyof typeof typeUser]);
  // 'as keyof typeof typeUser' ensures that userType is a valid key of typeUser.
}

const userType = "admin";

console.log();
checkUserType(userType);
checkUserType("guest");
checkUserType("user");
