import React, {useEffect, useContext, useState} from 'react'
import Draggable from 'react-draggable';
import './Stylesheets/Table.css';

function Table() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [clientCoords, setClientCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        resizeHandler();
    }, []);
    
    function eventLogger (e, data) {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    
    //This will get the height and the width of the viewport
    function getWindowDimensions(){
        const {innerWidth : width, innerHeight : height} = window;
        return {width, height};
    }

    //This will set these dimensions
    function resizeHandler() {
        setWindowDimensions(getWindowDimensions());
    }

    //On drag, this will record the coords
    function handleDrag(e, data){
        setClientCoords({
            x: data.x,
            y: data.y,
        });

    }


    return(
        <Draggable onDrag={handleDrag} onStop={eventLogger} defaultPosition={{x: windowDimensions.width / 2, y: windowDimensions.height / 2}} 
            bounds="parent">
            <div className='table'>
                <h2> Hello! I am a table </h2>
                <h3>(x: {clientCoords.x}, y: {clientCoords.y})</h3>
                <h2>attr</h2>
                <h2>attr</h2>
            </div>
        </Draggable> 
    );
    
}


export default Table;

