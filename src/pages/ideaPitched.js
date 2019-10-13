// template page
import React from 'react';
import submitted from "../design_doc/icons/idea_submit.png"
import styled from 'styled-components'

const image = styled.img`
    display: flex;
    position: relative;
    margin: 10px auto;
`

const title = styled.h2`
    text-align: center;
    position: relative;
`

const templatePage = () => {
    return (
        <div>
            <title>Project Submitted!</title>
            <image src={submitted} class="img-fluid" alt="Project Submitted">
            </image>
            <ul>
                <b>
                    Your project has been submitted! Sit back and relax while we gather your collaborators.
            </b>
            </ul>
            <ul>
                <a href="/" class="btn btn-info" role="button">Go back home</a>
            </ul>
        </div>
    )
}

export default templatePage;