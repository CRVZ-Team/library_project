import jwt_decode from 'jwt-decode';
import axios from 'axios';

//used in book.js to disable buy buttons
export const usersBooks = async() => {
    var ls = localStorage.getItem('token');
    var decoded = jwt_decode(ls);

    const { data } = await axios.get("http://localhost:8080/api/yourbooks/" + decoded.id);
    //setting books list which is used for sorting
    var ids = [];
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].id);
        ids.push(data[i].id);
    }
    console.log("Function IDS");
    console.log(ids);
    return ids;
}