import React from 'react';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log(this.state.count);
    }

    // componentDidUpdate() {
    //     console.log(this.state.count);
    // }

    handleClick = e => {
        const self = this;
        this.setState({
            count: self.state.count + 1
        });
    };

    render = () => {
        return (
            <div>
              <h1>{this.state.count}</h1>
              <input
                  type="button"
                  value="点我"
                  onClick={this.handleClick}
              />
            </div>
        );
    }
}

export default ClassComp;
