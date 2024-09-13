import { FC } from 'react'
import MainBlock from '../../components/mainBlock/MainBlock'
import { classNames } from '../../helpers/classNames'
 
interface GamePageProps {
    className?: string
}
 
const GamePage: FC<GamePageProps> = ({ className }) => {
    return (
        <div className={classNames(className, {}, [className, 'h-[100%] flex flex-col'])}>
            <div className='flex flex-auto'>
                <MainBlock />
            </div>
        </div>
    )
}
 
export default GamePage