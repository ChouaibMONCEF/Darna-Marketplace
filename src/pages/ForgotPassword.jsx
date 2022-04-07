import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => {setEmail(e.target.value)}

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('An Email has been sent !!')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link className="forgotPasswordLink" to='/signin'>Sign In</Link>
          <div className="signInBar">
            <div className="signInText">
              <button className="signInButton">
                <ArrowRightIcon fill='#fff' width='34px' height="34px" />
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword
 