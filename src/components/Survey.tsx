
import { useState } from "react";
import RadioButtons from "./radioButtons";
import Checkboxes from "./Checkboxes";
import { Form, FormWithList } from "../types";


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData]= useState<Form>({
    color : 0,
    chatting: false,
    swimming: false,
    bathing: false,
    noTime: false,
    review: "",
    username : "",
    email: ""

  })
  let postedForms : FormWithList[] = [];

  const handlechange=(event) =>{
    const {name, value} = event.target;


    switch(event.target.name){
      case ('username') :
        console.log(name);
        setFormData({...formData, [name]: event.target.value});
        break;
      case ("email" ) : 
        setFormData({...formData, [name]: event.target.value});
        break;
      case ( "review" ):
        setFormData({...formData, [name]: event.target.value});
        break;
      case ( "spend-time" ):
        console.log(name);
        setFormData({...formData, [value]: event.target.checked});
        break;
      case ("color" ):
        setFormData({...formData, [event.target.name]: event.target.value}) ;
        break;
      }
  };



  const handleSubmit = (event) => {
    event.preventDefault();
  
    //convert formdata t object with spend time activities in spendtime list

    postedForms.push(
      {
        color: formData.color,
        timeSpent: [formData.chatting, formData.swimming, formData.bathing, formData.noTime],
        review: formData.review,
        username : formData.username,
        email: formData.email
      }
    )
    setFormData ({
    color: 0,
    chatting: false,
    swimming: false,
    bathing: false,
    noTime: false,
    review: "",
    username : "",
    email: ""
     })
    console.log(postedForms);
   
  
  };


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">{
      
      /* a form should be here */

      <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons onChange={ handlechange}></RadioButtons>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <Checkboxes onChange={ handlechange}></Checkboxes>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
          onChange={handlechange}
            name="review"
            cols="30"
            rows="10"
         
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
          onChange={handlechange}
            type="text"
            name="username"
             /></label
        ><label
          >Leave us your email pretty please??<input
            onChange={handlechange}
            type="email"
            name="email"
          /></label
        ><input className="form__submit" type="submit" value="Submit Survey!" onClick={handleSubmit} />
      </form>
      
      }</section>
    </main>
  );
}

export default Survey;
