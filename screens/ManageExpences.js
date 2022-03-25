import {View, StyleSheet} from 'react-native';
import {useLayoutEffect,useContext} from 'react';
import IconButtons from '../components/Ui/IconButton';
import { GlobalStyles } from '../constants/styles';

import { ExpencesContext } from '../store/Expences_context';
import ExpenceForm from '../components/ManageExpences/ExpenceForm';


function ManageExpences ({route,navigation}){
    const editedExpenceId = route.params?.ExpenceId;
    const isEdited = !!editedExpenceId;

    const expenceCtx = useContext(ExpencesContext);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEdited ? 'Edit Expence' : 'Add Expence',
        }, [navigation, isEdited])
    })
    function expenceDeleteHandler(){
        expenceCtx.deleteExpences(editedExpenceId);
        navigation.goBack();
    };
    function cancelHandler(){
        
        navigation.goBack();
    };
    function confirmHandler(expenceData){
        if(isEdited){
            expenceCtx.updateExpences(editedExpenceId, expenceData);
        }else{
            expenceCtx.addExpences(expenceData);
        }
        navigation.goBack();
    }
return (
    <View style={styles.container}>
        <ExpenceForm  onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEdited? 'Update': 'Add'}/>
        
       
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
    
})