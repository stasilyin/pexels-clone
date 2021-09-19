import React from 'react'
import {imagePanelType} from "../../types/imagePanelType"
import downloadIcon from '../../../img/DownloadIcon.svg'
import addToCollectionIcon from '../../../img/AddToCollectionIcon.svg'
import like from '../../../img/Like.svg'


const ImagePanel: React.FC<imagePanelType> = ({avatar,
                                                  nameAuthor,
                                                  linkDownload,
                                                  width
}) => {
    return (
        <div className={`image-panel opacity-0 absolute bottom-0 bg-black`} style={{width: width}}>
            <div className={'author'}>
                <div></div>
                <div>
                    <img src={downloadIcon} alt={''} />
                    <img src={addToCollectionIcon} alt={''} />
                    <img src={like} alt={''} />
                </div>
            </div>
        </div>

    )
}

export default ImagePanel