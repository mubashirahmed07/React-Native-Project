import { StyleSheet, Text, View, Linking, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncard() {

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View style={styles.main}>
      <Text style={styles.headingtext}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedcard]}>
        <View style={styles.headingcontainer}>
          <Text style={styles.headertext}>
            Whats new in the world
          </Text>
        </View>
        <Image source={{
          uri: 'https://images.unsplash.com/photo-1599580506193-fef9dc35b205?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }} style={styles.imagecard}></Image>
        <View style={styles.bodycontainer}>
          <Text numberOfLines={4} style={styles.description}>If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript</Text>
        </View>
        <View style={styles.footercontainer}>
          <TouchableOpacity onPress={() => { openWebsite('www.google.com.pk') }}>
            <Text style={styles.sociallink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { openWebsite('www.google.com.pk') }}>
            <Text style={styles.sociallink}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignContent: 'center',
    textAlign: 'left',
  },
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'white',
    textAlign: 'left',
  },
  card: {
    width: 385,
    height: 390,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,

  },
  elevatedcard: {
    backgroundColor: '#fffa65',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,

    },
    shadowColor: 'white',
    shadowOpacity: 0.4,
  },
  headingcontainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footercontainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  headertext: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  imagecard: {
    height: 190,
  },
  bodycontainer: {
    padding: 10,
    color: 'black',
    fontWeight: 600,
    },
  sociallink: {
    borderRadius: 6,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 9,
    paddingVertical: 8,
  },
  description:{
color: 'black',
fontWeight: 'bold',
  },
})