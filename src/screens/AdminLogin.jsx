import "../Styling/Adminlogin.css"



const AdminLogin = ()=>{
    return(
        <div className="main1">
            <div>
                <h1 style={{textAlign:"center",color:"white"}} >Admin Login</h1>
            </div>
            <form>
        <div class="form-group">
          <label for="exampleInputEmail1" style={{color:"white"}} >Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
          
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" style={{color:"white"}} >Username</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
          
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"  style={{color:"white"}} >Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
       
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
 
        
      </div>

    )
}
export default AdminLogin