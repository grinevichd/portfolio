import axios from "axios";



export const sendMessage = (obj : any)=> {

    return axios.post('https://gmail-node.vercel.app/sendMessage', {obj})}