import { ToastAndroid } from "react-native";
import Snackbar from "react-native-snackbar";
import * as yup from 'yup';

export const showSnackbar = (msg: string, type = 'INFO') => {
    Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: type == 'ERROR' ? '#f00' : '#000',
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