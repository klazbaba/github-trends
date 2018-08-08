import React, {Component} from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import ListItem from '../components/ListItem'

export default class HomeScreen extends Component {
    renderList = ({item}) => {
        return (
            <ListItem />
        )
    }
    render() {
        const DATA = [
            {
                user: 'jesseduffield',
                project: 'lazygit',
                description: 'simple terminal UI for git commands',
                stars: '5.9k',
                forks: '127'
            },
            {
                user: 'google',
                project: 'filament',
                description: 'Filament is a physically based rendering engine for Android, Windows, Linux and macOS',
                stars: '3.1k',
                forks: '126'
            },
            {
                user: 'Avik-Jain',
                project: '100-Days-Of-ML-Code',
                description: '100 Days of ML Coding',
                stars: '4.2k',
                forks: '685'
            },
            {
                user: 'kitao',
                project: 'pyxel',
                description: 'A retro game development environment in Python',
                stars: '2.7k',
                forks: '75'
            },
            
        ]

        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={this.renderList}
                    keyExtractor={(item) => item.user}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    }
})