import React from 'react'

export default function UserElement({ user }) {
    return (
        <h3>
            {user.name.first} {user.name.last}
        </h3>
    )
}
