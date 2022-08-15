import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from "formik"

function AppFormField({name,width,...otherProps}) {
    const {handleChange,errors,touched,setFieldTouched} = useFormikContext()
    return (
        <>
             <AppTextInput
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