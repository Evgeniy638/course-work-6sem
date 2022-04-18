import { Thing } from './../../store/types/typeListThings';
import { getHeaders } from "../headers";

export const fetchThings = async (suggestTitle: string): Promise<Thing[]> => {
    const response = await fetch(`/api/things?title=${suggestTitle}`, {
        method: 'GET',
        headers: getHeaders(true),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const fetchThingById = async (thingId: string): Promise<Thing> => {
    const response = await fetch(`/api/things/${thingId}`, {
        method: 'GET',
        headers: getHeaders(true),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const deleteThingById = async (thingId: string): Promise<Thing> => {
    const response = await fetch(`/api/things/${thingId}`, {
        method: 'DELETE',
        headers: getHeaders(true),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export interface PostCreateThingArgs {
    title: string;
    description: string;
    avatarSrc?: string;
}

export const postCreateThing = async (newThing: PostCreateThingArgs): Promise<Thing> => {
    const response = await fetch(`/api/things`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(newThing),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}
