import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentDetail = () => {
  // const { student_id } = useParams();
  const params = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [guardianName, setGuardianName] = useState();
  const [guardianPhoneNumber, setGuardianPhoneNumber] = useState();
  const [classXMark, setClassXMark] = useState("");
  const [classXIIMark, setClassXIIMark] = useState("");
  const [classXIISchool, setClassXIISchool] = useState("");
  const [interests, setInterests] = useState([]);
  const [isEditing, setEdit] = useState(false);


  const fetchData = () => {
    fetch('http://localhost:8080/single_student?id=' + params.student_id)
    .then((res) => {
      return res.json();
    }).then((data) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPhone(data.phoneNumber);
      setDateOfBirth(data.dateOfBirth);
      setGender(data.gender);
      setAddress(data.address);
      setFatherName(data.fatherName);
      setMotherName(data.motherName);
      setGuardianName(data.guardianName);
      setGuardianPhoneNumber(data.guardianPhoneNumber);
      setClassXMark(data.classXMark);
      setClassXIIMark(data.classXIIMark);
      setClassXIISchool(data.classXIISchool);
      setInterests(data.interests);
    })
  }

  useEffect(() => {
    fetchData();
  }, [params]);

  const onChangeInterests = (e) => {
    const interests_arr = [ ...interests ];
    const index = interests_arr.indexOf(e.target.value);
    
    if(e.target.checked) {
      if(index === -1) {
        interests_arr.push(e.target.value);
      }
    } else {
      if(index !== -1) {
        interests_arr.splice(index, 1);
      }
    }
    
    setInterests(interests_arr);
  }


  const showDisplayContent = () => {
    return(
      <>
        <h4 className='display_inline'>Name: </h4>
        <p className='display_inline'>{firstName} {lastName}</p>
        
        <br />
        <br />
        
        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Email: </h4>
            <p className='display_inline'>{email}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Phone: </h4>
            <p className='display_inline'>{phone}</p>
          </div>
        </div>

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Date of Birth: </h4>
            <p className='display_inline'>{dateOfBirth}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Gender: </h4>
            <p className='display_inline'>{gender}</p>
          </div>
        </div>

        <br />

        <h4 className='margin_0'>Address: </h4>
        <p className='margin_0'>{address}</p>

        <br />

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Father Name: </h4>
            <p className='display_inline'>{fatherName}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Mother Name: </h4>
            <p className='display_inline'>{motherName}</p>
          </div>
        </div>

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Guardian Name: </h4>
            <p className='display_inline'>{guardianName}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Guardian Number: </h4>
            <p className='display_inline'>{guardianPhoneNumber}</p>
          </div>
        </div>

        <br />

        <div className='flex_container'>
          <div className='flex_column_left'>
            <h4 className='display_inline'>Class X Marks: </h4>
            <p className='display_inline'>{classXMark}</p>
          </div>          

          <div className='flex_column_right'>
            <h4 className='display_inline'>Class XII Marks: </h4>
            <p className='display_inline'>{classXIIMark}</p>
          </div>
        </div>

        <h4 className='display_inline'>School Name: </h4>
        <p className='display_inline'>{classXIISchool}</p>

        <br />
        <br />

        <h4 className='display_inline'>Hobbies and Interests: </h4>
        <p className='display_inline'>{interests.map((single_interest, index) => {
          return(
          <span key={index}>
            {index > 0 ? (<>, &nbsp;</>): false}
            {single_interest}
          </span>);
        })}</p>

        <br />
        <br />

        <button onClick={() => setEdit(true)}>Edit Details</button>
      </>
    );
  };

  const showEditContent = () => {
    return(
      <>
        <form action={'http://localhost:8080/single_student?id=' + params.student_id} method="POST">
          <h4 className='display_inline'>Name: </h4>
          <input 
            type="text" 
            placeholder="First Name" 
            name='first_name' 
            className='shortWidth' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            name='last_name' 
            className='shortWidth' 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <br />
          <br />
        
          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Email: </h4>
              <input 
                type="email" 
                placeholder="Email" 
                name='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Phone: </h4>
              <input 
                type="number" 
                placeholder="Phone Number" 
                name='phone_number' 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}  
              />
            </div>
          </div>
      
          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Date of Birth: </h4>
              <input 
                type="date" 
                placeholder="Date of Birth" 
                name='date_of_birth' 
                value={dateOfBirth} 
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Gender: </h4>
              <input 
                type="radio" 
                name="gender" 
                className="no_width" 
                value="male" 
                checked={gender === "male"}
                onChange={() => setGender("male")}
              /> Male &emsp;
              <input 
                type="radio" 
                name="gender" 
                className="no_width" 
                value="female" 
                checked={gender === "female"} 
                onChange={() => setGender("female")}
              /> Female &emsp;
              <input 
                type="radio" 
                name="gender" 
                className="no_width" 
                value="other" 
                checked={gender === "other"} 
                onChange={() => setGender("other")}  
              /> Other &emsp;
            </div>
          </div>
          
          <br />
          
          <h4 className='margin_0'>Address: </h4>
          <textarea 
            placeholder="Address" 
            className="full_width" 
            name='address'
            onChange={(e) => setAddress(e.target.value)}
          >
            {address}
          </textarea>
          
          <br />
          <br />
          
          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Father Name: </h4>
              <input 
                type="text" 
                placeholder="Father Name" 
                name='father_name' 
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Mother Name: </h4>
              <input 
                type="text" 
                placeholder="Mother Name" 
                name='mother_name' 
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
              />
            </div>
          </div>

          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Guardian Name: </h4>
              <input 
                type="text" 
                placeholder="Guardian Name" 
                name='guardian_name' 
                value={guardianName} 
                onChange={(e) => setGuardianName(e.target.value)}
              />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Guardian Number: </h4>
              <input 
                type="number" 
                placeholder="Guardin Phone Number" 
                name='guardian_phone_number' 
                value={guardianPhoneNumber}
                onChange={(e) => setGuardianPhoneNumber(e.target.value)}  
              />
            </div>
          </div>
          
          <br/>

          <div className='flex_container'>
            <div className='flex_column_left'>
              <h4 className='display_inline'>Class X Marks: </h4>
              <input 
                type="number" 
                placeholder="Class X Marks" 
                name='class_x_mark' 
                value={classXMark} 
                onChange={(e) => setClassXMark(e.target.value)}  
              />
            </div>          

            <div className='flex_column_right'>
              <h4 className='display_inline'>Class XII Marks: </h4>
              <input 
                type="number" 
                placeholder="Class XII Marks" 
                name='class_xii_mark' 
                value={classXIIMark}
                onChange={(e) => setClassXIIMark(e.target.value)}
              />
            </div>
          </div>

          <h4 className='display_inline'>School Name: </h4>
          <input 
            type="text" 
            placeholder="School Name (Class XII)" 
            name='class_xii_school' 
            value={classXIISchool} 
            onChange={(e) => setClassXIISchool(e.target.value)}  
          />
          
        
          <br />
          <br />
          
          <h4 className='display_inline'>Hobbies and Interests: </h4>
          <input type="checkbox" name="interests" className="no_width" value="cricket" checked={interests.includes("cricket")} onChange={onChangeInterests} /> Cricket &emsp;
          <input type="checkbox" name="interests" className="no_width" value="football" checked={interests.includes("football")} onChange={onChangeInterests} /> Football &emsp;
          <input type="checkbox" name="interests" className="no_width" value="swimming" checked={interests.includes("swimming")} onChange={onChangeInterests} /> Swimming &emsp;
          <input type="checkbox" name="interests" className="no_width" value="gaming" checked={interests.includes("gaming")} onChange={onChangeInterests} /> Gaming &emsp;
          <input type="checkbox" name="interests" className="no_width" value="basketball" checked={interests.includes("basketball")} onChange={onChangeInterests} /> Basketball &emsp;
          
          <br />
          <br />
          
          <button onClick={() => {fetchData(); setEdit(false)}}>Cancel</button>
          &nbsp;
          <input type="submit" value="Update Record" className="button no_width" />
        </form>
      </>
    );
  }

  return (
    <>
      <h1 className='main_title'>Student Detail</h1>

      <div className='student_detail_main_container'>
        {isEditing ? showEditContent(): showDisplayContent()}
      </div>
    </>
  )
}

export default StudentDetail