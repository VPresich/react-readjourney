import * as Yup from "yup";

export const feedbackSchema = Yup.object().shape({
  title: Yup.string(),
  author: Yup.string(),
  pages: Yup.number(),
});
