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


// schema of data: { id, title, description: [document[iterate int], extra_note], links }
const DATA = [
  {
    id: 'thailand',
    title: 'Thailand',
    requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
        },
         {
          title: "Visa Fee",
          description: "5000 taka"
        },
    ],
    extra_note: "vvf",
    links: ["Train Link"],
  },
  {
    id: 'singapur',
    title: 'Singapur',
    requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Passport-sized Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
          },
         {
          title: "Visa Fee",
          description: "5000 taka"
        },
    ],
    extra_note: "vvf",
    links: ["Flight Link"],
  },
  {
    id: 'malyasia',
    title: 'Malyasia',
    requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Passport-sized Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
        },
        {
          title: "Visa Fee",
          description: "5000 taka"
        },
    ],
    extra_note: "vvf",
    links: ["Train Link"],
  },
  {
    id: 'nepal',
    title: 'Nepal',
    requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Passport-sized Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
        },
        {
          title: "Visa Fee",
          description: "5000 taka"
        },
    ],
    extra_note: "vvf",
    links: ["kayak","Expedia"],
  },
  {
    id: 'bhutan',
    title: 'Bhutan',
  requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Passport-sized Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
        },
        {
          title: "Visa Fee",
          description: "5000 taka"
        },

    ],
  extra_note: "vvf",
    links: ["Train Link"],
  },
  {
    id: 'indoneshia',
    title: 'Indoneshia',
   requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Passport-sized Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
        },
        {
          title: "Visa Fee",
          description: "5000 taka"
        },
    ],
   extra_note: "vvf",
    links: ["Train Link"],
  },
  {
    id: 'srilanka',
    title: 'Srilanka',
    requirements: [{
          title: "Application Form",
          description: "An application form duly filled out and signed by the applicant."

        },
        {
          title: "Valid Passport",
          description:"A valid passport for travelling to Thailand with at least six months remaining validity. Passport must have at least 2 blank pages for a visa sticker and immigration stamps. One set of passport information page, most recent Thai visa page, and renewal page (if any)."
        },
         {
          title: "Active Phone Number",
          description:"An active phone number is required."
        },
         {
          title: "Passport-sized Photos",
          description: "Two color passport-sized photos (3.5 x 4.5cm), taken against a white background and within the past 6 months."
        },
         {
        title: "Proof of Finance",
        description: "Evidence of adequate finance, such as a current Bank Solvency Certificate and Bank Statement of the last 6 months with satisfactory transaction amounts."
        },
         {
            title: "Sponsor Financial Documents",
            description: "If the applicant is sponsored by their company, the company Bank Statement, Bank Solvency Letter, and trade license must be attached. The Royal Thai Embassy reserves the right to request the applicant’s personal Bank Statement."
        },
         {
          title: "Round-trip Ticket",
          description: "A copy of a round-trip air ticket or a booking confirmation."
        },
         {
          title: "Visa Request and Employer Letters",
          description: "A visa request letter from the applicant and a recommendation letter from their employer. Include Salary Bank Statement, Pay Slip, or Salary Certificate for employees. A BMDC certificate or letter from hospital if the applicant is a Doctor, or a Bar Council Certificate or letter from a law firm if the applicant is a lawyer."
        },
        {
          title: "Visa Fee",
          description: "5000 taka"
      },
    ],
    extra_note: "vvf",
    links: ["http://www.slhcdhaka.org/consular_visa.php"],
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
