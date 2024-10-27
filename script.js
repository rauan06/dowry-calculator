document.getElementById('submit').addEventListener('click', () => {
    const name = document.getElementById('name')?.value.trim();
    let price = parseFloat(document.getElementById('startingBid')?.value);

    if (!name || isNaN(price)) {
        alert('Please enter both a valid name and starting bid.');
        return;
    }

    // Education factor
    const education = parseFloat(document.getElementById('education').value);
    if (!isNaN(education)) price *= education;

    // Family net worth factor
    const networth = parseFloat(document.getElementById('networth').value);
    if (!isNaN(networth)) price *= networth;

    // Caste factor
    const casteFactor = {
        brahmin: 100,
        kshatriya: 50,
        vaishya: 20,
        shudra: 10,
        varna: -50
    };
    const caste = document.getElementById('caste').value;
    price += casteFactor[caste] || 0;

    // Skills factor (using filter and reduce)
    const skills = ['instrument', 'cook', 'easygoing', 'sing'];
    price += skills.filter(skill => document.getElementById(skill).checked)
                   .reduce((total, skill) => {
                       switch (skill) {
                           case 'instrument': return total + 10;
                           case 'cook': return total + 20;
                           case 'easygoing': return total + 15;
                           case 'sing': return total + 10;
                           default: return total;
                       }
                   }, 0);

    // Age factor (using forEach)
    const ageFactors = {
        '18_23': 1.5,
        '24_27': 1.2,
        '28': 0.95
    };
    const age = document.querySelector('input[name="age"]:checked')?.value;
    if (age && ageFactors[age]) price *= ageFactors[age];

    // Reputation factor (using for loop)
    const reputation = ['parent_gossip', 'character_gossip', 'general_gossip'];
    for (let i = 0; i < reputation.length; i++) {
        const repValue = reputation[i];
        if (document.getElementById(repValue).checked) {
            if (repValue === 'general_gossip') price -= 20;
            else price *= repValue === 'parent_gossip' ? 0.85 : 0.9;
        }
    }

    // Love letter
    const loveLetter = document.getElementById('love_letter')?.value || '';

    // Create an object with the results
    const person = {
        name,
        price: price.toFixed(2),
        loveLetter
    };

    // Display the final price on the page
    document.getElementById('result').innerHTML = `
        <p>The final dowry price for ${person.name} is: $${person.price}</p>
        <p>Your love letter: ${person.loveLetter}</p>
    `;
});
