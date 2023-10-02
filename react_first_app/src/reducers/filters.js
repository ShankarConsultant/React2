
const defaultFilterReducerState = { text:'', sortBy:'date', startDate: undefined, endDate: undefined}
export const filterReducers = (state = defaultFilterReducerState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':                                                              // return state.concat(action.expense)
            return {...state, text: action.text};
        case 'SORT_BY_DATE':                                                                 // return state.concat(action.expense)
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':                                                              // return state.concat(action.expense)
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};