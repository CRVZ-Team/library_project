import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartSum from "./CartSum";
import "bootstrap/dist/css/bootstrap.css";



function CartFrame() {
    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [overalSum, setOveralSum] = useState('0');

    function get_sum(sum) {
        if (sum == null) {
            setOveralSum(0);
            console.log("sum is null");
        } else {
            setOveralSum(sum);
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-9" >
                    <CartList get_sum={get_sum} books={books} setBooks={setBooks}/>
                </div>
                <div className="col-sm-3" >
                    <CartSum sum={overalSum} setOveralSum={setOveralSum} setBooks={setBooks}/>
                </div>
            </div>
        </div>
    )
}

export default CartFrame;