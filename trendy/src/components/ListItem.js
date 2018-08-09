import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native'
import {color} from '../styles/color'
import { Icon } from 'native-base';

const ListItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={props.onPressItem}
        >
            <View style={styles.thumbnail}>
                <Image
                    source={{uri: props.image}}
                    style={styles.image}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.topMiddleText}>
                    {props.user + ' / ' + props.project}
                </Text>
                <Text style={styles.bottomMiddleText}>{props.description}</Text>
            </View>
            <View style={styles.right}>
                <View style={styles.innerRightWrapper}>
                    <Text>{'\u2605 '}</Text>
                    <Text>{props.stars}</Text>
                </View>
                <View style={styles.innerRightWrapper}>
                    <Icon name="code-fork" type="FontAwesome" />
                    <Text>{' ' + props.forks}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 1,
        borderBottomColor: color.grey,
        paddingVertical: 8,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thumbnail: {
        backgroundColor: color.lightGrey,
        height: 50,
        width: 50,
        borderRadius: 5
    },
    topMiddleText: {

    },
    body: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'space-between'
    },
    right: {
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    bottomMiddleText: {
        height: 20
    },
    image: {
        height: 50,
        width: 50
    },
    innerRightWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline'
    }
})