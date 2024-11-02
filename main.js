// Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'; // Used to get products from the API
    const ticketContainer = document.getElementById('ticketContainer'); //Container to display tickets
    const errorMessage = document.getElementById('errorMessage'); //Used to display error message

    try { //Used to ensure errors are handled gracefully. 
        // data from API 
        const response = await fetch(apiEndpoint); // Await used to pause the function's execution until the promises are resolved.
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }
        const data = await response.json(); // Used to parse to json.
  
        if (data.length === 0) { // Used to check if the data is empty
            throw new Error('No tickets available'); // Used to display error if data is empty. 
        }

        displayTickets(data);
    } catch (error) { //Used to handle errors
        errorMessage.textContent = `Error: ${error.message}`; //Error message will display 
    } finally {
        console.log('Fetch attempt completed!'); //  // If there are any loding indicators, message will display 
    }
}

