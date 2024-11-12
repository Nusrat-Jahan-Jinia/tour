import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Drawer } from 'expo-router/drawer';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Stack>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }}  />
      <Stack.Screen name="explore" options={{ title: 'Explore', headerShown: false }} />
    </Stack>

  );
}
