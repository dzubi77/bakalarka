export const THEME_API_URL = process.env.REACT_APP_BACKEND_URL + '/themes';
export const WORK_API_URL = process.env.REACT_APP_BACKEND_URL + '/works';

export const getAllThemes = async () => {
    const response = await fetch(`${THEME_API_URL}/all`, {
        method: "GET",
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch items: ${errorDetails.message || response.status}`);
    }
    return await response.json();
}

export const getThemeById = async (id) => {
    const response = await fetch(`${THEME_API_URL}/${id}`, {
        method: "GET",
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch items: ${errorDetails.message || response.status}`);
    }
    return await response.json();
}

//------------
export const getAllWorks = async () => {
    const response = await fetch(`${WORK_API_URL}/all`, {
        method: "GET",
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch items: ${errorDetails.message || response.status}`);
    }
    return await response.json();
}

export const getWorkById = async (id) => {
    const response = await fetch(`${WORK_API_URL}/${id}`, {
        method: "GET",
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Failed to fetch work: ${errorDetails.message || response.status}`);
    }
    return await response.json();
}