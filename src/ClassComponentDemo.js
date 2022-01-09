import React, { Component } from 'react';


export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { incrementCount: 0, decrementCount: 0};
    }

    incrementAmount = () => {
        console.log('increment called')
        this.setState({incrementCount: this.state.incrementCount + 1})
    }
    decrementAmount = () => {
        console.log('increment called')
        this.setState({decrementCount: this.state.decrementCount - 1})
    }

    render() {
        console.log("render called")
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <ClassComponentNotes />
                    <hr />
                    <h3>
                        Smash the like button!
                    </h3>
                    <button onClick={this.incrementAmount}>
                        Likes: {this.state.incrementCount}
                    </button>
                    <h3>
                        Smash the dislike button!
                    </h3>
                    <button onClick={this.decrementAmount}>
                        Likes: {this.state.decrementCount}
                    </button>
                </div>
            </div>
        )
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1> Class Components</h1>

            <p>Class Components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, you must understand them</dd>
                <dt>must extend component</dt>
                <dd>Class components must extend the React component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    )
}