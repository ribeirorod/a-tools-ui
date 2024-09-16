// Receives an application name as prop
// Loops over the './config' folder and maps each exiting .y*ml file 
// created an object [{file_basename:file content}]
// returns the file content,as object, that matches the `application name` prop as key

const hostUrls = [
  `${window.location.protocol}//${window.location.hostname}`,
  `${window.location.protocol}//${window.location.hostname}:8000`,
];

export const applications = async () => {
  for (const hostUrl of hostUrls) {
    try {
      console.log(`Trying URL: ${hostUrl}`);
      const response = await fetch(`${hostUrl}/get_applications`);
      console.log(`Response from ${hostUrl}:`, response);

      if (!response.ok) { // check if HTTP-response is 2xx (success)
        throw new Error('Network response was not ok');
      }

      const applications = await response.json(); // assuming server responds with JSON
      console.log(`Applications from ${hostUrl}:`, applications);

      return applications;
    } catch (error) {
      console.error(`Fetch error with ${hostUrl}: ${error}`);
    }
  }
  return [];
}
