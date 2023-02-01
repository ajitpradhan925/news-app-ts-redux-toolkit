import { ToastAndroid } from "react-native";
import Snackbar from "react-native-snackbar";
import * as yup from 'yup';

export const showSnackbar = (msg: string, type = 'SUCCESS') => {
    let backgroundColor = "#038749";
    switch(type) {
        case 'ERROR':
            backgroundColor = "#f00";
            break;
        case 'SUCCESS':
            backgroundColor = "#038749";
            break;
        case 'INFO':
            backgroundColor = "#61b2cc";
            break;
        default: 
            backgroundColor = "#038749";
    }
    Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: backgroundColor,
    });
}

export const showToast = (msg: string) => {
    ToastAndroid.showWithGravityAndOffset(
        msg, ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );
};


export const singUpValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .matches(
            /[!@#$%^&*()\-_"=+{}; :,<.>]/,
            'Password must have a special character',
        )
        .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
        .required('Password is required'),
});

export const signInValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });