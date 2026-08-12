import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div className='h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-3/4'>
      {props.users?.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}


// import React from 'react'
// import RightCardContent from './RightCardContent'

// const RightCard = (props) => {
//   return (
//     <div className='h-full overflow-hidden shrink-0 relative w-80 rounded-4xl'>
//       <img
//         className='h-full w-full object-cover'
//         src={props.img}
//         alt=""
//       />

//       <RightCardContent />
//     </div>
//   )
// }



export default RightContent
