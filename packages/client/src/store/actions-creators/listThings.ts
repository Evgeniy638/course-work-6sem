import { ActionListThings, ListThingsTypeActions, Thing } from './../types/typeListThings';

export const changeThings = (things: Thing[]): ActionListThings => {
    return {
        type: ListThingsTypeActions.CHANGE_THINGS,
        things,
    };
}

export const changeCurrentThing = (thing: Thing): ActionListThings => {
    return {
        type: ListThingsTypeActions.CHANGE_CURRENT_THING,
        thing,
    };
}

export const removeCurrentThing = (): ActionListThings => {
    return {
        type: ListThingsTypeActions.REMOVE_CURRENT_THING,
    };
}

export const removeThingByModerator = (thingId: string): ActionListThings => {
    return {
        type: ListThingsTypeActions.REMOVE_BY_MODERATOR,
        thingId,
    };
}

export const changeLoadingThings = (loading: boolean): ActionListThings => {
    return { type: ListThingsTypeActions.CHANGE_LOADING, loading };
}

export const changeSuggestThings = (suggest: string[]): ActionListThings => {
    return { type: ListThingsTypeActions.CHANGE_SUGGEST, suggest };
}
