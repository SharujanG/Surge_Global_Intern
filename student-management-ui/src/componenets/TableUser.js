import React, {useStae, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@material-ui/core';






const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(firstName, lastName,email, dateOfBirth,mobile,status,accountType, password) {
  return { firstName, lastName,email, dateOfBirth,mobile,status,accountType, password};
}



 function TableUser(props) {
  const classes = useStyles();
  const {users,onDelete,onUpdate} = props;


  return (

    // create table
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>firstName</TableCell>
            <TableCell>lastName</TableCell>
            <TableCell>email</TableCell>
            <TableCell>dateOfBirth</TableCell>
            <TableCell>mobile</TableCell>
            <TableCell>status</TableCell>
            <TableCell>accountType</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row._id} selectable={false}>
                <TableCell>{row._id}</TableCell>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell >{row.lastName}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.dateOfBirth}</TableCell>
              <TableCell >{row.mobile}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell >{row.accountType}</TableCell>
              <TableCell >{row.password}</TableCell>
              {/* <updateTable users={user} onUpdate={onUpdate}/> */}
              
            <TableCell>
                <TableRow>
                <Button editTable user={row.firstName} onUpdate={onUpdate}><EditIcon /></Button>
                </TableRow>
                </TableCell> 


                <TableCell>
                 <TableRow>
                  <td>
                  <Button onClick={()=>onDelete(row._id) }><DeleteIcon/></Button> 
                  </td>
                 </TableRow>
                </TableCell> 
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// function for Update

function editTable (props){
  const{user,onUpdate}=props;

  const [firstName,setfirstName]=useState=(user.firstName)
  const handleChange=(event)=>{
    setfirstName(event.target.value)
  }
  return(
    <div>
      <td>
        <input type="text" value={firstName} onChange ={(event)=> handleChange(event)}> </input>
      </td>
      <td>
        <button onClick={()=>onUpdate ({_id :row._id, firstName:firstName})}>UPDATE</button>
      </td>
    </div>
  )
}

export default TableUser