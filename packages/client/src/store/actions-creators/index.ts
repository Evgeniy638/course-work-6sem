import * as listThings from './listThings';
import * as user from './user';
import * as review from './review';

const actionsCreators = {
    ...listThings,
    ...user,
    ...review,
};

export default actionsCreators;
