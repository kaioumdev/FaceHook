/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import React from 'react'

const Field = ({ label, children, htmlFor, error }) => {
    const id = htmlFor || getChildId(children)
    return (
        <div className='mb-6 space-y-2.5'>
            {label && <label htmlFor={id} className='leading-[138%] lg:text-lg'>{label}
                {children}</label>}
            {!!error && <div role="alert" className='text-red-600'>{error.message}</div>}
        </div>
    )
}

const getChildId = (children) => {
    const child = React.Children.only(children);
    if ("id" in child?.props) {
        return child.props.id;
    }
}

export default Field