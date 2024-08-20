// module.exports = async function (context, req) {
//     try {
//         const jsonData = req.body;
//         // Assuming you have logic to get the existing data by ID
//         const existingData = await getExistingData(req.params.id); // Replace with your data retrieval logic
        
//         // Merge existing data with the new data (partial update)
//         const updatedData = {
//             ...existingData,
//             ...jsonData
//         };

//         console.log('Updated JSON data:', updatedData);

//         // Send a response
//         context.res = {
//             status: 200,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedData)
//         };
//     } catch (error) {
//         // Handle errors
//         context.res = {
//             status: 500,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ message: 'Error processing data: ' + error.message })
//         };
//     }
// }
module.exports = async function (context, req) {
  
    try {
        // Parse JSON data from the request body
        const jsonData = req.body;

        // Process the JSON data as needed
        console.log('Received JSON data:', jsonData);

        // Send a response
        context.res = {
           //  headers: {
           //      'Content-Type': 'application/json'
           //    },
              body:  JSON.stringify({jsonData})

        };
    } catch (error) {
        // Handle errors
        context.res = {
            status: 500,
            body: 'Error processing data: ' + error.message
        };
    }
}