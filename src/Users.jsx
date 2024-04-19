import { useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData()
    const [user,setUser] = useState(loadedUser)
    const handleDelete = (id)=>{
            console.log(id);
            fetch(`http://localhost:5004/users/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                 console.log(data)
                 if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const reamining = user.filter(use => use._id !== id)
                    setUser(reamining);
                 }
            })

    }
        return (
        <div className="text-center ml-40">
            <h2  className="text-2xl bg-red-300 text-center">{user.length} </h2>
          <div>
            {
                user.map(x => <p key={x._id}>{x.name}:{x.email} {x._id}
                 <Link className="text-blue-500 font-bold text-2xl" to={`/update/${x._id}`}>update</Link>
                <button className="btn"
                 onClick={()=>handleDelete(x._id)}
                >X</button> </p>)
            }
          </div>
        </div>
    );
};

export default Users;

