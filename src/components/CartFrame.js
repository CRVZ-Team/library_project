import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartSum from "./CartSum";
import "bootstrap/dist/css/bootstrap.css";



function CartFrame() {

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
            <div class="row">
                <div class="col-sm-9" >
                    <CartList get_sum={get_sum}/>
                </div>
                <div class="col-sm-3" >
                    <CartSum sum={overalSum}/>
                </div>
            </div>
        </div>
    )
}

export default CartFrame;