const fetchData = async () => {
    const response = await fetch('https://golden-whispering-show.glitch.me/');
    const fetchedInformation = await response.json();

    return fetchedInformation;
};

const fetchedData = {
    fetchData,
};

export default fetchedData;
