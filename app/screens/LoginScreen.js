import React, { useContext, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from "../components/Screen";
import * as Yup from "yup";
import { ErrorMessage, AppForm, SubmitButton, AppFormField } from "../components/forms"
import {login} from '../../api/auth';
import { decodeUserToken } from '../../util/user';
import AuthContext from '../auth/context';
import { storeToken } from '../auth/storage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).max(10).label("Password")
})


function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false)
    const { setUser } = useContext(AuthContext)

    const handleSumbit = (loginInfo) => {
        login(loginInfo).then(res => {
            const user = decodeUserToken(res.data)
            setUser(user)
            storeToken(res.data)
        }).catch(err => {
            console.log(err)
            setLoginFailed(true)
        })
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSumbit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
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
                <SubmitButton title={"Login"} />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})
export default LoginScreen;