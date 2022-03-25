import { View ,StyleSheet,Text} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummury';

  

function ExpencesOutput ({ expences , expencesPeriod ,fallbackText}){

   let content = <Text style={styles.infoText}>{fallbackText}</Text>

   if( expences.length > 0){
       content = <ExpencesList expences={expences}/>
   }

    return(
        <View style={styles.container}>
         <ExpencesSummary  expences={expences} periodName={expencesPeriod}/>
         {content}
    </View>
    );
     

}
export default ExpencesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})