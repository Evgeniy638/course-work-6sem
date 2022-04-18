export interface Thing {
    id: string;
    title: string;
    description: string;
    avatarSrc?: string;
    raiting?: number;
    creatorId: string;
}

export interface StateListThings {
    loading: boolean;
    suggest: string[];
    things: Thing[];
    currentThing?: Thing;
}

export enum ListThingsTypeActions {
    CHANGE_THINGS = "CHANGE_THINGS",
    CHANGE_LOADING = "CHANGE_LOADING",
    CHANGE_SUGGEST = "CHANGE_SUGGEST",
    CHANGE_CURRENT_THING = "CHANGE_CURRENT_THING",
    REMOVE_CURRENT_THING = "REMOVE_CURRENT_THING",
}

interface ChangeThings {
    type: ListThingsTypeActions.CHANGE_THINGS;
    things: Thing[];
}

interface ChangeCurrentThing {
    type: ListThingsTypeActions.CHANGE_CURRENT_THING;
    thing: Thing;
}

interface RemoveCurrentThing {
    type: ListThingsTypeActions.REMOVE_CURRENT_THING;
}

interface ChangeSuggest {
    type: ListThingsTypeActions.CHANGE_SUGGEST;
    suggest: string[];
}

interface ChangeLoading {
    type: ListThingsTypeActions.CHANGE_LOADING;
    loading: boolean;
}

export type ActionListThings = ChangeThings |
    ChangeLoading |
    ChangeSuggest |
    ChangeCurrentThing |
    RemoveCurrentThing;
