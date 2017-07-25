// Queries the NYT API for articles. 
// Contains the user's search form.


// Include React
var React = require("react");

// Create the Search Component
var Query = React.createClass({

  // Here we set a generic state
  getInitialState: function() {
    return {
      topic: "",
      startYear: "",
      endYear: ""
    };
  },

  // When a user submits...
  _handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search terms
    this.props._setSearchFeilds(this.state.topic, this.state.startYear, this.state.endYear);

    // Reset the search terms
    // this.setState({topic: ""});
    // this.setState({startYear: ""});
    // this.setState({endYear: ""});
    
  },

  _handleTopicChange: function(e) {
    this.setState({topic: e.target.value});
  },

  _handleStartYearChange: function(e) {
    this.setState({startYear: e.target.value});
  },

  _handleEndYearChange: function(e) {
    this.setState({endYear: e.target.value});
  },


  // Here we render the Query User Form
  render: function() {
    return (

      <div className="panel panel-default center-block" style={ {width: "80%", align: "center"} }>

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>

            <div className="form-group col-md-offset-4 col-md-4">
              <label htmlFor="topic" className="text-center">Topic</label>
              <input type="text" className="form-control text-center" id="topic" onChange={this._handleTopicChange} />
            </div>

            <br />

            <div className="form-group col-md-offset-4 col-md-4">
              <label htmlFor="startYear">Start Year</label>
              <input type="text" className="form-control text-center" id="startYear" onChange={this._handleStartYearChange} />
            </div>

            <br />

            <div className="form-group col-md-offset-4 col-md-4">
              <label htmlFor="endYear">End Year</label>
              <input type="text" className="form-control text-center" id="endYear" onChange={this._handleEndYearChange} />
            </div>

            <br />

            <button type="submit" className="btn col-md-offset-5 col-md-2" id="searchBtn" style={{background: "green", color: "white"}}>Search</button>

          </form>
        </div>

      </div>

    );
  }
});


// Export the component back for use in Main file
module.exports = Query;