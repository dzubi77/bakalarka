import React, { useState, useEffect } from "react";
import '../styles/two_column_style.css'
import { PaginationPanel } from "../components/Pagination";
import { getAllUsers } from "../service/UserAPI";
import { UserMenuItem } from "../components/UserItem";

//funkcia pre vyfiltrovanie používateľov na základe filtrov
export const filterUsers = (users, filters) => {
    return users
        .filter((user) =>
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            (filters.id === '' || user.id.toString().includes(filters.id)) &&
            (filters.role === 'all_users' || user.role === filters.role) &&
            (filters.status === 'all' || user.status === filters.status)
        )
        .sort((a, b) => {
            const fieldA = a[filters.sortBy]?.toString().toLowerCase() || '';
            const fieldB = b[filters.sortBy]?.toString().toLowerCase() || '';
            if (fieldA < fieldB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (fieldA > fieldB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
};
 
//reprezentuje panel pre filtráciu používateľov
export const UserFilter = ({ onFilter }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

    const [filters, setFilters] = useState({
        name: '',
        id: '',
        role: 'all_users',
        status: 'current',
        perPage: 10,
        sortBy: 'name',
        sortOrder: 'asc'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleFilter = () => {
        if (filters.name === '' && filters.id === '' && filters.role === 'all_users' && filters.status === 'current') {
            onFilter({
                ...filters,
                sortBy: 'name', 
                sortOrder: 'asc',
            });
        } else {
            onFilter(filters);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="thesis-filter-container">
            {isSmallScreen && (
                <div className="filter-button-container">
                    <button 
                        className="btn btn-primary filter-toggle-btn" 
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? "Zavrieť filtre" : "Filtre"}
                    </button>
                </div>
            )}

            {(showFilters || !isSmallScreen) && (
                <div className="filter-content-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>Meno osoby</td>
                                <td><input type="text" name="name" value={filters.name} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>ID osoby</td>
                                <td><input type="text" name="id" value={filters.id} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Typ osoby</td>
                                <td>
                                    <select name="role" value={filters.role} className="select-filter" onChange={handleChange}>
                                        <option value="all_users">Všetci</option>
                                        <option value="teacher">Učiteľ</option>
                                        <option value="student">Študent</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Stav</td>
                                <td>
                                    <select name="status" value={filters.status} className="select-filter" onChange={handleChange}>
                                        <option value="current">Aktuálny</option>
                                        <option value="finished">Ukončený</option>
                                        <option value="all">Všetci</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Počet tém na stránku</td>
                                <td>
                                    <select name="perPage" value={filters.perPage} className="select-filter" onChange={handleChange}>
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={30}>30</option>
                                        <option value={40}>40</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Trieď podľa</td>
                                <td>
                                    <select name="sortBy" value={filters.sortBy} className="my-select select-filter" onChange={handleChange}>
                                        <option value="name">mena</option>
                                        <option value="group">katedry/skupiny</option>
                                        <option value="degree">odboru</option>
                                    </select>
                                    <select name="sortOrder" value={filters.sortOrder} className="select-filter" onChange={handleChange}>
                                        <option value="asc">vzostupne</option>
                                        <option value="desc">zostupne</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary my-btn" onClick={handleFilter}>
                        Vyhľadaj používateľov
                    </button>
                </div>
            )}
        </div>
    );
};


//reprezentuje stránku so zoznamom používateľov
export const UserList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [perPage, setPerPage] = useState(10); 

    useEffect(() => {
        const fetchUsers = async () => {
            const usersFromServer = await getAllUsers();
            setAllUsers(usersFromServer);
            setFilteredUsers(usersFromServer);
        };
        fetchUsers();
    }, []);

    const handleFilter = (filters) => {
        const result = filterUsers(allUsers, filters);
        setFilteredUsers(result);
        setPerPage(Number(filters.perPage)); 
        setCurrentPage(1); 
    };

    const pageCount = Math.ceil(filteredUsers.length / perPage); 

    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    return (
        <div className="main-container">
            <div className="filter-container">
                <UserFilter onFilter={handleFilter} />
            </div>
            <div className="list-container">
                <PaginationPanel currentPage={currentPage} goToPage={setCurrentPage} pageCount={pageCount} />
                <ul className="list-items-container">
                    {paginatedUsers.map((user) => (
                        <UserMenuItem key={user.id} user={user} />
                    ))}
                </ul>
                <PaginationPanel currentPage={currentPage} goToPage={setCurrentPage} pageCount={pageCount} />
            </div>
        </div>
    );
};
