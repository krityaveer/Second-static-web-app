 module.exports = async function (context, req) {
  
    context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    const { name, email } = req.body;
    const newContent = `${name},  ${email}`;
    // fs.appendFile(filePath, newContent, (err) => {
    //     if (err) {
    //       return res.status(500).json({ error: 'Failed to append to file' });
    //     }
    //     res.status(200).json({ message: 'Data appended successfully' });
    //   });
    console.log("hello")
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: name
    };
}