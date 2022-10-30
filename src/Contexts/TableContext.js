import React from "react";

export const TableContext = React.createContext({
    tables: [],  // stores a list of tables[i] = {title: "", etc...}
    setTables: (newTable) => {}
});

export const TableProvider = TableContext.Provider;
export default TableContext;