import React from 'react'
import { MdOutlineMail } from 'react-icons/md';


const Email = () => {
    return (
        <a href="mailto:sabreenshehwar@gmail.com">
            <MdOutlineMail style={{
                color: "#870000"
            }} />
        </a>
    )
}

export { Email };