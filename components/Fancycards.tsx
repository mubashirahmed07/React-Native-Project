import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'


export default function Fancycards() {

    return (
        <View style={styles.main}>
            <Text style={styles.headingtext}>Trending Places</Text>
            <View style={[styles.card, styles.cardselevated]}>
                <Image source={{
                    uri: 'https://images.unsplash.com/photo-1599580506193-fef9dc35b205?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }} style={styles.cardimage} />
                <View style={styles.cardbody}>
                    <Text style={styles.title}>SINDHRI</Text>
                    <Text style={styles.label}>THE LAND OF LATIF</Text>
                    <Text style={styles.description}>Sindh Located in the southeastern region of the country, It is bordered by the Pakistani provinces of Balochistan to the west and north-west and Punjab to the north</Text>

                    <Text style={styles.footer}>12KM AWAY</Text>
                </View>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    main:{
alignContent:'center',

textAlign: 'left',
    },
    cardbody: {
        flex: 1,
        paddingHorizontal: 12,
        flexGrow: 1,
        color: 'white',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'left',
color: 'black',

    },
    label: {
        textAlign: 'left',
        fontSize: 18,
        color: 'black',
      fontWeight: 'bold'
       
       
    },
    description: {
        textAlign: 'left',
        fontSize: 18,
       
        alignItems: 'center',
    },
    headingtext: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white',
        textAlign: 'left',
    },
    footer: {
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    cardimage: {
        height: 180,
        marginBottom: 8,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 26,

    },
    card: {
        width: 385,
        height: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        alignContent: 'center',
    },
    cardselevated: {
        backgroundColor: 'white',
        color: 'black',
        alignContent: 'center',
        elevation: 3,
        shadowoffset: {
            width: 1,
            height: 1,
            }
    },
})