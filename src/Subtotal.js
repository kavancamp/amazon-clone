import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate} from "react-router-dom";


function Subtotal() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();


  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
   
      <button
        disabled={basket.length === 0}
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Checkout
     </button>
    

    </div>
  );
}

export default Subtotal;