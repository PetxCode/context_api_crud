import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import { GlobalProvider } from "./Component/ContextAPI/GlobalState";
import HeaderBar from "./Component/HeaderBar";
import "antd/dist/antd.css";
import { GlobalStyle } from "./Component/GlobalStyle";
import UseCase from "./Component/UseCase/UseCase";
import FeedBack from "./Component/FeedBack/FeedBack";
import EditStudent from "./Component/UseCase/Files/EditStudent";
import AddStudent from "./Component/UseCase/Files/AddStudents";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Router>
          <GlobalStyle />
          <HeaderBar />
          <Switch>
            {" "}
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/usecase" component={UseCase} />
            <Route exact path="/feed" component={FeedBack} />
            <Route exact path="/student/:id" component={EditStudent} />
            <Route exact path="/add" component={AddStudent} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
