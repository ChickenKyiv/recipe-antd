import React, { Component } from 'react'

import { Dropdown, Menu, Icon, message } from 'antd';


const openNotification = () => {
  message.info("This is a normal message");
};


const HeaderDropdown = () => {

  return (
          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu onClick={() => openNotification()}>
                <Menu.Item key="site-overview">
                  <Icon type="eye-o" />
                  <span style={{ marginLeft: "6px" }}>
                    Overview
                  </span>
                </Menu.Item>
                <Menu.Item key="marketing">
                  <Icon type="area-chart" />
                  <span style={{ marginLeft: "6px" }}>
                    Marketing
                  </span>
                </Menu.Item>
                <Menu.Item key="activity">
                  <Icon type="calendar" />
                  <span style={{ marginLeft: "6px" }}>
                    Activity
                  </span>
                </Menu.Item>
              </Menu>
            }
          >
            <Icon className="card-action-content" type="ellipsis" />
          </Dropdown>
  )
}

export default HeaderDropdown
