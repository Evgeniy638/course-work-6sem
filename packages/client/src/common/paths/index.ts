export const PAGE_LIST_THING = '/things';
export const PAGE_CREATE_THING = '/things/create';

export const createLinkToThingPage = (thingId: string) => `${PAGE_LIST_THING}/${thingId}`;
