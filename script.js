document.getElementById('submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    let price = 100;  // Starting bid

    // Education factor
    const education = document.getElementById('education').value;
    if (education === 'bachelor') price *= 1.5;
    else if (education === 'college') price *= 1.2;
    else if (education === 'high_school') price *= 1.05;
    else if (education === 'middle_school') price *= 0.9;

    // Family net worth factor
    const networth = document.getElementById('networth').value;
    if (networth === 'upper_class') price *= 2;
    else if (networth === 'middle_class') price *= 1.5;
    else if (networth === 'lower_class') price *= 1.2;

    // Caste factor
    const caste = document.getElementById('caste').value;
    if (caste === 'brahmin') price += 100;
    else if (caste === 'kshatriya') price += 50;
    else if (caste === 'vaishya') price += 20;
    else if (caste === 'shudra') price += 10;
    else if (caste === 'varna') price -= 50;

    // Skills factor
    if (document.getElementById('instrument').checked) price += 10;
    if (document.getElementById('cook').checked) price += 20;
    if (document.getElementById('easygoing').checked) price += 15;
    if (document.getElementById('sing').checked) price += 10;

    // Age factor
    const age = document.querySelector('input[name="age"]:checked')?.value;
    if (age === '18_23') price *= 1.5;
    else if (age === '24_27') price *= 1.2;
    else if (age === '28') price *= 0.95;

    // Reputation factor
    if (document.getElementById('parent_gossip').checked) price *= 0.85;
    if (document.getElementById('character_gossip').checked) price *= 0.9;
    if (document.getElementById('general_gossip').checked) price -= 20;

    // Display the final price
    alert('The final dowry price is: $' + price.toFixed(2));
}

document.querySelector('.container').style.backgroundColor = '#f4a8c8';
