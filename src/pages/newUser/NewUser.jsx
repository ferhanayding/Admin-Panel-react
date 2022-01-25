import "./newUser.css"

const NewUser = () => {
  return <div className="newUser">
      <div className="newUserWrapper">
          <form className="newUserForm">
              <div className="formItem" >
              <label className="label" >Username</label>
              <input type="text" placeholder="John" />  
              </div>    
              <div className="formItem" >
              <label className="label">full Name</label>
              <input  type="text" placeholder="John Smith" />  
              </div>
              <div className="formItem" >
              <label className="label">Phone</label>
              <input type="text" placeholder="+123456778" />  
              </div>
              <div className="formItem" >
              <label className="label">Email</label>
              <input type="email" placeholder="example@gmail.com" />  
              </div>
              <div className="formItem" >
              <label className="label">Password</label>
              <input type="password"  />  
              </div>
              <div className="formItem" >
              <label className="label">Address</label>
              <input type="text" placeholder="USA| new york" />  
              </div>
              <div className="formItem" >
              <label className="label">Gender</label>
              <div className="newUserGenderContainer">
              <input type="radio" name="gender" id="male" value="male" className="genderInput" /> 
              <label className="labelGender">Male</label> 
              <input type="radio" name="gender" id="female" value="female" className="genderInput" /> 
              <label className="labelGender" >Female</label> 
              <input type="radio" name="gender" id="other" value="other" className="genderInput" />
              <label className="labelGender">Others</label>
              </div>
              </div>
              <div className="formItem" >
              <label className="label">Active</label>
              <select className="formItemSection" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no" >No</option>
              </select>

                <button className="addUserButton">Create</button>
              </div>
          </form>
      </div>
      <div className="newUserPageRight">
            <img className="newUserPageRightImg" src="https://cdn.pixabay.com/photo/2017/07/22/21/51/fuchs-2530031_960_720.png" alt="" />
      </div>
  </div>;
};

export default NewUser;
