export const USER_API_URL = process.env.REACT_APP_BACKEND_URL + '/users';

export const getAllUsers = async () => {
    const response = await fetch(`${USER_API_URL}/all`, {
        method: "GET",
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch users: ${errorDetails.message || response.status}`);
    }
    return await response.json();
}

export const getUserById = async (id) => {
    const response = await fetch(`${USER_API_URL}/${id}`, {
        method: "GET",
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch items: ${errorDetails.message || response.status}`);
    }
    return await response.json();
}