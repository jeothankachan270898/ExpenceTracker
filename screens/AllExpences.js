import { useContext } from "react";
import ExpencesOutput from "../components/Expences/ExpencesOutput";
import { ExpencesContext } from "../store/Expences_context";

function AllExpences (){
   const expenceCtx = useContext(ExpencesContext)
return <ExpencesOutput expences={expenceCtx.expences} expencesPeriod="Total"/>
}
export default AllExpences;