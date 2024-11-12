import {ImageBackground, StyleSheet, Text, Button, Alert, View, Pressable, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets} from 'react-native-safe-area-context';
import ExampleImage from '../../assets/images/human.avif';
import Logo from '../../assets/images/icon.png';
import { useRouter, Link } from 'expo-router';
import SignInScreen from '../pages/sign_in';
import SignUpScreen from '../pages/sign_up';

export default function HomeScreen() {
 return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={ExampleImage} imageStyle={styles.imageStyle} style={styles.image}>
         <View style={styles.mainContent}>
            <Pressable>
             <Link href="/pages/sign_in">
               <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
             />
             </Link>
            </Pressable> 
           
           <Text style={styles.whiteText}>HOPE FOR HUMANITY</Text>
           <Text style={styles.blackText}>Welcome to hope for humanity</Text>
         </View>
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    
  },
  imageStyle: {
    resizeMode: 'cover',  // Options: 'contain', 'stretch', etc.
  },
  mainContent:{
    backgroundColor: 'rgba(23, 167, 65, 0.4)',
    height: '100%',
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',      // Centers horizontally
   
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400,
    textAlign: 'center'
  },
   blackText: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  tinyLogo:{
    width: 50,
    height: 50,
    textAlign: 'center',
    marginBottom: 20,
   },
 
});
