'use strict';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.target = 'React';
    }

    render() {
        return React.createElement('div', null, 'Hello, ' + this.target + '!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Hello, null, null),
        document.getElementsByClassName('app-container')[0]
    );
});