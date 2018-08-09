import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Details screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})