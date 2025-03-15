import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import {useState} from 'react';

export default function ProductCard ( {venueName, imgSrc, onRating} :  {venueName: string, imgSrc: string, onRating?: Function} ) {
    const  [value, setValue] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                objectFit='cover'
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>{venueName}</div>
            {
                onRating? 
                <Rating 
                    id={venueName + " Rating"} 
                    name={venueName + " Rating"} 
                    data-testid={venueName + " Rating"} 
                    className='h-[10%] px-2 py-1' 
                    value={value}
                    onChange={(e, newValue) => {
                        setValue(newValue);
                        onRating(venueName,newValue);
                    }}
                    onClick={(e) => e.stopPropagation()} 
                    onPointerDown={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}                
                /> : ''
            }
            {/* <Rating 
                id={venueName + " Rating"} 
                name={venueName + " Rating"} 
                data-testid={venueName + " Rating"} 
                className='h-[10%] px-2 py-1' 
                value={value}
                onChange={(e, newValue) => {
                    setValue(newValue);
                    onRating(venueName,newValue);
                }}
                onClick={(e) => e.stopPropagation()} 
                onPointerDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}                
            /> */}

        </InteractiveCard>
    )
}

