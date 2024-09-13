import { FC, useState } from 'react';

interface ICheckBox {
    title: string
    onChecked?: () => void
}

const Checkbox: FC<ICheckBox> = ({title, onChecked}) => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = () => {
        setChecked(!checked);
        if(onChecked) onChecked();
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                {title}
                {/* {checked ? 'Отмечено' : 'Не отмечено'} */}
            </label>
        </div>
    );
}

export default Checkbox;