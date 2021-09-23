import React, {useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../ImageCard/ImageCard";
import {useDispatch} from "react-redux";
import {Photo} from "pexels";
import PreLoader from '../../img/PreLoader.gif'
import {useTypedSelector} from "../../hooks/useTypedSelector";

type imageListType = {
    func: Function
    page: number
    showMore: any
    photo:Array<Photo>
    classes?: string
}

const ImageList: React.FC<imageListType> = ({func, page, showMore, photo, classes}) => {
    const query = useTypedSelector(state => state.search.searchQuery)
    const orientation = useTypedSelector(state => state.search.searchOrientation)
    const size = useTypedSelector(state => state.search.searchSize)



    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(func)
        return () => {}
    }, [dispatch, page, query, orientation, size])

    return (
        <InfiniteScroll
            dataLength={photo.length}
            next={showMore}
            className={classes}
            hasMore={true}
            loader={
                <div className={'flex justify-center'}>
                    <img src={PreLoader} alt={'preloader'} />
                </div>
            }
        >
            <ImageCard photos={photo}/>
        </InfiniteScroll>
    )

}

export default ImageList