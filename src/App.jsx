import React from 'react'
import Section1 from './components/Section1/section1.jsx'
// import Section2 from './components/Section2/Section2.jsx'

// import Section1 from './components/section 1/Section1.jsx'

const App = () => {

    const users = [
      {
        img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        tag:'atisfied'
      },
      {
        img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmt8ZW58MHx8MHx8fDA%3D',
        intro:'',
        tag:'Underserved'
      },
      {
        img:'https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmt8ZW58MHx8MHx8fDA%3D',
        intro:'',
        tag:'Underbanked'
      }
    ]

  return (
    <div>
      <Section1 users ={users} />
      {/* <Section2 /> */}
    </div>
  )
}
export default App