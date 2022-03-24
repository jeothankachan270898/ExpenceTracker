import { View ,StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummury';

    const DUMMY_EXPENCES = [
        {
            id : 'e1',
            description : 'A pair of shoes',
            amount : 1499.99,
            date : new Date('2021-12-19')
        },
        {
            id : 'e2',
            description : '2 Shirts',
            amount : 999.99,
            date : new Date('2021-12-26')
        },
        {
            id : 'e3',
            description : 'A gaming laptop',
            amount : 79999.99,
            date : new Date('2022-01-15')
        },
        {
            id : 'e4',
            description : 'Headphone for laptop',
            amount : 1999.99,
            date : new Date('2022-01-23')
        },
        {
            id : 'e5',
            description : 'Sun glass',
            amount : 3499.99,
            date : new Date('2022-02-19')
        }
    ];

function ExpencesOutput ({ expences , expencesPeriod}){
    return(
        <View style={styles.container}>
         <ExpencesSummary  expences={DUMMY_EXPENCES} periodName={expencesPeriod}/>
         <ExpencesList expences={DUMMY_EXPENCES}/>
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