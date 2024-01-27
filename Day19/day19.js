function saveDataToLocalStorage(key, data) {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
        console.log(`Data saved successfully with key: ${key}`);
    } catch (error) {
        console.error('Error saving data to local storage:', error);
    }
}

function retrieveDataFromLocalStorage(key) {
    try {
        const jsonData = localStorage.getItem(key);
        const data = JSON.parse(jsonData);
        console.log(`Data retrieved successfully with key: ${key}`);
        return data;
    } catch (error) {
        console.error('Error retrieving data from local storage:', error);
        return null;
    }
}

const sampleData = {
    name: 'Garima Roy',
    age: 21,
    city: 'Patna'
};

saveDataToLocalStorage('userDetails', sampleData);

const retrievedData = retrieveDataFromLocalStorage('userDetails');
console.log('Retrieved Data:', retrievedData);
