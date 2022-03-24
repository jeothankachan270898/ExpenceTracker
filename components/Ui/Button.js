import { Pressable, View ,Text ,StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button ({children , onPress ,mode ,style }){
    return(
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
                <View style={[styles.container, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.Buttontext, mode === 'flat' && styles.flattext]}>
                        {children}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default Button;

const styles=StyleSheet.create({
    container :{
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    Buttontext : {
        color: '#fff',
        textAlign: 'center'
    },
    flat: {
        backgroundColor: 'transparent'
    },
    flattext: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        backgroundColor: GlobalStyles.colors.primary100,
        opacity: 0.75,
        borderRadius: 4
    }
    
})