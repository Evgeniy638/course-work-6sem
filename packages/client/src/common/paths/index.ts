export const PAGE_LIST_THING = '/things';
export const PAGE_THING = '/things/:thingId';
export const PAGE_CREATE_THING = '/things/create';
export const PAGE_LOGIN = '/login';
export const PAGE_LOGOUT = '/logout';
export const PAGE_REGISTRATION = '/registration';

export const createLinkToThingPage = (thingId: string) => `${PAGE_LIST_THING}/${thingId}`;

export const parametrs = {
    SEARCH_QUERY_PARAMETR: 'search',
}
