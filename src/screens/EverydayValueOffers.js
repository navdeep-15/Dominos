import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,TouchableOpacity,Platform } from 'react-native'
import TabPizzaMania from './TabPizzaMania'
import {normalize} from '../dimension'

export default class EverydayValueOffers extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../assets/arrow.png')}
                            style={styles.backimg}
                        />
                    </TouchableOpacity>
                    <Text style={styles.exploremenutext}>Everyday Value Offers</Text>
                </View>
                <TabPizzaMania />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#0a5c91',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? normalize(50) : normalize(22),
        padding: normalize(15),
    },
    exploremenutext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: normalize(20),
    },
    backimg: {
        width: 25,
        height: 25,
    }
});
