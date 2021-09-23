import React, {useEffect, useState} from 'react'
import SortedItem from "./SortedItem";
import strings from "../../locales/localization";
import {ReactComponent as SmallIcon} from "../../img/icon/SmallIcon.svg";
import {ReactComponent as MediumIcon} from "../../img/icon/MediumIcon.svg";
import {ReactComponent as LargeIcon} from "../../img/icon/LargeIcon.svg";
import {ReactComponent as OrderSizeIcon} from "../../img/icon/OrderSizeIcon.svg";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {searchImageTypes} from "../../types/searchImage";

const OrderSize: React.FC = () => {
    const [isLarge, setIsLarge] = useState(false)
    const [isMedium, setIsMedium] = useState(false)
    const [isSmall, setIsSmall] = useState(false)

    const text = strings.const.sort.type.size
    const classItems = 'select-none px-2 hover:bg-gray-400 opacity-70 h-10 cursor-pointer flex justify-center items-center'
    const searchSize = useTypedSelector(state => state.search.searchSize)

    useEffect(() => {
        setIsLarge(searchSize === 'large')
        setIsMedium(searchSize === 'medium')
        setIsSmall(searchSize === 'small')
    }, [searchSize])
    const dispatch = useDispatch()

    const setItemSortHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch({
            type: searchImageTypes.SEARCH_SIZE,
            payload: e.currentTarget.dataset.size
        })
    }
    return(
        <SortedItem title={text.title}
                    icon={<OrderSizeIcon className='mr-3'/>}>
            <div className={'flex flex-col text-base text-gray-200 bg-white rounded'}>
                <div className={`${classItems} ${(!isLarge && !isSmall && !isMedium) ? 'text-blue-100' : ''} rounded-t`}
                     onClick={setItemSortHandler}>{text.all}</div>
                <div className={`${classItems} ${isLarge ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-size={'large'}>
                    <LargeIcon  className='mr-5'/>
                    {text.large}
                </div>
                <div className={`${classItems} ${isMedium ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-size={'medium'}>
                    <MediumIcon className='mr-5'/>
                    {text.medium}
                </div>
                <div className={`${classItems} ${isSmall ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-size={'small'}>
                    <SmallIcon className='mr-5' />
                    {text.small}
                </div>
            </div>
        </SortedItem>
    )
}

export default OrderSize