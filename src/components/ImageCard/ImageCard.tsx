import React from 'react';
import Masonry from "react-masonry-css";
import ImagePanel from "./imagePanel/ImagePanel";
import {Photo} from "pexels";
const breakpointCols = {
    default: 5,
    1600: 4,
    1200: 3,
    900: 2,
    650: 1,
}



 const ImageCard: React.FC<{photos: Array<Photo>}> = (photos) => {
    return (
        <Masonry
            breakpointCols={breakpointCols}
            className={'relative overflow-hidden flex mt-5'}
        >

            {photos.photos.map((photo: Photo) => {
                return (

                    <div key={photo.id} className={'image-card block m-2 relative overflow-hidden flex-shrink flex-grow'}>
                        <img src={photo.src.large}
                             alt={'photo'} className={'object-fill w-full'} />
                        <ImagePanel avatar={''}
                                    linkDownload={photo.src.original}
                                    nameAuthor={photo.photographer}
                                    photographerUrl={photo.photographer_url}
                        />
                    </div>
                )
            })}
        </Masonry>
    );
}

export default ImageCard
