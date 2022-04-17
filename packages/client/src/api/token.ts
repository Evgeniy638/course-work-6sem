const TOKEN_KEY_LOCAL_STORAGE = 'TOKEN_KEY_LOCAL_STORAGE';

export const getAuthorization = () => {
    const token = getToken();

    return token && `Bearer ${token}`;
}

export const getToken = (): string | undefined => {
    console.log('getToken');
    return localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE) || undefined;
};

export const setToken = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY_LOCAL_STORAGE, newToken);
}

export const removeToken = () => {
    console.log('removeToken');
    localStorage.removeItem(TOKEN_KEY_LOCAL_STORAGE);
}
