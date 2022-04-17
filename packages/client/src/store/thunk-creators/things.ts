import { changeThings } from './../actions-creators/listThings';
import { fetchThings } from './../../api';
import { Dispatch } from 'redux';

export const getThings = (title: string) => 
    async (dispatch: Dispatch<any>) => {
        console.log('getThings');
        const things = await fetchThings(title);
        dispatch(changeThings(things));
    };
