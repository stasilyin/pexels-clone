import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../imageCard/ImageCard";
import {curatedImgFetch} from "../store/action-creators/curatedImgLoader";
import {useDispatch} from "react-redux";


const ImageList = () => {
    const curatedPhoto = useTypedSelector(state => state.curatedImg.imgCurated)
    const [page, setPage] = useState(1);

    const dispatch = useDispatch()

    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }

    useEffect(() => {
        dispatch(curatedImgFetch(page, 20))
    }, [dispatch, page])

    return (
        <InfiniteScroll
            dataLength={curatedPhoto.length}
            next={showMorePhotos}
            hasMore={true}
            loader={<div className={''} key={0}>Loading</div>}>
            <ImageCard photos={curatedPhoto}/>
        </InfiniteScroll>
    )

}

export default ImageList