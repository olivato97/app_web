import React from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

export default function mainLogIn() {

    return (
        <div>
            <NameForm />

        </div>

    );

}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', isLogin: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state)
    }
isLoginIn(event){
    this.setState({isLogin:event.target.isLogin })
}

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        if (this.state.isLogin !==true) {
            return (
                <Grid celled centered>
                    <Grid.Row columns={1}>
                        <Grid.Column width={10}>
                            <Form onSubmit={this.handleSubmit} true={this.isLoginIn}>
                                <Form.Field>
                                    <label>Username</label>
                                    <input placeholder='First Name' />
                                </Form.Field>
                                <Form.Field >
                                    <label>Password</label>
                                    <input placeholder='Last Name' value={this.state.value} onChange={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        } else {
            return (
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            )
        }
    }
}
// const SignUp = () => (
//     <Form>
//         <Form.Field>
//             <label>First Name</label>
//             <input placeholder='First Name' />
//         </Form.Field>
//         <Form.Field>
//             <label>Last Name</label>
//             <input placeholder='Last Name' />
//         </Form.Field>
//         <Form.Field>
//             <Checkbox label='I agree to the Terms and Conditions' />
//         </Form.Field>
//         <Button type='submit'>Submit</Button>
//     </Form>
// )

