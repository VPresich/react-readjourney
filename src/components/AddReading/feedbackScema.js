import * as Yup from "yup";
import { PAGES_ERR_REQUIRED } from "./constants";
export const feedbackSchema = Yup.object().shape({
  page: Yup.number().required(PAGES_ERR_REQUIRED).positive().integer(),
});
