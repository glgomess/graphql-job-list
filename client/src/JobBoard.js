import React, { Component } from 'react';
import { JobList } from './JobList';
import { fetchJobs } from './request';

export class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  async componentDidMount() {
    const jobs = await fetchJobs();
    this.setState({ jobs });
  }

  render() {
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}
