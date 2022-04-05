import { useState } from "react";
import "./App.css";
import OrderPage from "./pages/OrderPage/OrderPage";
function App() {
  //const [step, setStep] = useState(0);
  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
    </div>
  );
}

export default App;