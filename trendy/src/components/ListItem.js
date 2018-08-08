import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {color} from '../styles/color'

const ListItem = (props) => {
    return (
        <View style={styles.wrapper}>

        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 1,
        borderBottomColor: color.grey
    }
})