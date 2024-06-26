const btn = document.getElementById('pay-btn');
btn.addEventListener('click', () => {
    // Extract the price range from the string
    let priceRange = localStorage.getItem("packagePrice").match(/\d+/g).map(Number);

    // Calculate the average price
    let averagePrice = priceRange.reduce((a, b) => a + b, 0) / priceRange.length;

    // Convert the price to cents, as Stripe expects the amount in the smallest currency unit
    let priceInCents = Math.round(averagePrice * 100);

    fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            price: priceInCents,
            items: [{ id: 1, quantity: 1 }] 
        })
    }).then(res => {
        if (res.ok) return res.json();
        return res.json().then(({error}) => Promise.reject(error));
    }).then(({ url }) => {
        window.location = url;
        console.log(url);
    }).catch(e => {
        console.error(e.error);
    })
});