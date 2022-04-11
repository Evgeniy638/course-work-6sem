import { ActionListThings, ListThingsTypeActions, Thing } from './../types/typeListThings';

export const changeThings = (things: Thing[]): ActionListThings => {
    return {
        type: ListThingsTypeActions.CHANGE_THINGS,
        things,
    };
}

export const changeLoadingThings = (loading: boolean): ActionListThings => {
    return { type: ListThingsTypeActions.CHANGE_LOADING, loading };
}

export const changeSuggestThings = (suggest: string[]): ActionListThings => {
    return { type: ListThingsTypeActions.CHANGE_SUGGEST, suggest };
}
