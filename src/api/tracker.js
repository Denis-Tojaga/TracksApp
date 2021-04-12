import axios from "axios";



//everytime we start ngrok from our machine,we need to change this baseURL
//just copy the one from forwarding parameter
export default axios.create({
    baseURL: "http://b1cf71f99c14.ngrok.io"
});