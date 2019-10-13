// template page
import React from 'react';
import requested from '../design_doc/icons/idea_lookout.svg';
import './submitted.css';

class collabReq extends React.Component {
    getCollaborationRequestMessage() {
        return (
            <div class="container">
                Your collaboration has been requested!<br />
                We'll let you know once the project owner has approved your collaboration request.
      </div>
        );
    }

    render() {
        return (
            <div>
                <center><h2>Collaboration Requested!</h2>
                        <img src={requested} class="img-fluid" alt="Collaboration Requested"></img>
                        </center>
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
