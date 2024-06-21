const zod = require("zod");

const authRegisterSchema = zod.object({
  registerUserName: zod
    .string({
      required_error: "userName must be entered.",
      invalid_type_error: "userName must be String.",
    })
    .min(3, { message: "Name must be atleast of 3 characters." })
    .max(50, { message: "Name must be max of 50 characters." }),
  registerEmail: zod
    .string({ required_error: "Email must be enterd." })
    .email()
    .endsWith("@gmail.com", {
      message: "The Email must ends with @gmail.com.",
    }),
  registerPassword: zod
    .string({ required_error: "Password must be Entered." })
    .min(8, { message: "Password must be atleast of 8 characters." })
    .max(30, { message: "Password must be max of 30 characters." }),
});

module.exports = authRegisterSchema;
