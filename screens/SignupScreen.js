import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet } from 'react-native'

export default class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Signup  </Text>
                <TextInput placeholder="user name"></TextInput>
                <TextInput placeholder="password"></TextInput>
                <TextInput placeholder="verify password"></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
