import React, { Component } from 'react';

import {connect} from 'react-redux';
import { photosListAll} from '../actions';
import {bindActionCreators} from 'redux';

import Photoslist from '../components/photoslist';
import Modal from '../popup/Modal';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.photosListAll();
    }       
    open=false;
    slide;
    openModal = (key, e) => {
        this.open=true;
        this.refresher = this.forceUpdate()
        console.log(this.open);
        this.slide=key-1;
        // console.log(key, e)
    };
    closeModal = () => {
        this.open=false;
        this.refresher = this.forceUpdate()
        console.log(this.open);
    };
    render(){
        console.log(this.props.photos)

        return (
            <div>
                <Photoslist photos={this.props.photos.photosList} openModal={this.openModal} open={this.open}/>
                <Modal photos={this.props.photos.photosList} open={this.open} slide={this.slide}  closeModal={this.closeModal}/>
            </div>
        ) 
    }

}

function mapStateToProps(state){
    return{
        photos:state.photos
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({photosListAll},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)