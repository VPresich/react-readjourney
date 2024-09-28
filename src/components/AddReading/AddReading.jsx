import React, { useState, useMemo } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsBookFullyRead,
  selectStartReadingPage,
  selectTotalReadingBookPages,
} from "../../redux/reading/selectors";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema } from "./feedbackScema";
import { startReading, stopReading } from "../../redux/reading/operations";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import ApproveReadModal from "../ApproveReadModal/ApproveReadModal";
import {
  // successNotify,
  errNotify,
} from "../../auxiliary/notification/notification";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import css from "./AddReading.module.css";

const AddReading = ({ book, initReading = true }) => {
  const [isStartReading, setIsStartReading] = useState(initReading);
  const [isShowReadModal, setShowReadModal] = useState(false);

  const isBookFullyRead = useSelector(selectIsBookFullyRead);
  const startReadPage = useSelector(selectStartReadingPage);
  const totalPages = useSelector(selectTotalReadingBookPages);

  const schema = useMemo(
    () => feedbackSchema(startReadPage, totalPages),
    [startReadPage, totalPages]
  );

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      page: 0,
    },
  });

  const { handleSubmit } = methods;
  const dispatch = useDispatch();

  const handleShowReadModalClose = () => {
    setShowReadModal(false);
  };

  const onSubmit = (values) => {
    if (isBookFullyRead) {
      setShowReadModal(true);
      return;
    }
    const data = { ...values };
    data.id = book._id;
    dispatch(isStartReading ? startReading(data) : stopReading(data))
      .unwrap()
      .then(() => {
        // successNotify(
        //   isStartReading ? "Succes start reading" : "Succes stop reading"
        // );
        if (isBookFullyRead) {
          setShowReadModal(true);
        }
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
      {isShowReadModal && (
        <ModalWrapper onClose={handleShowReadModalClose}>
          <ApproveReadModal />
        </ModalWrapper>
      )}
    </React.Fragment>
  );
};
export default AddReading;
