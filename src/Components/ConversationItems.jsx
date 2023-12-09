import React from 'react'
import { Flex, Avatar, Text, Spacer, Box } from '@chakra-ui/react';


export default function ConversationItems() {
  return (
      <Flex align="center" className='m-2'>
            <Avatar size="md" name="username" mr="2" className=' z-0'/>
            <Box>
              <Text fontWeight="bold">Username</Text>
              <Text fontSize="sm" color="gray.500">
                Online
              </Text>
            </Box>
            <Spacer />
          </Flex>
  )
}
