import React from 'react';

interface ColorPickerProps {
    color: string;
    onColorChange: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onColorChange(event.target.value);
    };

    return (
        <div className="flex justify-between">
            <h1>Background Color</h1>
            <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className='w-16'
            />
        </div>
    );
};

export default ColorPicker;