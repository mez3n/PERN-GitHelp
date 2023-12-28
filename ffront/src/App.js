  import Register from "./registration/register";
  import {Routes,Route} from "react-router-dom"
  import Login from "./registration/login"
  import Profile from "./profilepage/profile.js"
  import GroupPage from "./Groupspage/grouppage.js";
  import Home from "./pages/Home/Home.js";
  import Requests from "./pages/requests/requests.js";
  import Money from "./components/money/money.js";
import Blood from "./components/blood/blood.js";
import Profilerequest from "./components/profilerequest/profilerequest.js";
import Task from "./components/task/task.js";
import Taskspecification from "./taskimp/taskspecification/taskspecification.js";
  function App() {
    
    return (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
  <Route path="/register" element={<Register></Register>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/profile/:id" element={<Profile></Profile>}></Route>
  <Route path="groups" element={<GroupPage></GroupPage>}></Route>
  <Route path="/profile/:id/task/:patientid" element={<Task></Task>}></Route>
  <Route path="/profile/:id/requests" element={<Requests></Requests>}>
    <Route path="money" element={<Money></Money>}></Route>
    <Route path="blood" element={<Blood></Blood>}></Route>
  </Route>
  <Route path="/profile/:id/profilerequest/:requestid" element={<Profilerequest></Profilerequest>}></Route>
  <Route path="/profile/:id/profiletask/:taskid" element={<Taskspecification></Taskspecification>}></Route>
  </Routes>  

      );
  }

  export default App;
