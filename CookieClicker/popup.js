document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("runScript").addEventListener("click", () => {
        // Display an input box to the user to enter a number
        var userInput = prompt("How much?");
        
        // The initial string where the number needs to be replaced
        var str = "0.1251|5|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789";
        
        // Split the string into an array, using '|' as the delimiter
        var parts = str.split('|');
        
        // Replace the value after '0.1251', which is the second element (index 1)
        parts[1] = userInput;
        
        // Join the array back into a string
        var updatedStr = parts.join('|');
        
        // Display the final string in an alert box
        alert("Final String: " + updatedStr);
    });
});
