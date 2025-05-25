import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';

import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Country } from '../types/Country';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      backgroundColor: colors.background, 
    },
    search: {
      backgroundColor: colors.card, 
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
      elevation: 2,
      color: colors.text,
    },
    card: {
      flexDirection: 'row',
      backgroundColor: colors.card, 
      padding: 12,
      borderRadius: 12,
      marginBottom: 10,
      elevation: 3,
      alignItems: 'center',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
    info: {
      color: colors.text,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flag: {
      width: 60,
      height: 40,
      borderRadius: 4,
    },
  });
 
  const handleSearch = (text: string) => {
    setSearch(text);
    const result = countries.filter(country =>
      country.name.common.toLowerCase().startsWith(text.toLowerCase())
    );
    setFiltered(result);
  };

  const renderItem = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { country: item })}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.name}>{item.name.common}</Text>
        <Text style={styles.info}>Capital: {item.capital?.[0] ?? 'N/A'}</Text>
        <Text style={styles.info}>Region: {item.region}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search countries..."
        placeholderTextColor={colors.text}
        style={styles.search}
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={item => item.name.common}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
};




export default HomeScreen;
