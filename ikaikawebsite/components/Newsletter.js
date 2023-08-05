import { motion } from 'framer-motion';
import { useState } from "react"; 

const Newsletter = () => { 

   const [sent, setSent] = useState(false); 

   const handleFormSubmit = async (e) => { 
      e.preventDefault();
      const address = 'http://localhost:3111/mailchimp'
      const emailValue = document.getElementById('footer__input__text').value; 
      const email = JSON.stringify({email: emailValue})
      setSent(true);
      const res = await fetch(
         address, {
         method: "POST", 
         headers: {'Content-Type': 'application/json'},
         body: email
      }); 
   }

   return ( 
      <section className='form__container'> 
         <form>
         {!sent ? <label> <h2> SIGN UP FOR UPDATES FROM IKAIKA RECORDS </h2> </label> : null}
         {!sent ? <a> EMAIL</a> : null} 
         {!sent ? <input type="email"  placeholder="email@example.com" id='footer__input__text' className='input__text' required></input> : null}
         {!sent ? <motion.input whileHover={{backgroundColor: '#a6a6a6' }} transition={{duration: 0.25}} className="input__submit" type='submit' value='SUBSCRIBE' onClick={handleFormSubmit} id='footer__input__submit' required></motion.input > : null}
         {sent ? <p> Thanks for signing up to the Ikaika Records Newsletter! You should receive an email confirmation shortly. </p>: null}
         </form>
      </section>
   )
}

export default Newsletter; 
