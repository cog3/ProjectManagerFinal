import React from "react";
import Row from "./Row";
class ListView extends React.Component{
    state = { status: '', type: '' }

    onStatusChange() {

    }

    function () {

    }

    render(){
        const allTasks = this.props.passingPropsThroughThisVar;
        console.log(allTasks);
        const rows = allTasks

            .filter(t => {
                return (this.state.status) ? t.column === this.state.status : true;
            })
            .filter(t => {
                return (this.state.type) ? t.type === this.state.type : true;
            })

        rows.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
            let nameA = a[this.title.sort].toUpperCase(); // ignore upper and lowercase
            let nameB = b[this.title.sort].toUpperCase(); // ignore upper and lowercase
            // Sorts alphabetically.  -1 puts it before. 1 puts it after
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
})
    .map(t => {
                return(
                    <Row
                        taskTitle = {t.title}
                        taskType = {t.type}
                        taskStatus = {t.column}
                    />
                );
            });
        return(

            <div>
                <div className="form-group list-filters__form-group">
                    <label htmlFor="sort">Sort</label>
                    <select name="sort"
                            className="form-control"
                            value={this.props.sort}
                            onChange={t => {
                                this.setState({ sort: t.target.value })
                            }}>
                        <option value="taskTitle">Title</option>
                        <option value="taskType">Status</option>
                        <option value="taskStatus">Type</option>
                    </select>
                </div>

                <div className="form-group list-filters__form-group">
                    <label htmlFor="status">Status</label>
                    <select name="status"
                            className="form-control"
                            value={this.props.status}
                            onChange={e => {
                                this.setState({ status: e.target.value })
                            }}>
                        <option value="">Select Status</option>
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <div className="form-group list-filters__form-group">
                    <label htmlFor="type">Type</label>
                    <select name="type"
                            className="form-control"
                            value={this.props.type}
                            onChange={e => {
                                this.setState({ type: e.target.value })
                            }}>
                        <option value="">Select Type</option>
                        <option value="task">Task</option>
                        <option value="feature">Feature</option>
                        <option value="bug">Bug</option>
                    </select>
                </div>
                {rows}
            </div>

            
            
        );
    }
}
export default ListView;