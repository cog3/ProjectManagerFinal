import React from "react";
const Row = (props) => {
    let { taskTitle, taskType, taskStatus, id, key } = props;
    let { link, link2 } = props;
    const statuses = ["done", "review", "in-progress", "todo"];

    if(taskStatus === "done"){
        link = 'Request Re-Review'
    }
    else if(taskStatus === "review"){
        link = "More work Required";
        link2 = "Mark Done";
    }
    else if(taskStatus === "in-progress"){
        link = "Send Back";
        link2 = "Request Review";
    }
    else if(taskStatus === "todo"){
        link = "Start Work";
    }
    
    //THIS CODE WORKS
    console.log(props.allTasks);//here we got all the tasks
    function findTask(taskId){
        return props.allTasks.find(task => task.id === taskId);
    }
    console.log(findTask(1));
    //THIS CODE WORKS

    function prevColumn(taskId){
        let task = findTask(taskId);
        console.log(task.column);
        let columnIndex = statuses.findIndex(name => task.column === name);
        if (columnIndex > 0) {
          columnIndex--
          task.column = statuses[columnIndex];
          props.updatePost(task.id, task.title, task.type, task.column);
        }
      }
      function nextColumn(taskId){
        let task = findTask(taskId);
        console.log(task.column);
        let columnIndex = statuses.findIndex(name => task.column === name);
        if (columnIndex < statuses) {
          columnIndex++
          task.column = statuses[columnIndex];
          props.updatePost(task.id, task.title, task.type, task.column);
        }
    }
       return(
        <div>
        <tr>
            <td>
                <p>{taskTitle}</p>
                <p>{id}</p>
                <p>{taskType}</p>
                <p>{taskStatus}</p>
                <p>
                    <button onClick = {prevColumn(id)}>{link}</button>>
                </p>
                <p>
                    <button onClick = {nextColumn(id)}>{link2}</button>>
                </p>
            </td>
            
        </tr>
        <hr></hr>
        </div>
    );
}
export default Row;