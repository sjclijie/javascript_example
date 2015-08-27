var React = require("react");

module.exports = React.createClass({
     render: function(){
         return (
             <div>
                 <button id="add-question-btn" className="btn btn-success" onClick={this.props.onToggleForm}>添加问题</button>
             </div>
         );
     }
});

