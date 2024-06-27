import { Provider } from "react-redux";
import store from "./redux/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


function App() {
  return (
    <Provider store={store}>
      <div className="to-do-list-main">
        <div className="to-do-list-main-card" id="to-do-list-heading"><h1>To Do List</h1></div>
        <div className="to-do-list-main-card"><TaskInput/></div>
        <div className="to-do-list-main-card" id="task-list-main"><TaskList/></div>
      </div>
    </Provider>
  );
}

export default App;
