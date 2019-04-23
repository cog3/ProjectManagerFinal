import React from "react";

class AddItem extends React.Component{

    render(){ 
        return(
            <div>
                <form>
                    <input type="text" name="task" placeholder="Task Title"></input>
                </form>
                <select name="status">
                    <option value="todo">To-Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </select> 
            </div>
        );
    }
}

export default AddItem;