import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    return (
        <>
            <TableHead>
                <th>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </th>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <TableCell></TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" >Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </tr>
                ))}
            </TableBody>
        </>
    )
}

export default AllUsers;