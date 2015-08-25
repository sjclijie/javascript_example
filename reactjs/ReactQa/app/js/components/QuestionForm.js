var React = require("react");

module.exports = React.createClass({
    render: function(){
        return (
            <form name="addQuestion" className="clearfix">
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
                </div>
                <textarea className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <button className="btn btn-default pull-right">取消</button>
            </form>
        );
    }
});