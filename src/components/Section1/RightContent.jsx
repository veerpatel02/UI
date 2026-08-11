import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  return (
    <div className='h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-3/4'>
      {/* {props.users.map(function(){
        return 'sdfgh'
      })} */}
      <RightCard />
      <RightCard />
      <RightCard />
    </div>
  )
}

// const RightContent = ({ users }) => {
//   return (
//     <div className="h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-3/4">
//       {users.map((user) => (
//         <RightCard key={user.id} user={user} />
//       ))}
//     </div>
//   );
// };

export default RightContent
