import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const AuthHook = () => {
    const authInfo = use(AuthContext);
    return authInfo
};

export default AuthHook;