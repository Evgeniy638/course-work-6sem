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
