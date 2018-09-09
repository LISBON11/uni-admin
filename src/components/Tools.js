import React, {Component} from 'react'

class Tools extends Component {
    render() {
        const actions = this.props.actions;

        // сделаьб фиксированную постедоватльность баттонов или кастомную
        return (
            <div className='tools'>
                {Object.keys(actions).map((key, i) =>
                    <button key={i} onClick={actions[key]}>
                        {key}
                    </button>
                )}
            </div>
        )
    }
};

export default Tools;
