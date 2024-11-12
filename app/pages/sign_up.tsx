import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter, Link, router } from 'expo-router';

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
 
  const [text, setText] = React.useState("Your Full Name");
  const [email, setEmail] = React.useState("Your Email Address");
  const [password, setPassword] = React.useState("Your Password");
  


  const handleSubmit = () => {
    console.log("hello")

    router.push('/pages/sign_in'); 
  };
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider theme={theme}>
            <View style={{ backgroundColor: theme.colors.primaryContainer }}>
            <View style={styles.divStyle}>
              <Text style={styles.headline}>Sign up to insideBox</Text>
              <View style={styles.display}>
                <Button
                  icon={() => (
                    <Image
                      source={require('../../assets/images/facebook.png')}
                      style={styles.icon} />)}>
                </Button>
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
              <View style={styles.divStyle}>
                 <TextInput
                    style={styles.input}
                    onChangeText={setText}
                  value={text}
                  onFocus={()=> setText("")}
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
                  onFocus={()=> setEmail("")}
                  />
                 <Button style={styles.m10} icon="camera" mode="contained" onPress={handleSubmit}>
                    Sign up
                  </Button>
              </View>
            </View>
             <View style={styles.divStyle}>
              <Text style={styles.headline}>Have an account?</Text>
              <Button icon="camera">
                 <Link href="/pages/sign_in">Sign In</Link>
              </Button>
            </View>
          </View>
        </PaperProvider>
        </SafeAreaView>
      </SafeAreaProvider>
  );
};



const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'rgb(234, 221, 255)',
  },
  display: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  divStyle: {
    padding: 20,
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  m10: {
      margin:10,
  },
  p10: {
    padding:10,
  },
  signInBtn: {
    width: 200,
  }
});
