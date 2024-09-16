import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { exportInvoices } from '../handlers/exportHandler';
import DefaultButton from '../../../common/components/buttons/default-button';
import BaseComponent from '../../../common/components/base-component';

const ButtonInvoiceExport = ({ onExport, application, isDisabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useSelector((state) => state.invoices.data);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleExport = async (endpoint) => {
    try {
      const status = await exportInvoices(endpoint, data, application);
      if (status === 1) {
        console.log('Export successful');
        onExport(status);
      }
    } catch (error) {
      console.error('Export failed', error);
    }
    setIsMenuOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <DefaultButton 
        onClick={handleClick}
        disabled={isDisabled}
        color='secondary'
        sx={{ minWidth: '10rem', marginRight: '1rem' }}
      >
        EXPORT
      </DefaultButton>
      {isMenuOpen && (
        <BaseComponent
          as="ul"
          color="backgroung"
          elevation="md"
          padding="sm"
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            minWidth: '10rem',
            listStyle: 'none',
            margin: 0,
            zIndex: 1000,
          }}
        >
          <li>
            <DefaultButton onClick={() => handleExport('/csv')} sx={{ width: '100%', justifyContent: 'flex-start' }}>
              CSV
            </DefaultButton>
          </li>
          <li>
            <DefaultButton onClick={() => handleExport('/excel')} sx={{ width: '100%', justifyContent: 'flex-start' }}>
              Excel
            </DefaultButton>
          </li>
        </BaseComponent>
      )}
    </div>
  );
};

export default ButtonInvoiceExport;