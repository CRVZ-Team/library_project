import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import CartList from "./CartList";
import "bootstrap/dist/css/bootstrap.css";

const CartFrame = () => (
    <div class="container" style={card}>
        <h4>Check out your cart </h4>
        <h3>Price: 23.4$</h3>
        <button class="btn btn-primary">Checkout</button>
    </div>
)

const card = {
    border: '1px solid black',
}

export default CartFrame;
