import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import search from './src/utils/search';

let timeout;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState({});

  useEffect(() => {
    setLoading(true);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchSmth(query);
    }, 600);
  }, [query]);

  function searchSmth(q) {
    const results = search(q);
    setMovies({...results});
    setLoading(false);
    clearTimeout(timeout);
  }

  return (
    <View style={styles.mainGrap}>
      <View style={styles.inputGrap}>
        <TextInput
          style={styles.textinput}
          onChangeText={t => setQuery(t)}
          autoFocus
        />
        {loading ? <ActivityIndicator size={'large'} color={'orange'} /> : null}
      </View>
      <ScrollView style={styles.scrollview}>
        <Text>Results: </Text>
        {Object.entries(movies).length > 0
          ? Object.entries(movies).map((m, i) => {
              const name = m[1];
              return <Text key={i}>{name}</Text>;
            })
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainGrap: {},
  inputGrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  textinput: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  loading: {},
  scrollview: {
    padding: 10,
    paddingBottom: 20,
  },
});
