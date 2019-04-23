import React from "react";

const Row = (props) => {
    const { taskTitle, taskType, taskStatus } = props;
    return(
        <div>
        <tr>
            <td>
                <p>{taskTitle}</p>
                <p>{taskType}</p>
                <p>{taskStatus}</p>
            </td>
        </tr>
        <hr></hr>
        </div>
    );
}
export default Row;