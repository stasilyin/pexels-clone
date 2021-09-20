import Header from "../components/Header/Header";
import ImageList from "../components/ImageList/ImageList";
import React, {useState} from "react";
import {curatedImgFetch} from "../store/action-creators/curatedImgLoader";

const Main: React.FC = () => {
    const [page, setPage] = useState(1);
    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }
    return (
        <>
            <Header />
            <ImageList func={curatedImgFetch(page, 20)} page={page} showMore={showMorePhotos} />
        </>
    )
}

export default Main