import { useMemo } from "react"
import { useLocation } from "react-router";

export const useUrlSearchParams = () => {
    const location = useLocation();

    return useMemo(() => 
        new URLSearchParams(location.search), 
        [location.search],
    )
}