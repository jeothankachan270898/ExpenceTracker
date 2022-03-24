import {View, StyleSheet} from 'react-native';
import {useLayoutEffect} from 'react';
import IconButtons from '../components/Ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/Ui/Button';


function ManageExpences ({route,navigation}){
    const editedExpenceId = route.params?.ExpenceId;
    const isEdited = !!editedExpenceId;

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEdited ? 'Edit Expence' : 'Add Expence',
        }, [navigation, isEdited])
    })
    function expenceDeleteHandler(){
        navigation.goBack();
    };
    function cancelHandler(){
        navigation.goBack();
    };
    function confirmHandler(){
        navigation.goBack();
    }
return (
    <View style={styles.container}>
        <View style={styles.Buttons}>
        <Button style={styles.Button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.Button} onPress={confirmHandler}>{isEdited? 'Update': 'Add'}</Button>
        </View>
       
        {isEdited && (
        <View style={styles.deleteContainer}>
            <IconButtons  
             icon='trash'
             color={GlobalStyles.colors.error500}
             size={36}
             onPress={expenceDeleteHandler}
             />
            </View>
            )   
        }
    </View>
);
}
export default ManageExpences;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    Buttons : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button : {
        minWidth: 120,
        marginHorizontal: 8
    }
})