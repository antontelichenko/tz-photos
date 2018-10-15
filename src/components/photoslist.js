import React, { Component } from 'react'

export default class Artistlist extends Component {
    render() {
        console.log(this.props.photos)
        return (
            <div className="main_container">
                {this.props.photos && this.props.photos.length > 0 ?
                    this.props.photos.map( item => (
                        <div
                            className="photo_container" key={`${item.albumId} ${item.id}`} onClick={(e)=>this.props.openModal(`${item.id}`, e)}
                            style={{
                                backgroundImage:`url(${item.url})`,
                                height:`210px`,
                                width:`260px`
                            }}
                        >
                        </div>
            
                    )) : <div>wait for the photos</div>
                }
        
        </div>
            
        )
    }
}
