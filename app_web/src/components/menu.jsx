import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Es1 from './es1';
import mainText from './mainText';
import Topics from './topics';
import mainLogIn from "./mainLogin";
import GestioneMembri from './gestioneMembri';
import GestioneMembriV2 from './GestioneMembriV2';



export default class MenuExamplePointing extends Component {
    state = { activeItem: 'mainText' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Router>
                <div>
                    <Menu pointing>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'mainText'}
                            onClick={this.handleItemClick}
                            as={Link} to='/mainText'
                        />
                        <Menu.Item
                            name='messages'
                            active={activeItem === 'es1'}
                            // onClick={Bar}
                            onClick={this.handleItemClick}
                            as={Link} to='/es1'
                        />
                        <Menu.Item
                            name='Topics'
                            active={activeItem === 'Topics'}
                            onClick={this.handleItemClick}
                            as={Link} to='/topics'
                        />
                        <Menu.Item
                            name='GestioneMembri'
                            active={activeItem === 'GestioneMembri'}
                            onClick={this.handleItemClick}
                            as={Link} to='/GestioneMembri'
                        />
                        <Menu.Item
                            name='GestioneMembriV2'
                            active={activeItem === 'GestioneMembriV2'}
                            onClick={this.handleItemClick}
                            as={Link} to='/GestioneMembriV2'
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item name='LogIn'
                                active={activeItem === 'mainLogIn'}
                                onClick={this.handleItemClick}
                                as={Link} to='/mainLogIn'

                            />
                        </Menu.Menu >
                    </Menu>
                    <Switch>
                        <Route exact path="/mainText" component={mainText} />
                        <Route exact path="/es1" component={Es1} />
                        <Route exact path="/topics" component={Topics} />
                        <Route exact path="/GestioneMembri" component={GestioneMembri} />
                        <Route exact path="/GestioneMembriV2" component={GestioneMembriV2} />
                        <Route exact path="/mainLogIn" component={mainLogIn} />
                    </Switch>
                </div>

            </Router>
        )
    }
}