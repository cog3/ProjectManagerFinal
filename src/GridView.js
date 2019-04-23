import React from "react";
import Row from "./Row";


class GridView extends React.Component{
render(){
    const allTasks = this.props.passingPropsThroughThisVar;
    const ToDoColumn = allTasks.filter(task => task.column == 'todo') ;
    const InProgressColumn = allTasks.filter(task => task.column == 'in-progress');
    const ReviewColumn = allTasks.filter(task => task.column == 'review');
    const DoneColumn = allTasks.filter(task => task.column == 'done');
    return(
        
        <div>
            <h1>"This is Grid View!"</h1>
            <div>
                <div className = "todo">
                    <h1>To-DO</h1>
                    {ToDoColumn.map(t => 
                        <Row 
                        taskTitle={t.title}
                        taskType = {t.type}
                        taskStatus = {t.column}
                    />)}
                </div>
                <div className = "inprogress">
                    <h1>In Progress</h1>
                    {InProgressColumn.map(t => 
                        <Row 
                        taskTitle={t.title}
                        taskType = {t.type}
                        taskStatus = {t.column}
                    />)}
                </div>
                <div className = "review">
                    <h1>Review</h1>
                    {ReviewColumn.map(t => 
                        <Row 
                        taskTitle={t.title}
                        taskType = {t.type}
                        taskStatus = {t.column}
                    />)}
                </div>
                <div className = "done">
                    <h1>Done</h1>
                    {DoneColumn.map(t => 
                        <Row 
                        taskTitle={t.title}
                        taskType = {t.type}
                        taskStatus = {t.column}
                    />)}
                </div>        
            </div>
        </div>
    );
}
}
export default GridView;