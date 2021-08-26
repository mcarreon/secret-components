import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

import "./assets/styles/pages/app.scss";

function App() {
  const labelConfig = {
    labelTitle: "Payment Terms"
  }

  return (
    <div className="App">
      <div className="buttons">
        <Button text="New Invoice" add />
        <Button text="Mark as Paid" />
        <Button text="Edit" color="light" />
        <Button text="Edit" color="dark" />
        <Button text="Save as Draft" color="lightAlt" />
        <Button text="Save as Draft" color="darkAlt" />
        <Button text="Delete" color="danger" />
      </div>
      <div className="wide-btn-container">
        <Button text="+ Add New Item" color="light" wide/>
      </div>
      <div>
        <Dropdown labelConfig={labelConfig} />
      </div>
    </div>
  );
}

export default App;
