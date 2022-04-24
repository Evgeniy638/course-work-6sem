import { postCreateThing, PostCreateThingArgs } from './../../api/query/thing';
import { changeThings, changeCurrentThing, removeCurrentThing, removeThingByModerator } from './../actions-creators/listThings';
import { fetchThings, fetchThingById, deleteThingById } from './../../api';
import { Dispatch } from 'redux';
import { Thing } from '../types/typeListThings';

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

export const removeThingByIdByModerator = (thingId: string) => 
    async (dispatch: Dispatch<any>) => {
        await deleteThingById(thingId);
        dispatch(removeThingByModerator(thingId));
    };

export const createThing = (
    thingArgs: PostCreateThingArgs,
    onSuccess: (newThing: Thing) => void,
) => 
    async (dispatch: Dispatch<any>) => {
        const thing = await postCreateThing(thingArgs);

        onSuccess(thing);
    };
