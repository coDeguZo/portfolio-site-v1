// form for formspree.io
import React from "react";
import styled from 'styled-components'
import FormMessages from '../data/formMessages.js'
import TypeIt from 'typeit-react'
import swal from 'sweetalert';
import { Image, Grid, Segment } from 'semantic-ui-react'


const ContactMe = styled.form`
  width: 80%;
  margin: auto;
  fieldset {
    // width: 100%;
    margin: 0;
    padding: 1rem 1.5rem;
    border: 1px solid lightgray;
    border-radius: .5rem;
    box-shadow: 0 0px 1px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  }
  label {
    width: 100%;
    display: block;
    font-size: 1rem;
    margin-bottom: .5em;
    padding-top: .2em;
    display: flex;
    align-items: baseline;
    font-family: 'Fjalla One', sans-serif;
  }
  
  input, textarea {
    font-size: .85rem;
    display: block;
    width: calc(100% - 1.5rem);
    border: 1px solid rgba(0,0,0,0.2);
    background-color: rgba(255,255,255,0.9);
    padding: .75em 1em;
    margin-bottom: 1.5em;
  }
  button{
    padding: .5rem 1rem;
    font-size: 1.25em;
    font-family: 'Fjalla One', sans-serif;
    text-transform: uppercase;
    float: right;
    border-radius: .5rem;
    background-color: rgba(0,0,0,.2);
    border: 0px;
    &:hover,
    &:focus {
      background-color: rgba(0,0,0,.8);
      color: white;
    }
  }
`
const Images = styled.div`
	
	@keyframes shake {
	  10%, 90% {
	    transform: translate3d(-2px, 0, 0);
	  }
	  
	  20%, 80% {
	    transform: translate3d(2px, 0, 0);
	  }
	  30%, 50%, 70% {
	    transform: translate3d(-2px, 0, 0);
	  }
	  40%, 60% {
	    transform: translate3d(2px, 0, 0);
	  }
	}
	display: flex; 
	flex-basis: calc(25% - 40px);
	// flex-basis: calc(20%);
	justify-content: center;
	margin: 1rem;
	flex-direction: column;
	img {
	  // max-height: 8rem;
	  // max-width: 8rem;
	  max-height: 4.5rem;
	  max-width: 4.5rem;
	  // min-height: 4.5rem;
	  // min-width: 4.5rem;
	  margin: auto;
		
		&:hover {
		  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
		  transform: translate3d(0, 0, 0);
		  backface-visibility: hidden;
		  perspective: 1000px;
		}
	}
	p {
		font-size: .8rem;
		font-weight: bold;
	}
`


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      prefill: FormMessages[[Math.floor(Math.random() * FormMessages.length)]]
    };
  }

  render() {
    const { status } = this.state;
    let formPrefill = this.state.prefill
    return (
        <div>
            <br /><br /><br />
            <TypeIt>
                <h1 className="contact-title">
                    Contact Me!
                </h1>
            </TypeIt>
            <ContactMe
                onSubmit={ this.submitForm }
                action="https://formspree.io/xeqrpvzk"
                method="POST"
                >
                <fieldset>
                <label>Name:</label>
                <input required type="text" name="name" placeholder={ formPrefill.name }/>
                <label>Email:</label>
                <input required type="email" name="email" placeholder={ formPrefill.email }/>
                <label>Message:</label>
                <textarea required rows="5" name="message" id="message" placeholder={ formPrefill.message }></textarea>
                <input type="text" name="_gotcha" style={{display:"none"}} />
                <input type="hidden" name="_subject" value="Message from u.ariguzo.ua.com!" />
                { /* @TODO - add CORS protection https://help.formspree.io/hc/en-us/articles/360038664534-Restrict-to-Domain */}
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Send</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </fieldset>
            </ContactMe>
            <br /><br /><br /><br /><br />
            <Segment>
            <Images>
                <Grid centered stretched>
                    <Grid.Column centered stretched>
                        <Image onClick={() => window.open("https://www.linkedin.com/in/uzoma-ariguzo/")} className="contact-image" src={process.env.PUBLIC_URL + '/linkedin.png'} />
                    </Grid.Column>
                    <Grid.Column stretched >
                        <Image onClick={() => window.open("https://github.com/coDeguZo")} className="contact-image" src={process.env.PUBLIC_URL + '/github2.png'} />
                    </Grid.Column>
                    <Grid.Column stretched >
                        <Image onClick={() => window.open("https://medium.com/@u.ariguzo.ua")} className="contact-image" src={process.env.PUBLIC_URL + '/medium.svg'} />
                    </Grid.Column>
                </Grid>
            </Images>
            </Segment>
        </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        swal({
            icon: "success",
            text: "You're Response Has Been Submitted.  Thanks :)"
          });
      } else {
        this.setState({ status: "ERROR" })
        swal({
            icon: "error",
            text: "Something Went Wrong.  Refresh Your Browser"
          });
      }
    };
    xhr.send(data);
  }
}