import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Formik} from 'formik';
import {showSnackbar, singUpValidationSchema} from '@configs/utils';
import { moderateScale } from 'react-native-size-matters';

const Register = ({...props}) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const {
    colors: {background, card, text, primary},
    dark,
  } = useTheme();
  const {user, navigation} = props;

  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles(background, text).loginMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().headerContainer}>
          <Text style={styles(background, text).welcomeText}>
            Create Account,
          </Text>
          <Text style={styles().signInText}>Sign up to get started</Text>
        </View>

        <View style={styles().formContainer}>
          <Formik
            validationSchema={singUpValidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              setShowSpinner(true);

              try {
                // const user = await signupUser(values)
                // updateUserLogin(user, true)
                setShowSpinner(false);
                Alert.alert(' ', user.msg, [
                  {
                    text: 'Ok',
                    // onPress: () => navigation.navigate('Login')
                  },
                ]);
              } catch (error: any) {
                setShowSpinner(false);
                console.log('Error: ', error.response);

                showSnackbar(error.response.data.msg, 'ERROR');
              }
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
                      onChangeText={handleChange('name')}
                      placeholder="Enter Name"
                      placeholderTextColor={text}
                    />

                    {errors.name && touched.name && (
                      <Text style={{fontSize: 10, color: 'red', marginTop: moderateScale(2)}}>
                        {errors.name}
                      </Text>
                    )}
                  </View>

                  <View style={styles().wrapper}>
                    <TextInput
                      style={styles(background, text).input}
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                      placeholder="Enter Email"
                      placeholderTextColor={text}
                    />

                    {errors.email && touched.email && (
                      <Text style={{fontSize: 10, color: 'red', marginTop: moderateScale(2)}}>
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
                      <Text style={{fontSize: 10, color: 'red', marginTop: moderateScale(2)}}>
                        {errors.password}
                      </Text>
                    )}
                  </View>
                </View>

                <View style={styles().btnContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      backgroundColor: dark ? card : primary,
                      height: 50,
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#fff', marginRight: 5}}>
                      Register
                    </Text>
                    {showSpinner && <ActivityIndicator color={text} />}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        <View style={styles().footerContainer}>
          <Text style={styles(background, text).newUserText}>
            I am already a member.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles(background, text, primary, dark).signText}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
