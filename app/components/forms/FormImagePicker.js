import react from 'react';
import {StyleSheet,View} from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from "formik";

function FormImagePicker({name}) {
    const {errors,setFieldValue,touched,values} = useFormikContext()

const imageUris = values[name] 

    function handleAdd(uri){
        setFieldValue(name,[...imageUris,uri])
      }
      
      function handleRemove(uri){
        setFieldValue(name,imageUris.filter(imageUri=>imageUri!==uri))
      }

return(
    <>
<ImageInputList 
imageUris={imageUris}
onAddImage={handleAdd}
onRemoveImage={handleRemove}
/>
<ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>

)}
export default FormImagePicker;