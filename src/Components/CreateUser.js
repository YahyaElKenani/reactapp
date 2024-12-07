import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CreateUser() { 
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [users, setUsers] = useState([]); 


    useEffect(() => {
        if (localStorage.length > 0) { 
            setUsers(JSON.parse(localStorage.getItem('users')));
        }
    }, [])
    const handleForm = (e) => { 
                    e.preventDefault(); 
                    if (!name || !age || !country) {
                        alert("Please fill out all fields.");
                        return;
                    }
                    const user = { 
                        'id': users.length + 1,
                        'name': name,
                        'age': age,
                        'country': country
                    }
                    setUsers([...users, user]); 
                    console.log([...users, user]);
                    localStorage.setItem('users', JSON.stringify([...users, user]));
                    clearInputs();
    }

    function clearInputs() { 
        setName('');
        setAge('');
        setCountry('');
    }


    return (
        <div>
            <h2 className="text-center">Create New User</h2>
            <form className="text-center" onSubmit={handleForm}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                <div>
                    <button type="submit" className="btn btn-success me-2">Submit</button>
                    <Link to={'/'} className="btn btn-danger ms-2 route-btn">Back</Link>
                </div>
            </form>
        </div>
    )
}