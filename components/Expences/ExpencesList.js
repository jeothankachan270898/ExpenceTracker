import { FlatList ,Text} from "react-native";
import ExpenceItem from "./ExpenceItem";

function renderExpenceItem(itemData){
    return <ExpenceItem {...itemData.item}/>
}

function ExpencesList ({expences}){
    return <FlatList data={expences} 
    renderItem={renderExpenceItem}
    keyExtractor={(item)=>item.id}/>

}
export default ExpencesList;