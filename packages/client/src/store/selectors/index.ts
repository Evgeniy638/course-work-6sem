import * as listThingsSelectors from "./listThingsSelectors";
import * as userSelectors from "./userSelectors";
import * as reviewSelectors from "./reviewSelectors";

export const selectors = {
    ...listThingsSelectors,
    ...userSelectors,
    ...reviewSelectors,
}
