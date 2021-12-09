import Scrollbars from "react-custom-scrollbars";
import { DashboardPage } from "./dashboard";
import "./styles.css";

export default function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Scrollbars style={{ height: "100%", width: "100%" }}>
        <DashboardPage />
      </Scrollbars>
    </div>
  );
}
