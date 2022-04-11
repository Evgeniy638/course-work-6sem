export interface Thing {
    title: string;
    description?: string;
    avatarSrc?: string;
    rating?: number;
}

export interface StateListThings {
    loading: boolean;
    suggest: string[];
    things: Thing[];
}

export enum ListThingsTypeActions {
    CHANGE_THINGS = "CHANGE_THINGS",
    CHANGE_LOADING = "CHANGE_LOADING",
    CHANGE_SUGGEST = "CHANGE_SUGGEST",
}

interface ChangeThings {
    type: ListThingsTypeActions.CHANGE_THINGS;
    things: Thing[];
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
    ChangeSuggest;
