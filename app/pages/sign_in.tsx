import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TextInput, Alert, Platform, } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter, Link, router } from 'expo-router';
import Accordion from '@/components/accordion';
import SocialButton from '../../components/SocialButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import { PaperProvider,Button, withTheme,MD3LightTheme } from 'react-native-paper';


const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};




export default function Sign_up() {
  const [email, setEmail] = React.useState("Your Email Address");
  const [password, setPassword] = React.useState("Your Password");


  const makeClearForm = () => {
    setEmail('');
    setPassword('');
  }
  const handleSubmit = () => {
    console.log("login form sunmit");
    if (email == 'test@example.com' && password == 'password') {
      makeClearForm();
      router.push("/pages/todo_list");
    } else {
      makeClearForm();
       if( Platform.OS === 'web') {
        alert('Invalid Email and Password');
        return;
       }
        Alert.alert('Invalid Credential', 'Invalid Email and Password', [
        {
          text: 'Cancel',
          onPress: () => router.push("/pages/sign_in"),
          style: 'cancel',
        },
        { text: 'OK',
          onPress: () => router.push("/pages/sign_in")
        }
      ]);

    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
            <View style={styles.divStyle}>
              <Text style={styles.headline}>Sign in your account</Text>

              <View>
                 <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                  value={email}
                  onFocus={()=> setEmail("")}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                  value={password}
                  onFocus={()=>setPassword("")}
                  />
                 <Button style={styles.signInBtn} icon="camera" mode="contained" onPress={handleSubmit}>
                    <Text style={styles.signInTxt}>Sign in</Text>
                </Button>
                <Text style={styles.password}>
                    or sign in with
              </Text>
              </View>
              <View style={styles.display}>
                <SocialButton />
                <Icon.Button
                  name="facebook"
                  backgroundColor="#3b5998"
                >
                  Login with Facebook
                </Icon.Button>

                <Button
                  icon={() => (
                    <Image
                      source={require('../../assets/images/gmail.png')}
                      style={styles.icon} />)}>
                </Button>
                <Button
                  icon={() => (
                    <Image
                      source={require('../../assets/images/apple.png')}
                      style={styles.icon} />)}>
                  </Button>
            </View>


             <View>
              <Button>
                <Text style={styles.signupTxt}>Dont' have an account?</Text>
                    <Link style={styles.signupBtn} href="/pages/sign_up"> Sign up</Link>
              </Button>
            </View>
          </View>
        </SafeAreaView>
    </SafeAreaProvider>


  );
};


const styles = StyleSheet.create({
 container: {
    backgroundColor: 'rgb(234, 221, 255)',
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',      // Centers horizontally
  },
  divStyle: {
    minWidth: '80%',
  },
  display: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom:10,
  },

  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  back: {
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    flex: 1,
    width: '50%',
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: '#D3D3D3',
    margin: 5,
    borderRadius: 0,
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 10,
      borderRadius: 5,
    width: '100%',

  },
  m10: {
      margin:10,
  },
  p10: {
    padding:10,
  },
  signInTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
  signInBtn: {
    width: "100%",
    margin: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  password: {
   color: "gray",
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
  },
   signupTxt: {
    color: "gray",
    fontSize: 16,
    fontWeight: 500,
  },
  signupBtn: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: 500,
  },

});
