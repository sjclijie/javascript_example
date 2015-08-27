var React = require("react");

module.exports = React.createClass({

    handleForm: function(e){

        var question = {
            title: this.refs.title.getDOMNode().value,
            desc: this.refs.desc.getDOMNode().value,
            voteCount: 0,
        };

        this.refs.formRef.getDOMNode().reset();

        this.props.onNewQuestion(question);

        e.preventDefault();
    },

    render: function(){

        var styleObj = {
            display: this.props.formDisplayd ? "block" : "none"
        };

        return (
            <form name="addQuestion" className="clearfix" style={styleObj} ref="formRef">
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
                </div>
                <textarea ref="desc" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right" onClick={this.handleForm}>确认</button>
                <button className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
            </form>
        );
    }
});