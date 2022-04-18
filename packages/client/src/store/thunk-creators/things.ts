import { changeThings, changeCurrentThing, removeCurrentThing } from './../actions-creators/listThings';
import { fetchThings, fetchThingById, deleteThingById } from './../../api';
import { Dispatch } from 'redux';

export const getThings = (title: string) => 
    async (dispatch: Dispatch<any>) => {
        const things = await fetchThings(title);
        dispatch(changeThings(things));
    };

export const getThingById = (thingId: string) => 
    async (dispatch: Dispatch<any>) => {
        const things = await fetchThingById(thingId);
        dispatch(changeCurrentThing(things));
    };

export const removeThingById = (thingId: string) => 
    async (dispatch: Dispatch<any>) => {
        await deleteThingById(thingId);
        dispatch(removeCurrentThing());
    };
