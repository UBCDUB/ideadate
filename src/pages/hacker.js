// template page
import React from 'react';
// import Layout from '../components/Layout/Layout';
import { Button } from 'react-bootstrap';

const hacker = () => {
    return (
        <div>
            <h2>Hacker</h2>
            <b>
                Choose your type
            </b>
            <ul>
            <a href="/projForm" class="btn btn-info" role="button">I have an Idea</a>
            </ul>
            <ul>
            <a href="/collab" class="btn btn-info" role="button">Collaborate</a>
            </ul>
            <ul>
            <Button>Back</Button><Button>Next</Button>
            </ul>
        </div>
    )
}

export default hacker;