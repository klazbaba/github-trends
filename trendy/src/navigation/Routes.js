import {createStackNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import {color} from '../styles/color'

const AppStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        navigationOptions: {
            title: 'Trending repos',
            headerTintColor: color.white,
            headerStyle: {
                backgroundColor: color.brown
            }
        }
    }
)

export default AppStack