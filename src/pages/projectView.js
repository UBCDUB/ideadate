// template page
import React from 'react';
import placeholder from '../design_doc/placeholder.png'
import './projectView.css';

const templatePage = () => {
    return (
        <div>
            <div class = "post-container">
            <div class="image"><img src={placeholder} alt="..." class="img-thumbnail"></img></div>
            <div class="content-align">
                <h2>Project</h2>
                <ul>Project Name</ul>
                <ul>Keyword (Tags)</ul>
            </div>
            </div>
            <p class="lead">Proident eu nisi commodo enim. Deserunt enim duis sunt nostrud anim. Sunt do sit enim veniam nostrud culpa adipisicing do ullamco occaecat et. </p>
        </div>
    )
}

export default templatePage;