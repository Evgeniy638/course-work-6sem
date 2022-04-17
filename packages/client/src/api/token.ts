let token: string | undefined;

const TOKEN_KEY_LOCAL_STORAGE = 'TOKEN_KEY_LOCAL_STORAGE';

export const getAuthorization = () => {
    const token = getToken();

    return token && `Bearer ${token}`;
}

export const getToken = (): string | undefined => {
    if (!token) {
        const tokenFromStorage = localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE);

        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        }
    }

    return token;
};

export const setToken = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY_LOCAL_STORAGE, newToken);
    token = newToken;
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY_LOCAL_STORAGE);
    token = undefined;
}
