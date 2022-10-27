import React, {useEffect, useContext, useState} from 'react'
import Draggable from 'react-draggable';
import './Stylesheets/Table.css';

function Table() {


    function getClientCoords(x, y){
        setClientCoords({x, y});
    }
    
    function eventLogger (e, data) {
        getClientCoords(e.clientX, e.clientY)
        // console.log('Event: ', e);
        // console.log('Data: ', data);
    };
    
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [clientCoords, setClientCoords] = useState({});

    const padding = 30;

    useEffect(() => {
        resizeHandler();
    }, []);

    function getWindowDimensions(){
        const {innerWidth : width, innerHeight : height} = window;
        return {width, height};
    }

    function resizeHandler() {
        setWindowDimensions(getWindowDimensions());
        console.log(windowDimensions);
    }


    return(
        <div>
            <Draggable  onStop={eventLogger} defaultPosition={{x: windowDimensions.width / 2, y: windowDimensions.height / 2}} 
                bounds={{left: padding, right: windowDimensions.width - padding, top: padding, bottom: windowDimensions.height + padding}}>
                <div className='table'>
                    <h1>{clientCoords.x}, {clientCoords.y}</h1>
                    <h2>attr</h2>
                    <h2>attr</h2>
                </div>
            </Draggable>
        </div>
    );
    
}


export default Table;

