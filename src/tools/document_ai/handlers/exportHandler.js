import axios from "axios";

// Create an axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: `${window.location.protocol}//${window.location.hostname}`, 
  // baseURL: `${window.location.protocol}//${window.location.hostname}:8000`, 
});

export const exportInvoices = async (endpoint, data, application) => {
  try {
    data = Array.isArray(data) ? data : [data];
    const response = await axiosInstance.post(
      `/download${endpoint}?application=${application}`,
      data,
      { responseType: 'blob' }  // Indicate that we are expecting a Blob object
    );

    // Extract the file type from the endpoint
    const fileType = endpoint.split('/').pop();

    // Determine the MIME type and file extension based on the file type
    let mimeType, fileExtension;
    if (fileType === 'excel') {
      mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      fileExtension = 'xlsx';
    } else if (fileType === 'csv') {
      mimeType = 'text/csv';
      fileExtension = 'csv';
    } else {
      throw new Error(`Unsupported file type: ${fileType}`);
    }

    // Create a new Blob object from the response data
    const file = new Blob([response.data], { type: mimeType });

    // Create a link for the file
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', `${application}.${fileExtension}`);  // Set the file name
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up by removing the link
    document.body.removeChild(link);

    return response.status;
  } catch (error) {
    console.error("Export failed", error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};