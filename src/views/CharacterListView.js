import React from "react";
import { connect } from "react-redux";



import { CharacterList } from "../components";
import { search } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.search();
  }

  render() {
    if (this.props.fetching) {
      return <h1>Not ready yet.</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};

export default connect(
  mapStateToProps,
  search 
)(CharacterListView);
