import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcards from './Flatcards'
export default function Elevatedcards() {
    return (
        <View >
            <Text style={styles.headingtext}>Elevated cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedcard]}>
                    <Text>TAP</Text>
                </View>
                <View style={[styles.card, styles.elevatedcard]}>
                    <Text>ME</Text>
                </View>
                <View style={[styles.card, styles.elevatedcard]}>
                    <Text>TO</Text>
                </View>
                <View style={[styles.card, styles.elevatedcard]}>
                    <Text>SCROLL</Text>
                </View>
                <View style={[styles.card, styles.elevatedcard]}>
                    <Text>MORE</Text>
                </View>
                <View style={[styles.card, styles.elevatedcard]}>
                    <Text>:</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        color: 'white',
    },
    headingtext: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        alignContent: 'center',
        color: 'white',
    },
    card: {
        color: 'white',
        width: 300,
        height: 200,
        backgroundColor: 'black',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        margin: 8,
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderColor: 'white',
        fontWeight: 600,
    },
    elevatedcard: {
        fontWeight: 600,
        backgroundColor: '#ffb8b8',
        elevation: 4,
        shadowOffset: {
            height: 1,
            width: 1,

        },
        shadowColor: 'white',
    },
    container: {
        padding: 8,
    }

})