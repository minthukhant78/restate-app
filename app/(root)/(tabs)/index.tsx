import { Image, StyleSheet, Platform  , View, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function Index() {
 
 return (
  <View style={{ flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  }}>
  <Link href={'/sigin-in'}>SignIn </Link>
  <Link href={'/explore'}>explore </Link>
  <Link href={'/profile'}>Profile </Link>
  <Link href={'/properties/1'}>properties </Link>
 
  </View>
 )
}

