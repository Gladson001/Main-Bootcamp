import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./styles/PricingApp.css";

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">React pricing cards</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard  
            title="FREE"
            price={selectMonthly ? "$ 0/month" : " $ 0/year"}
            storage="50 GB Storage"
            users="10"
            sendUp="20"
          />
          <PricingCard
            title="PRO"
            price={selectMonthly ? "$ 9/month" : "$ 70/month"}
            storage="70 GB Storage"
            users="20"
            sendUp="20"
          />
          <PricingCard
            title="PLUS"
            price={selectMonthly ? "$ 10/month" : "$ 90/year"}
            storage="100 GB Storage"
            users="30"
            sendUp="40"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
