// useFieldValue.js
import { useEffect, useRef, useState} from "react";
import { useField } from "react-final-form";

const usePrevious = (val) => {
  const ref = useRef(val);

  useEffect(() => {
    ref.current = val;
  }, [val]);

  return ref.current;
};

const useFieldValue = (name) => {
  const {
    input: { value }
  } = useField(name, { subscription: { value: true } });
  const prevValue = usePrevious(value);

  return [value, prevValue];
};
export default ({ name, onChange }) => {
  const [value, prevValue] = useFieldValue(name);

  useEffect(() => {
    if (value !== prevValue) {
      onChange(value, prevValue);
    }
  }, [onChange, value, prevValue]);

  return null;
};


// get Picks 

export const useGetPicture = (img) => {

  const [image, setImage] = useState('')

  useEffect(() => {
      const getPic = async () => {
          const url = await import(`./assets/${img}`).then((image) => image.default);

          setImage(url)
      }
      getPic()
  },[]);

  return [image]
}