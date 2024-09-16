import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { processInvoice, setInvoices } from '../slices/invoiceSlice';
import DefaultButton from '../../../common/components/buttons/default-button';

const ButtonInvoiceUpload = ({ config }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.invoices.isLoading);
  const isSubmitted = useSelector((state) => state.invoices.isSubmitted);
  const totalInvoices = useSelector((state) => state.invoices.data.length);
  const selectedApplication = useSelector((state) => state.application.selectedApplication);

  const handleFileChange = async (event) => {
    try {
      const invoiceData = await dispatch(processInvoice({ files: event.target.files, applicationName: config }));
      dispatch(setInvoices(invoiceData.payload));
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  const isButtonDisabled = isLoading || selectedApplication === 'select application' || isSubmitted.length !== totalInvoices;

  return (
    <DefaultButton 
      onClick={() => document.getElementById('file-input').click()}
      disabled={isButtonDisabled}
      sx={{ 
        minWidth: '10rem', 
        marginRight: '1rem'
      }}
    >
      Upload File(s)
      <input
        id="file-input"
        type="file"
        accept=".pdf"
        multiple
        hidden
        onChange={handleFileChange}
      />
    </DefaultButton>
  );
};

export default ButtonInvoiceUpload;