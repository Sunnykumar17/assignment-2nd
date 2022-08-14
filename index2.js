var marks = [12, 25, 31, 23, 75, 81, 100];

     
// Print Before sorting array 

document.write("Original Array</br>"); 
document.write(marks); 

     

document.write("</br>"); 

     
// Sort elements using compare method 

marks.sort(function(a, b){return a - b});
 

document.write("</br>After sorting in Ascending order</br>"); 

     
// Print sorted Numeric array 
document.write(marks)