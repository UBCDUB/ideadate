import React from 'react';
// import Layout from '../components/Layout/Layout';
import { Button } from 'react-bootstrap';

const hackerBacker = () => {
    return (
        <div>
            <h2>Hacker or Backer page</h2>
            <b>
                Choose your class
            </b>
            <ul>
            <a href="/hacker" class="btn btn-info" role="button">Hacker</a>
            </ul>
            <ul>
            <a href="/backer" class="btn btn-info" role="button">Backer</a>
            </ul>
            <ul>
            <Button>Back</Button> <Button>Next</Button>
            </ul>
        </div>
    )
}

export default hackerBacker;