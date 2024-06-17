var rows = 4;
var colums = 7;
var days = 1
var table = "<table>\n"
for(let i = 0; i < rows; i++){
    table += "\t<tr>\n"
    for(let x = 0; x < colums; x++){
        table += "\t<td>Day " + days + "</td>\n"
        days+=1    
    }
    table += "\t</tr>\n"
}
console.log(table);
document.getElementById("Calendar").innerHTML = table;