import { getHeaders } from "../headers";

export interface LoginArgs {
    login: string;
    password: string;
}

interface LoginResult {
    token: string;
    user: {
        login: string;
        fullName: string;
        avatarSrc?: string;
    }
}

export const postLogin = async (args: LoginArgs): Promise<LoginResult> => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(args),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}
