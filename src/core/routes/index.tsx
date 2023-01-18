import { NavigationContainer } from '@react-navigation/native';
import PublicStack from './PublicStack';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <PublicStack />
        </NavigationContainer>
    )
}

export default RootNavigation;