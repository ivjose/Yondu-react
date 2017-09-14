import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { configure, addDecorator } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

//import { Button, Welcome } from '@storybook/react/demo';


//import Button from './Button';
import Welcome from './Welcome';

import SimpleForm from '../components/Forms';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ));

storiesOf('Form', module)
    .addDecorator(getStory => (
        <Provider store={store}>
            getStory()
        </Provider>))
    .add('initialState', () => (
        <SimpleForm />
    ));

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
