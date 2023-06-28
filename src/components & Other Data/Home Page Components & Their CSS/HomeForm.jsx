import React, { useState } from 'react';
import './Home.css';
import { db } from '../../Firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';



export default function HomeForm() {
    // initial value of formdata
    let Init = { name: '', email: '', feedback: '' };

    const [formData, setFormData] = useState(Init);

    // using use state for error
    const [emptynameError, setEmptyNameError] = useState(false);
    const [emptyEmailError, setEmptyEmailError] = useState(false);
    const [emptyFeedbackError, setEmptyFeedbackError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailAlreadyError, setEmailAlreadyError] = useState(false);

    let email_forCheck;
    // distructuring
    const { name, email, feedback } = formData;

    // function for after submitting notification
    let Form_Submitted = document.getElementById('Form_Submitted');
    function showDiv(duration) {
        Form_Submitted.style.display = "block";

        setTimeout(function () {
            Form_Submitted.style.display = "none";
        }, duration);
    }


    //   checkbox input function
    const [checked_, setChecked] = useState(false);
    const Checkbox_Chnge = (event) => {
        setChecked(event.target.checked)
        console.log(event.target.checked);
    }




    // function for Submit the form 
    const submit = async (event) => {
        event.preventDefault();

        if (name.length > 0 && email.length > 0 && feedback.length > 0) {
            if (email.includes('@') && email.includes('.')) {
                // getting all data from firestore
                const usersCollectionRef = collection(db, 'Feedback');
                const querySnapshot = await getDocs(usersCollectionRef);
                let CollectData = [];
                querySnapshot.forEach((doc) => {
                    let data = doc.data();
                    CollectData.push(data);
                });
                for (let i = 0; i < CollectData.length; i++) {
                    // checking that the email is entered is already in use or not?
                    email_forCheck = CollectData.find((item) => item.email === email);
                }
                if (email_forCheck) {
                    // if in use it will notify user and give chance to resend feedback with same email if user checked the checkbox
                    setEmailAlreadyError(true);
                } else {
                    // if email is new then it will submit thier feedback to firestore
                    let docRef = collection(db, 'Feedback');
                    await addDoc(docRef, formData);
                    // it will clear form
                    setFormData(Init);
                    // it will  show a notification if data is submitted
                    showDiv(2000);

                    // it will disabled the form by re enter some thing after submitting once
                    let inp_Disblde = document.getElementsByClassName('inp_Disblde');
                    for (let i = 0; i < inp_Disblde.length; i++) {
                        inp_Disblde[i].setAttribute('disabled', '');
                    }
                }


            } else {
                setEmailError(true);
            }
        } else if (name.length === 0 && email.length === 0 && feedback.length === 0) {
            setEmptyEmailError(true);
            setEmptyFeedbackError(true);
            setEmptyNameError(true);
        } else if (name.length === 0) {
            setEmptyNameError(true);
        } else if (email.length === 0) {
            setEmptyEmailError(true);
        } else if (feedback.length === 0) {
            setEmptyFeedbackError(true);
        }

        // if checkbox is checked the user will able to use email once again dn submitt their feedback
        if (checked_) {
            // -------------------------------------
            let docRef = collection(db, 'Feedback');
            await addDoc(docRef, formData);
            setFormData(Init);

            showDiv(2000);
            setEmailAlreadyError(false);
            let inp_Disblde = document.getElementsByClassName('inp_Disblde');
            for (let i = 0; i < inp_Disblde.length; i++) {
                inp_Disblde[i].setAttribute('disabled', '');

            }
        }

    }

    // to set the value of input in formdata...
    const input_Change = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <form className='container-fluid footer_form' onSubmit={submit} >
                {/* ---------------- */}
                <div>
                    <div className='input_box'>
                        <label>Your Good Name*</label>
                        <input
                            autoComplete='off'
                            name='name'
                            className='cls_only_for_design inp_Disblde'
                            type='text'
                            value={name}
                            onChange={input_Change}
                            onInput={() => { setEmptyNameError(false) }}
                        />
                        {
                            emptynameError && <p className='text-danger'><i className="text-danger bi bi-exclamation-circle"></i> Please type your Name before Submiting</p>
                        }

                    </div>
                    <div className='input_box'>
                        <label>Your Email Address*</label>
                        <input
                            autoComplete='off'
                            name='email'
                            className='cls_only_for_design inp_Disblde'
                            type='email'
                            // required
                            value={email}
                            onChange={input_Change}
                            onInput={() => {
                                setEmptyEmailError(false);
                                setEmailError(false);
                                setEmailAlreadyError(false);
                            }}
                        />
                        {
                            emptyEmailError && <p className='text-danger'><i className="text-danger bi bi-exclamation-circle"></i> Please enter your Email Before Submiting</p>
                        }
                        {
                            emailError && <p className='text-danger'><i className="bi bi-envelope-exclamation text-danger"></i> Please enter a valid Email Address</p>
                        }
                        {
                            emailAlreadyError && <p className='text-danger'><i className="bi bi-envelope-exclamation text-danger"></i> This email you have used is already used once in feedback...  Try another one OR</p>
                        }
                        {
                            emailAlreadyError && (<section className='d-flex m-0 p-0 w-75'>
                                <input
                                    checked={checked_}
                                    type='checkbox'
                                    onChange={Checkbox_Chnge} />
                                <label className='text-warning'>Check it, If you miss something or you want to add_on something else with same email</label>
                            </section>)
                        }

                    </div>
                    <div className='input_box'>
                        <label>Give Your Important Suggestion or Feedback*</label>
                        <textarea
                            name='feedback'
                            className='cls_only_for_design inp_Disblde'
                            rows={3}
                            // autoFocus
                            typeof='text'
                            value={feedback}
                            onChange={input_Change}
                            onInput={() => { setEmptyFeedbackError(false) }}
                        ></textarea>
                        {
                            emptyFeedbackError && <p className='text-danger'><i className="text-danger bi bi-exclamation-circle"></i> Please enter your Important Feedback or any Suggestion to me</p>
                        }
                    </div>
                    <div className='mt-3'>
                        <button type='submit' className='btn btn-outline-light inp_Disblde'>
                            Submit
                        </button>
                    </div>
                    <div id='Form_Submitted' style={{ display: 'none' }}>
                        <p className='text-success'>
                            ThankYou,,, Feedback Submitted Successfully!!
                        </p>
                    </div>
                </div>
                {/* ---------------- */}
                <div>
                    <div>
                        <h1>My Info:-</h1>
                        <h6 className='text-warning'>______________________________</h6>
                        <h3>MySelf:</h3>
                        <p>Sujal Rajput</p>
                        <h3>Email:</h3>
                        <p className='text-decoration-none'>rajputsujal992@gmail.com</p>


                        <div className='d-flex gap-5 '>
                            <a href='https://instagram.com/itz__sam__09?igshid=MzNlNGNkZWQ4Mg==' target='_new'><h2 className="bi bi-instagram text-light"></h2></a>
                            <a href='https://github.com/goldstain09' target='_new'><h2 className="bi bi-github text-light"></h2></a>
                            <a href='https://www.linkedin.com/in/sujalrajput' target='_new'><h2 className="bi bi-linkedin text-light"></h2></a>
                        </div>
                    </div>
                </div>



            </form>




        </>
    )
}
