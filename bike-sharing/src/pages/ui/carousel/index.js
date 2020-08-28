import React from 'react';
import { Card, Row, Col, Modal, Carousel} from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default class Carousels extends React.Component{
    onChange(a,b,c){
        console.log(a,b,c);
    }

    

    render(){ 
        return(<div>
            <Carousel effect="fade" autoplay>
                <div>
                    <h3 style={this.contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={this.contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={this.contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={this.contentStyle}>4</h3>
                </div>
            </Carousel>,
        </div>)
    }
}