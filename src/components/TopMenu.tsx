import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

export default function TopMenu() {
    return (
        <div className='fixed top-0 left-0 right-0 z-30 h-[50px] bg-white border-t border-b border-gray-300 flex flex-row-reverse flex-row'>
            <Image className='h-full w-auto' src={'/img/logo.png'}
            alt = 'logo' width={0} height={0} sizes='100vh'/>
            <TopMenuItem title='Menu Item Booking' pageRef='/booking'/>
        </div>
    )
}