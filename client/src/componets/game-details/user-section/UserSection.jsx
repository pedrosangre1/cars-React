import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails"
import UserDelete from "./user-delete/UserDelete";

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getCarItems() {
            try {
                const response = await fetch(`${baseUrl}/caritems`);
                const result = await response.json();
               // console.log(result);
                const carItemResult = Object.values(result);
                setUsers(carItemResult);
                
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserSaveHandler = async (e) => {
        // prevent refresh
        e.preventDefault();

        // get user data
        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // make post request
        const response = await fetch(`${baseUrl}/carItems`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(userData),
        });
        const createdUser = await response.json();

        // update local state
        setUsers(oldUsers => [...oldUsers, createdUser]);

        // close modal
        setShowAddUser(false);
    }

    const userDetailsClickHandler = (carItemID) => {
        setShowUserDetailsById(carItemID);
    }

    const userDeleteClickHandler = (carItemID) => {
        setShowUserDeleteById(carItemID);
    }

    const userDeleteHandler = async (carItemID) => {
        // Delete request to server
        await fetch(`${baseUrl}/carItems/${carItemID}`, {
            method: 'DELETE',
        });

        // delete from local state
        setUsers(oldUsers => oldUsers.filter(user => user._id !== carItemID))

        // close modal
        setShowUserDeleteById(null);
    }

    return (
        <section className="card users-container">
            <Search />

            <UserList
                users={users}
                isLoading={isLoading}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSaveHandler}
                />
            )}

            {showUserDetailsById && (
                <UserDetails
                    user={users.find(user => user._id === showUserDetailsById)}
                    onClose={() => setShowUserDetailsById(null)}
                />
            )}

            {showUserDeleteById && (
                <UserDelete
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Добавяне на нов</button >

            <Pagination />
        </section >
    );
}
