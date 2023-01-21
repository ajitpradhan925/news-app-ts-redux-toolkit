import { NavigationContainer } from '@react-navigation/native';
import PublicStack from './main-stack';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <PublicStack />
        </NavigationContainer>
    )
}

export default RootNavigation;