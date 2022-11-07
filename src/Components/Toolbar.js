import React, {useEffect, useState} from 'react';
import TableContext from '../Contexts/TableContext';
import './Stylesheets/Toolbar.css';

import AddTableModal from './AddTableModal';


function Toolbar() {
    const [totalTables, setTotalTables] = useState(0);
    const [newTables, setNewTables] = useState([]);
    const {setTables} = React.useContext(TableContext);

    //This will be what displays the modal
    const [modalShow, setModalShow] = useState(false);

    //This will update the state and show the modal
    function handleModalShow () { setModalShow(true) }

    //This will add a table
    function addTable(value){
        const updateTables = newTables.concat({title: value['title'], attributes: value['attributes']});
        setNewTables(updateTables);
        setTotalTables(totalTables + 1);

        //Close the modal
        setModalShow(false);
    }

    //Every time the new tables array is updated, then we update the context.
    useEffect(() => { // update the TableContext from here
        setTables(newTables);
    }, [newTables])

    return(
        <>
            <div className='toolbar'>
                <ul>
                    <li className='toolbar-element'>
                        <button>Save state...</button>
                    </li>
                    <li className='toolbar-element'>
                        <button onClick={handleModalShow}>+ Add Table</button>
                    </li>
                </ul>
            </div>

            <AddTableModal show={modalShow} onHide={() => setModalShow(false)} valueChangeCallback={addTable}/>

        </>
    );
    
}


export default Toolbar;

