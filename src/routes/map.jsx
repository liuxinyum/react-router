import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";

class MapRouter extends React.Component{
    render(){
        const {routes}=this.props;

        let defaultRoutes = <Route path="/" component={()=>{
            return <Redirect to="/registry"></Redirect>
        }} key={1} exact></Route>

        return <Switch>{
            routes.map((item,index)=>{
                return <Route path={item.path} component={(apiRouter)=>{
                    const Comp = item.component;
                    return <Comp routes={item.children}{...apiRouter}></Comp>
                }} key={index}></Route>
            }).concat(defaultRoutes)
        }
        </Switch>
    }
}
export default MapRouter;