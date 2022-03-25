import { Pressable } from "react-native";
import { View ,Text ,StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormatedDate } from "../../Util/date";
import {useNavigation} from "@react-navigation/native"

function ExpenceItem ({id ,description , date ,amount}) {
const navigation=useNavigation();
function expencePressHandler(){
 navigation.navigate('ManageExpences',{ExpenceId: id})
}
    return(
        <Pressable onPress={expencePressHandler}
        style={({pressed})=>pressed && Styles.pressed}>
            <View style={Styles.Container}>
            <View>
                <Text style={[Styles.textBase,Styles.Description]}>{description}</Text>
                <Text style={Styles.textBase}>{getFormatedDate(date)}</Text>
            </View>
            <View  style={Styles.AmountContainer}>
                <Text style={ Styles.Amount}>{amount.toFixed(2)}</Text>
            </View>
            </View>
        </Pressable>
    )
}
export default ExpenceItem;

const Styles = StyleSheet.create({
    Container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        elevation: 10,
        
    },
    textBase : {
        color: GlobalStyles.colors.primary50
    },
    Description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    AmountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 90
    },
    Amount : {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    pressed: {
     opacity: 0.75
    }
})