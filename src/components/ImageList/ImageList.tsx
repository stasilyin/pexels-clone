import React, {useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../ImageCard/ImageCard";
import {useDispatch} from "react-redux";
import {Photo} from "pexels";

type imageListType = {
    func: Function
    page: number
    showMore: any
    photo:Array<Photo>
    classes?: string
}

const ImageList: React.FC<imageListType> = ({func, page, showMore, photo, classes}) => {
    // const curatedPhoto = useTypedSelector(state => state.curatedImg.imgCurated)


    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(func)
        return () => {}
    }, [dispatch, page])

    return (
        <InfiniteScroll
            dataLength={photo.length}
            next={showMore}
            className={classes}
            hasMore={true}
            loader={<div className={''} key={0}>Loading</div>}>
            <ImageCard photos={photo}/>
        </InfiniteScroll>
    )

}

export default ImageList