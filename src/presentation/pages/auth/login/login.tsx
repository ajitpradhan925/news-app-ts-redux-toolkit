import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import * as yup from 'yup';
import {useTheme} from '@react-navigation/native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {showSnackbar, signInValidationSchema} from '@configs/utils';
import {moderateScale} from 'react-native-size-matters';
import {useAppDispatch, useAppSelector} from '@configs/redux-hooks';
import { LoginUser } from '@domain/user-slice';
import { LOGIN_SUCCESS_MSG } from '@configs/const';
import { setToken } from '@configs/axios-config';

const Login = ({...props}) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(true);
  const {
    colors: {background, card, text, primary},
    dark,
  } = useTheme();

  const dispatch = useAppDispatch();
  const {user, error = "", status} = useAppSelector(state => state.user);

  console.log('users ', {user, error, status})
  
  useEffect(() => {
    if (user.token) {
      showSnackbar(LOGIN_SUCCESS_MSG, 'SUCCESS');
      setToken(user.token);
      navigation.replace('home');
    }
  }, [user]);

  useEffect(() => {
    if(error)
      showSnackbar(error, 'ERROR');
  }, [error]);

  return (
    <View style={styles(background).loginMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().headerContainer}>
          <Text style={styles(background, text).welcomeText}>Welcome,</Text>
          <Text style={styles().signInText}>
            Sign in to access more features.
          </Text>
        </View>

        <View style={styles().formContainer}>
          <Formik
            validationSchema={signInValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              // setShowSpinner(true);
              dispatch(LoginUser(values));
              // try {
              //   console.log('values ', values);
              //   dispatch(LoginUser(values));
              //   // const user = await loginUser(values)
              //   // updateUserLogin(user, true);
              //   setShowSpinner(false);
              //   // setToken(user.token);
              //   // navigation.replace('home');
              // } catch (error: any) {
              //   console.log("error ", error);
                
              //   setShowSpinner(false);
              //   // showSnackbar(error.response.data.msg, 'ERROR');
              // }
            }}>
            {({
              handleSubmit,
              isValid,
              values,
              errors,
              handleChange,
              touched,
            }) => (
              <>
                <View style={styles().inputContainer}>
                  <View style={styles().wrapper}>
                    <TextInput
                      style={styles(background, text, primary, dark).input}
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                      placeholderTextColor={text}
                      placeholder="Enter Email"
                    />

                    {errors.email && touched.email && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          marginTop: moderateScale(2),
                        }}>
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  <View style={styles().wrapper}>
                    <View
                      style={[styles(background, text, primary, dark).input]}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{width: '90%'}}>
                          <TextInput
                            secureTextEntry={showPassword}
                            onChangeText={handleChange('password')}
                            style={{color: text, fontWeight: 'bold'}}
                            placeholder="Enter Password"
                            placeholderTextColor={text}
                          />
                        </View>

                        <TouchableOpacity
                          style={{alignSelf: 'center'}}
                          onPress={() => {
                            setShowPassword(prevState => !prevState);
                          }}>
                          <Icon
                            name={showPassword ? 'key-outline' : 'key'}
                            size={20}
                            color={text}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    {errors.password && touched.password && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          marginTop: moderateScale(2),
                        }}>
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  <View style={styles().fogotPasswordContainer}>
                    <Text style={styles().forgotPasswordText}>
                      Forgot Password
                    </Text>
                  </View>
                </View>

                <View style={styles().btnContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={status === 'loading'}
                    style={{
                      // backgroundColor: dark ? card : primary,
                      backgroundColor: status === 'loading' ? 'gray' : primary,
                      height: 50,
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', marginRight: 5}}>Login</Text>
                    {(status === 'loading') && <ActivityIndicator color={text} />}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        <View style={styles().footerContainer}>
          <View style={styles().footerContainerInner}>
            <Text style={styles(background, text, primary, dark).newUserText}>
              I am new user,
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
              <Text style={styles(background, text, primary, dark).signText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text>Skip</Text>
              {/* <Text style={{color: COLORS.lightGray5}}>Skip</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
