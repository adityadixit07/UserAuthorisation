import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ ratings }) => {
    return (
        <div className="flex">
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <AiFillStar
                        className={`text-xl ${index < ratings ? 'text-[#3DF554]' : 'text-[#A7A7A7]'}`}
                        key={index}
                    />
                ))}
        </div>
    );
}

export default StarRating