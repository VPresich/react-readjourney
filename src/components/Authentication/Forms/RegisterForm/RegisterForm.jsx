import { useForm, FormProvider, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { errNotify } from "../../../../auxiliary/notification/notification";
import css from "./RegisterForm.module.css";

export default function RegisterForm({ handleRegister }) {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    const filteredValues = { ...values };
    delete filteredValues.confirmPassword;
    try {
      await handleRegister(filteredValues);
    } catch (error) {
      errNotify(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
          <div className={css.inputsWrapper}>
            <Controller
              name="name"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Name" type="text" />
              )}
            />
            <Controller
              name="email"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Email" type="text" />
              )}
            />
            <Controller
              name="password"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Password" type="password" />
              )}
            />
            <Controller
              name="confirmPassword"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Confirm password"
                  type="password"
                />
              )}
            />
          </div>
          <Button type="submit" size="large" uppercase={true}>
            Sign Up
          </Button>
          <p className={css.link}>
            Already have an account?{" "}
            <Link to="/login" className={css.linkAccent}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}
