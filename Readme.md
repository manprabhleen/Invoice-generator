# Invoice Generator

## Description
The Invoice Generator is a web application built with React, Vite, and Tailwind CSS that allows users to create, manage, and export invoices in various formats (PDF and Excel). The application provides a user-friendly interface for inputting invoice details, dynamically updating item lists, and displaying invoice data in a structured format.

## Features
- Create and manage invoice details including company and customer information.
- Add, edit, and delete invoice items in a table format.
- Generate and download invoices as PDF and Excel files.
- Display invoice data in JSON format for easy debugging and verification.

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **Libraries**: 
  - `jspdf` and `jspdf-autotable` for PDF generation
  - `xlsx` for Excel file generation
  - `ag-grid-react` for displaying invoice items in a grid format
  - `react-datepicker` for date selection

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the application.

## How to Generate Invoices
1. Fill in the invoice header information (company name, address, customer name, etc.).
2. Add items to the invoice by filling in the item name, description, quantity, and price.
3. Click on the "Generate PDF" or "Generate Excel" button to download the invoice in the desired format.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the ISC License.

## Acknowledgments
- Thanks to the open-source community for the libraries and tools that made this project possible.
