import { Grid } from 'semantic-ui-react';
import React from 'react';
import uuidv1 from 'uuid/v1'
import BarraRicerca from './GestioneMembriV2/BarraRicerca'
import Lista from './GestioneMembriV2/Lista'

class GestioneMembriV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            error: false,
            errorButton: false,
            items: [
                { id: uuidv1(), name: 'Pietro', approved: false },
                { id: uuidv1(), name: 'Antonio', approved: false },
                { id: uuidv1(), name: 'Paperino', approved: true },
                { id: uuidv1(), name: 'Pippo', approved: false },
                { id: uuidv1(), name: 'Luigi', approved: true }
            ]
        };
        this.onButtonClick = this.onButtonClick.bind(this)
        this.onMemberInsert = this.onMemberInsert.bind(this)
    }

    onButtonClick(item) {
        this.setState(this.state.items.map(el => {
            if (item.id === el.id) {
                item.approved = !item.approved;
            }
            return item
        }));
    }
    onMemberInsert(value){
        
        this.setState({
            items: [...this.state.items, { id: uuidv1(), name: value, approved: false }]
        })
    }

    render() {
        return (
            <div>
                <Grid centered>
                    <Grid.Row >
                        <BarraRicerca items={this.state.items} 
                        onMemberInsert={this.onMemberInsert} />
                    </Grid.Row >
                    <Grid.Row columns={4} >
                        <Grid.Column width={3}>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Lista
                                items={this.state.items}
                                isApproved={true}
                                onButtonClick={this.onButtonClick} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Lista
                                items={this.state.items}
                                isApproved={false}
                                onButtonClick={this.onButtonClick} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                        </Grid.Column>
                    </Grid.Row >
                </Grid>
            </div>
        );
    }

}


export default GestioneMembriV2