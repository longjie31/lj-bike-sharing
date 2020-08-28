import React from 'react';
import { Card, Row, Col,Modal} from 'antd';

export default class Gallery extends React.Component{
    state = {
        currentImg:'',
        modalShow:false
    }
    openGallery = (imgSrc)=>{
        this.setState({
            modalShow:true,
            currentImg:imgSrc
        })
    }

    render(){
        const imgs = [
            ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
            ['6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'],
            ['11.jpg','12.jpg','13.jpg','14.jpg','15.jpg'],
            ['16.jpg','17.jpg','18.jpg','19.jpg','20.jpg']
        ]
        const imgList = imgs.map((list)=>list.map((item)=>
            <Card style={{marginBottom:10}}
                // eslint-disable-next-line jsx-a11y/alt-text
                cover={<img src={`/gallery/${item}`}/>}
                onClick={()=>{this.openGallery(`/gallery/${item}`)}}
            >
                <Card.Meta 
                    title="react admin"
                    description="my picture"
                />
            </Card>
            ))
        return(
        <div>
            <Row gutter={16}>
                <Col md={6}>
                    {imgList[0]}
                </Col>
                <Col md={6}>
                    {imgList[1]}
                </Col>
                <Col md={6}>
                    {imgList[2]}
                </Col>
                <Col md={6}>
                    {imgList[3]}
                </Col>
            </Row>
            <Modal visible={this.state.modalShow}
            footer={null}
            title="lj的图片画廊"
            onCancel = {
                () => {
                    this.setState({
                        modalShow: false,
                        currentImg: ''
                    })
                }
            } >
                <img src={this.state.currentImg} alt="加载中..." style={{width:'100%'}}/>
            </Modal>
        </div>
        );
    }
}