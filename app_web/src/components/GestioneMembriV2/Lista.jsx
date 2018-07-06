import { Grid, Button, List, Card, Icon } from 'semantic-ui-react';
import React from 'react';
// import { constants } from 'zlib';


class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(item) {
        this.props.onButtonClick(item);
    }

    ToggleList() {
        if (this.props.isApproved) {
            var Member = this.props.items.filter((item) => !item.approved);

        } else {
            Member = this.props.items.filter((item) => item.approved);
        }
        return Member;
    }
    ToggleListIcon() {
        if (this.props.isApproved) {
            var Member = 'user plus'
        } else {
            Member = 'user times'
        }
        return Member;
    }
    ToggleListName() {
        if (this.props.isApproved) {
            var Member = 'Membri non approvati'
        } else {
            Member = 'Membri approvati'
        }
        return Member;
    }

    render() {
        var Member = this.ToggleList();
        var ListMember = Member.map(item =>
            <List>
                <List.Item key={item.id}>
                    <List.Content floated='right'>
                        <Button onClick={(e) => this.handleClick(item, e)}><Icon name={this.ToggleListIcon()} /></Button>
                    </List.Content>
                    <List.Content><Icon name='user' /> {item.name}</List.Content>
                </List.Item>
            </List>
        );
        return (
            <div>
                <Grid.Row columns={4}>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <Card>
                            <Card.Content>
                                <Card.Header>{this.ToggleListName()}</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                {ListMember}
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='users' />
                                {Member.length}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </div>
        );
    }
}

export default Lista;