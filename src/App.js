
import './App.css';
import Topbar from './Components/TopBar/Topbar'
import Home from './Pages/Home/Home';
import Single from './Pages/single/Single'
import Write from './Pages/write/Write'
import Settings from './Pages/Settings/Settings';
import Login from './Pages/login/Login'
import Register from './Pages/register/Register';
import { Switch, Route, Link } from "react-router-dom";


function App() {
  const user = true;
  return (
   <>
 <Topbar/>
 <Switch>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/register/" component={user? Home: Register} />
<Route exact path="/login/" component={user? Home :Login} />
<Route exact path="/write/" component={user ? Write : Register} />
<Route exact path="/write/" component={ user ? Settings : Register} />
<Route exact path="/post/postId" component={Single} />

</Switch>

 </Switch>
  
</> 
  
  );
}

export default App;
