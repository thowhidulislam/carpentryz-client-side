import axios from 'axios';
import React from 'react';

const UserRow = ({ user, index, refetch }) => {
    const { name, email, mobileNumber, role, address } = user

    const makeAdmin = () => {
        axios.put(`http://localhost:5000/user/admin/${email}`).then(function (response) {
            console.log(response)
            refetch()
        })
    }

    const removeUser = () => {
        axios.delete(`http://localhost:5000/admin/delete/${email}`).then(function (response) {
            console.log(response)
            refetch()
        })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobileNumber}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white">Make Admin</button>}</td>
            <td>{<button onClick={removeUser} class="btn btn-xs btn-primary text-black hover:btn-secondary hover:text-white">Remove User</button>}</td>
        </tr>
    );
};

export default UserRow;