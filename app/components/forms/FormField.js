import React from 'react';
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from "formik"

function AppFormField({ name, width, ...otherProps }) {
    const { handleChange, errors, touched, setFieldTouched, setFieldValue, values } = useFormikContext()
    return (
        <>
            <TextInput
                width={width}
                onChangeText={text=>setFieldValue(name,text)}
                value={values[name]}
                {...otherProps}
                onBlur={() => setFieldTouched(name)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;

