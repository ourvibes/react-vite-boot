import * as XLSX from 'xlsx';
import dayjs from 'dayjs';

export interface ExportExcelParams {
  exportData: unknown[];
  fileName: string;
}

const exportExcel = (params: ExportExcelParams) => {
  const { fileName, exportData } = params;

  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

  const workbook: XLSX.WorkBook = XLSX.utils.book_new();

  const tail = dayjs().format('YYYY_MM_DD_HH_mm_ss');

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  XLSX.writeFile(workbook, `${fileName}_${tail}.xlsx`);
};

export default exportExcel;
