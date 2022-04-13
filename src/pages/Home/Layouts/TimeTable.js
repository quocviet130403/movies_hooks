import React from 'react';
import { Tabs, Radio, Space } from 'antd';
import { useState } from 'react';
import { get_cinema } from '../../../redux/Actions/Actions';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

function TimeTable() {
    const { TabPane } = Tabs;
    const axios = require('axios');
    const dispatch = useDispatch();

    let listCinema = useSelector(state => state.MovieReducer.listCinema);

    const renderCinema = () => {
        if(listCinema == ''){
            return listCinema = [];
        }
        return listCinema.map((cinema,index)=>{
            return <TabPane tab={<img style={{width:50,height:50,borderRadius:'50%'}} src={cinema.logo} alt='icon'/>} key={index}>
                Content of Tab {index}
            </TabPane>
        })
    } 

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinHeThongRap',
        })
            .then(function (response) {
            dispatch(get_cinema(response.data.content));
        });
    
      return () => {
        
      }
    }, [])
    
  return (
        <div className='container px-5 py-20 mx-auto'>
        <Tabs tabPosition='left'>
            {renderCinema()}
        </Tabs>
      </div>
  )
}

export default connect()(TimeTable)
