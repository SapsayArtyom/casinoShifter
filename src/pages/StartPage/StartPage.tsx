import { FC } from 'react'
import Button, { ThemeButton } from '../../components/ui/Button/Button'
import { useNavigate } from 'react-router-dom';
 
interface StartPageProps {
    className?: string
}
 
const StartPage: FC<StartPageProps> = ({ className }) => {

    const navigate = useNavigate();

    return (
        <div className='h-[100%] relative'>
            <div className='flex flex-col justify-center items-center h-[100%]'>
                <Button
                    className='!w-[300px] !h-[50px] mb-[20px]'
                    theme={ThemeButton.PRIMARY}
                    title='free game'
                    onClick={() => navigate('/game')}
                />
                <Button
                    className='!w-[300px] !h-[50px] mb-[20px]'
                    theme={ThemeButton.PRIMARY}
                    title='buy game'
                    onClick={() => navigate('/game')}
                />
                <Button
                    className='!w-[300px] !h-[50px]'
                    theme={ThemeButton.PRIMARY}
                    title='special game'
                    onClick={() => navigate('/game')}
                />
            </div>
            <div className='absolute bottom-[30px] right-[30px]'>
                <Button
                    className='!w-[300px] !h-[50px] hover:bg-[#2a3775]'
                    theme={ThemeButton.INACTIVE}
                    title='shop'
                    onClick={() => navigate('/shop')}
                />
            </div>
        </div>
    )
}
 
export default StartPage