import React, {useRef, useState} from 'react'
import { Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

function Contact() {

  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: "1",
    alignItems: "center"
  }

  const wrapper = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1350px",
    padding: "0px 0px 80px 0px",
    gap: "12px"
  }

  const title = {
    fontSize: "42px",
    textAlign: "center",
    fontWeight: "600",
    marginTop: "20px"
  }

  const desc = {
    fontSize: "18px",
    textAlign: "center",
    maxWidth: "600px"
  }

  const contactForm = {
    width: "95%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#313866",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
    marginTop: "28px",
    gap: "12px"
  }

  const contactTitle = {
    fontSize: "24px",
    marginBottom: "6px",
    fontWeight: "600"
  }

  const contactInput = {
    flex: "1",
    backgroundColor: "transparent",
    border: "1px solid white",
    outline: "none",
    fontSize: "18px",
    borderRadius: "12px",
    padding: "12px 16px"
  }
  
  const contactInputMessage = {
    flex: "1",
    backgroundColor: "transparent",
    border: "1px solid white",
    outline: "none",
    fontSize: "18px",
    borderRadius: "12px",
    padding: "12px 16px"
  }

  const contactButton = { 
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    background: "hsla(271, 100%, 50%, 1)",
    background: "linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
    background: "-moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
    background: "-webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)",
    padding: "13px 16px",
    marginTop: "2px",
    borderRadius: "12px",
    border: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "600"
  }

  const [open, setOpen] = useState(false)

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8u5s6bb', 'template_qb2eskj', form.current, '2iguvYBsFCDIJxOp8')
      .then((result) => {
          setOpen(true)
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div style={container} id='contact'>
        <div style={wrapper}>
            <div style={title} className='text-white'>
                Contact
            </div>
             <div style={desc} className='text-slate-400 '>
                Feel free to reach out to me for any questions or opportunities!
            </div>
            <form style={contactForm} ref={form} onSubmit={handleSubmit}>
              <div style={contactTitle} className='text-white'>Email Me 🚀</div>
              <input placeholder="Your Email" name="from_email" style={contactInput} />
              <input placeholder="Your Name" name="from_name" style={contactInput} />
              <input placeholder="Your Subject" name="from_subject" style={contactInput} />
              <textarea placeholder="Message" rows="4" name="message" style={contactInputMessage }/>
              <button type="submit" value="Send" style={contactButton}>Send</button>
            </form>   
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={()=>setOpen(false)}
              message="Email sent successfully!"
              severity="success"
            />         
        </div>
    </div>
  )
}

export default Contact