import React from 'react'

import UserElement from "./UserElement"

export default function UserList({ users = [] }) {
    return (
        <div>
            {console.log(users)}
            {users.map((user, index )=> (
                <UserElement key={`user-element-${index}`} user={user} />
            ))}
        </div>
    )
}
