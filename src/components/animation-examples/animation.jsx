import React, { Component } from 'react';
// import Btn from '../commons/btns';
// import { Transition } from 'react-transition-group';
import {Spring} from 'react-spring/renderprops';
import {Transition,animated} from 'react-spring/renderprops'
import './started.css';

// TODO: 1) make form
// TODO: 2) capture data: -> symptoms + gender + birth
// TODO: 3) fetch symptom details and go to results page


class Animations extends Component {
    state = {  
        showCom: false
    }

    toggle = () => {
        this.setState({showCom: !this.state.showCom})
    }

    render() { 
        return ( 

            // <div className="started-main">
            //     <div className="heading-started">
            //          <h3>{this.state.heading}</h3>
            //     </div>
            //     <div className="body-started">

            //     </div>
            //     <div className="btns-started">
                    
            //     </div>
            // </div>
            <div>
                <Spring
                    from={{opacity: 0, marginTop: -500}}
                    to={{opacity: 1, marginTop: 0}}
                >
                    {props => (
                        <div style={props}>
                            <div className="main" style={c1Style}>
                                <h1>Animation 1</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, reprehenderit! Consequuntur id ipsum velit. Eius, reprehenderit. Voluptates culpa sunt aspernatur eum ipsa maiores distinctio quos, totam mollitia qui, repellat cum?</p>
                                
                                <Spring
                                        from={{ number: 0 }}
                                        to={{ number: 10 }}
                                        config={{delay: 1000, duration: 10000}}
                                    >
                                        {props => <div style={props}>
                                            <h1 style={counter}>{props.number.toFixed()}</h1>
                                        </div>}
                                </Spring>
                            </div>
                        </div>
                    )}
                </Spring>

                <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    config={{delay: 1000, duration: 1000}}
                >
                    {props => (
                        <div style={props}>
                            <div className="main" style={c2Style}>
                            <h1>Animation 2</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, reprehenderit! Consequuntur id ipsum velit. Eius, reprehenderit. Voluptates culpa sunt aspernatur eum ipsa maiores distinctio quos, totam mollitia qui, repellat cum?</p>
                            <button onClick={this.toggle}>toggle</button>
                            </div>
                        </div>
                        
                    )}
                </Spring>

                
                <Transition
                    native
                    items={this.state.showCom}
                    from={{ position: 'absolute', opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                    config={{ duration: 1000}}
                >
                    {show => show && (props => (
                        <animated.div style={props}>
                            <Spring
                                from={{opacity: 0}}
                                to={{opacity: 1}}
                            >
                                {props => (
                                    <div style={props}>
                                        <div className="main" style={c3Style}>
                                            <h1>Animation 3</h1>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, reprehenderit! Consequuntur id ipsum velit. Eius, reprehenderit. Voluptates culpa sunt aspernatur eum ipsa maiores distinctio quos, totam mollitia qui, repellat cum?</p>
                                        </div>
                                    </div>
                                )}
                            </Spring>
                        </animated.div>
                    ))}
                </Transition>
            </div>

        );
    }  
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.8rem'
}
const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.8rem'
}
const counter = {
    background: '#333',
    textAlign: 'center'
}
const c3Style = {
    background: '#1A5590',
    color: 'white',
    padding: '1.8rem'
}
 
export default Animations;