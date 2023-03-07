import React from 'react';
import { useParams } from "react-router-dom";
import RentalsListing from '../../datas/RentalsListing.json';
// import '../../styles/Tags.scss';

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