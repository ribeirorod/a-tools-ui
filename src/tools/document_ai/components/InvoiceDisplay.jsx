import React from "react";
function InvoiceDisplay({ invoice }) {
  return (
    <div>
      {invoice?.img?.map((imageData, index) => (
        <img 
          key={index} 
          src={`data:image/jpeg;base64,${imageData}`} 
          alt={`Invoice Page ${index + 1}`} 
          style={{
            maxWidth: '48vw', // Maximum width is 50% of the viewport width
          }} 
        />
      ))}
    </div>
  );
}

export default InvoiceDisplay;
