import React, { useEffect, useState } from 'react';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
    alignItems: 'center',
  },
  flag: {
    width: 60,
    height: 40,
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    color: '#555',
  },
});

export default HomeScreen;
