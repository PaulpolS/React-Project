import './FormComponent.css'
import {useState} from "react"

const FormComponent = () =>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    //มันจะเก็บค่าเอาไว้ตั้งแต่เรากรอกลงไปใน inputเลย

    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    //สีเพื่อบอกว่ากรอกถูกหรือไม่
    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [rePasswordColor,setRePasswordColor] = useState('')

    const validateForm = (e)=>{
        //ให้หลังจากกดปุ่มsubmitแล้วค่ายังค้างอยู่
        e.preventDefault()

        //ตรวจว่าUsername มีมากกว่า 8 ตัวอักษรมั้ย
        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('Enter minimum 8 charactor')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Email incorrect format')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('Password must be atlest 8 Charactor')
            setPasswordColor('red')
        }

        if(rePassword != " " && rePassword === password){
            setErrorPassword('')
            setRePasswordColor('green')
        }else{
            setErrorPassword('Re Password must be same as Password')
            setRePasswordColor('red')
        }
        

    }

    return(
        <div className = "container" onSubmit={validateForm}>
            <form className="form">
                <h2>Registor Form</h2>
                <div className="Form-control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="Form-control">
                    <label>email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}style={{borderColor:emailColor}}></input>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="Form-control">
                    <label>password</label>
                    <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)}style={{borderColor:passwordColor}}></input>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="Form-control">
                    <label>password confirm</label>
                    <input type="password"value={rePassword} onChange={(e)=>setRePassword(e.target.value)}style={{borderColor:rePasswordColor}}></input>
                    <small style={{color:rePasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">Registor</button>
            </form>
        </div>
    )
}

export default FormComponent