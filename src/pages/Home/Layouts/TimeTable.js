import React from 'react';
import { Tabs, Radio, Space } from 'antd';
import { useState } from 'react';

export default function TimeTable() {
    const { TabPane } = Tabs;
  return (
        <div className='container px-5 py-24 mx-auto'>
        <Tabs tabPosition='left'>
            <TabPane tab={<img style={{width:50,height:50,borderRadius:'50%'}} src='https://picsum.photos/200/300?grayscale' alt='icon'/>} key="1">
                Content of Tab 1
            </TabPane>
            <TabPane tab={<img style={{width:50,height:50,borderRadius:'50%'}} src='https://picsum.photos/200/300?grayscale' alt='icon'/>} key="2">
                Content of Tab 2
            </TabPane>
            <TabPane tab={<img style={{width:50,height:50,borderRadius:'50%'}} src='https://picsum.photos/200/300?grayscale' alt='icon'/>} key="3">
                Content of Tab 3
            </TabPane>
        </Tabs>
      </div>
  )
}
