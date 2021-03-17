import React, {useState} from 'react';
import axios from 'axios';
import './style.css';

function passwordReset () {
    return <Reset/>;
};

function Reset(){
    const [details,setDetails] = useState({resetPasswordLinkl:`${window.location.href}`, newPassword:'', confirmNewPassword:''});
    // const url = window.location.href;
    // setDetails({...details,resetPasswordLinkl:url});
    const handleSubmit = () =>{
        if(details.newPassword===details.confirmNewPassword){
        axios.put('/api/resetpassword', details).then(
            res=>{
                alert(res.data.message);
                // setLoggedin(true);
            },
        )
        .catch(
            err=>{
                alert(err);
            }
        )}
        else{
            try{
                throw ('Password does not match');
            }catch(e){
                alert(e);
            }
        }
    }
    return (
        <div>
            <input className="button1" placeholder="New Password" onChange={(e)=>setDetails({...details, newPassword:e.target.value})}></input>   
            <input className="button2" placeholder="Confirm New Password" onChange={(e)=>setDetails({...details, confirmNewPassword:e.target.value})}></input>   
            <button className="button" onClick={handleSubmit} >Reset</button>
        </div>
    );
}

export default passwordReset;