import { useForm, FormProvider, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import { saveQuery } from "../../redux/filters/slice";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import css from "./Filters.module.css";

const BookFilters = () => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      title: "",
      author: "",
    },
  });

  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const trimmedValues = Object.keys(values).reduce((acc, key) => {
      acc[key] =
        typeof values[key] === "string" ? values[key].trim() : values[key];
      return acc;
    }, {});
    dispatch(saveQuery({ ...trimmedValues }));
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={css.form}
        autoComplete="off"
      >
        <div className={css.inputsWrapper}>
          <h3 className={css.title}>Filters:</h3>
          <Controller
            name="title"
            control={methods.control}
            render={({ field }) => (
              <Input
                {...field}
                label="Book title:"
                placeholder="Enter text"
                autoComplete="off"
                type="text"
              />
            )}
          />
          <Controller
            name="author"
            control={methods.control}
            render={({ field }) => (
              <Input
                {...field}
                label="The author:"
                placeholder="Enter text"
                autoComplete="off"
                type="text"
              />
            )}
          />
        </div>

        <Button type="submit" background="secondary" auxStyles={css.btnStyles}>
          To apply
        </Button>
      </form>
    </FormProvider>
  );
};
export default BookFilters;
