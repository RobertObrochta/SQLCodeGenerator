import React, {useEffect, useState} from 'react'
import Draggable from 'react-draggable';
import './Stylesheets/Table.css';


function Table({title, attributes}) {

    let {width, height} = getWindowDimensions();

    const [windowDimensions, setWindowDimensions] = useState({width: width, height: height});
    const [clientCoords, setClientCoords] = useState({x: 5, y: 5});

    // console.log(tables);
    
    function eventLogger (e, data) {
        // console.log('Event: ', e);
        // console.log('Data: ', data);
    };
    
    //This will get the height and the width of the viewport
    function getWindowDimensions(){
        const {innerWidth : width, innerHeight : height} = window;
        return {width, height};
    }

    //This will set these dimensions
    function resizeHandler() {
        const {width, height} = getWindowDimensions();
        setWindowDimensions({width, height});

        if (clientCoords.x >= windowDimensions.width){
            setClientCoords({x: windowDimensions.width / 2, y: clientCoords.y});
        }
        if (clientCoords.y >= windowDimensions.height){
            setClientCoords({x: clientCoords.x, y: windowDimensions.height / 2});
        }
    }

    //On drag, this will record the coords
    function handleDrag(e, data){
        setClientCoords({
            x: data.x,
            y: data.y,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler, false);
        // eslint-disable-next-line
    }, [width, height]);


    return(
        <Draggable onDrag={handleDrag} onStop={eventLogger} defaultPosition={{x: windowDimensions.width / 2, y: windowDimensions.height / 2}} 
            bounds="parent" position={{x: clientCoords.x, y: clientCoords.y}}>
            <div className='sql-table'>
                <h2> {title} </h2>
                <h3>(x: {clientCoords.x}, y: {clientCoords.y})</h3>
                { attributes.map((element) => {
                    return (
                        <h3>{element['name']} {element['type']}</h3>
                    )
                })}
            </div>
        </Draggable> 
    );
    
}


export default Table;

