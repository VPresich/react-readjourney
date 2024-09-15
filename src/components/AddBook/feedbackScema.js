import * as Yup from "yup";
import {
  AUTHOR_ERR_REQUIRED,
  TITLE_ERR_REQUIRED,
  PAGES_ERR_REQUIRED,
} from "./constants";
export const feedbackSchema = Yup.object().shape({
  title: Yup.string().required(TITLE_ERR_REQUIRED),
  author: Yup.string().required(AUTHOR_ERR_REQUIRED),
  totalPages: Yup.number().required(PAGES_ERR_REQUIRED).positive().integer(),
});
