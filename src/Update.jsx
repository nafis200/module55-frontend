import { useLoaderData } from "react-router";



const Update = () => {
    const loadedUser = useLoaderData()
    return (
        <div>
            <h3>{loadedUser.email}</h3>
        </div>
    );
};

export default Update;