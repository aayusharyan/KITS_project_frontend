import React from 'react'

const AdmissionForm = () => {
  return (
    <>
      <h1 className="main_title">Admission Form</h1>
      <div className="main_container">
        <form action='http://localhost:8080/admission' method='POST'>
          <input type="text" placeholder="First Name" name='first_name' />
          <input type="text" placeholder="Last Name" name='last_name'/>
          
          <br />
          
          <input type="number" placeholder="Phone Number" name='phone_number' />
          <input type="email" placeholder="Email" name='email' />
          
          <br />
          
          <input type="date" className="full_width" placeholder="Date of Birth" name='date_of_birth' />
          
          <br />
          <br />
          
          <p className='margin_2'>Gender:</p>
          <input type="radio" name="gender" className="no_width" value="male" /> Male
          <input type="radio" name="gender" className="no_width" value="female" /> Female
          <input type="radio" name="gender" className="no_width" value="other" /> Other
          
          <br />
          <br />
          
          <textarea placeholder="Address" className="full_width" name='address'></textarea>
          
          <br />
          <br />
          
          <input type="text" placeholder="Father Name" name='father_name'/>
          <input type="text" placeholder="Mother Name" name='mother_name'/>
          
          <br/>
          
          <input type="text" placeholder="Guardian Name" name='guardian_name' />
          <input type="number" placeholder="Guardin Phone Number" name='guardian_phone_number' />
          
          <br />
          <br />
          
          <input type="number" placeholder="Class X Marks" name='class_x_mark' />
          <input type="number" placeholder="Class XII Marks" name='class_xii_mark'/>
          
          <br/>
          
          <input type="text" placeholder="School Name (Class XII)" className="full_width" name='class_xii_school' />
          
          <br />
          <br />
          
          <p className='margin_2'>Hobbies and Interests:</p>
          <input type="checkbox" name="interests" className="no_width" value="cricket" /> Cricket
          <input type="checkbox" name="interests" className="no_width" value="football" /> Football
          <input type="checkbox" name="interests" className="no_width" value="swimming" /> Swimming
          <input type="checkbox" name="interests" className="no_width" value="gaming" /> Gaming
          <input type="checkbox" name="interests" className="no_width" value="basketball" /> Basketball
          
          <br />
          <br />
          
          <input type="reset" className="button"/>
          <input type="submit" value="Apply" className="button" />
        </form>
      </div>
    </>
  )
}

export default AdmissionForm