import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// Initial state (customers would need to be loaded from the DB source)
const initialState = {
    activeCustomer: { id: -1, firstName: '', lastName: '', email: ''},
    customers: [
        { id: 0, firstName: 'Dave', lastName: 'Norton', email: 'dave@whatever.com' },
        { id: 1, firstName: 'Joe', lastName: 'Smith', email: 'joe@whatever.com' },
    ]
}

// Create context:
export const GlobalContext = createContext(initialState);

// Provider component:
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // global actions (calls to reducer):
    const deleteCustomerAction = (id) => {
        dispatch({
            type: 'DELETE_CUSTOMER',
            payload: id
        })
    }

    const addCustomerAction = (customer) => {
        dispatch({
            type: 'ADD_CUSTOMER',
            payload: customer
        })
    }

    const updateCustomerAction = (customer) => {
        dispatch({
            type: 'UPDATE_CUSTOMER',
            payload: customer
        })
    }

    const setActiveCustomer = (customer) => {
        dispatch({
            type: 'SET_ACTIVE_CUSTOMER',
            payload: customer
        })
    }

    return (<GlobalContext.Provider value={{
        customers: state.customers,
        activeCustomer: state.activeCustomer,
        deleteCustomerAction,
        addCustomerAction,
        updateCustomerAction,
        setActiveCustomer
    }}>
        {children}
    </GlobalContext.Provider>);
}