import React, {useState} from 'react'
import {imagePanelType} from "../../../types/imagePanelType"
import {ReactComponent as Like} from '../../../img/Download.svg'
import {ReactComponent as AddToCollectionIcon} from '../../../img/AddToCollectionIcon.svg'
import {ReactComponent as Download} from '../../../img/Like.svg'


const ImagePanel: React.FC<imagePanelType> = ({
                                                  avatar,
                                                  nameAuthor,
                                                  linkDownload,
                                                  photographerUrl,
                                                  bgColor,
                                                  id,
                                                  isLiked,
                                              }) => {

    const classIcon = 'fill-current text-gray-300 w-6 h-6 cursor-pointer hover:text-white'

    const likeHandler = (e: React.BaseSyntheticEvent) => {
        const like = localStorage.getItem(e.currentTarget.dataset.id!)
        if (like) {
          localStorage.removeItem(e.currentTarget.dataset.id!)
            e.currentTarget.removeAttribute('style')
        } else {
            localStorage.setItem(e.currentTarget.dataset.id!, e.currentTarget.dataset.id!)
            e.currentTarget.style.color = 'red'
        }
    }

    return (
        <div className={`image-panel opacity-0 absolute bottom-0 bg-black flex-nowrap w-full animate-fade`}>
            <div className={'flex lg:justify-between justify-end pr-2 items-center h-10'}>
                <a className={'lg:flex justify-center items-center ml-2 hidden'}
                   href={photographerUrl}
                   target={'_blank'}
                   rel='noreferrer'
                >
                    <div className='w-8 mr-2 h-8 rounded-full' style={{backgroundColor: bgColor ? bgColor : 'white'}}/>
                    <span className={'text-white text-gray-300 hover:text-white text-base'}>{nameAuthor}</span>
                </a>
                <div className={'flex w-1/3 justify-end lg:justify-between'}>
                    <a href={linkDownload} target={'_blank'} rel='noreferrer'>
                        <Download className={classIcon} />

                    </a>
                    <AddToCollectionIcon className={classIcon}/>
                    <Like className={classIcon} data-id={id} onClick={likeHandler} style={{color: isLiked ? 'red' : ''}}/>
                </div>
            </div>
        </div>

    )
}

export default ImagePanel