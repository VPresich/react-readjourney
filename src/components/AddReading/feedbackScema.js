import * as Yup from "yup";
import {
  PAGES_ERR_REQUIRED,
  PAGE_MIN_ERROR,
  PAGE_MAX_ERROR,
} from "./constants";

export const feedbackSchema = (minPage, totalPages) =>
  Yup.object().shape({
    page: Yup.number()
      .required(PAGES_ERR_REQUIRED)
      .positive()
      .integer()
      .min(minPage, `${PAGE_MIN_ERROR} ${minPage}.`)
      .max(totalPages, `${PAGE_MAX_ERROR} ${totalPages}.`),
  });
