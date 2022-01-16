import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import AdminLogin from "./AdminLogin";
const Admin = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path = "/admin/admin-login" component={AdminLogin}  />
            </Switch>
        
        </div>
    )
}
export default  Admin;