var React = require("react");
var QuestionItem = require("./QuestionItem.js");

module.exports = React.createClass({
    render: function(){

        var questions = this.props.questions;

        if ( !Array.isArray(questions) ){ throw new Error("this.props。questions 必须是数组"); }

        var questionsComp = questions.map(function(qst){
            return <QuestionItem
                        key={qst.key}
                        title={qst.title}
                        desc={qst.desc}
                        voteCount={qst.voteCount}
                    />;
        });

        return (
            <div id="questions" className="">
                {questionsComp}
            </div>
        );
    }
});