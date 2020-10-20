import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default function ExportExcel({ tableId }) {
  return (
    <>
      <ReactHTMLTableToExcel
        id="export-button"
        table={tableId}
        filename="STRINGING_REPORT"
        sheet="Sheet 1"
        buttonText="Export"
        extName={'xlsx'}
      />
    </>
  );
}
