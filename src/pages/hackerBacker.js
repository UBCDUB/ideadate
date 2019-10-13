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
                <li>
                    Hacker
                </li>
                <li>
                    Backer
                </li>
            </ul>
            <Button>Next</Button>
        </div>
    )
}

export default hackerBacker;