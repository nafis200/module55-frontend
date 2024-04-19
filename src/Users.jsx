import { useLoaderData } from "react-router";

const Users = () => {
    const user = useLoaderData()
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
                 }
            })

    }
        return (
        <div className="text-center ml-40">
            <h2  className="text-2xl bg-red-300 text-center">{user.length} </h2>
          <div>
            {
                user.map(x => <p key={x._id}>{x.name}:{x.email} {x._id}<button className="btn"
                 onClick={()=>handleDelete(x._id)}
                >X</button> </p>)
            }
          </div>
        </div>
    );
};

export default Users;

