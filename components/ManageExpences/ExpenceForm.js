import { View ,StyleSheet ,Text} from "react-native";
import { useState } from "react";
import Input from "./Input";
import Button from "../Ui/Button";

function ExpenceForm({onCancel ,onSubmit ,submitButtonLabel}) {
  const [inputValue,setInputValue] = useState({
      amount : '',
      date: '',
      description: ''
  })
    function inputChangeHandler(InputIdentifier,enteredValue){
        setInputValue((curInputValues)=>{
            return{
                ...curInputValues,[InputIdentifier]: enteredValue
            }
        })
    }
    function submitHandler(){
        const expenceData = {
            amount : +inputValue.amount,
            date: new Date(inputValue.date),
            description: inputValue.description
        };
        onSubmit(expenceData);
    }

 return  <View style={styles.fullContainer}>
     <Text style={styles.title}>Your Expenses</Text>
     <View style={styles.container}>
     <Input
        style={styles.input} 
         Label="Amount"
         textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValue.amount,
      }}/>
      <Input 
        style={styles.input}
         Label="Date"
         textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValue.date,
      }}/>
     </View>
      
      <Input  Label="Description" 
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValue.description,
      }} />
      <View style={styles.Buttons}>
        <Button style={styles.Button} mode='flat' 
        onPress={onCancel}>Cancel</Button>
        <Button style={styles.Button}
         onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
     </View>
 
}
export default ExpenceForm;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1
    },
    fullContainer: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 24,
        textAlign: 'center'

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