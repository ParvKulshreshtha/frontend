import React, { useEffect, useRef } from 'react'
import { Flex, Avatar, Text, Spacer, Box } from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";

export default function ChatSection() {
    const chatboxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chatbox when the component mounts
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, []);

  return (
<div className="flex flex-col h-[100%]">
  <div className="">
    <Flex align="center" className='m-2'>
        <Avatar size="md" name="username" mr="2" className=' z-0'/>
        <Box>
            <Text fontWeight="bold">Username</Text>
            <Text fontSize="sm" color="gray.500">
            Online
            </Text>
        </Box>
        <Spacer />
        <button className="p-2  rounded-full focus:outline-none focus:ring">
        <MdDelete />
        </button>
    </Flex>
  </div>

  {/* chatbox section  */}
  <div ref = {chatboxRef} className=" flex-1 bg-gray-100 p-4 overflow-y-scroll">
      <div className=" ">
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />
        {/* Message from Other End */}
        <MessageByOther />

        {/* Message from Our End */}
        <MessageByUs />

      </div>
    </div>
  <div className="flex items-center p-4 bg-gray-200">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 mr-4 border rounded-md"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </div>
</div>  )
}
function MessageByOther() {
    return <div className="flex mb-4">
        <div className="rounded-lg bg-blue-500 text-white p-2 max-w-xs">
            Hello! How are you?
        </div>
    </div>;
}

function MessageByUs() {
    return <div className="flex justify-end mb-4">
        <div className="rounded-lg bg-green-500 text-white p-2 max-w-xs">
            Hi there! I'm doing well, thank you.
        </div>
    </div>;
}

