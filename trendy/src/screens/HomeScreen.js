import React, {Component} from 'react'
import {ScrollView, StyleSheet, FlatList} from 'react-native'
import ListItem from '../components/ListItem'

export default class HomeScreen extends Component {
    renderList = ({item}) => {
        const {navigation} = this.props
        return (
            <ListItem
                user={item.user}
                project={item.project}
                stars={item.stars}
                forks={item.forks}
                description={item.description}
                image={item.image}
                onPressItem={() =>
                    navigation.navigate(
                        'Details',
                        {
                            image: item.image,
                            user: item.user,
                            project: item.project,
                            stars: item.stars,
                            forks: item.forks,
                            description: item.description
                        }
                    )
                }
            />
        )
    }

    render() {
        const DATA = [
            {
                image:
                    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0ba197eed01b550b7f6d4df10153223e',
                user: 'jesseduffield',
                project: 'lazygit',
                description: 'simple terminal UI for git commands',
                stars: '5.9k',
                forks: '127'
            },
            {
                image:
                    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0ba197eed01b550b7f6d4df10153223e',
                user: 'google',
                project: 'filament',
                description: 'Filament is a physically based rendering engine for Android, Windows, Linux and macOS',
                stars: '3.1k',
                forks: '126'
            },
            {
                image:
                    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0ba197eed01b550b7f6d4df10153223e',
                user: 'Avik-Jain',
                project: '100-Days-Of-ML-Code',
                description: '100 Days of ML Coding',
                stars: '4.2k',
                forks: '685'
            },
            {
                image:
                    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0ba197eed01b550b7f6d4df10153223e',
                user: 'kitao',
                project: 'pyxel',
                description: 'A retro game development environment in Python',
                stars: '2.7k',
                forks: '75'
            },
            
        ]

        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={this.renderList}
                    keyExtractor={item => item.user}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    }
})