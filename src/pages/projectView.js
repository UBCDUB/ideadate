// template page
import React from 'react';
import placeholder from '../design_doc/placeholder.png'

const templatePage = () => {
    return (
        <div>
            <img src={placeholder} alt="..." class="img-thumbnail"></img>
            <h2>Project</h2>
            <ul>Project Name</ul>
            <ul>Keyword (Tags)</ul>
            <ul>Project Description</ul>
            <p class="lead">Proident eu nisi commodo enim. Deserunt enim duis sunt nostrud anim. Sunt do sit enim veniam nostrud culpa adipisicing do ullamco occaecat et. </p>
        </div>
    )
}

export default templatePage;