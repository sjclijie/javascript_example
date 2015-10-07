/**
 * Created by Jaylee on 15/9/20.
 */
var React = require("react"),
    showdown = require("showdown"),
    $ = require("jquery"),
    converter = new showdown.Converter();

/**
 * jsx语法
 */
var Comment = React.createClass({
    render: function(){
        //利用dangerouslySetInnerHTML插入原始HTML字符串
        var rawMakeup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMakeup}}></span>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return <Comment author={comment.author}>{comment.text}</Comment>;
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({

    handleSubmit: function(e){

        e.preventDefault();

        var author = this.refs.author.getDOMNode().value.trim();
        var comment = this.refs.comment.getDOMNode().value.trim();

        if ( !author || !comment ){
            return;
        }

        this.props.onCommentSubmit({"author":author, "text":comment});

        this.refs.author.getDOMNode().value = '';
        this.refs.comment.getDOMNode().value = '';
    },

    render: function(){
        return (
            <div className="commentForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="author" placeholder="Your name." ref="author"/><br/>
                    <input type="text" name="comment" placeholder="Say something." ref="comment"/><br/>
                    <input type="submit" name="submit" value="提交"/>
                </form>
            </div>
        );
    }
});

var CommentBox = React.createClass({

    loadCommentsFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: "json",
            success: function(data){
                console.log(data);
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    onCommentSubmit: function(comment){

        //数据立即显示，而不用等待服务器返回结果
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});

        $.ajax({
            url: this.props.serverUrl,
            type: "POST",
            data: comment,
            success: function(data){
                var data = JSON.parse(data);
                this.setState({data: data.message});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(status, err.toString());
            }
        });
    },

    getInitialState: function(){
        return {data:[]};
    },

    componentDidMount: function(){
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.onCommentSubmit}/>
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

React.render(<CommentBox url="comment.json" pollInterval={10000} serverUrl={"comment.php"}/>, document.querySelector("#app"));



