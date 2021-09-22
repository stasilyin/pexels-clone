import React from 'react'
import SortedItem from "./SortedItem";
import strings from "../../locales/localization";
import Smallcon from "../../img/icon/Smallcon";
import MediumIcon from "../../img/icon/MediumIcon";
import LargeIcon from "../../img/icon/LargeIcon";
import OrderSizeIcon from "../../img/icon/OrderSizeIcon";

const OrderSize: React.FC = () => {
    const text = strings.const.sort.type.size
    const classItems = 'select-none px-2 hover:bg-gray-400 opacity-70 h-10 cursor-pointer flex justify-center items-center'
    return(
        <SortedItem title={text.title}
                    icon={<OrderSizeIcon/>}>
            <div className={'flex flex-col text-base text-gray-200 bg-white rounded'}>
                <div className={`${classItems} rounded-t`}>{text.all}</div>
                <div className={classItems}>
                    <LargeIcon />
                    {text.large}
                </div>
                <div className={classItems}>
                    <MediumIcon />
                    {text.medium}
                </div>
                <div className={`${classItems} rounded-b`}>
                    <Smallcon/>
                    {text.small}
                </div>
            </div>


        </SortedItem>
    )
}

export default OrderSize