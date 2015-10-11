/**
 * Created by Jaylee on 15/10/09.
 */

var React = require("react");

var Dom = React.createClass({
    //除了此方法，在事件中也可以调用getDOMNode()方法。
    componentDidMount: function(){

        var node = this.refs.mainCanvas.getDOMNode();

        console.log(node);
    },

    render: function(){
        return (
            <div>
                <h1>DOM操作</h1>
                <canvas ref="mainCanvas" />
            </div>
        );
    }
});

//整合非react类库
//例如autocomplete
/*
autocomplete({
    target: document.getElementById("cities"),
    data: ['San Franciso', 'St. Louis', 'Amsterdam', 'Los Angeles'],
    events: {
        select: function(city){
            alert("You have selected the city of " + city);
        }
    }
});
*/

var AutocompleteCities = React.createClass({

    getDefaultProps: function(){
        return {
            data: ['San Franciso', 'St. Louis', 'Amsterdam', 'Los Angeles'],
        }
    },

    componentDidMount: function(){
        autocomplete({
            target: this.refs.autocompleteTarget.getDOMNode(),
            data: this.props.data,
            events: {
                select: this.handleSelect
            }
        });
    },

    handleSelect: function(city){
        alert("You have selected the city of " + city);
    },

    render: function(){
        return <div id="cities" ref="autocompleteTarget"/>;
    }
});

var SuperSelect = React.createClass({

    //渲染了一个单独的div,没有子元素，也没有props
    render: function(){
        return <div></div>;
    },

    componentDidMount: function(){

        var el = this.el = document.createElement("div");
        this.getDOMNode().appendChild(el);

        $(el).superSelect(this.props);
        $(el).on("superSelect", this.handleSuperselectChange);
    },

    handleSuperselectChange: function(){
        //...
    },

    componentDidWillUnmount: function(){
        //移除DOM节点
        this.getDOMNode.removeChild(this.el);
        $(this.el).off();
    }
});

React.render(<SuperSelect/>, document.getElementById("dom"));