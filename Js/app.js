const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayPhone(data.data, dataLimit)
    } catch (error) {
        console.error(error)
    }
}