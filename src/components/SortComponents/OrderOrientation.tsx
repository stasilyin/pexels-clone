import React, {useEffect, useState} from 'react'
import SortedItem from "./SortedItem";
import strings from "../../locales/localization";
import Squere from "../../img/icon/Square";
import Vertical from "../../img/icon/Vertical";
import Horizontal from "../../img/icon/Horizontal";
import {useDispatch} from "react-redux";
import {searchImageTypes} from "../../types/searchImage";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const OrderOrientation: React.FC = () => {
    const [isHorizontal, setIsHorizontal] = useState(false)
    const [isVertical, setIsVertical] = useState(false)
    const [isSquare, setIsSquare] = useState(false)

    const text = strings.const.sort.type.orientation
    const classItems = 'select-none px-2 hover:bg-gray-400 opacity-70 h-10 cursor-pointer flex justify-center items-center'
    const orientation = useTypedSelector(state => state.search.searchOrientation)

    useEffect(() => {
        setIsHorizontal(orientation === 'landscape')
        setIsVertical(orientation === 'portrait')
        setIsSquare(orientation === 'square')
    }, [orientation])
    const dispatch = useDispatch()

    const setItemSortHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch({
            type: searchImageTypes.SEARCH_ORIENTATION,
            payload: e.currentTarget.dataset.orientation
        })
    }

    return(
        <SortedItem title={text.title}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={'mr-2'} fill={'currentColor'}>
                            <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/>
                        </svg>

        }>
            <div className={'flex flex-col text-base text-gray-200 bg-white rounded'}>
                <div className={`${classItems} ${(!isHorizontal && !isSquare && !isVertical) ? 'text-blue-100' : ''} rounded-t`}
                     onClick={setItemSortHandler}>{text.all}</div>
                <div className={`${classItems} ${isHorizontal ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler} data-orientation={'landscape'}>
                    <Vertical />
                    {text.horizontal}
                </div>
                <div className={`${classItems} ${isVertical ? 'fill-current text-blue-100' : ''}`}
                     onClick={setItemSortHandler}  data-orientation={'portrait'}>
                    <Horizontal />
                    {text.vertical}
                </div>
                <div className={`${classItems} ${isSquare ? 'fill-current text-blue-100' : ''} rounded-b`}
                     onClick={setItemSortHandler} data-orientation={'square'}>
                    <Squere/>
                    {text.square}
                </div>
            </div>
        </SortedItem>
    )
}

export default OrderOrientation