import { FieldErrors, useForm } from "react-hook-form";

// Better validation
// Better Erros (set, clear, display)
// Have control over inputs

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onVaild = (data: LoginForm): void => {
    console.log("Hi, I'm vaild");
  };

  const onInvaild = (errors: FieldErrors): void => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onVaild, onInvaild)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            value: 5,
            message: "The username should be longer than 5 chars.",
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "Username is required" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
