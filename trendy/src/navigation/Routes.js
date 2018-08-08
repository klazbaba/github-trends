import React from 'react'
import {createStackNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import {color} from '../styles/color'

const AppStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        navigationOptions: {
            title: 'Home screen',
            headerStyle: {
                backgroundColor: color.blue
            }
        }
    }
)

export default AppStack