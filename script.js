const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll('.price');
    let sum = 0;
    prices.forEach(price => {
        sum += parseInt(price.textContent) || 0;
    });
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.textContent = sum;
    newCell.id = "ans";
	newCell.className="prices";
    newRow.appendChild(newCell);
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

