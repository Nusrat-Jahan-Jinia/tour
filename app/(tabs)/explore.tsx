import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Animated, Pressable, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Tabs, Stack, Link  } from 'expo-router';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { PaperProvider, Button, withTheme, MD3LightTheme } from 'react-native-paper';
import Accordion from '@/components/accordion';
import ImageButton from '../../components/ImageButton';


const DATA = [
  {
    id: 'thailand',
    title: 'Thailand',
    description: 'Fist item content Fist item content Fist item content Fist item content Fist item content Fist item content Fist item content Fist item content Fist item content',
    links: ["kayak","Expedia"],
    image:""
  },
  {
    id: 'singapur',
    title: 'Singapur',
    description: 'second item content',
    links: ["Flight Link"],
  },
  {
    id: 'malyasia',
    title: 'Malyasia',
    description: 'Third item content',
    links: ["Train Link"],
  },
  {
    id: 'nepal',
    title: 'Nepal',
    description: 'Third item content',
    links: ["kayak","Expedia"],
  },
  {
    id: 'bhutan',
    title: 'Bhutan',
    description: 'Third item content',
    links: ["Train Link"],
  },
  {
    id: 'indoneshia',
    title: 'Indoneshia',
    description: 'Third item content',
    links: ["Train Link"],
  },
  {
    id: 'srilanka',
    title: 'Srilanka',
    description: 'Third item content',
    links: ["Train Link"],
  },
];

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
type ItemProps = { title: string; description: string; links: string[] };


export default function TabTwoScreen({ title, description, links }: ItemProps) {
   const colorScheme = useColorScheme();
  return (
   <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider theme={theme}>
          {DATA.map((item, index) => (
          <Accordion key={index} title={item.title} description={item.description} />
          ))}
          <View style={styles.btnContainer}>
            <View style={styles.btnWidth}>
              
              <Link href="/pages/sign_in"><ImageButton title="Sign in" /></Link>
            </View>
            <View style={styles.btnWidth}>
              <Link href="/pages/sign_up"> <ImageButton title="Sign up" /></Link>
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
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    color: "black",
  },
  title: {
    fontSize: 22,
  },
  itemStle:{
    margin: 5,
    padding:5,
    fontSize: 12,
    fontWeight: 400,
  },
  listItem: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row', // Aligns children horizontally
    justifyContent: 'space-between', // Adds space between buttons
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  btnWidth: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5, // Space between buttons
    backgroundColor: 'gray',
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#4CAF50',
    borderWidth: 1,
  },
});
