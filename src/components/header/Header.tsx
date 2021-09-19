import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {bgImgFetch} from "../store/action-creators/img";
import NavBar from "./nav/NavBar";
import ImageCard from "../imageCard/ImageCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {curatedImgFetch} from "../store/action-creators/curatedImgLoader";
const Header: React.FC = () => {
    const { img, loading, error }  = useTypedSelector(state => state.img)
    const curatedPhoto = useTypedSelector(state => state.curatedImg.imgCurated)
    const [page, setPage] = useState(1);
    //@ts-ignore
    const bgImage = img.src?.large2x
    const dispatch = useDispatch()

    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }
    useEffect(() => {
        dispatch(bgImgFetch())
        return ()=>{}
    }, [])
    useEffect(() => {
        dispatch(curatedImgFetch(page, 20))
    }, [dispatch, page])

    return (

        <div className='w-full'>
            {loading && (img !== undefined) ?
                <span>Loading</span>
                :
                <div>
                    <NavBar />
                    <div
                        className='w-full h-60vh bg-cover'
                        style={{backgroundImage: `url(${bgImage})`}}
                    >

                    </div>
                    <InfiniteScroll
                        dataLength={4}
                        next={showMorePhotos}
                        hasMore={true}
                        loader={<div className={''} key={0}></div>}>
                        <ImageCard photos={curatedPhoto}/>
                    </InfiniteScroll>
                </div>
                }
        </div>
    )
}

export default Header