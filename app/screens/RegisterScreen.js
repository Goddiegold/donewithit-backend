import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from "../components/forms";
import { register } from "../../api/auth";
import { decodeUserToken } from "../../util/user";
import {useAuthContext} from "../auth/context";
import { storeToken } from "../auth/storage";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});



function RegisterScreen() {
  const [error,setError] = useState({
    status:false,
    message:""
  })

  const [loading,setLoading] = useState(false)
  const {setUser} = useAuthContext()

  const handleSubmit = (values) => {
    setError({status:false,message:""})
    setLoading(true)
    register(values).then(res=>{
      console.log(res)
      setLoading(false)
      const token = res.data.token;
      setUser(decodeUserToken(token))
      storeToken(token)
      alert('Account created successfully!')
    }).catch(err=>{
      setLoading(false)
      setError({status:true,message:err.response.data.error})
    })
  }

  if(loading) return  <ActivityIndicator visible={loading}/>

  return (
    <Screen style={styles.container}>
    <ErrorMessage visible={error.status} error={error.message}/>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
