import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_carousel } from '../../../redux/Actions/Actions';

function HomeCarousel() {
    const axios = require('axios');
    let listCarousel = useSelector(state => state.CarouselReducer.listImage);
    const dispatch = useDispatch();

    const renderCarousel = () => {
      if(listCarousel == ''){
        return listCarousel = [];
      }
      return listCarousel.map((item,index) => {
        return <div key={index}>
          <img src={item.hinhAnh} alt='images' style={contentStyle}/>
        </div>;
      });
    }

    useEffect(() => {
      axios({
        method: 'get',
        url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
      })
          .then(function (response) {
            dispatch(get_carousel(response.data.content));
      });
      return () => {
        
      }
    }, [])
    

    const contentStyle = {
        height: '800px',
        width : '100vw',
        textAlign: 'center',
        objectFit:'cover',
        objectPosition :'top'
      };
    return (
        <Carousel autoplay>
      {renderCarousel()}
    </Carousel>
    )
}

export default connect()(HomeCarousel);

