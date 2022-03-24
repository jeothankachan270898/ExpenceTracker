import { Ionicons } from "@expo/vector-icons";
import { Pressable ,View , StyleSheet} from "react-native";


function IconButtons ({icon , size , color ,onPress}){
    return <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
        <View >
         <Ionicons  name={icon} size={size} color={color}/>
        </View>
    </Pressable>
}
export default IconButtons;

const styles = StyleSheet.create({
    Container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})
