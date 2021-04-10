import axios from "axios";



//everytime we start ngrok from our machine,we need to change this baseURL
//just copy the one from forwarding parameter
export default axios.create({
    baseURL: "http://9539fa238ad5.ngrok.io"
});