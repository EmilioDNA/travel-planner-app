function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const url = 'http://localhost:8081/check';
    let formText = document.getElementById('name').value;

    if (formText.length === 0 || !Client.isValidURL(formText)) {
        alert("Please introduce a valid URL in the field");
    } else {
        console.log("::: Form Submitted :::")

        Client.fetchSentiment(url, {formText})
        .then(function(res) {
            Client.cleanResults();
            Client.addResults(res.polarity, res.subjectivity, res.text);
            return res.polarity;
        })
    }
}



export { handleSubmit }