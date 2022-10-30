import React, {useEffect, useState} from 'react';
import TableContext from '../Contexts/TableContext';
import './Stylesheets/Toolbar.css';


function Toolbar() {
    const [totalTables, setTotalTables] = useState(1);
    const [newTables, setNewTables] = useState([]);
    const {setTables} = React.useContext(TableContext);

    function addTable(){
        const updateTables = newTables.concat({title: `Table ${totalTables}`});
        setNewTables(updateTables);
        setTotalTables(totalTables + 1);
    }

    useEffect(() => { // update the TableContext from here
        setTables(newTables);
    }, [newTables])

    return(
            <div className='toolbar'>
                <ul>
                    <li className='toolbar-element'>
                        <button>Save state...</button>
                    </li>
                    <li className='toolbar-element'>
                        <button onClick={addTable}>+ Add Table</button>
                    </li>
                </ul>
            </div>
    );
    
}


export default Toolbar;

