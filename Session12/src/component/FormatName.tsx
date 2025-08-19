import React from 'react'

type user={
    firstName:string;
    lastName:string;
}
function fullName(user:user):string {
    return `${user.firstName} ${user.lastName}`;
}


export const FormatName:React.FC = () => {
    const user:user={
        firstName:"Hoàng Cương",
        lastName:"Cát"
    }
  return (
    <div>
        <h2>Họ và tên : {fullName(user)}</h2>
    </div>
  )
}
