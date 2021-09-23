import React, {useState} from 'react'

type SortItemType = {
    children: React.ReactNode
    title: string
    icon?: React.ReactNode

}

const SortedItem: React.FC<SortItemType> = ({
                                                children,
                                                title,
                                                icon}) => {
    const [openModal, setOpenModal] = useState(false)

    const mouseOverHandler = () => {
        setOpenModal(true)
    }
    const mouseOutHandler = () => {
        setOpenModal(false)
    }
    return (
        <div className='relative min-w-max flex'>
            <div className='absolute z-10' onMouseOver={mouseOverHandler}  onMouseOut={mouseOutHandler}>
                <div className='flex flex-col items-center justify-center'>
                    <button className={`min-w-max h-10 px-2 rounded-20px bg-white border 
                        hover:bg-gray-400 text-base
                        ${openModal ? 'border-blue-100 text-blue-100' : ' border-gray-300 text-gray-200'}`} >
                        <div className='flex justify-center items-center'>
                            {icon}
                            {title}
                        </div>
                    </button>
                    <div className={`${openModal ? 'opacity-1' : 'opacity-0'} block top-12 p-2`} >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortedItem