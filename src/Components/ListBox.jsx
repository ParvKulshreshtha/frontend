import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUserPlus } from 'react-icons/fa';
import { MdGroupAdd } from 'react-icons/md';
import { FaCirclePlus } from 'react-icons/fa6';
import { IoMoon } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
import ConversationItems from './ConversationItems';

export default function ListBox() {
  return (
    <div className='w-full md:w-[30%] h-[50%] md:h-auto bg-[#ecf0f1] overflow-y-scroll'>
      <div className='sticky top-0'>
        <div className="flex space-x-4 bg-[#3498db] justify-between rounded-tl-xl py-2 ">
          <div>
            <button className="p-2 text-white rounded-full focus:outline-none focus:ring ">
              <CgProfile />
            </button>
          </div>
          <div>
            <button className="p-2  text-white rounded-full focus:outline-none focus:ring">
              <FaUserPlus />
            </button>
            <button className="p-2  text-white rounded-full focus:outline-none focus:ring">
              <MdGroupAdd />
            </button>
            <button className="p-2 text-white rounded-full focus:outline-none focus:ring">
              <FaCirclePlus />
            </button>
            <button className="p-2 text-white rounded-full focus:outline-none focus:ring">
              <IoMoon />
            </button>
          </div>
        </div>
        <div className="relative mt-2">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md p-2 pl-8 focus:outline-none w-[95%]"
          />
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <IoMdSearch />
          </div>
        </div>
      </div>

      <div>
        {/* Your list of users */}
        {Array.from({ length: 38 }).map((_, index) => (
          <ConversationItems key={index} />
        ))}
      </div>
    </div>
  );
}
