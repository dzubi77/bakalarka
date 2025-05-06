import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (formData) => {
        const { username, password } = formData;

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            });
        
            if (response.ok) {
                setError('');
                const data = await response.json();
                const role = data.userType;
                const userData = data;     
        
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('role', role);
                setUser(userData);
                navigate('/my_profile');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Prihlásenie zlyhalo!');
            }
        } catch (error) {
            setError('Nesprávne prihlasovacie údaje!');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, error }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
