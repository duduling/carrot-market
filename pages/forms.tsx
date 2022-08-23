import { useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onVaild = (): void => {
    console.log("Hi, I'm vaild");
  };
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <input type="submit" value="Create Account" />
    </form>
  );
}
