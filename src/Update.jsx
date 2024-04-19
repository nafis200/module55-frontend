import { useLoaderData } from "react-router";



const Update = () => {
    const loadedUser = useLoaderData()
    const handleUpdate = e =>{
          e.preventDefault()
          const form = e.target
          const email = form.email.value
          console.log(email);
          const updateuser = {email}
          fetch(`http://localhost:5004/users/${loadedUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateuser)
          })
          .then(res => res.json())
          .then(data => {
             console.log(data)
             if(data.modifiedCount > 0){
                alert('user updated successfully')
             }
          })
    }
    return (
        <div>
            <h3>{loadedUser.email}</h3>
            <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name="email" defaultValue={loadedUser.email}
          className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          name = "password"
          className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
        </div>
    );
};

export default Update;