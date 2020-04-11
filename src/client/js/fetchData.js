

const fetchSentiment = async (url = '', data = {}) => {

    const response = await fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

// .then(res => res.json())
//     .then(function(res) {
//         Client.cleanResults();
//         Client.addResults(res.polarity, res.subjectivity, res.text);
//         return res.polarity;
//     })


// const postData = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });

//     try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//     } catch(error) {
//         console.log("error", error);
//     }

// }


export { fetchSentiment }