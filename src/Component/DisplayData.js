import React,{useState} from 'react'
import "../displayData.css"
import {Button} from "react-bootstrap";

export default function DisplayData() {
    const [users,setUsers] = useState([]); 
    const add = () =>{
        if(document.getElementById('name').value!==""){
            var user = {
                Sr:users.length+1,
                name:document.getElementById('name').value,
                password:document.getElementById('password').value,
                email:document.getElementById('email').value
            };
            setUsers(users.concat(user));
            document.getElementById('name').value = "";
            document.getElementById('password').value = "";
            document.getElementById('email').value = "";
    
            // console.log(users);
        }
        else{
            alert('Enter the values');
        }
    };
    return (
        <div className="box">
        <h1>React Dynamic Table</h1>
            <div className="userdata">
                UserName:
                <input type="text" id="name"/>
                Password:
                <input typr="password" id="password"/>
                Email-ID:
                <input type="text" id="email"/>
                <Button onClick={add}>Add User</Button>
            </div>
            <table>
            <tbody>
            <tr>
                    <th>SNo.</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email-ID</th>
                </tr>
                
                {users.map((user)=>{
                    return (
                        <tr>
                            <td>{user.Sr}</td>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                        </tr>
                    );
                })}
            </tbody> 
            </table>
        </div>
    );
}
