import React from 'react';

import classes from './Toolbar.css';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
    <div><h2 className="ui icon center aligned header">
    <i aria-hidden="true" className="users circular icon"></i>
    <div className="content">Users</div></h2>
    </div>
    </header>
);

export default toolbar;
