import React, { useEffect, useState } from "react";
import '../styles/thesis.css';
import { useParams, Link } from "react-router-dom";
import { getWorkById, getThemeById } from "../service/ThesisAPI";

//reprezentuje položku zo zoznamu záverečných prác
export const ThesisItem = ({ thesis, isFinished }) => {
    return (
        <div className="thesis-main-container"> 
            <div className="thesis-content-container">
                <div className="thesis-info-left-container">
                    <h4>
                        <Link to={isFinished ? `/finished_thesises/${thesis.id}` : `/thesises/${thesis.id}`}>
                            {thesis.titleSK} - {thesis.titleEN}
                        </Link>
                    </h4>
                    <p>Stupeň: {thesis.degree}</p>
                    {thesis.studyField && (
                        <p>Študijný odbor: {thesis.studyField}</p>
                    )}
                    <p>Popis práce: {thesis.description}</p>
                </div>
                <div className="thesis-info-right-container">
                    {thesis.leader && (
                        <p>
                            <strong>Vedúci:</strong> {thesis.leader.degree1 ?? ""} {thesis.leader.name} {thesis.leader.surname} {thesis.leader.degree2 ?? ""}
                        </p>
                    )}
                    {thesis.tutor && (
                        <p>
                            <strong>Tútor:</strong> {thesis.tutor.degree1 ?? ""} {thesis.tutor.name} {thesis.tutor.surname} {thesis.tutor.degree2 ?? ""}
                        </p>
                    )}
                    {!isFinished && (
                        <p><strong>Počet záujemcov o tému: </strong>{thesis.preferredBy.length}</p>
                    )}
                    {isFinished && (
                        <p><strong>Študent: </strong>
                            {thesis.student.name} {thesis.student.surname}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

//rperezentuje záverečnú prácu (po kliknutí na položku zo zoznamu prác)
export const GeneralThesis = ({ isFinished }) => {
    const { id } = useParams();
    const [thesis, setThesis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasInterest, setHasInterest] = useState(false);
    const [studentId, setStudentId] = useState(null); 
    const [interestCount, setInterestCount] = useState(0);

    const role = localStorage.getItem('role');
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = isFinished
                    ? await getWorkById(id)
                    : await getThemeById(id);
    
                setThesis(data);
                setInterestCount(data.preferredBy.length);
                setStudentId(user.id);
    
                const response = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/interests/has-interest?studentId=${user.id}&themeId=${id}`
                );
                const hasInterest = await response.json();
                setHasInterest(hasInterest);
            } catch (error) {
                console.error("Error fetching thesis:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [id, isFinished, user.id]);

    const handleAddInterest = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/interests?studentId=${studentId}&themeId=${thesis.id}`, {
                method: 'POST',
            });

            if (!response.ok) throw new Error('Failed to create interest');

            alert('Záujem o tému bol úspešne pridaný!');
            setHasInterest(true);
            setInterestCount(prevCount => prevCount + 1);
        } catch (error) {
            console.error('Error adding interest:', error);
            alert('Nepodarilo sa pridať záujem.');
        }
    };

    const handleRemoveInterest = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/interests?studentId=${studentId}&themeId=${thesis.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Failed to remove interest');

            alert('Záujem o tému bol zrušený.');
            setHasInterest(false);
            setInterestCount(prevCount => prevCount - 1);
        } catch (error) {
            console.error('Error removing interest:', error);
            alert('Nepodarilo sa zrušiť záujem.');
        }
    };

    if (loading) {
        return <div className="main-container">Loading...</div>;
    }

    return (
        <div className="main-container">
            <div className="content-container">
                <h5>Informácie o práci</h5>
                <div className="content-inner-container thesis-details">
                    <h4>{thesis.titleSK} - {thesis.titleEN}</h4>
                    <p><strong>Stupeň: </strong>{thesis.degree}</p>
                    <p><strong>Študijný odbor: </strong>{thesis.studyField}</p>
                    <p><strong>Popis práce: </strong>{thesis.description}</p>

                    {!isFinished && (
                        <p><strong>Počet záujemcov o tému: </strong>{interestCount}</p>
                    )}

                    {thesis.leader && (
                        <p><strong>Vedúci: </strong>
                            {thesis.leader.degree1} {thesis.leader.name} {thesis.leader.surname} {thesis.leader.degree2}
                        </p>
                    )}
                    {thesis.tutor && (
                        <p><strong>Tútor: </strong>
                            {thesis.tutor.degree1} {thesis.tutor.name} {thesis.tutor.surname} {thesis.tutor.degree2}
                        </p>
                    )}
                    {isFinished && thesis.student && (
                        <p><strong>Študent: </strong>
                            {thesis.studentName} {thesis.studentSurname}
                        </p>
                    )}
                    <div className="button-container">
                        {role === 'student' && !loading && (
                            <button
                                className={`btn ${hasInterest ? 'btn-danger' : 'btn-success'}`}
                                onClick={hasInterest ? handleRemoveInterest : handleAddInterest}
                            >
                                {hasInterest ? 'Zrušiť záujem o tému' : 'Mám záujem o tému'}
                            </button>
                        )}
                        <Link to={isFinished ? '/finished_thesises' : '/thesises'} className="btn btn-primary">Späť na zoznam...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};