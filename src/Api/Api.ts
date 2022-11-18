import axios from "axios";



export const sendMessage = (obj : any)=> {
    debugger
    return axios.post('https://gmail-node.vercel.app/sendMessage', {obj})}