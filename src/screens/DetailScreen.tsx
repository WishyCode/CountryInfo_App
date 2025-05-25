import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { country } = route.params;

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <Text style={styles.name}>{country.name.common}</Text>
      <Text>Capital: {country.capital?.[0] ?? 'N/A'}</Text>
      <Text>Region: {country.region}</Text>
      <Text>Subregion: {country.subregion ?? 'N/A'}</Text>
      <Text>Population: {country.population.toLocaleString()}</Text>
      <Text>Area: {country.area.toLocaleString()} km²</Text>
      <Text>Languages: {languages}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  flag: {
    width: 200,
    height: 120,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DetailScreen;
