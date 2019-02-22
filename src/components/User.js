import React from 'react';
import './User.css';

const user = ( props ) => (
<div className="ui card">
<i aria-hidden="true" className="user circular icon"></i>
<div className="content"><div className="header">{props.name}</div>
<div className="meta"><span className="date">{props.interests}</span>
</div><div className="description">{props.name}</div>
</div><div className="extra content"><a><i aria-hidden="true" className="user icon">
</i>Age: {props.age}</a></div></div>
);

export default user;
