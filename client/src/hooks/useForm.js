import { useState } from "react";

export function useForm(initialValues, submitHandler) {
 const [values, setValues] = useState (initialValues);
const changeHandler = (e) => {
setValues(state => ({
    ...state,
    [e.target.name]: e.target.value
}))
};
const submitHandler = (e) ={
e.preventDefoults();

submitCallback(values);
};
return {
    values,
    changeHandler,
    submitHandler,
};

}