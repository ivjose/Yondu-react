import React from 'react';

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div>
        <h1>Welcome to STORYBOOK</h1>
        <p>
          This is a sample welcome screen story component.
        </p>
        
      </div>
    );
  }
}