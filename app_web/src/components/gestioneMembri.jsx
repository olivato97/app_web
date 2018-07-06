import { Grid, Button, List, Input, Header, Card, Icon } from 'semantic-ui-react';
import React from 'react';
import uuidv1 from 'uuid/v1'

class GestioneMembri extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			error: false,
			errorButton : false,
			items: [
				{ id: uuidv1(), name: 'Pietro', approved: false },
				{ id: uuidv1(), name: 'Antonio', approved: false },
				{ id: uuidv1(), name: 'Luigi', approved: true }
			]
		};

		this.handleChange = this.handleChange.bind(this);
		this.newMemberIns = this.newMemberIns.bind(this);
		this.ToggleMember = this.ToggleMember.bind(this);
		this.checkMember = this.checkMember.bind(this);

	}
	handleChange(event) {
		this.setState({ value: event.target.value });
		this.checkMember(event.target.value);
	}
	newMemberIns(props) {

		this.setState({
			items: [...this.state.items, { id: uuidv1(), name: this.state.value, approved: false }]
		})
	}

	ToggleMember(item) {
		const items = this.state.items.map(el => {
			if (item.id === el.id) {
				return { ...el, approved: !el.approved }
			}
			return el
		});

		this.setState({ items })
	}

	checkMember(name) {
		if (this.state.items.find(item => { return item.name.toUpperCase() === name.toUpperCase()})) {
			this.setState({error: true,errorButton: true})
		}
	};





	render() {
		const notApproved = this.state.items.filter((item) => !item.approved);
		const notApprovedList = notApproved.map(item =>
			<List.Item key={item.id}>
				<List.Content floated='right'>
					<Button onClick={(e) => this.ToggleMember(item, e)}><Icon name='user plus' /></Button>
				</List.Content>
				<List.Content><Icon name='user' /> {item.name}</List.Content>
			</List.Item>
		);


		const approved = this.state.items.filter((item) => item.approved);
		const approvedList = approved.map(item =>
			<List.Item key={item.id}>
				<List.Content floated='right'>
					<Button onClick={(e) => this.ToggleMember(item, e)}><Icon name='user times' /></Button>
				</List.Content>
				<List.Content><Icon name='user' /> {item.name}</List.Content>
			</List.Item>
		);

		return (
			<Grid centered>
				<Grid.Row >
					<Grid.Column width={3}>
						<Header as='h3'>Aggiungi nuovo membro</Header>
						<Input type='text' placeholder='aggiungi nuovo membro...' value={this.state.value} onChange={this.handleChange} action error={this.state.error}>
							<input />
							<Button onClick={this.newMemberIns} disabled={this.state.errorButton || this.state.value === ""} >aggiungi</Button>
						</Input>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={4}>
					<Grid.Column width={3}>
					</Grid.Column>
					<Grid.Column width={5} >
						<Card>
							<Card.Content>
								<Card.Header>Membri non approvati</Card.Header>
							</Card.Content>
							<Card.Content>
								<List>
									{notApprovedList}
								</List>
							</Card.Content>
							<Card.Content extra>
								<Icon name='users' />
								{notApproved.length}
							</Card.Content>
						</Card>

					</Grid.Column>
					<Grid.Column width={6} >
						<Card>
							<Card.Content>
								<Card.Header>Membri approvati</Card.Header>
							</Card.Content>
							<Card.Content>
								<List>
									{approvedList}
								</List>
							</Card.Content>
							<Card.Content extra>
								<Icon name='users' />
								{approved.length}
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={3}>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);
	}
}
export default GestioneMembri