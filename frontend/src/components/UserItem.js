import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/user.css';
import { getUserById } from "../service/UserAPI";

//reprezentuje položku zo zoznamu používateľov
export const UserMenuItem = ({ user }) => {
    return (
        <div className="user-menu-item">
            <div className="user-menu-name">
                <Link to={`/users/${user.id}`}>
                    <strong>
                        {user.degree1 ? `${user.degree1} ` : ''}
                        {user.name} {user.surname}
                        {user.degree2 ? `, ${ user.degree2}` : ''}
                    </strong>
                </Link>
            </div>
        </div>
    );
};

//reprezentuje používateľa (po kliknutí na položku zo zoznamu)
export const UserItem = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserById(userId);
                setUser(data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-item">
            <div className="user-details">
                {user.userType === 'TEACHER' && (
                    <>
                        <div className="user-name">
                            <strong>{user.degree1} {user.name} {user.surname}, {user.degree2}</strong>
                        </div>
                        <div className="teacher-details">
                            <p><strong>Department: </strong>{user.department}</p>
                        </div>
                    </>
                )}
                {user.userType === 'STUDENT' && (
                    <>
                        <div className="user-name">
                            <strong>{user.name} {user.surname}</strong>
                        </div>
                        <div className="student-details">
                            <p><strong>Year of Study: </strong>{user.yearOfStudy}</p>
                            <p><strong>Study Group: </strong>{user.studyGroup}</p>
                            <p><strong>Study Field: </strong>{user.studyField}</p>
                        </div>
                    </>
                )}
                {user.userType === 'EXTERN' && (
                    <>
                        <div className="user-name">
                            <strong>{user.degree1} {user.name} {user.surname} {user.degree2 ? user.degree2 : ""}</strong>
                        </div>
                        <div className="teacher-details">
                            <p><strong>Firma: </strong>{user.companyName}</p>
                            <p><strong>Adresa: </strong>{user.address}</p>
                        </div>
                    </>
                )}
                <Link to="/users" className="btn btn-primary">Back...</Link>
            </div>
        </div>
    );
};