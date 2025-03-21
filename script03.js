document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const numberInput = document.getElementById('numberInput');
    const generateBtn = document.getElementById('generateBtn');
    const errorMessage = document.getElementById('errorMessage');
    const tableResult = document.getElementById('tableResult');
    
    // Add event listener to the generate button
    generateBtn.addEventListener('click', generateTable);
    
    // when Enter key is pressed in the input field
    numberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateTable();
        }
    });
    
    // generate the multiplication table
    function generateTable() {
      
        errorMessage.textContent = '';
        tableResult.innerHTML = '';
        
        // Get the input value 
        const inputValue = numberInput.value.trim();
        const number = parseFloat(inputValue);
        
        // Validate the input
        if (inputValue === '' || isNaN(number)) {
            errorMessage.textContent = 'Please enter a valid number!';
            return;
        }
        
        if (number <= 0) {
            errorMessage.textContent = 'Please enter a number greater than 0!';
            return;
        }
        
        // Generate multiplication table
        for (let i = 1; i <= 10; i++) {
            const result = number * i;
            
            // row for each multiplication
            const row = document.createElement('div');
            row.className = 'table-row';
            
            // Add serial number
            const serial = document.createElement('span');
            serial.className = 'serial';
            serial.textContent = i + '.';
            
            // Add the multiplication text
            const calculation = document.createElement('span');
            calculation.textContent = `${number} × ${i} = ${result}`;
            
            // Append elements to the row
            row.appendChild(serial);
            row.appendChild(calculation);
            
            // small delay for each row to create a animation effect
            setTimeout(() => {
                tableResult.appendChild(row);
                // Add a class to trigger animation if desired
                setTimeout(() => {
                    row.classList.add('visible');
                }, 50);
            }, i * 100);
        }
    }
});
