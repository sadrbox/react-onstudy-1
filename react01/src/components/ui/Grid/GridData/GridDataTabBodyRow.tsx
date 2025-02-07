import React, { CSSProperties, Dispatch, FC, MouseEventHandler, MutableRefObject, ReactNode, Ref, SyntheticEvent, useEffect, useRef, useState } from 'react'
import styles from "../styles.module.scss";
// import { useContextDataGrid } from './GridContextData';
import { SetStateAction } from 'react';
import { TColumn, TDataItem } from '../types';
import GridDataTabBodyRowCheckbox from './GridDataTabBodyRowCheckbox';
import { getFormatColumnValue, getTextAlignByColumnType } from './services';
import { useContextGridData } from './GridDataContext';


type TProps = {
  countID: number;
  rowID: number;
  columns: TColumn[];
  row: TDataItem;
  // states: {
  //   activeRow: number | null, setActiveRow: Dispatch<SetStateAction<number | null>>
  // }
}

const GridDataTabBodyRow: FC<TProps> = ({ countID, rowID, columns, row }) => {

  const { context } = useContextGridData();

  function setActiveRow(rowID: number) {
    if (context?.states?.setActiveRow)
      context?.states?.setActiveRow(rowID)
  }

  function isActiveRow(rowID: number) {
    return (context?.states?.activeRow === rowID) || false
  }




  return (
    <tr data-count-id={countID} data-row-id={rowID} onDoubleClick={() => console.log("onDoubleClick")}>
      {columns && columns.filter(column => column.visible).map((column: TColumn, columnIndex: number) => {
        const rowsKey = Object.keys(row);
        if (columns.find(el => rowsKey.includes(el.identifier)))
          if (column.type === 'string' || column.type === "number" || column.type === 'boolean') {
            if (column.type === 'boolean') {
              return (
                <td key={columnIndex}>
                  <div style={{ justifyItems: column?.alignment }} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                    <GridDataTabBodyRowCheckbox countID={countID} rowID={rowID} />
                  </div>
                </td>)
            } else if (column.type === 'string' || column.type === 'number') {
              const value = getFormatColumnValue(row, column);
              return (
                <td key={columnIndex} onClick={() => setActiveRow(rowID)}>
                  <div style={getTextAlignByColumnType(column)} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                    <span>{value}</span>
                  </div>
                </td>)
            }
            else {
              const value = getFormatColumnValue(row, column);
              return (
                <td key={columnIndex} onClick={() => setActiveRow(rowID)}>
                  <div style={getTextAlignByColumnType(column)} className={isActiveRow(rowID) ? styles.TabFieldActive : styles.TabField}>
                    <span>{value}</span>
                  </div>
                </td>)
            }
          }
      }
      )}
    </tr >
  )
}

export default GridDataTabBodyRow;