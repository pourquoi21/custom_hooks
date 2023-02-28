const useInput = (initialValue, validator) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const name = useInput("Mr.", func);
const func = (value) => value.length <= 10;
