import { useLoaderData } from "react-router";

const Users = () => {
    const user = useLoaderData()
    return (
        <div className="text-center ml-40">
            <h2  className="text-2xl bg-red-300 text-center">{user.length} </h2>
          <div>
            {
                user.map(x => <p key={x.user_id}>{x.name}:{x.email}</p>)
            }
          </div>
        </div>
    );
};

export default Users;

