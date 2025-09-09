import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../paginas/Home";
import Details from "../paginas/Details";
import Pesquisar from "../paginas/Search";

export default function Rotas() {

    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
                <stack.Navigator  >
                    <stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
                    <stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
                    <stack.Screen name="Search" component={Pesquisar} options={{ headerShown: false }} />
                    
                </stack.Navigator>

        </NavigationContainer>
    ) 
}