export const useAllowSubmit = (formik: any, initial: { [key: string]: string | boolean }) => {
  const isTouched = Object.values(formik.touched).length === Object.values(initial).length;
  return isTouched && !Object.values(formik.errors).length;
};
