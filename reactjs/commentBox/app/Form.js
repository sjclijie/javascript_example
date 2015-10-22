/**
 * Created by Jaylee on 15/10/09.
 */
var React = require("react");

/*
非约束组件：给定<input/>一个值，<input/>的值仍是可以改变的。
var FormComp = React.createClass({

    componentDidMount: function(){
        console.log(this.refs.name);
    },

    submitHandler: function(e){
        e.preventDefault();
        var name = this.refs.name.getDOMNode().value;
        console.log(name);
    },

    render:function(){
        return (
            <form onSubmit={this.submitHandler}>
                <input ref="name" type="text" defaultValue="Hello world"/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
});
*/

//约束组件： 与其它类型的组件一样，表单的状态由React组件控制，状态值被存储在state中。
var FormComp = React.createClass({

    getInitialState: function(){
        return {
            helloTo: "xxxooo"
        };
    },
    submitHandler: function(e){
        e.preventDefault();
        console.log(this.refs.name.getDOMNode().value);
    },

    handleChange: function(event){
        //可以更好的控制数据流
        //console.log(event.target.value);
        this.setState({
            helloTo: event.target.value.toUpperCase()
        });
    },

    handle: function(syntheticEvent){
        var DOMNode = syntheticEvent.target;
        var newValue = DOMNode.value;
    },

    render: function(){
        return (
            <form onSubmit={this.submitHandler}>
                <input ref="name" type="text" value={this.state.helloTo} onChange={this.handleChange}/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
});



React.render(<FormComp/>, document.querySelector("#app"));