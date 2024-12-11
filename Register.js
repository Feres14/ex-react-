import React,{userState}from "react";
import axios from "axios"
import{useNavigate} from "react-router-dom"
import "./Form.css";
const Register=()=>{
    const[formData,setFormData]=useState({
        firstName:"";
        lastName:"";
        email:"";
        password:"";
        confirmPassword:"";
    });
    const [errors,setErrors]=useState({});
    const[message,setMessage]=useState("");
    const navigate=useNavigate();
    const handleChange=(e) =>{
        setFormData({
            ...formData, (())
        })
    }
}