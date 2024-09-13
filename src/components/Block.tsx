import { FC, useState } from 'react'
import { classNames } from '../helpers/classNames'
 
interface BlockProps {
    className?: string
    title: string
    children: React.ReactNode
}
 
const Block: FC<BlockProps> = ({ className, title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
    };

    return (
        <div className={classNames(className, {}, ['w-[100%] flex flex-col pb-[15px]'])}>
            <div className="header flex w-[100%] bg-[#c0c0c0] justify-between px-[15px] items-center border-t-[#ff993a] border-t-[5px]">
                <h2 className='text-[black]'>{title}</h2>
                <button onClick={toggleCollapse} className='text-3xl text-[black]'>
                    {isCollapsed ? '+' : '-'}
                </button>
            </div>
            {!isCollapsed && (
                <div className="content">
                    {children}
                </div>
            )}
        </div>
    )
}
 
export default Block