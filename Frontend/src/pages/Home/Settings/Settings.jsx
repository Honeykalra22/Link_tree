import React from 'react'

function Settings() {
  return (
    <div className='setting_container'>
        <label htmlFor="edit_form">Edit Profile</label>
        <div className='edit_form'>
            <form action="submit">
                <div>
                    <label>First Name</label>
                    <input type="text" id="" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" id="" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="" />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" id="" />
                </div>
                <button type='submit'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default Settings