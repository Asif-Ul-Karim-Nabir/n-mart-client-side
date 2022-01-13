import { Button } from '@mui/material';
import React from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase()
    return (
        <div style={{padding:'10% 35%'}}>
            <Button variant="contained" onClick={signInUsingGoogle}>Google Sign In</Button>
        </div>
    );
};

export default Login;