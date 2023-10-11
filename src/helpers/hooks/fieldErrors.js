const fieldError = (errors) => {
  const itemErrors =
    typeof errors === "object" &&
    errors?.reduce((listErrors, error) => {
      if (error?.field) listErrors[error.field] = error;

      return listErrors;
    }, {});

  return itemErrors;
};

export default fieldError;
