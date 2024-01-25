async function simulateAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Success: Data successfully fetched!");
            } else {
                reject("Error: Unable to fetch data!");
            }
        }, 1000);
    });
}

async function fetchData() {
    try {
        const data = await simulateAsync();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchData();