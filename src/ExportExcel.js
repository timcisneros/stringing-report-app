import React from 'react';
export default function ExportExcel({ tableId }) {
  const exportTable = () => {
    const table = document.getElementById(tableId);
    if (!table) return;
    const documentSource = `<!doctype html><html><head><meta charset="utf-8"></head><body>${table.outerHTML}</body></html>`;
    const url = URL.createObjectURL(
      new Blob([documentSource], { type: 'application/vnd.ms-excel;charset=utf-8' })
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = 'STRINGING_REPORT.xls';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button id="export-button" type="button" onClick={exportTable}>
      Export
    </button>
  );
}
