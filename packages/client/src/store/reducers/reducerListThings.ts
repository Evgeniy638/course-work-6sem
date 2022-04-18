import { ActionListThings, ListThingsTypeActions, StateListThings } from './../types/typeListThings';

const initialState: StateListThings = {
    loading: false,
    suggest: ['ааавтор', 'аааа'],
    things: [],
};

export const reducerListThings = (
    state: StateListThings = initialState,
    action: ActionListThings
): StateListThings => {
    switch (action.type) {
        case ListThingsTypeActions.CHANGE_CURRENT_THING:
            return {
                ...state,
                currentThing: action.thing,
            };
        
        case ListThingsTypeActions.REMOVE_CURRENT_THING:
                return {
                    ...state,
                    currentThing: undefined,
                };

        case ListThingsTypeActions.CHANGE_THINGS:
            return {
                ...state,
                things: action.things,
            };
        
        case ListThingsTypeActions.CHANGE_SUGGEST:
            return {
                ...state,
                suggest: action.suggest,
            };

        case ListThingsTypeActions.CHANGE_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
    
        default:
            return state;
    }
}
