import React from 'react';
import { useParams } from "react-router-dom";
import RentalsListing from '../../datas/RentalsListing.json';

// The useParams() hook is a React Router hook that allows you to access the parameters of the current URL

function Tags () {
    const { id } = useParams();
    let rental = RentalsListing.find(i => i.id === id);;
        return (
            <div className="tags">
            {rental && (
                <div className="tags__content">
                {rental.tags.map((tag) => (
                    <span key={tag} className="tags__span">
                    {tag}
                    </span>
                ))}
                </div>
            )}
            </div>
        );
}

export default Tags;