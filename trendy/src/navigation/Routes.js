import {createStackNavigator} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import {color} from '../styles/color'

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
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