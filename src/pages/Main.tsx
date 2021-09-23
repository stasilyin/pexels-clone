import Header from "../components/Header/Header"
import ImageList from "../components/ImageList/ImageList"
import React, {useState} from "react"
import {curatedImgFetch} from "../store/action-creators/curatedImgLoader"
import {useTypedSelector} from "../hooks/useTypedSelector"
import strings from "../locales/localization";

const Main: React.FC = () => {
    const curatedPhoto = useTypedSelector(state => state.curatedImg.imgCurated)
    const { errorCurated } = useTypedSelector(state => state.curatedImg)
    const [page, setPage] = useState(1)
    const titles = strings.const.titles.headerPage
    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }
    return (
        <>
            <Header />
            <h1 className='flex justify-center text-xl md:text-2xl lg:text-3xl mt-3 items-center'>{titles}</h1>
            {
                errorCurated ?
                    <div className='flex justify-center items-center text-2xl text-red-400'>
                        {errorCurated}
                    </div>

                    :

                    <ImageList
                        func={curatedImgFetch(page, 20)}
                        page={page} showMore={showMorePhotos}
                        photo={curatedPhoto} />
            }
        </>
    )
}

export default Main