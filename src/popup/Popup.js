import React from 'react'
import Slider from "react-slick";
import close from "../images/close.png";
import deleteB from "../images/delete.png";
import Media from 'react-media';

export default class Popup extends React.Component {
    render() {
      console.log(this.props.photos)
      let settings = {
        initialSlide:this.props.slide,
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 100
      };
      let smallSettings = {
        initialSlide:this.props.slide,
        centerMode:true,
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow:1,
        autoplay:true,
        speed: 100
      };
      return (
        <Media query={{ maxWidth: 599 }}>
          {matches =>
            matches ? (
            <div className='popup' style={{width:`100%`}}>
            <div className='popup_inner' style={{width:`100%`}}>
            <div style={{
            height:`80`,
            width:`100%`,
            float:`right`,
            maxWidth:`30px`
          }}>
            <div onClick={this.props.closeModal}
              style={{
                background:`url(${close})`,
                height:`30px`,
                width:`30px`,
                marginTop:`-30px`
              }}
            ></div>
          </div>
            <div className="carrousel_wrapper" style={{width:`100%`}}>
                                {    
                                                       
                                    <Slider {...smallSettings}>
                                        {this.props.photos && this.props.photos.length > 0 ?
                                            this.props.photos.map( item => (
                                                <div
                                                style={{margin:`0 auto`}} key={`${item.albumId} ${item.id}`} onClick={this.props.openModal}
                                                >
                                                <img className='slider_image' alt="600x600" src={`${item.url}`} />
                                                </div>
                                    
                                            )) : <div>wait for the photos</div>
                                        }
                                    </Slider>
                                
                                }
                        </div>
                        </div>
                        </div>
            ) : (
              <div className='popup'>
          <div className='popup_inner'>
          <div style={{
            height:`80`,
            float:`right`,
            maxWidth:`30px`
          }}>
            <div onClick={this.props.closeModal}
              style={{
                background:`url(${close})`,
                height:`30px`,
                width:`30px`
              }}
            ></div>
            <div 
              style={{
                background:`url(${deleteB})`,
                marginTop:`5px`,
                height:`36px`,
                width:`30px`
              }}
            ></div>
          </div>
            <div className="carrousel_wrapper">
                                {    
                                                       
                                    <Slider {...settings}>
                                        {this.props.photos && this.props.photos.length > 0 ?
                                            this.props.photos.map( item => (
                                                <div
                                                key={`${item.albumId} ${item.id}`} onClick={this.props.openModal}
                                                >
                                                <img className='slider_image' alt="600x600" src={`${item.url}`} />
                                                </div>
                                    
                                            )) : <div>wait for the photos</div>
                                        }
                                    </Slider>
                                
                                }
                        </div>
                        </div>
                        </div>
            )
          }
        </Media>
        
      );
    }
  }