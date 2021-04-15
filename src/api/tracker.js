import axios from "axios";



//everytime we start ngrok from our machine,we need to change this baseURL
//just copy the one from forwarding parameter
export default axios.create({
    baseURL: "http://3a8ae52c868b.ngrok.io"
});