import { useParams } from "react-router-dom";
import { useGetOneCars } from "../../../hooks/useGames";
import { useForm } from "../../../hooks/useForm";
import {useCreateCarItems, useGetAllCarItems } from "../../../hooks/useCarItems";

import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails"
import UserDelete from "./user-delete/UserDelete";
import { useAuthContext } from "../../../contexts/authContext";
//import styles from '../UserSection.module.css'; 

// const baseUrl = 'http://localhost:3030/jsonstore';

const initialValues = {
carsItem: '',

}

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setShowUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {isAuthenticated} = useAuthContext();
    const {carsId} = useParams();
   const[carItems, setCarItems] = useGetAllCarItems(carsId)
    const createCarItem = useCreateCarItems();
    const[cars] = useGetOneCars(carsId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, ({ carsItem }) => {
       createCarItem(carsId, carsItem);
    });

    // useEffect(() => {
    //     (async function getCarItems() {
    //         try {
    //             const response = await fetch(`${baseUrl}/caritems`);
    //             const result = await response.json();
    //            // console.log(result);
    //             const carItemResult = Object.values(result);
    //             setUsers(carItemResult);
                
    //         } catch (error) {
    //             alert(error.message);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);

    // const addUserClickHandler = () => {
    //      setShowAddUser(true);
    //  }

    // const addUserCloseHandler = () => {
    //     setShowAddUser(false);
    // }

    // const addUserSaveHandler = async (e) => {
    //     // prevent refresh
    //     e.preventDefault();

    //     // get user data
    //     const formData = new FormData(e.currentTarget);
    //     const userData = {
    //         ...Object.fromEntries(formData),
    //         createdAt: new Date().toISOString(),
    //         updatedAt: new Date().toISOString(),
    //     };

        // make post request
        // const response = await fetch(`${baseUrl}/carItems`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json',},
        //     body: JSON.stringify(userData),
        // });
        // const createdUser = await response.json();

        // update local state
 //       setUsers(oldUsers => [...oldUsers, createdUser]);

        // close modal
//         setShowAddUser(false);
//   //  }

//     const userDetailsClickHandler = (carItemID) => {
//         setShowUserDetailsById(carItemID);
//     }

//     const userDeleteClickHandler = (carItemID) => {
//         setShowUserDeleteById(carItemID);
//     }

    // const userDeleteHandler = async (carItemID) => {
    //     // Delete request to server
    //     await fetch(`${baseUrl}/carItems/${carItemID}`, {
    //         method: 'DELETE',
    //     });

    //     // delete from local state
    //     setUsers(oldUsers => oldUsers.filter(user => user._id !== carItemID))

        // close modal
    //    setShowUserDeleteById(null);
    //}

    return (
<section className="card users-container">
            {/* <Search /> */}
    <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
            {carItems.map(carItems => (
                    <li key = {carItems._id} className="comment">
                        <p>Username: {carItems.text}</p>
                </li>
           ))
           }
        </ul>
             {/* <!-- Display paragraph: If there are no games in the database -->  */}
                <p className="no-comment">No comments.</p>
            </div>

{isAuthenticated && (
     <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={submitHandler}>
                <textarea 
                    name="carsItem" 
                    placeholder="Comment......"
                    onChange={changeHandler}
                    value={values.carsItem} 
                ></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
     </article>)}
            {/* <UserList
                users={carsItem}
                isLoading={isLoading}
                // onUserDetailsClick={userDetailsClickHandler}
                // onUserDeleteClick={userDeleteClickHandler}
            /> */}
{/* 
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
            )} */}

            {/* <button className="btn-add btn" onClick={submitHandler}>Добавяне на нов</button > */}
            {/* addUserClickHandler */}
            {/* <Pagination /> */}
        </section >
    );
}
