import Image from 'next/image'
import {
  BellIcon , 
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon , 
  ViewGridIcon
}from "@heroicons/react/solid";

import{
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
 
import HeaderIcon from './HeaderIcon';



function Header() {
  return (
    <div className='flex min-w-full	 sticky top-0 z-50 bg-white items-center  p-2 lg:px-5 shadow-md '>

{/* left */}
<div className = "flex items-center">
    <Image    
      src="https://links.papareact.com/5me"
      alt="Picture of the author"
      width={40}
      height={40}
      layout="fixed"
    />
    <div className="flex items-center bg-gray-100 p-2 rounded-full" >
      <SearchIcon className="h-6 text-gray-600"  />
        <input type="text" placeholder='Search Facebook' className=' hidden md:inline-flex flex-shrink  bg-transparent ml-2 items-center outline-none' />
    </div>
</div>

{/* center */}

<div className="flex justify-center flex-grow ">

  <div className='flex space-x-6 md:space-x-2'>
    <HeaderIcon active Icon={HomeIcon}/>
    <HeaderIcon Icon={FlagIcon}/>
    <HeaderIcon Icon={PlayIcon}/>
    <HeaderIcon Icon={ShoppingCartIcon}/>
    <HeaderIcon Icon={UserGroupIcon}/>
  </div>
</div>

{/* right */}
<div className='flex items-center sm:space-x-2 justify-end'>
  {/* profilepic */}

  <p className='font-semibold pr-3 whitespace-nowrap'>Tushar gupta</p>
  <ViewGridIcon className='icon'/>
  <ChatIcon className='icon'/>
  <BellIcon className='icon'/>
  <ChevronDownIcon className='icon'/>

</div>

    </div>
  )
}

export default Header