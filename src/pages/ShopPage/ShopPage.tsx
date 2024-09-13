import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
 
interface ShopPageProps {
    className?: string
}
 
const ShopPage: FC<ShopPageProps> = ({ className }) => {
    const navigate = useNavigate();

    const getItem = (link: string) => {
        return [0,0,0,0,0].map((item, id) => {
            return <div key={id} className='max-w-[300px] m-[10px] cursor-pointer' onClick={() => console.log(`click - ${id}`)}>
                    <img className='w-[100%] h-[auto]' src={link} alt="bgr-img" />
                </div>
        })
    }

    return (
        <div className={className}>
            <Button className='cursor-pointer !w-[50px] !h-[50px]' onClick={() => navigate(-1)}>back</Button>
            <h1 className='text-center text-5xl'>shop</h1>
            <div className='ml-[5px]'>
                <div className='w-[100%]'>
                    <h2 className='text-2xl'>background</h2>
                    <div className='flex justify-center'>
                        <div className='flex flex-wrap w-[100%] m-[30px]'>
                            {getItem("https://source.unsplash.com/random/800x600")}
                        </div>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <h2 className='text-2xl'>flappy</h2>
                    <div className='flex justify-center'>
                        <div className='flex flex-wrap w-[100%] m-[30px]'>
                            {getItem("https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ShopPage