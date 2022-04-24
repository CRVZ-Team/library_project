import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from 'axios';
import CartItem from "./CartItem";
import CartList from "./CartList";
import "bootstrap/dist/css/bootstrap.css";

const CartFrame = ({sum}) => (
    <div className="container" style={card}>
        
        {sum == 0 ? 
            <>
                
            </>
        :
            <>
                <h4>Check out your cart </h4>
                <h3>Total sum: {sum}$</h3>
                <button className="btn btn-success">Checkout</button>
                <hr></hr>
            </>
        }
    </div>
)

const card = {

}

export default CartFrame;
