import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = () => {
    return(
        <Route 
            render={(logged) => {
                if(logged){
                    return <Redirect to={"/home"}/>
                }else{
                    return <Redirect to={"/login"}/>
                }
            }}
        />
    )
};

export default ProtectedRoute;
