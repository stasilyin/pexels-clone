import React from 'react'
import {imagePanelType} from "../../../types/imagePanelType"
import downloadIcon from '../../../img/DownloadIcon.svg'
import addToCollectionIcon from '../../../img/AddToCollectionIcon.svg'
import like from '../../../img/Like.svg'


const ImagePanel: React.FC<imagePanelType> = ({
                                                  avatar,
                                                  nameAuthor,
                                                  linkDownload,
                                                  photographerUrl,
                                                  bgColor,
                                              }) => {
    return (
        <div className={`image-panel opacity-0 absolute bottom-0 bg-black flex-nowrap w-full animate-fade`}>
            <div className={'flex lg:justify-between justify-end pr-2 items-center h-10'}>
                <a className={'lg:flex justify-center items-center ml-2 hidden'} href={photographerUrl} target={'_blank'}>
                    <div className='w-8 mr-2 h-8 rounded-full' style={{backgroundColor: bgColor ? bgColor : 'white'}}/>
                    <span className={'text-white text-gray-300 hover:text-white text-base'}>{nameAuthor}</span>
                </a>
                <div className={'flex w-1/3 justify-end lg:justify-between'}>
                    <a href={linkDownload}>
                        <img className={'cursor-pointer'} src={downloadIcon} alt={''} />
                    </a>
                    <img className={'cursor-pointer hidden lg:block'} src={addToCollectionIcon} alt={''} />
                    <img className={'cursor-pointer hidden lg:block'} src={like} alt={''} />
                </div>
            </div>
        </div>

    )
}

export default ImagePanel