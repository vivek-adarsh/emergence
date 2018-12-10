import React from 'react'
import Helmet from 'react-helmet'


export default (props) => (
 <>
     <Helmet
         title="EmerGence"
     >
         <html lang="en" />
     </Helmet>
  <div className={'container'}>



      <div id='content'>{props.children}</div>
  </div>
 </>
)
