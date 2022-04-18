import * as login from './login';
import * as registration from './registration';
import * as things from './things';

export const thunkCreators = {
    ...login,
    ...registration,
    ...things,
};
