import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import { startReading, stopReading } from "../../redux/reading/operations";
import {
  successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import css from "./AddReading.module.css";

const AddReading = ({ book, initReading = true }) => {
  const [isStartReading, setIsStartReading] = useState(initReading);
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      page: 0,
    },
  });

  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values };
    data.id = book._id;
    dispatch(isStartReading ? startReading(data) : stopReading(data))
      .unwrap()
      .then(() => {
        successNotify(
          isStartReading ? "Succes start reading" : "Succes stop reading"
        );
      })
      .catch(() => {
        errNotify("Error start reading");
      });

    setIsStartReading(!isStartReading);
  };

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={css.form}
          autoComplete="off"
        >
          <div className={css.inputsWrapper}>
            <h3 className={css.title}>Start page:</h3>
            <Controller
              name="page"
              control={methods.control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Page number:"
                  placeholder="0"
                  autoComplete="off"
                  type="text"
                />
              )}
            />
          </div>
          <Button
            type="submit"
            background="secondary"
            auxStyles={css.btnStyles}
          >
            {isStartReading ? "To start" : "To stop"}
          </Button>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};
export default AddReading;
