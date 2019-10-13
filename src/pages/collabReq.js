// template page
import React from 'react';
import requested from "../design_doc/icons/idea_lookout.svg"

const templatePage = () => {
    return (
        <div>
            <h2>Collaboration Requested!</h2>
            <img src={requested} class="img-fluid" alt="Collaboration Requested">
            </img>
            <ul>
                <b>
                    Your collaboration has been requested! We'll let you know once the project owner has approved your collaboration request.
            </b>
            </ul>
            <ul>
                <a href="/" class="btn btn-info" role="button">Go back home</a>
            </ul>
        </div>
    )
}

export default templatePage;