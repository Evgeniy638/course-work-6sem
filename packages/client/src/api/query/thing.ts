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
