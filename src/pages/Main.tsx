import Header from "../components/Header/Header"
import ImageList from "../components/ImageList/ImageList"
import React, {useState} from "react"
import {curatedImgFetch} from "../store/action-creators/curatedImgLoader"
import {useTypedSelector} from "../hooks/useTypedSelector"

const Main: React.FC = () => {
    const curatedPhoto = useTypedSelector(state => state.curatedImg.imgCurated)
    const [page, setPage] = useState(1);
    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }
    return (
        <>
            <Header />
            <h1></h1>
            <ImageList
                func={curatedImgFetch(page, 20)}
                page={page} showMore={showMorePhotos}
                photo={curatedPhoto} />
        </>
    )
}

export default Main