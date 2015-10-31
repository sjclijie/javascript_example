/**
 * Created by Jaylee on 15/10/08.
 */
var React = require("react/addons");

var ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;

/*
var IntervalMixin = function(interval){
    return {
        componentDidMount: function(){
            this.__timer = setInterval( this.onTick, interval );
        },
        componentWillUnmount: function(){
            clearInterval(this.__timer);
        }
    }
};
*/

//更加灵活的mixin
var IntervalMixin = {
    setInterval: function(callback, interval){
        var token = setInterval(callback, interval);
        this.__intervals.push(token);
        return token;
    },
    componentDidMount:  function(){
        this.__intervals = [];
    },
    componentWillUnmount: function(){
        this.__intervals.map(clearInterval);
    }
};

var Timer = React.createClass({

    mixins: [
        {getInitialState: function(){
            return {a:10000};
        }},
        IntervalMixin
    ],

    /*
    getInitialState: function(){
        return {secondsElapsed: 0}
    },

    onTick: function(){
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },*/

    componentDidMount: function(){
        this.setInterval(this.forceUpdate.bind(this), 1000)
    },

    render: function(){
        return (
            <ReactCSSTransitionGroup transitionName='question'>
                <div>
                    aaa
                    <br />
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});

React.render(<Timer/>, document.getElementById("mixin"));
