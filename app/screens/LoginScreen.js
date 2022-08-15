import React from 'react';
import { StyleSheet,Image } from 'react-native';
import Screen from "../components/Screen";
import * as Yup from "yup";
import {AppForm,SubmitButton, AppFormField} from "../components/forms"

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(5).max(10).label("Password")
})

function LoginScreen(props) {

    return (
       <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
        <AppForm
    initialValues={{email:"",password:""}}
    onSubmit={values=>console.log(values)}
    validationSchema={validationSchema}
        >
    <AppFormField
            autoCaptitalize="none"
            autoCorrect={false}
            icon={"email"}
            keyBoardType={'email-address'}
            placeholder={"Email"}
            name={"email"}
            textContentType={"emailAddress"}
        />
<AppFormField
            autoCaptitalize="none"
            autoCorrect={false}
            icon={"lock"}
            name={"password"}
            secureTextEntry
            placeholder={"Password"}
            textContentType={"password"}
        />
<SubmitButton title={"Login"}/>   
</AppForm>
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20
    }
})
export default LoginScreen;