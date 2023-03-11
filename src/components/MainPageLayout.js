import React from 'react'
import Nav from './Nav'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
       <Title
               title="Box Office"
               subtitle="Are you Looking for a movie or an actor?"
        />
       
        <Nav /> 
        
        { children }  

        {/* Calling the Children is very Important */}
    </div>
  )
}

export default MainPageLayout