// template page
import React from 'react';
import requested from '../design_doc/icons/idea_lookout.svg';

class collabReq extends React.Component {
  getCollaborationRequestMessage() {
    return (
      <b>
        Your collaboration has been requested! We'll let you know once the
        project owner has approved your collaboration request.
      </b>
    );
  }

  render() {
    return (
      <div>
        <h2>Collaboration Requested!</h2>
        <img src={requested} class="img-fluid" alt="Collaboration Requested" />
        <br />
        {this.getCollaborationRequestMessage()}
        <br />
        <a href="/" class="btn btn-info" role="button">
          Go back home
        </a>
      </div>
    );
  }
}

export default collabReq;
