import * as listThings from './listThings';
import * as user from './user';

const actionsCreators = {
    ...listThings,
    ...user,
};

export default actionsCreators;
