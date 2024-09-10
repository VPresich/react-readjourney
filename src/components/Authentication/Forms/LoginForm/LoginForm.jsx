import { useForm, FormProvider, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { errNotify } from "../../../../auxiliary/notification/notification";
import css from "./LoginForm.module.css";

const LoginForm = ({ handleLogin }) => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    try {
      await handleLogin(values);
    } catch (error) {
      errNotify(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputsWrapper}>
          <Controller
            name="email"
            control={methods.control}
            render={({ field }) => (
              <Input
                {...field}
                label="Mail:"
                placeholder="Your@email.com"
                type="text"
              />
            )}
          />

          <Controller
            name="password"
            control={methods.control}
            render={({ field }) => (
              <Input
                {...field}
                label="Password:"
                placeholder="Yourpasswordhere"
                type="password"
              />
            )}
          />
        </div>

        <div className={css.buttons}>
          <Button type="submit" auxStyles={css.btnStyles}>
            Log In
          </Button>
          <Link to="/register" className={css.link}>
            {"Don't have an account?"}
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
