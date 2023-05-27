import './App.css';
import {useState} from 'react';

function App() {

  const [formData, setformData] = useState({
    firstName:"",lastName:'',email:'',country:'India',streetAddress:'',city:'',state:'',postalCode:'',comments:false,
    candidates:false, offers: false,pushNotification:"",
  });

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setformData((prev)=>({
      ...prev,
      [name]:type==="checkbox"?checked:value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing the value")
    console.log(formData)
  }

  return (
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <br/>
        <input
          type="text"
          name='firstName'
          placeholder='Shikhar'
          id='firstName'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <label htmlFor='lastName'>Last Name</label>
        <br/>
        <input
          type="text"
          name='lastName'
          placeholder='Bhardwaj'
          id='lastName'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <label htmlFor='email'>Email</label>
        <br/>
        <input
          type="text"
          name='email'
          placeholder='shikharbhardwaj@gmail.com'
          id='email'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <label htmlFor='country'>Country</label>
        <br/>
        <select
        id='country'
        name='country'
        onChange={changeHandler}
        value={formData.country}>

          <option>Africa</option>
          <option>United kingdom</option>
          <option>United States</option>
          <option>India</option>
        </select>
        <br/>
        <label htmlFor='streetAddress'>Street Address</label>
        <br/>
        <input
          type="text"
          name='streetAddress'
          placeholder='1234 Main St'
          id='streetAddress'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <label htmlFor='city'>City</label>
        <br/>
        <input
          type="text"
          name='city'
          placeholder='Faridabad'
          id='city'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <label htmlFor='state'>State/Province</label>
        <br/>
        <input
          type="text"
          name='state'
          placeholder='Haryana'
          id='state'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <label htmlFor='postalCode'>Postal Code</label>
        <br/>
        <input
          type="text"
          name='postalCode'
          placeholder='121004'
          id='postalCode'
          onChange={changeHandler}
          className='outline'
        />
        <br/>
        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
            <input
              type='checkbox'
              id='comments'
              name='comments'
              onChange={changeHandler}
              checked={formData.comments}
            />
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someone comments on a post</p>
            </div>
          </div>

          <div className='flex'>
            <input
              type='checkbox'
              id='candidates'
              name='candidates'
              onChange={changeHandler}
              checked={formData.candidates}
            />
            <div>
              <label htmlFor='candidates'>Candidate</label>
              <p>Get notified when candidates applies for a job</p>
            </div>
          </div>

          <div className='flex'>
            <input
              type='checkbox'
              id='offers'
              name='offers'
              onChange={changeHandler}
              checked={formData.offers}
            />
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when candidate applies or rejects</p>
            </div>
          </div>          
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotification'
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor='pushEverything'>Everything</label>
          <br/>
          <input
            type='radio'
            id='pushEmail'
            name='pushNotification'
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor='pushEmail'>Same as Email</label>
          <br/>
          <input
            type='radio'
            id='pushNothing'
            name='pushNotification'
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor='pushNothing'>No Push Notifications</label>
        </fieldset>
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
