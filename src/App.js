import "./styles.css";
import { JoinUs } from "./Components/Join";
import { Login } from "./Components/Login";
import { Search } from "./Components/Search";
import { Home } from "./Components/Home";
import { Settings } from "./Components/Settings";
import { Contact } from "./Components/Contact";
import { Help } from "./Components/Help";
import { Download } from "./Components/Download";
export default function App() {
  return (
    <div id="Container">
      <div id="left">
        <JoinUs />
        <Login />
        <Search />
        <Home />
      </div>
      <div id="right">
        <Settings />
        <Contact />
        <Help />
        <Download />
      </div>

      <div id="right"></div>
    </div>
  );
}
