import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log('Images', props.images)
    /*
    const images = props.images.map(({id, urls, description })=>{
        return (<img key={id} src={urls.regular} alt={description}/>);
    });
    */
    const images = props.images.map((image)=>{
        return (<ImageCard key={image.id} image={image}/>);
    });
    return (
        <div className="image-list">{images}</div>
    );
};

export default ImageList;