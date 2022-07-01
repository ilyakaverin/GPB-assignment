import { useEffect } from "react";
import { useField } from "react-final-form";


const useFieldValue = (name) => {
  const {
    input: { value }
  } = useField(name, { subscription: { value: true } });

  return value;
};


export default ({ name, onChange }) => {
  const value = useFieldValue(name);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return null;
};
