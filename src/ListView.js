import React from "react";
import Row from "./Row";
class ListView extends React.Component{
    render(){
        const allTasks = this.props.passingPropsThroughThisVar;
        console.log(allTasks);
        const rows = allTasks.map(t => {
            return(
                <Row 
                    taskTitle = {t.title}
                    id = {t.id}
                    taskType = {t.type}
                    taskStatus = {t.column}
                />
            );
        })
        return(
            <div>
                <h1>"This is List View!"</h1>
                {rows}
            </div>
            
            
        );
    }
}
export default ListView;