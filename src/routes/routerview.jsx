import React from "react";
import MapRouter from "./MapRouter.jsx";
import Routes from "./routes"
class RouterView extends React.Component{
    render(){
        const {routes} = this.props;
        return <MapRouter routes={routes===undefined?Routes:routes}></MapRouter>
    }
}
export default RouterView;