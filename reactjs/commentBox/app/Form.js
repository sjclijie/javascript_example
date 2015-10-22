/**
 * Created by Jaylee on 15/10/09.
 */
var React = require("react/addons");


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

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function(){
        return {
            helloTo: "xxxooo",
            textareaTo: "xxxxxx",
            selectTo: 1,
            checked: false,
            message: "this is message."
        };
    },

    submitHandler: function(e){
        e.preventDefault();
        console.log(this.state);
    },

    handleChange: function(event){
        //可以更好的控制数据流
        //console.log(event.target.value);
        this.setState({
            helloTo: event.target.value.toUpperCase()
        });
    },

    handleTextareaChange: function(event){
        this.setState({
            textareaTo: event.target.value.toLowerCase()
        })
    },

    handleSelectChange: function(event){
        this.setState({
            selectTo: event.target.value
        });
    },

    handleCheckboxHandle: function(event){
        this.setState({
            checked: !this.state.checked
        });
    },

    handleChange: function(name, event){

        var newState = {};
        newState[name] = event.target.value;
        this.setState(newState);

        var newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);

        //console.log(event, name);
    },

    render: function(){
        return (
            <form onSubmit={this.submitHandler}>
                <input ref="name" type="text" value={this.state.helloTo} /*onChange={this.handleChange}*/ onChange={this.handleChange.bind(this, "helloTo")}/><br/>
                <span>{this.state.helloTo}</span><br/>
                <input type="text" valueLink={this.linkState("message")}/>
                <label htmlFor="desc">
                    <textarea name="desc" cols="30" rows="10" value={this.state.textareaTo} /*onChange={this.handleTextareaChange}*/ onChange={this.handleChange.bind(this, "textareaTo")}></textarea>
                </label><br/>
                <select name="hoby" value={this.state.selectTo} /*onChange={this.handleSelectChange}*/ onChange={this.handleChange.bind(this, "selectTo")}>
                    <option value="1">aaa</option>
                    <option value="2">bbb</option>
                    <option value="3">ccc</option>
                </select>
                <input type="checkbox" checked={this.state.checked} /*onChange={this.handleCheckboxHandle}*/ onChange={this.handleChange.bind(this, "checked")}/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
});


React.render(<FormComp/>, document.querySelector("#app"));