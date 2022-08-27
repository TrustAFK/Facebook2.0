import { ChevronDoubleDownIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UserGroupIcon, UserIcon } from "@heroicons/react/solid";
import {useSession} from "next-auth/react"
import SidebarRow from "./SidebarRow";



function Sidebar() {
    const{data:session, status:loading}=useSession();
    console.log(session.user.name)
  return (
    <div className='p-2 mt-5 max-w-[600px xl:min-w-[]300px' >
<SidebarRow src={session?.user.image} title={session.user.name} />
<SidebarRow Icon={UserIcon} title="Friends" />
<SidebarRow Icon={UserGroupIcon} title="Group" />
<SidebarRow Icon={ShoppingBagIcon} title="Market place"/>
<SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
<SidebarRow Icon={CalendarIcon}title="Event"/>
<SidebarRow Icon={ClockIcon}title="Memories"/>
<SidebarRow Icon={ChevronDoubleDownIcon}title="See More"/>

    </div>
  )
}

export default Sidebar