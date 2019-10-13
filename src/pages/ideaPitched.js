// template page
import React from 'react';
import submitted from "../design_doc/icons/idea_submit.png"
import collabStyles from './submitted.scss';

const templatePage = () => {
    return (
        <div>
            <h2>Project Submitted!</h2>

            <div className={collabStyles.container}>
                    <center>
                    <img src={submitted} class="img-fluid" alt="Project Submitted"></img>
                    </center>
            </div>
            <center>
            Your project has been submitted! <br />Sit back and relax while we gather your collaborators.
            </center>
            <ul>
                <a href="/" class="btn btn-info" role="button">Go back home</a>
            </ul>
        </div>
    )
}

export default templatePage;