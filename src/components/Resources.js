import React, { Component } from 'react';
import ResourceCard from './ResourceCard';


class Resources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context,
      search: this.props.search,
      data: []
    };
  }

  async componentDidMount() {
    if (true) {
      const data = await this.state.appState.getResources(this.state.search);
      this.setState({ data })
    }
  }

  render() {
    const resourceCards = this.state.data.map((resource) =>
      <div className="m-4" key={ resource.name }>
          <ResourceCard { ...resource }/>
      </div>
    );

    const header = () => {
      if (this.state.data.length > 0) {
        return (<h2 style={ { color: "white" } }>Contact Local Resources</h2>);
      }
    }

    return (
      <div className="container pt-4">
        { header() }
        <div className="row">
          <div style={ { width: "100%" } } className="d-flex align-items-stretch justify-content-center flex-wrap">
            { resourceCards }
          </div>
        </div>
      </div>
    );
  };
};

export default Resources;
