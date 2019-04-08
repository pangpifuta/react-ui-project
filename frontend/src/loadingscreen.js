import React from 'react'
//...
import LoadingScreen from '../react-loading-screen'
 
//...
  <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc='/logo.png'
    text='Here an introduction sentence (Optional)'
  > 
    // ...
    // here loadable content
    // for example, async data
    //<div>Loadable content</div>
  </LoadingScreen>