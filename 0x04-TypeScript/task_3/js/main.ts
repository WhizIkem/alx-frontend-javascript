// create a triple slash directive that includes all dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// create object row with type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// const variable named newRowID with the type RowID and assign the value the insertRow command
const newRowID: RowID = CRUD.insertRow(row);

//  const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);