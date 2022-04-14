import { ActionListThings, ListThingsTypeActions, StateListThings, Thing } from './../types/typeListThings';

import macbook from './macbook.jpg';

const things = Object.keys([...new Array(20)]).map((id): Thing => ({
    id,
    title: `Вещь ${id}`.repeat(10),
    description: 'Балабоба временно не работает'.repeat(10),
    avatarSrc: macbook,
    rating: 3.5,
}));

const initialState: StateListThings = {
    loading: false,
    suggest: ['ааавтор', 'аааа'],
    things,
};

export const reducerListThings = (
    state: StateListThings = initialState,
    action: ActionListThings
): StateListThings => {
    switch (action.type) {
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
