import React from "react";

const Row = (props) => {
    const { taskTitle, taskType, taskStatus, id } = props;
    let { link, link2 } = props;
    const column = ["in-progress", "review", "todo", "done"]
    if(taskStatus === "done"){
        link = 'Request Re-Review'
        let currentColumn = column[3];
    }
    else if(taskStatus === "review"){
        link = "More work Required";
        link2 = "Mark Done"
        let currentColumn = column[1];

    }
    else if(taskStatus === "in-progress"){
        link = "Send Back";
        link2 = "Request Review";
        let currentColumn = column[0];

    }
    else if(taskStatus === "todo"){
        link = "Start Work";
        let currentColumn = column[2];

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
                    <a onClick = {props.column === "done" ? this.props.updatePost(props.id, props.title, props.type, 'review'): 
                    this.props.updatePost(props.id, props.title, props.type, props.column)}>{link}</a>
                </p>
                <p>
                    <a onClick="">{link2}</a>
                </p>
            </td>
            
        </tr>
        <hr></hr>
        </div>
    );
}
export default Row;
//(isMember ? "$2.00" : "$10.00");
// x == y ? z + x :
//   x == z ? z + y :
//   z + 1;