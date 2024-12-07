import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export let updatingName = '';
export let updatingAge = '';
export let updatingCountry = '';
export let updatingID = '';
export default function HomePage () { 
    const [users, setUsers] = useState([]); 
    useEffect(() => {
        if (localStorage.length > 0) { 
            setUsers(JSON.parse(localStorage.getItem('users')));
        }
    }, [])
    const update = (ele) => { 
        updatingName = ele.name; 
        updatingAge = ele.age;
        updatingCountry = ele.country;
        updatingID = ele.id;
    }
    return ( 
        <div className="home mt-4">
            <div className="inner-home text-center">
                <Link to={'/user/create'} className="btn btn-success">Create New User</Link>
                <h1 className="mt-4 text-light">Current Users</h1>
                <table className="table table-striped mt-4">
                    <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Country</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? users.map((ele, i) => (
                                    <tr key={i}>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                        <td>{ele.country}</td>
                                        <td><Link to={'/user/update'} className="btn btn-outline-info" onClick={() => update(ele)}>Update</Link></td>
                                    </tr>
                            )) : ""}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}