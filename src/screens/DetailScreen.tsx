import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useTheme } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { country } = route.params;
  const { colors } = useTheme();
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.innerContainer}>
        <Text style={[styles.name, { color: colors.text }]}>{country.name.common}</Text>
        <Image source={{ uri: country.flags.png }} style={styles.flag} />
        <Text style={[styles.text, { color: colors.text }]}>Capital: {country.capital?.[0] ?? 'N/A'}</Text>
        <Text style={[styles.text, { color: colors.text }]}>Region: {country.region}</Text>
        <Text style={[styles.text, { color: colors.text }]}>Subregion: {country.subregion ?? 'N/A'}</Text>
        <Text style={[styles.text, { color: colors.text }]}>Population: {country.population.toLocaleString()}</Text>
        <Text style={[styles.text, { color: colors.text }]}>Area: {country.area.toLocaleString()} km²</Text>
        <Text style={[styles.text, { color: colors.text }]}>Languages: {languages}</Text>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 16,
  },
  flag: {
    width: 200,
    height: 120,
    marginBottom: 16,
    alignSelf: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },

});

export default DetailScreen;
