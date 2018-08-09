import React, {Component} from 'react'
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import {color} from '../styles/color'

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    render() {
        const {navigation} = this.props
        return (
            <ScrollView style={styles.container}>
                <View style={styles.thumbnail}>
                    <Image 
                        source={{uri: navigation.getParam('image')}}
                        style={styles.image}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginHorizontal: 8,
        backgroundColor: color.white,
        borderRadius: 10,
        marginVertical: 8,
        paddingVertical: 16
    },
    thumbnail: {
        width: 150,
        height: 150,
        backgroundColor: color.lightgrey,
        borderRadius: 10
    },
    image: {
        width: 150,
        height: 150
    }
})