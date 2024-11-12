import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/images/login.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';


const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function ImageButton({title}){
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={myIcon}
        style={styles.image}
      />
      <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Aligns image and text in a row
    alignItems: 'center',
    borderRadius: 8,
    
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8, // Adds space between image and text
    // backgroundColor:'#4CAF50',
  },
  buttonText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 500,
  },
});