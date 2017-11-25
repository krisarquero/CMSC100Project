import React, {Component} from "react";
import MenuBar from "./MenuBar.jsx";

export default class MenuSection extends Component {
    constructor(props) {
        super(props);

        const {tabs = [{name : null}]} = props;

        const firstTab = tabs[0];

        this.state = {
            currentTab : firstTab.name
        } ;
    }

    onTabClick = (name) => {
        this.setState({currentTab : name});
    }

    render() {
        const {tabs, ...otherProps} = this.props;
        const {currentTab} = this.state;

        return (
            <MenuBar
                {...otherProps}
                currentTab={currentTab}
                onTabClick={this.onTabClick}
                tabs={tabs}
            />
        )
    }
}
