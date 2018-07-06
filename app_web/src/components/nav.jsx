import React, { Component } from 'react';
import { Button, Icon,  Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainText from './mainText';
import Es1 from './es1';
import MenuBar from './menu'


export default class Bar extends Component {
    state = { visible: false }
  
    handleButtonClick = () => this.setState({ visible: !this.state.visible })
  
    handleSidebarHide = () => this.setState({ visible: false })
  
    render() {
      const { visible } = this.state
  
      return (
        <div>
          <MenuBar/>
          <Button onClick={this.handleButtonClick}>Toggle visibility</Button>
          <Router>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >
                <Menu.Item as='a'>
                  <Icon name='home' />
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Icon name='gamepad' />
                  <Link to="/Es1">Es1</Link>
                </Menu.Item>
                {/* <Menu.Item as='a'>
                <Icon name='camera' />
                <Link to="/topics">Topics</Link>
                Channels
              </Menu.Item> */}
              </Sidebar>
  
              <Sidebar.Pusher>
                <MainText />
              </Sidebar.Pusher>
              {/* <Route exact path="/" component={App} /> */}
              <Route path="/about" component={Es1} />
  
            </Sidebar.Pushable>
          </Router>
        </div>
      )
    }
  }