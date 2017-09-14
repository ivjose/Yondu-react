import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { configure, addDecorator } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import { Button, Welcome } from '@storybook/react/demo';

//import Button from './Button';
import Welcome from './Welcome';

import SimpleForm from '../components/Forms';

// Add bootstrap 4 support from npm
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ));
    

storiesOf('Simple Form', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <SimpleForm onSubmit={this.submit}/>);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
