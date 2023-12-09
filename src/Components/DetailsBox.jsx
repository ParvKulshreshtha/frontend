import React from 'react'
import ChatSection from './ChatSection'
import DefaultDetails from './DefaultDetails'
import CreateGroupForm from './CreateGroupForm'

export default function DetailsBox() {
  return (
    <div  className='w-full md:w-[70%] h-[50%] md:h-auto'>
      {/* <ChatSection /> */}
      {/* <DefaultDetails /> */}
      <CreateGroupForm />
    </div>
  )
}
