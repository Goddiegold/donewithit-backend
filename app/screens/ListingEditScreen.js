import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import CategoryPickerItem from '../components/CategoryPickerItem';
import {AppForm,SubmitButton, AppFormField} from "../components/forms"
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(5).label("Title"),
    price:Yup.number().required().max(10000).label("Price"),
    description:Yup.string().min(5).label("Description").required(),
    category:Yup.object().required().nullable().label("Category")
})

const categories= [
    {label:"Furniture",value:1,backgroundColor:"red",icon:"apps"},
    {label:"Clothing",value:2,backgroundColor:"green",icon:"email"},
    {label:"Camera",value:3,backgroundColor:"blue",icon:"lock"}
]

function ListingEditScreen(props) {
    return (
<Screen style={styles.container}>
<AppForm

initialValues={{
    title:"",
    description:"",
    category:null,
    price:""}}
    onSubmit={(values=>console.log(values))}
    validationSchema={validationSchema}
    >
<AppFormField
 maxLength={255}
  name="title" 
  placeholder={"Title"}/>
<AppFormField
    keyboardType="numeric"
    maxLength={8}
    name="price"
    width={125}
    placeholder={"Price"}
/>
<AppFormPicker
width={"50%"}
    items={categories}
    numColumns={3}
    name="category"
    PickerItemComponent={CategoryPickerItem}
    placeholder={"Category"} 
/>
<AppFormField
    maxLength={255}
    multiline
    name="description"
    numberOfLines={3}
    placeholder={"description"}
/>
<SubmitButton title={"Post"}/>
</AppForm>
</Screen>  
  );
}

const styles = StyleSheet.create({
    container:{
padding:10
    }
})

export default ListingEditScreen;