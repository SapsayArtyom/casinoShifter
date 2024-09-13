import { FC } from 'react'
import Block from '../Block'
import Button from '../ui/Button/Button'
 
interface CheatBlockProps {
    className?: string
}
 
const CheatBlock: FC<CheatBlockProps> = ({ className }) => {

    const cheats = [
        'loses',
        'win_10',
        'win_30',
        'win_100',
        'win_250',
        'win_2000',
        'win_mega',
        'win_mega_2515',
        'win_supwe',
        'win_bankir',
    ]

    const getCheats = () => {
        return cheats.map((item, id) => {
            return <p className='text-[#2074e2] cursor-pointer  mx-[8px]' key={id}>{item}</p>
        }) 
    }

    return (
        // <div className={className}>
        <Block title='Cheats' className='w-[100%] bg-[#f7f7f7]'>
            <div className='flex w-[100%] justify-between p-[15px] '>
                <div className='w-[50%]'>
                    <h2>array cheats</h2>
                    <textarea name="" id="" className='w-[500px] text-[black] p-2 border-[#000000] border-[1px]'></textarea>
                </div>
                <div className='w-[50%]'>
                    <p>cheats:</p>
                    <div className='flex flex-wrap'>
                        {getCheats()}
                    </div>
                </div>
            </div>
            <Button
                title='Submit'
                className='!w-[100px] !h-[30px] bg-[#0030cc] !rounded-[10px] !text-[#fff] ml-[15px]'
            />
        </Block>
        // </div>
    )
}
 
export default CheatBlock