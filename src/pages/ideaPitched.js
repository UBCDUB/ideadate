// template page
import React from 'react';
import submitted from "../design_doc/icons/idea_submit.png"

const templatePage = () => {
    return (
        <div>
            <h2>Project Submitted!</h2>
            <div class="container"><div class="image">
                <img src={submitted} class="img-fluid" alt="Project Submitted">
                </img>
            </div>
            </div>
            <ul>
                <div class="container">
                    <b>
                        Your project has been submitted! <br />Sit back and relax while we gather your collaborators.
            </b>
                </div>
            </ul>
            <ul>
                <a href="/" class="btn btn-info" role="button">Go back home</a>
            </ul>
        </div>
    )
}

export default templatePage;