export default (state, action) => {
    switch(action.type) {

        case 'ADD_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
            
        case 'DELETE_CUSTOMER':
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            }

        case 'UPDATE_CUSTOMER':

            var customers = state.customers.map(u => u.id !== action.payload.id ? u : action.payload);
            return {
                ...state,
                customers
            }
        
        case 'SET_ACTIVE_CUSTOMER':
            return {
                ...state,
                activeCustomer: action.payload
            }

        default:
            return state;
    }
}