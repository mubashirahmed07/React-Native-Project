import { Text, SafeAreaView, StyleSheet,Button, ScrollView ,TouchableOpacity} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import Elevatedcards from './components/Elevatedcards';
import Fancycards from './components/Fancycards';
import Actioncard from './components/Actioncard';
import Contactlist from './components/Contactlist';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <Elevatedcards />
        <Flatcards />
        
        <Fancycards />
        <Fancycards />
        <Contactlist/>
        <Actioncard/>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#0097e6',
    justifyContent: 'center',
flex: 1,
   
  },
  scrowViewContent :{
backgroundColor: 'black',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
  },
});
