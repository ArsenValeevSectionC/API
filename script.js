document.addEventListener('DOMContentLoaded', function () {
    const catFactsElement = document.getElementById('cat');
    const newCatFactsButton = document.getElementById('new-cat-btn');

    async function fetchCatFacts() {
        try {
            const response = await fetch('https://cat-fact.herokuapp.com/facts');
            const data = await response.json();
            return data[Math.floor(Math.random() * data.length)].text;
        } catch (error) {
            console.log('Error fetching cat facts:', error);
            return 'Failed to fetch joke. Please try again later.';
        }
    }

    async function displayCatFacts() {
        const catFacts = await fetchCatFacts();
        catFactsElement.innerHTML = catFacts;
    }

    newCatFactsButton.addEventListener('click', displayCatFacts);

    displayCatFacts();
});
