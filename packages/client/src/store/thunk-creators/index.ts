import * as login from './login';
import * as registration from './registration';
import * as things from './things';
import * as reviews from './reviews';

export const thunkCreators = {
    ...login,
    ...registration,
    ...things,
    ...reviews,
};
