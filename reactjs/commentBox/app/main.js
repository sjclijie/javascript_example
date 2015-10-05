/**
 * Created by Jaylee on 15/9/20.
 */
var React = require("react");

/**
 * jsx语法
 */
var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

/*
非jsx语法
var CommentBox2 = React.createClass({
    displayName: "CommentBox",
    render: function(){
        return (
            React.createElement("div", {className:"commentbox"}, "hello world")
        );
    }
});
*/

React.render(<CommentBox/>, document.querySelector("#app"));



