import { useContext } from "react";
import ExpencesOutput from "../components/Expences/ExpencesOutput";
import { ExpencesContext } from "../store/Expences_context";
import { getDateMinusDays } from "../Util/date";

function RecentExpences (){
 const expenceCtx =   useContext(ExpencesContext)

 const recentExpences = expenceCtx.expences.filter((expence) =>{
     const today = new Date();
     const date7Daysago = getDateMinusDays(today, 7);

     return expence.date > date7Daysago;

 })
return <ExpencesOutput expences={recentExpences} expencesPeriod="Last 7 Days"/>
}
export default RecentExpences;