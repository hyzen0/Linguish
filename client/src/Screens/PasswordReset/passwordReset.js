import React, {useState} from 'react';
import axios from 'axios';
import './style.css';

function passwordReset () {
    return <Reset/>;
};

function Reset(){
    const [details,setDetails] = useState({resetPasswordLinkl:'', newPassword:'', confirmNewPassword:''});
    const url = window.location.href;
    setDetails({...details,confirmNewPassword:url});
    const handleSubmit = () =>{
        axios.post('/api/resetpassword', details).then(
            res=>{
                alert(res.data.message);
                // setLoggedin(true);
            },
        )
        .catch(
            err=>{
                alert(err.message);
            }
        )
    }
    return (
        <div>
            <input placeholder="New Password" onChange={(e)=>setDetails({...details, newPassword:e.target.value})}></input>   
            <input placeholder="Confirm New Password" onChange={(e)=>setDetails({...details, confirmNewPassword:e.target.value})}></input>   
            <button className="button" onClick={handleSubmit} >Reset</button>
        </div>
    );
}

export default passwordReset;