import { signInWithPopup } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth/cordova"
import { useState } from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { auth } from "../firebase"
import { useLoginMutation } from "../redux/api/userAPI"
import { User } from "../types/types"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { MessageResponse } from "../types/api-types"

 
function Login() {
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")

    const [login] = useLoginMutation()
  const loginHandler = async()=>{
    try {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth,provider);
        const res = await login({
             name: "Swar",
             email: "adv",
             photo: "d",
             gender,
             role:"user",
             dob: date,
             _id: "asd",
        })
        if("data" in res && res.data){
          toast.success(res.data.message);
        }else{
          const error = res.error as FetchBaseQueryError
          if (error && error.data) {
            const message = error.data as MessageResponse;
            toast.error(message.message);
        } else {
            toast.error("An unknown error occurred");
        }
        }
        
    } catch (error) {
        toast.error("Login Failed")
    }
  }
  return (
    <div className="login">
        <main>
            <h1 className="heading">Login</h1>
            <div>
                <label htmlFor="">Gender</label>
                <select name="" id=""
                 value={gender} 
                 onChange={e => setGender(e.target.value)}
                >
                <option value=""> Select Gender</option>
                <option value="male">Male</option>

                <option value="female" > Female</option>
                </select>
            </div>

            <div>
                <label htmlFor="">Date</label>
                <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                />
            </div>

            <div>
                <p>Already Signed In Once</p>
                <button onClick={loginHandler}>
                    <FcGoogle/> <span>Sign In with Google</span>
                </button>
            </div>
        </main>
    </div>
  )
}

export default Login