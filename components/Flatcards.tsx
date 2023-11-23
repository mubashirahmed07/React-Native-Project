import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingtext}>Flat cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text style={styles.cardText}>HUMPTY</Text>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Text style={styles.cardText}>DUMPTY</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text style={styles.cardText}>SITTY</Text>
        </View>
        <View style={[styles.card, styles.cardfour]}>
          <Text style={styles.cardText}>RUMPTY</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between', // Distribute space equally
  },
  card: {
    borderRadius: 8,
    height: 140,
    width: 140,
    flex: 1, // Take equal space
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center', // Center text vertically
    backgroundColor: 'transparent', // Make background transparent
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardone: {
    backgroundColor: '#fbc531',
    fontWeight: 600,
  },
  cardtwo: {
    backgroundColor: '#1abc9c',
    fontWeight: 600,
  },
  cardthree: {
    backgroundColor: '#2ecc71',
    fontWeight: 600,
  },
  cardfour: {
    backgroundColor: '#e84118',
    fontWeight: 600,
  },
});
