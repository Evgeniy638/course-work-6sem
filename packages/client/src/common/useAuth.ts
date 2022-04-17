import { getToken } from "../api";
import { selectors, useTypedSelector } from "../store";

export const useAuth = () => {
    const user = useTypedSelector(selectors.selectUser);
    return !!getToken() && !!user;
}
