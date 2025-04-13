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
//carsItem: '',
userDate: '',
//carsKilometers: '',
//carsDescription: '',
//actionsPerformed: '',

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
    } = useForm(initialValues, async ({ carsItem }) => {
        try{
      const newCarsItems = await createCarItem(carsId, values);

      setCarItems(oldCarsItems => [...oldCarsItems, newCarsItems]);
        } catch (err){
            console.log(err.message);
        }
    });

    return (
<section className="card users-container">
            {/* <Search /> */}
    <div className="text">
    <table>
  <tr>
    <th>Потребител</th>
    <th>Дата</th>
    <th>Километри</th>
    <th>Описание</th>
    <th>Действия</th>
  </tr>
  {carItems.map(carItems => (
  <tr>
    <td>{carItems.author.username}</td>
    <td>{carItems.carsItems.userDate}</td>
    <td>{carItems.carsItems.kilometers}</td>
    <td>{carItems.carsItems.Description}</td>
    <td>{carItems.carsItems.actionsPerformed}</td>
  </tr>
    ))
}
  </table>
       {/* <ul>

             {carItems.map(carItems => (
                <li key = {carItems._id} className="comment">
                        <p>{carItems.author.username}: {carItems.carsItems.userDate} | {carItems.carsItems.kilometers} | {carItems.carsItems.Description} | {carItems.carsItems.actionsPerformed} |</p>
                </li>
           ))
           }
        </ul> */}
             {carItems.length === 0 && <p className="no-comment">.</p>}
            </div>

{isAuthenticated && (
     <article className="create-comment">
            <label>Добаване:</label>
            <form className="form" onSubmit={submitHandler}>
            <label htmlFor="userDate">ДАТА:</label>
            <input type="date" id="userDate" name="userDate"onChange={changeHandler} value={values.userDate}/>
            <label htmlFor="kilometers">КИЛОМЕТРИ:</label>
            <input type="text" id="kilometers" name="kilometers"onChange={changeHandler} value={values.carsKilometers}/>
            <label htmlFor="Description">Описание:</label>
            <input type="text" id="Description" name="Description"onChange={changeHandler} value={values.carsDescription}/>
            <label htmlFor="actionsPerformed">Извършени действия:</label>
            <input type="text" id="actionsPerformed" name="actionsPerformed"onChange={changeHandler} value={values.actionsPerformed}/>

                <input className="btn submit" type="submit" value="Добави"/>
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
