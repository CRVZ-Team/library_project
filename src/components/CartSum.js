import { useUser } from "../auth/useUser";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import CartList from "./CartList";
import "bootstrap/dist/css/bootstrap.css";

const CartFrame = ({sum, setOveralSum, setBooks}) => {
    const [token] = useToken();
    const user = useUser();
    const navigate = useNavigate();
    
    const handleCheckOut = async() => {
        if (!token) {
            navigate('/login');
        } else {
            const books = [];
            const cartBooks =  JSON.parse(localStorage.getItem("cart"));
            for (let i = 0; i < cartBooks.length; i++) {
                books.push({'id': cartBooks[i].id, 'subs_id': cartBooks[i].subs_id, 'exp_date': cartBooks[i].exp_date});
                }; 
            const response = await axios.post('http://localhost:8080/api/invoice',{
                user_id: user.id,
                user_email: user.email,
                date: Date(),
                total_price: sum,
                books: books
        });

        if (response.status === 201) {
            localStorage.removeItem("cart");
            setBooks([]);
            setOveralSum(0);
            alert("Checkout successful");
        }
    }
    };

    return (
    <div className="container" style={card}>
            <>
                <h4>Check out your cart </h4>
                <h3><b>Total:</b> {sum} dkk</h3>
                <button className="btn btn-success" onClick={() => {handleCheckOut()}} disabled={sum === 0} >Checkout</button>
                <hr></hr>
            </>
    </div>
    )
}

const card = {

}

export default CartFrame;
