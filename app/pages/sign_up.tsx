import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter, Link, router } from 'expo-router';
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
 
  const [name, setName] = React.useState("Your Full Name");
  const [email, setEmail] = React.useState("Your Email Address");
  const [password, setPassword] = React.useState("Your Password");
  


  const handleSubmit = () => {
    console.log("hello")

    router.push('/pages/sign_in'); 
  };
  
  return (
      <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
            <View style={styles.divStyle}>
              <Text style={styles.headline}>Create your account</Text>

              <View>
                 <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    onFocus={()=> setName("")}
                />
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
                 <Button style={styles.signInBtn} mode="contained" onPress={handleSubmit}>
                    <Text style={styles.signInTxt}>SING UP</Text>
                </Button>
                <Text style={styles.password}>
                    or sign up with
              </Text>
              </View>
              <View style={styles.display}>
                <SocialButton title="Facebook" name="facebook" backgroundColor="#3b5998" />
                <SocialButton title="Linkdln" name="linkedin-square" backgroundColor="#3b5998" />
                <SocialButton title="Gmail" name="google-plus-square" backgroundColor="#c71610" />
              </View>


             <View>
              <Button>
                <Text style={styles.signupTxt}>Have an account?</Text>
                    <Link style={styles.signupBtn} href="/pages/sign_in"> SIGN IN</Link>
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
    gap: 10,
    margin: 10,
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
    borderColor: '#ccc',
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
