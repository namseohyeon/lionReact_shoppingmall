//import React, { useContext } from "react";
// import { OrderContext } from "../../contexts/OrderContext";
import Type from "./Type";
import Option  from "./Option";

function OrderPage({ setStep }) {
  //const [orderDatas] = useContext(OrderContext);

  return (
    <div>
      <h1>주문 페이지</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div style={{width:"50%"}}>
            <h2>총금액:</h2>
            <button>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;