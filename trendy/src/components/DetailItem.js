import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {color} from '../styles/color'

const DetailItem = (props) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{props.label + ':'}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
}

export default DetailItem

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: 16
    },
    value: {
        marginLeft: 16,
        flex: 1,
        flexWrap: 'wrap'
    },
    label: {
        width: 65
    }
})