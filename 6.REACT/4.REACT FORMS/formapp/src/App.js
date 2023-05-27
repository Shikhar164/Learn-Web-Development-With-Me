import './App.css';
import {useState} from 'react';

function App() {

  const [formData, setFormData] = useState({firstName:'',lastName:'',isVisible:true,mode:"",favCar:""});
  console.log(formData);

  function changeHandler(event){
    const {name,value,checked,type}=event.target//Destructuring
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }   
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log('Finally printing the data')
    console.log(formData)
  }

   return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <br/>
        <input type="text" 
        placeholder='First Name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />
        <br/>
        <br/>
        
        <input type="text" 
        placeholder='Last Name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />
        <br/>
        <br/>
        <input 
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'  
        id='isVisible'
        checked={formData.isVisible}//now checkbox is controlled component matlab formdata mai se checkbox ki value utkar aa gyi iss input component ke andar
        />
        <label htmlFor='isVisible'>Am I Visible</label>

        <br/>
        <br/>

        <fieldset>
        <legend>Mode:</legend>
        <input 
        type='radio'
        onChange={changeHandler}
        name='mode'  
        value={"Online-mode"}
        checked={formData.mode==="Online-mode"}
        id='Online-mode'
        />
        <label htmlFor='Online-mode'>Online</label>
        
            {/* formData=useState{mode:" "}
            changeHandler(){
            name=mode,value=online=mode,checked=?,type=radio
            setFormData(){
              [name=mode]:(value=online-mode)
            }
            re-render

            formData=useState{mode:"online-mode"}

            checked={formdata.mode==="online-mode"}=true */}

        {/* QUESTION If i dont write this line checked={formData.mode==="Online-mode" same output will generate so why would i write this line in code  */}
        {/* // ChatGPT ANSWER
        // You are correct that if you omit the checked={formData.mode==="Online-mode"} line, the code will still work and the radio button selection will function correctly. In the absence of the checked prop, the radio button group will still maintain its internal state and ensure that only one option is selected at a time.

        // However, including the checked prop with the appropriate conditional expression formData.mode==="Online-mode" provides a few advantages:

        // Initial Selection: By setting checked={formData.mode==="Online-mode"}, you can control the initial selection of the radio button when the component renders for the first time. If you want to have a default selection, you can set the mode property in the initial state accordingly.

        // Consistent UI State: By explicitly setting the checked prop based on the value of formData.mode, you ensure that the UI reflects the correct selected state of the radio button. It provides a clear and explicit way to synchronize the UI with the underlying state.

        // Maintain State Consistency: If the mode property in formData changes outside the radio button component (e.g., through an API response or state update in a parent component), the checked prop ensures that the radio button selection is updated accordingly. It helps in maintaining the consistency between the external state and the UI state.

        // While the code might still work without the checked prop, including it explicitly based on the value of formData.mode helps in maintaining a clearer and more predictable codebase, ensuring consistent behavior and synchronization between the UI and the underlying state */}

      
        <input 
        type='radio'
        onChange={changeHandler}
        name='mode'  
        value="Offline-mode"
        id='Offline-mode'
        checked={formData.mode==="Offline-mode"}

        
        />
        <label htmlFor='Offline-mode'>Offline</label>
        </fieldset>

        <label htmlFor='favCar'>Which Car you want</label>
        <select
        name='favCar'
        onChange={changeHandler}
        id='favCar'
        value={formData.favCar}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Verna">Verna</option>
          <option value="Creta">Creta</option>
        </select>
        <br/>
        <br/> 
        <button type='submit'>Submit</button>
        
      </form>
      
    </div>
  );
}
 
export default App;
