import React from 'react';

function InvoiceDisplayPDF({ invoice }) {
  return (
    <div>
      {invoice?.pages?.length > 0 ? (
        invoice.pages.map((pageBinary, index) => (
          <object 
            key={index} 
            data={`data:application/pdf;base64,${pageBinary}`} 
            type="application/pdf" 
            width="100%" 
            height="600px"
            aria-label={`Invoice Page ${index + 1}`}
          >
            <p>Your browser does not support PDFs. 
               <a href={`data:application/pdf;base64,${pageBinary}`}>Download the PDF</a> to view it.
            </p>
          </object>
        ))
      ) : (
        invoice?.img?.map((imageData, index) => (
          <img 
            key={index} 
            src={`data:image/jpeg;base64,${imageData}`} 
            alt={`Invoice Page ${index + 1}`} 
            style={{
              maxWidth: '48vw', // Maximum width is 50% of the viewport width
            }} 
          />
        ))
      )}
    </div>
  );
}

export default InvoiceDisplayPDF;
