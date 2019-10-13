// template page
import React from 'react';
import requested from '../design_doc/icons/idea_lookout.svg';
import collabStyles from './submitted.scss';

class collabReq extends React.Component {
    getCollaborationRequestMessage() {
        return (
            <center>
                Your collaboration has been requested!<br />
                We'll let you know once the project owner has approved your collaboration request.
            </center>
        );
    }

    render() {
        return (
            <div className={collabStyles.container}>
                <h2 className={collabStyles.h2}>Collaboration Requested!</h2>
                <div class="container">
                    <div class="image">
                        <img src={requested} class="img-fluid" alt="Collaboration Requested"></img>
                    </div>
                </div>
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
