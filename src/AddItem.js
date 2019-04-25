import React from "react";

class AddItem extends React.Component{
 state = {newTask: ''}

 onFormSubmit = (event) => {
     event.preventDefault();

     this.props.onSubmit(this.state.newTask);
     this.setState({newTask: ''})
 }
    render(){ 
        return(
            <div>
                <form>
                    <input type="text" name="task" placeholder="Task Title" onSubmit={this.onFormSubmit}></input>
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