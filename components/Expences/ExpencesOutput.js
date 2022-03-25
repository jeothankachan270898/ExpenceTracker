import { View ,StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummury';

  

function ExpencesOutput ({ expences , expencesPeriod}){
    return(
        <View style={styles.container}>
         <ExpencesSummary  expences={expences} periodName={expencesPeriod}/>
         <ExpencesList expences={expences}/>
    </View>
    );
     

}
export default ExpencesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})