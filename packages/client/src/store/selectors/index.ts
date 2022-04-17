import * as listThingsSelectors from "./listThingsSelectors";
import * as userSelectors from "./userSelectors";

export const selectors = {
    ...listThingsSelectors,
    ...userSelectors,
}
