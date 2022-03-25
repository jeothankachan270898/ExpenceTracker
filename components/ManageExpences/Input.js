import {View ,Text, TextInput  ,StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function Input ({Label,style, textInputConfig }){

    const inputStyle = [styls.input];
    if(textInputConfig && textInputConfig.multiline){
        inputStyle.push(styls.inputMultiLine)
    }

 return(
     <View style={[styls.container, style]}> 
         <Text style={styls.inputText}>{Label}</Text>
         <TextInput style={inputStyle} {...textInputConfig} />
     </View>
 )   
}
export default Input;

const styls=StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
        
    },
    inputText: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input : {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiLine: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})