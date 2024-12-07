import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updatingName, updatingAge, updatingCountry, updatingID } from "./HomePage";
export default function UpdateUser() { 
    const [newName, setNewName] = useState(updatingName);
    const [newAge, setNewAge] = useState(updatingAge);
    const [newCountry, setNewCountry] = useState(updatingCountry);
    const navigate = useNavigate();
    const handleForm = (e) => { 
        e.preventDefault();
        let usersData = JSON.parse(localStorage.getItem('users'));
        localStorage.removeItem('users');
        for (let i = 0; i < usersData.length; i ++) { 
            if (usersData[i].id === updatingID) { 
                    console.log(usersData[i]);
                    usersData[i].name = newName;
                    usersData[i].age = newAge;
                    usersData[i].country = newCountry;
                    localStorage.setItem('users', JSON.stringify(usersData)); 
                    console.log(JSON.parse(localStorage.getItem('users'))[i]);
                }
        }
        navigate('/');
    }
    return (
        <div>
        <h2 className="text-center">Update Existing User</h2>
        <form className="text-center" onSubmit={handleForm}>
            <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <input type="number" placeholder="Age" value={newAge} onChange={(e) => setNewAge(e.target.value)}/>
            <input type="text" placeholder="Country" value={newCountry} onChange={(e) => setNewCountry(e.target.value)}/>
            <div>
                <button type="submit" className="btn btn-success me-2">Update</button>
                <Link to={'/'} className="btn btn-danger ms-2 route-btn">Back</Link>
            </div>
        </form>
    </div>
    )
}