import React, { useState, useEffect } from "react";
import '../styles/two_column_style.css'
import { ThesisItem } from "../components/Thesis";
import { PaginationPanel } from "../components/Pagination";
import { getAllThemes, getAllWorks } from "../service/ThesisAPI";

//funkcia pre vyfiltrovanie záverečných prác podľa filtrov
export const filterThesises = (data, filters) => {
    return data.filter(thesis => {
        const matchesTitle = thesis.titleSK?.toLowerCase().includes(filters.title.toLowerCase());
        const matchesTeacher = (
            (thesis.leader?.name + " " + thesis.leader?.surname).toLowerCase().includes(filters.teacherName.toLowerCase()) ||
            (thesis.tutor?.name + " " + thesis.tutor?.surname).toLowerCase().includes(filters.teacherName.toLowerCase())
        );
        const matchesContent = thesis.description?.toLowerCase().includes(filters.content.toLowerCase());
        const matchesStudent = filters.student ? (thesis.student?.name + " " + thesis.student?.surname).toLowerCase().includes(filters.student.toLowerCase()) : true;
        const matchesDegree = filters.degree ? thesis.degree?.toLowerCase() === filters.degree : true;
        const matchesDepartment = filters.department ? thesis.leader?.department?.toLowerCase() === filters.department : true;
        const matchesLanguage = filters.language === "sk"
            ? !!thesis.titleSK
            : filters.language === "en"
            ? !!thesis.titleEN
            : true;
        return matchesTitle && matchesTeacher && matchesContent && matchesStudent && matchesDegree && matchesDepartment && matchesLanguage;
    });
};

//reprezentuje filtračný panel
export const ThesisFilter = ({ isFinished, onFilter }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1260);
    const [filters, setFilters] = useState({
        title: "",
        teacherName: "",
        content: "",
        student: "",
        degree: "",
        department: "",
        status: "",
        language: "",
        perPage: 10,
        sortBy: "title",
        sortOrder: "asc"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1260);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="thesis-filter-container">
            {isSmallScreen && (
                <div className="filter-button-container">
                    <button 
                        className="btn btn-primary filter-toggle-btn my-btn" 
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
                                <td>Názov témy</td>
                                <td><input type="text" name="title" value={filters.title} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Meno vedúceho alebo tútora</td>
                                <td><input type="text" name="teacherName" value={filters.teacherName} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Predmet alebo obsah</td>
                                <td><input type="text" name="content" value={filters.content} onChange={handleChange} /></td>
                            </tr>
                            {isFinished && (
                                <tr>
                                    <td>Študent</td>
                                    <td><input type="text" name="student" value={filters.student} onChange={handleChange} /></td>
                                </tr>
                            )} 
                            <tr>
                                <td>Stupeň</td>
                                <td>
                                    <select name="degree" value={filters.degree} onChange={handleChange} className="select-filter">
                                        <option value=""></option>
                                        <option value="bc">Bakalár</option>
                                        <option value="ing">Inžinier</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Katedra</td>
                                <td>
                                    <select name="department" value={filters.department} onChange={handleChange} className="select-filter">
                                        <option value=""></option>
                                        <option value="kis">KIS</option>
                                        <option value="ki">KI</option>
                                        <option value="kmnt">KMNT</option>
                                        <option value="kmme">KMME</option>
                                        <option value="kmmoa">KMMOA</option>
                                        <option value="kst">KST</option>
                                        <option value="ktk">KTK</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Jazyk práce</td>
                                <td>
                                    <select name="language" value={filters.language} onChange={handleChange} className="select-filter">
                                        <option value="">--</option>
                                        <option value="sk">slovenský</option>
                                        <option value="en">anglický</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary my-btn" onClick={() => onFilter(filters)}>
                        Vyhľadaj témy
                    </button>
                </div>
            )}
        </div>
    );
};

//reprezentuje zoznam záverečných prác
export const ThesisList = ({ isFinished }) => {
    const [allTheses, setAllTheses] = useState([]);
    const [filteredTheses, setFilteredTheses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        const fetchTheses = async () => {
            const data = isFinished ? await getAllWorks() : await getAllThemes();
            setAllTheses(data);
            setFilteredTheses(data);
        };
        fetchTheses();
    }, [isFinished]);

    const goToPage = (page) => {
        if (page >= 1 && page <= Math.ceil(filteredTheses.length / perPage)) {
            setCurrentPage(page);
        }
    };

    const handleFilter = (filters) => {
        const results = filterThesises(allTheses, filters);
        setFilteredTheses(results);
        setPerPage(parseInt(filters.perPage));
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * perPage;
    const currentItems = filteredTheses.slice(startIndex, startIndex + perPage);

    return (
        <div className="main-container">
            <div className="filter-container">
                <ThesisFilter isFinished={isFinished} onFilter={handleFilter} />
            </div>
            <div className="list-container">
                <PaginationPanel
                    currentPage={currentPage}
                    goToPage={goToPage}
                    pageCount={Math.ceil(filteredTheses.length / perPage)}
                />
                {currentItems.map(thesis => (
                    <ThesisItem key={thesis.id} thesis={thesis} isFinished={isFinished} />
                ))}
                <PaginationPanel
                    currentPage={currentPage}
                    goToPage={goToPage}
                    pageCount={Math.ceil(filteredTheses.length / perPage)}
                />
            </div>
        </div>
    );
};