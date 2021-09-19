import React, {useState} from 'react';
import Masonry from "react-masonry-css";
import {useDispatch, useSelector} from "react-redux";
import ImagePanel from "./imagePanel/ImagePanel";
import {useTypedSelector} from "../../hooks/useTypedSelector";
const breakpointCols = {
    default: 5,
    1600: 4,
    900: 2,
    600: 1
}



 const ImageCard: React.FC<{photos: any[]}> = (photos) => {
    const use = useTypedSelector(state => state.curatedImg)
    const dispatch = useDispatch()
     console.log(photos, 'asd')

    return (
        <Masonry
            breakpointCols={breakpointCols}
            className={'relative overflow-hidden flex mt-5'}
        >
            <div className={'image-card block relative m-3 flex-shrink flex-grow'} onClick ={() => {
                console.log(use)
            }}>
                <img src={'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}
                     alt={'photos'} className={'object-fill'} />
                <ImagePanel avatar={''} linkDownload={''} nameAuthor={''} width={'280px'}/>
            </div>

        </Masonry>
    );
}

export default ImageCard
