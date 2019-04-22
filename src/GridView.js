import React from "react";
import Row from "./Row";

class GridView extends React.Component{
render(){
    return(
        
        <div>
            <h1>"This is Grid View!"</h1>
            <div>
                <div className = "todo">
                    {this.props.column}
                </div>
                <div className = "inprogress"></div>
                <div className = "review"></div>
                <div className = "done"></div>        
            </div>
        </div>
    );
}
}
export default GridView;