import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput ,Platform} from 'react-native'

export default class Feedback extends React.Component {
    constructor() {
        super();
        this.state = { name: '', mobile: '', email: '', feedback: '' }
    }
    submitbtn = () => {
        if (this.state.name === '' || this.state.mobile === '' || this.state.email === '' || this.state.feedback === '')
        {
            
        }   
        else
        {
            this.props.navigation.goBack();
        }
       

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            source={require('../assets/arrow.png')}
                            style={styles.backimg}
                        />
                    </TouchableOpacity>
                    <Text style={styles.exploremenutext}>Feedback</Text>
                </View>
                <View style={styles.textinputview}>
                    <TextInput
                        placeholder='Name'
                        keyboardType={'default'}
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({ name: text })}
                    />
                    <TextInput
                        placeholder='Mobile'
                        keyboardType={'number-pad'}
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({ mobile: text })}
                    />
                    <TextInput
                        placeholder='Email'
                        keyboardType={'email-address'}
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        placeholder='Feedback'
                        keyboardType={'default'}
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({ feedback: text })}
                    />
                </View>
                <TouchableOpacity style={styles.if_exploremenubtn} onPress={() => this.submitbtn}>
                    <Text style={styles.placeordertext}>SUBMIT</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#0a5c91',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios'?50:22,
        padding: 15,
    },
    exploremenutext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },
    backimg: {
        width: 25,
        height: 25,
    },
    textinput: {
        padding: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#0a5c91',
        borderRadius: 6,
        fontSize: 16
    },
    textinputview: {
        padding: 25,
    },
    if_exploremenubtn: {
        backgroundColor: '#82bb37',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: '25%',
        marginTop: 40
    },
    placeordertext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});
