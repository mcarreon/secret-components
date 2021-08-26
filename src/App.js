import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

import "./assets/styles/pages/app.scss";

function App() {
  const labelConfig = {
    labelTitle: "Payment Terms",
  }

  const testOptions = [
    "Net 1 Day", 
    "Net 7 Days", 
    "Net 14 Days", 
    "Net 30 Days"
  ]

  const altTestOptions = [
    "Net 3 Days", 
    "Net 6 Days",
  ]

  const testMap = altTestOptions.map((option, key) => {
    return <option value={key} key={key}>{option}</option>
  })

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
        <Button text="Delete" color="danger" child={<TestComponent />}/>
      </div>
      <div className="wide-btn-container">
        <Button text="+ Add New Item" color="light" wide/>
      </div>
      <div>
        <Dropdown options={testOptions} customOptions={testMap} labelConfig={labelConfig} />
      </div>
    </div>
  );
}

const TestComponent = () => { return <a target="__blank" href="https://google.com">Google</a>}

export default App;
