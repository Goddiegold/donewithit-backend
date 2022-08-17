import React from 'react';
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from "formik"

function AppFormField({name,width,...otherProps}) {
    const {handleChange,errors,touched,setFieldTouched} = useFormikContext()
    return (
        <>
             <TextInput
             width={width}
            onChangeText={handleChange(name)}
            {...otherProps}
            onBlur={()=>setFieldTouched(name)}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/> 
        </>
    );
}

export default AppFormField;