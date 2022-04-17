import { getToken } from "../api";
import { selectors, useTypedSelector } from "../store";

export const useIsAuth = () => {
    const user = useTypedSelector(selectors.selectUser);
    return !!getToken() && !!user;
}
