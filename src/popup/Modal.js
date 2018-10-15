import React, { Component } from 'react';
import Popup from "./Popup";
import "./index.css";

export default class Modal extends Component {
    render() {
        console.log(this.props.photos);
        return (<div className="main">{
            this.props.open ? 
                <Popup
                    closeModal={this.props.closeModal}
                    photos={this.props.photos} open={this.props.open} slide={this.props.slide}
                />    
            : null
          }</div>
            
            )
    }
}
