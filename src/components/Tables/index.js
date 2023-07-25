import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './index.css';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import EditEmployee from "../Dashboard/index";

const Dashboard = () => {
  const [dataArray, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedArray = localStorage.getItem('data');

    if (storedArray) {
      const parsedArray = JSON.parse(storedArray);
      setData(parsedArray);
      console.log(parsedArray);
    }
  }, []);

  const sweet = (index) => {
    const updatedForm = [...dataArray];
    updatedForm.splice(index, 1);
    setData(updatedForm);
    localStorage.setItem('data', JSON.stringify(updatedForm));
  };

  const sweetAlert = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/');
        Swal.fire('Log out!', 'Your page has been logged out.', 'success');
      }
    });
  };

  const handleEdit = (index) => {
    setEditing(true);
    setEditIndex(index);
  };

  const handleUpdate = (updatedData, index) => {
    const updatedArray = [...dataArray];
    updatedArray[index] = updatedData;
    setData(updatedArray);
    localStorage.setItem('data', JSON.stringify(updatedArray));
    setEditing(false);
    setEditIndex(null);
  };

  return (
    <>
      <h4 className='mt-4'>Employee Management System</h4>
      <div className='ml-4'>
        <Button variant='primary'>
          <Link to='/Adduser' className='text-white text-decoration-none'>
            Add Employee
          </Link>
        </Button>{' '}
        <Button variant='light' className='text-decoration-none' onClick={sweetAlert}>
          Logout
        </Button>
      </div>

      {editing ? ( // Render the EditEmployee component when editing is true
        <EditEmployee
          data={dataArray[editIndex]}
          index={editIndex}
          handleUpdate={handleUpdate}
        />
      ) : (
        <table className='table mt-4'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Email Address</th>
              <th scope='col'>Salary($)</th>
              <th scope='col'>Date</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((item, i) => (
              <tr key={i}>
                <th scope='row'>{i}</th>
                <td>{item.firstname}</td>
                <td>{item.Lastname}</td>
                <td>{item.Email}</td>
                <td>{item.Salary}$</td>
                <td>{item.Date}</td>
                <Button variant='light' onClick={() => handleEdit(i)}>
                  Edit
                </Button>{' '}
                <Button variant='dark' onClick={() => sweet(i)}>
                  Delete
                </Button>
              </tr>
            ))
            }
          </tbody>
        </table>
      )}
    </>
  );
};

export default Dashboard;
