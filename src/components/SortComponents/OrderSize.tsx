import React, {useEffect, useState} from 'react'
import SortedItem from "./SortedItem";
import strings from "../../locales/localization";
import Smallcon from "../../img/icon/Smallcon";
import MediumIcon from "../../img/icon/MediumIcon";
import LargeIcon from "../../img/icon/LargeIcon";
import OrderSizeIcon from "../../img/icon/OrderSizeIcon";
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
                    icon={<OrderSizeIcon/>}>
            <div className={'flex flex-col text-base text-gray-200 bg-white rounded'}>
                <div className={`${classItems} ${(!isLarge && !isSmall && !isMedium) ? 'text-blue-100' : ''} rounded-t`}
                     onClick={setItemSortHandler}>{text.all}</div>
                <div className={`${classItems} ${isLarge ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-size={'large'}>
                    <LargeIcon />
                    {text.large}
                </div>
                <div className={`${classItems} ${isMedium ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-size={'medium'}>
                    <MediumIcon />
                    {text.medium}
                </div>
                <div className={`${classItems} ${isSmall ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-size={'small'}>
                    <Smallcon/>
                    {text.small}
                </div>
            </div>


        </SortedItem>
    )
}

export default OrderSize