import { useForm, FormProvider, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { feedbackSchema } from "./feedbackSchema";
import css from "./AddBookForm.module.css";

const AddBookForm = ({ handleAddBook }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      title: "",
      author: "",
      pages: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (values) => {
    handleAddBook && handleAddBook(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
          <Controller
            name="title"
            control={methods.control}
            render={({ field }) => (
              <Input {...field} placeholder="Title" type="text" />
            )}
          />
          <Controller
            name="author"
            control={methods.control}
            render={({ field }) => (
              <Input {...field} placeholder="Author" type="text" />
            )}
          />
          <Controller
            name="pages"
            control={methods.control}
            render={({ field }) => (
              <Input {...field} placeholder="Pages" type="text" />
            )}
          />
        </div>
        <Button type="submit" width={viewportWidth > 767 ? "170px" : "100px"}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddBookForm;
