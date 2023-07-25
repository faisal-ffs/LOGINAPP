import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function EditEmployee({ data, index, handleUpdate }) {
  const [editedData, setEditedData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    setEditedData(data);
    handleUpdate(data, index); // Call handleUpdate with the original data to cancel the editing
  };

  const handleUpdateClick = () => {
    handleUpdate(editedData, index); // Call handleUpdate with the edited data to update the item
  };

  return (
    <>
      <h4 className='head'>Edit Employee</h4>
      <div className='m1'>
        <label>First Name</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control form-height'
            aria-label='First name'
            aria-describedby='basic-addon1'
            name='firstname'
            value={editedData.firstname}
            onChange={handleChange}
          />
        </div>
        <label>Last Name</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control form-height'
            aria-label='Last Name'
            aria-describedby='basic-addon1'
            name='Lastname'
            value={editedData.Lastname}
            onChange={handleChange}
          />
        </div>
        <label>Email</label>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control form-height'
            aria-label='Email'
            aria-describedby='basic-addon1'
            name='Email'
            value={editedData.Email}
            onChange={handleChange}
          />
        </div>
        <label>Salary($)</label>
        <div className='input-group mb-3'>
          <input
            type='text'

            className='form-control form-height'
            aria-label='Salary'
            aria-describedby='basic-addon1'
            name='Salary'
            value={editedData.Salary}
            onChange={handleChange}
          />
        </div>
        <label>Date</label>
        <div className='input-group mb-3'>
          <input
            type='number'

            placeholder='DD/MM/YYYY'
            className='form-control form-height'
            aria-label='Date'
            aria-describedby='basic-addon1'
            name='Date'
            value={editedData.Date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='btns'>
        <Button variant='primary' onClick={handleUpdateClick}>
          Update
        </Button>{' '}
        <Button variant='light' onClick={handleCancel}>
          Cancel
        </Button>{' '}
      </div>
    </>
  );
}

export default EditEmployee;
