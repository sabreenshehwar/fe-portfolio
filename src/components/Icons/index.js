import React from 'react'
import { Instagram } from './Instagram';
import { Email } from './Email';
import { Linkedin } from './Linkedin';

const Icon = props => {
    switch (props.name.toLowerCase()) {
        case "instagram":
            return <Instagram {...props} />;
        case "email":
            return <Email {...props} />;
        case "linkedin":
            return <Linkedin {...props} />;
        default:
            return <div />;
    }
};

export { Icon };