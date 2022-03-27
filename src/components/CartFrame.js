import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartSum from "./CartSum";
import "bootstrap/dist/css/bootstrap.css";


const CartFrame = () => (
    <div>
        <div class="row">
            <div class="col-sm-9" >
                <CartList />
            </div>
            <div class="col-sm-3" >
                <CartSum />
            </div>
        </div>
    </div>
)

export default CartFrame;