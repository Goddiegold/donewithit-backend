import React,{useContext, useState} from 'react';

const AuthContext = React.createContext()


export default AuthContext;

export const useAuthContext = ()=> useContext(AuthContext);