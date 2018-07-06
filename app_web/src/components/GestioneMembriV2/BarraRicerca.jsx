import { Grid, Button, Input, Header } from 'semantic-ui-react';
import React from 'react';


class BarraRicerca extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }
        this.handleChange = this.handleChange.bind(this);
        this.newMemberIns = this.newMemberIns.bind(this);
    };

    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    newMemberIns() {
        this.props.onMemberInsert(this.state.value);
    }
    render() {
        return (
            <div>
                <Grid.Column width={3}>
                    <Header as='h3'>Aggiungi nuovo membro</Header>
                    <Input type='text' placeholder='aggiungi nuovo membro...'
                        value={this.props.value}
                        onChange={this.handleChange}
                        action error={this.props.error}>
                        <input />
                        <Button onClick={this.newMemberIns} disabled={this.props.errorButton || this.props.value === ""} >aggiungi</Button>
                    </Input>
                </Grid.Column>
            </div>
        )
    }
}

export default BarraRicerca;