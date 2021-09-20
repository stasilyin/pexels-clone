import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../ImageCard/ImageCard";
import {curatedImgFetch} from "../../store/action-creators/curatedImgLoader";
import {useDispatch} from "react-redux";
import {Photo} from "pexels";

type imageListType = {
    func: Function
    page: number
    showMore: any
}

const ImageList: React.FC<imageListType> = ({func, page, showMore}) => {
    const curatedPhoto = useTypedSelector(state => state.curatedImg.imgCurated)


    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(func)
    }, [dispatch, page])

    return (
        <InfiniteScroll
            dataLength={curatedPhoto.length}
            next={showMore}
            hasMore={true}
            loader={<div className={''} key={0}>Loading</div>}>
            <ImageCard photos={curatedPhoto}/>
        </InfiniteScroll>
    )

}

export default ImageList