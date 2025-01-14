
import { jsPDF } from "jspdf";
import "jspdf-autotable";
const InvoicePDF = ({ invoiceInfoHeaderData, invoiceItemsTableData }) => {
  const timeStamp = new Date().toISOString();

  const generatePDF = () => {
    if (
      !invoiceInfoHeaderData.companyName ||
      !invoiceInfoHeaderData.invoiceNumber
    ) {
      alert("Company Name and Invoice Number are required to generate the PDF.");
      return;
    }
    const doc = new jsPDF();

    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Invoice", 10, 10);
    
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Company Name: ${invoiceInfoHeaderData.companyName}`, 10, 20);
    doc.text(`${invoiceInfoHeaderData.companyAddress}`, 10, 30);
    doc.text(`Customer Name: ${invoiceInfoHeaderData.customerName}`, 10, 40);
    doc.text(`Invoice Number: ${invoiceInfoHeaderData.invoiceNumber}`, 10, 60);
    doc.text(`Invoice Date: ${invoiceInfoHeaderData.invoiceDate}`, 10, 70);

    
    const columns = [
      { header: "Item Name", dataKey: "itemName" },
      { header: "Item Description", dataKey: "itemDescription" },
      { header: "Quantity", dataKey: "quantity" },
      { header: "Price", dataKey: "price" },
      { header: "Total", dataKey: "total" },
    ];

    const rows = invoiceItemsTableData.map((item) => ({
      itemName: item.itemName,
      itemDescription: item.itemDescription,
      quantity: item.quantity,
      price: item.price,
      total: item.quantity * item.price,
    }));

    
    doc.autoTable(columns, rows, {
      startY: 90,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellWidth: "wrap",
        cellPadding: 3,
        halign: 'center', 
      },
      columnStyles: {
        itemName: { cellWidth: 30 },
        itemDescription: { cellWidth: 40 },
        quantity: { cellWidth: 20 },
        price: { cellWidth: 20 },
        total: { cellWidth: 30 },
      },
      margin: { left: 10, right: 10 },
    });

    
    const totalPrice = invoiceItemsTableData.reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);

    
    doc.setFont("helvetica", "bold");
    doc.text(`Total Price: ${totalPrice.toFixed(2)}`, 10, doc.autoTable.previous.finalY + 10);

    doc.save(`${invoiceInfoHeaderData.invoiceNumber}.pdf`);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={generatePDF} className="btn btn-primary">
        Generate PDF
      </button>
    </div>
  );
};

export default InvoicePDF;
