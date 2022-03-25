import { createContext, useReducer} from 'react';

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
    },
    {
        id : 'e6',
        description : 'Smart watch',
        amount : 14999.99,
        date : new Date('2022-03-24')
    },
    {
        id : 'e7',
        description : 'Headphone for laptop',
        amount : 1999.99,
        date : new Date('2022-03-23')
    },
    {
        id : 'e8',
        description : 'Sun glass',
        amount : 3499.99,
        date : new Date('2022-03-19')
    },
];

export const ExpencesContext = createContext({
    expences : [],
    addExpences: () =>{},
    deleteExpences: () => {},
    updateExpences: () => {}
})

function expenceReducer (state, action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload,id : id},...state];
        case 'UPDATE':
            const updatableExpenceIndex = state.findIndex(
                (expence) => expence.id === action.payload.id);
                const updatableExpence = state[updatableExpenceIndex];
                const updatedItems = { ...updatableExpence,...action.payload.data};
                const updatedExpence = [...state];
                updatedExpence[updatableExpenceIndex]= updatedItems;
                return updatedExpence;
        case 'DELETE':
             return state.filter((expence)=>expence.id !== action.payload);
        default:
            return state;            
    }
}

function ExpencesContextProvider ({children}){
    const [expenceState , dispatch] = useReducer(expenceReducer, DUMMY_EXPENCES);

    function addExpences({expenceData}) {
        dispatch({type: 'ADD', payload: expenceData});
    }
    function deleteExpences({id}) {
        dispatch({type : 'DELETE', payload: id})
    }
    function updateExpences({id , expenceData})  {
        dispatch({type : 'UPDATE', payload:{id :id ,data: expenceData}})
    }  
      
    
    const value = {
        expences : expenceState,
        addExpences: addExpences,
        deleteExpences: deleteExpences,
        updateExpences: updateExpences
    };

    return <ExpencesContext.Provider value={value}>{children}</ExpencesContext.Provider>
}
export default ExpencesContextProvider;