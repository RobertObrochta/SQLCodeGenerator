import React from "react";
import TableContext from "../Contexts/TableContext";
import Table from "./Table";

function Workspace(){

    return(
        <TableContext.Consumer>
        {value => value.tables.map((val, index) => 
          <Table key={index} title= {val.title}/>
        )}
      </TableContext.Consumer>
    );
}

export default Workspace;