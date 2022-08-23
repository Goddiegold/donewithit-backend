import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import CategoryPickerItem from '../components/CategoryPickerItem';
import {AppForm,SubmitButton, AppFormField} from "../components/forms"
import {AppFormPicker} from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title:Yup.string().required().min(5).label("Title"),
    price:Yup.number().required().max(10000).label("Price"),
    description:Yup.string().min(5).label("Description").required(),
    category:Yup.object().nullable().label("Category"),
    images:Yup.array().min(1,"Please select an image"),
})

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

function ListingEditScreen(props) {
    const location = useLocation();
    return (
<Screen style={styles.container}>
<AppForm

initialValues={{
    title:"",
    description:"",
    category:null,
    price:"",
    images:[]
    }}
    onSubmit={(values=>console.log(location))}
    validationSchema={validationSchema}
    >
    <FormImagePicker name={"images"}/>
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