import axios from 'axios';

// import MockAdapter from 'axios-mock-adapter';
// import textForm from '../backend_response.json';

// Create an axios instance with the base URL
const axiosInstance = axios.create({
  // baseURL:  `${window.location.protocol}//${window.location.hostname}` 
  baseURL:  `${window.location.protocol}//${window.location.hostname}:8000` 
});
// let mock = new MockAdapter(axiosInstance);
// mock.onPost('/process_pdf').reply(200, {   
//   data: textForm
// });


export const processInvoices = async (files, applicatioName) => {
  const invoicePromises = Array.from(files).map((file) => {
    const formData = new FormData();
    formData.append('file_object', file);
    formData.append('application', applicatioName);
    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }    
    return axiosInstance.post('/process_pdf', formData);
  });

  try {
    const responses = await Promise.all(invoicePromises);
    return responses.map(response => response.data);
  } catch (error) {
    console.error('Upload failed', error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    throw error;
  }
};

export const reProcessInvoice = async (invoiceData, applicationName) => {
  try {
    if (!invoiceData || typeof invoiceData !== 'object') {
      throw new Error('Invalid invoiceData: should be an object');
    }

    const response = await axiosInstance.post(`/re_process_pdf?application=${applicationName}`, {data:JSON.stringify(invoiceData)});
    return response.data;
  } catch (error) {
    console.error('Reprocessing failed', error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    throw error;
  }
};


export const updateInvoiceHandler = async(updatedInvoice) => {
  try {
    const response = await axiosInstance.post('/push_manual_review',  
    { data: updatedInvoice }, 
    );

    return response.data;
  } catch (error) {
    console.error('Update failed', error);
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.log(error.response);
      console.log(error.response.data);
      console.log(error.response.headers);
    }
    throw error;
  }
};

