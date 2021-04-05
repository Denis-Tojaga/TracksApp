import axios from "axios";



//everytime we start ngrok from our machine,we need to change this baseURL
//just copy the one from forwarding parameter
export default axios.create({
    baseURL: "http://2dbfb1ea5ac0.ngrok.io"
});