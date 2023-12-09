import React from 'react'
import ListBox from './ListBox'
import DetailsBox from './DetailsBox'
import Login from './login'

export default function MainApp() {
  return (
    <div className='bg-[white] h-[90vh] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] border rounded-xl flex flex-col md:flex-row shadow-md'>
      <ListBox />
      {/* <DetailsBox /> */}
      <Login />
    </div>
  )
}
