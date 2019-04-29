import React from "react";
import './Tabs.css'
class Tabs extends React.Component{


    onTabClick(tabName) {
        this.props.viewChange(tabName);
    }

    render(){

        return(
            <ul>
                <li>
                <a onClick={(e) => this.onTabClick('gridview')}>Grid View</a>
                </li>
                <li>
                <a onClick={(e) => this.onTabClick('listview')}>List View</a>
                </li>
                <li>
                <a onClick={(e) => this.onTabClick('additem')}>Add Task</a>
                </li>
            </ul>
        );
    }
}

export default Tabs;