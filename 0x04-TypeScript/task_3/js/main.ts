import { RowID, RowElement } from "./interface";
import * as CRUD from './crud.js';

const obj: RowElement = {
  firstName: 'John',
  lastName: 'Doe',
};

const newRowID: RowID = CRUD.insertRow(obj);
console.log(`Insert row ${newRowID}`, obj);

const updatedRow: RowElement = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

CRUD.deleteRow(newRowID);
console.log(`Delete row ${newRowID}`);
