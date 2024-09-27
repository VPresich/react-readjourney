import { useForm, FormProvider, Controller } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import { addBook, getUserBooks } from "../../redux/library/operations";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import ApproveAddModal from "../ApproveAddModal/ApproveAddModal";
import { errNotify } from "../../auxiliary/notification/notification";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import css from "./AddBook.module.css";

const AddBook = () => {
  const [isShowAddModal, setIsShowAddModal] = useState(false);

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

  const onSubmit = (values) => {
    dispatch(addBook(values))
      .unwrap()
      .then(() => {
        setIsShowAddModal(true);
      })
      .catch(() => {
        errNotify("Error adding user book");
        dispatch(getUserBooks());
      });
  };

  const handleShowAddModalClose = () => {
    setIsShowAddModal(false);
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
          </div>
          <Button
            type="submit"
            background="secondary"
            auxStyles={css.btnStyles}
          >
            Add book
          </Button>
        </form>
      </FormProvider>
      {isShowAddModal && (
        <ModalWrapper onClose={handleShowAddModalClose}>
          <ApproveAddModal />
        </ModalWrapper>
      )}
    </React.Fragment>
  );
};
export default AddBook;
