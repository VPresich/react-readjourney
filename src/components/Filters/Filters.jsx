import { useForm, FormProvider, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import { addBook } from "../../redux/favorites/operations";
import { saveQuery } from "../../redux/filters/slice";
import {
  successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import css from "./Filters.module.css";

const BookFilters = () => {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      title: "",
      author: "",
      totalPages: "",
    },
  });

  const { handleSubmit } = methods;
  const dispatch = useDispatch();
  const location = useLocation();
  const isAddedBook = location.pathname === "/library";

  const onSubmit = (values) => {
    if (isAddedBook) {
      dispatch(addBook(values))
        .unwrap(() => {
          successNotify("Succes add user book");
        })
        .catch(() => {
          errNotify("Error adding user book");
        });
    } else {
      dispatch(saveQuery(values));
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
          {isAddedBook && (
            <Controller
              name="totalPages"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Number of pages:"
                  placeholder="654"
                  autoComplete="off"
                  type="text"
                />
              )}
            />
          )}
        </div>

        <Button type="submit" background="secondary" auxStyles={css.btnStyles}>
          {isAddedBook ? "Add book" : "To apply"}
        </Button>
      </form>
    </FormProvider>
  );
};
export default BookFilters;
