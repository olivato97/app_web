import { Grid } from 'semantic-ui-react';
import React from 'react';
import { TestoPrincipale, TestoSecondario } from './testi';

export default function mainText() {
    return (
        <Grid celled padded={"horizontally"}>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <TestoPrincipale />
                </Grid.Column>
                <Grid.Column >
                    <TestoPrincipale />
                </Grid.Column>
                <Grid.Column >
                    <TestoSecondario />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={5}>
                <Grid.Column >
                    <TestoPrincipale />
                </Grid.Column>
                <Grid.Column >
                    <TestoSecondario />
                </Grid.Column>
                <Grid.Column >
                    <TestoSecondario />
                </Grid.Column>
                <Grid.Column >
                    <TestoSecondario />
                </Grid.Column>
                <Grid.Column>
                    <TestoSecondario />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
} 