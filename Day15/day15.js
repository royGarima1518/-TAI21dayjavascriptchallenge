function simulateAsync(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}

function onAsyncComplete() {
    console.log("Asynchronous operation completed! = 21 day challenge");
}

simulateAsync(onAsyncComplete);
