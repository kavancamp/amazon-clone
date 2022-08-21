import React from 'react'
import './Account.css'
function Account() {
  return (
    <div className="account">
      <h1>Your Account </h1>

     <div className="account__options">
    
      <div className="boxes">
        <img className="accountOptions__icon" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png" alt="package" />
        <div className="info__box">
          <p className="box__title">Your Orders</p>
          <p className="box__description">Track, return, or buy again</p>
        </div>
      </div>

      <div className="boxes">
        <img className="accountOptions__icon" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png" alt=""  />
        <div className="info__box">
        <h3 className="box__title">Your Addresses</h3>
        <p className="box__description">Manage, add, or remove addresses</p>
        </div>
      </div>






     </div>
  </div>
  )
}

export default Account