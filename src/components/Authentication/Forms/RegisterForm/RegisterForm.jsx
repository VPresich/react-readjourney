import { useForm, FormProvider, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { errNotify } from "../../../../auxiliary/notification/notification";
import css from "./RegisterForm.module.css";

const RegisterForm = ({ handleRegister }) => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    try {
      console.log("onSubmit", values);
      await handleRegister(values);
    } catch (error) {
      errNotify(error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={css.form}
        autoComplete="off"
      >
        <div className={css.inputsWrapper}>
          <Controller
            name="name"
            control={methods.control}
            render={({ field }) => (
              <Input
                {...field}
                label="Name:"
                placeholder="Ilona Ratushniak"
                autoComplete="off"
                type="text"
              />
            )}
          />

          <Controller
            name="email"
            control={methods.control}
            render={({ field }) => (
              <Input
                {...field}
                label="Mail:"
                placeholder="Your@email.com"
                autoComplete="new-email"
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
                autoComplete="new-password"
                type="password"
              />
            )}
          />
        </div>

        <div className={css.buttons}>
          <Button type="submit" auxStyles={css.btnStyles}>
            Registration
          </Button>
          <Link to="/login" className={css.link}>
            Already have an account?
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
