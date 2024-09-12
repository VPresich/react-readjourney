import { useForm, FormProvider, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import { saveQuery } from "../../redux/filters/slice";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import css from "./BookFilters.module.css";

const BookFilters = () => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      title: "",
      author: "",
      pages: 0,
    },
  });

  const { handleSubmit } = methods;
  const dispatch = useDispatch();
  const location = useLocation();
  const isShowPagesInput = location.pathname !== "/recommended";

  const onSubmit = (values) => {
    console.log("Filters", values);
    dispatch(saveQuery(values));
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
          {isShowPagesInput && (
            <Controller
              name="pages"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Number of pages:"
                  placeholder="664"
                  autoComplete="off"
                  type="text"
                />
              )}
            />
          )}
        </div>

        <Button type="submit" auxStyles={css.btnStyles}>
          To apply
        </Button>
      </form>
    </FormProvider>
  );
};
export default BookFilters;
