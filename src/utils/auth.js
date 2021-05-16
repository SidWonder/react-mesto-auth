export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
    console.log(email, password);

    return  fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
    }).then((res) => res);
}



export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email  }),
}).then((res) => (res.ok ? res.json() : res));

export const getUserData = (token) => fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
}).then((res) => res);
