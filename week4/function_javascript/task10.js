// fetch data
function fetchData(callback) {
    console.log("Fetching data...");
    callback();
  }
  function onFetchSuccess() {
    console.log("Data successfully retrieved from the server.");
  }
  fetchData(onFetchSuccess);
  