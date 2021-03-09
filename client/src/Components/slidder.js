import React, { useState, useEffect } from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';

const movies=[
    {
        id:1,
        image:'https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ar-icons-interactive-1-1@2x.svg',
        imageBg:'https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/plans-icon-1-1@2x.svg',
        title:'Use AR to find hidden oblects'
    },
    {
        id:2,
        image:'https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/plans-icon-1-1@2x.svg',
        imageBg:'https://filmdaily.co/wp-content/uploads/2019/07/13MH-1300x731.jpeg',
        title:'Learn more new worlds'
    },
    {
        id:3,
        image:'https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/plans-icon-1-2@2x.svg',
        imageBg:'https://ds1.static.rtbf.be/article/image/1248x702/3/a/9/42ca90c19da1a087068405feab9f91fb-1546871833.jpg',
        title:'Work hard and be the best'
    },
    {
        id:4,
        image:'https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/ar-icons-interactive-1-2@2x.svg',
        imageBg:'https://i.ytimg.com/vi/rQvIR1oL1vE/maxresdefault.jpg',
        title:'You will definitly love the game'
    },
    {
        id:5,
        image:'https://anima-uploads.s3.amazonaws.com/projects/603e32473d832b6567888c87/releases/603e326b3d832b6567888c89/img/81364-art-parent-family-child-download-free-image-1-1@2x.svg',
        imageBg:'https://educationpost.org/wp-content/uploads/2019/05/13reasonswhy.png',
        title:'You will have interesting quiz'
    },
]

function Slider() {

    const breackPoints = [
        {width:1, itemsToShow:1},
        {width:500, itemsToShow:2},
        {width:768, itemsToShow:3},
        {width:1200, itemsToShow:3},        
    ]

    const [button,setbutton] = useState(false);
    const [state,setState] = useState();

    useEffect(() => {
        setState(state)
        return () => {
        }
    }, [state]);
    
    let arr = [];

    const hey = ()=>{

    }

    const movieID = state;

    const handleClick = (i,event)=>{
        arr = [i];
        setState(i);    
        setbutton(!button)
    }

    return (
        <div className="slider">
            <Carousel breakPoints={breackPoints}>
                {movies.map((movie,i)=>(
                    <span key={i}>
                        <button className="button3" onClick={hey(), handleClick.bind(this,i)}><Card movie={movie} title={movie.title} image={movie.image} ></Card></button>
                    </span>
                ))}
            </Carousel>
        </div>
    )
}

export default Slider
