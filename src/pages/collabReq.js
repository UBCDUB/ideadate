// template page
import React from 'react';
import requested from "../design_doc/icons/idea_lookout.svg"
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

const collabReq = () => {
    return (
        <div>
            <title>Collaboration Requested!</title>
            <image src={requested} class="img-fluid" alt="Collaboration Requested">
            </image>
            <ul>
                <b>
                    Your collaboration has been requested!
                </b>
            </ul>
            <ul>
                We'll let you know once the project owner has approved your collaboration request.
            </ul>
            <ul>
                <a href="/" class="btn btn-info" role="button">Go back home</a>
            </ul>
        </div>
    )
}

export default collabReq;