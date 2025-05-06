import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../paginas/Home";
import Details from "../paginas/Details";

export default function Rotas() {

    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen name="Home" component={Home}/>
                    <stack.Screen name="Details" component={Details}/>

                </stack.Navigator>

        </NavigationContainer>
    ) 
}