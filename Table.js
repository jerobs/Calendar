var rows = 5;
var colums = 7;
var day_counter = 1;
//Variable for making the Inner HTML Content will start with making a table element then appends tr and <td class="calendar_grid">
var table = "<table>\n";
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
for(let i = 0; i < rows; i++){
    table += "\t<tr>\n";
    for(let x = 0; x < colums; x++){
        //for the first row add the text "sun", "mon" etc from the days array to the text followed by the day number
        //td class is calendar_grid
        //p class is day
        if(i == 0){
            table += "\t<td class=\"calendar_grid\"><p class=\"day\">" + days[x] + "\n" + day_counter + "</p></td>\n";
        }
        //else just add the day number
        //td class is calendar_grid
        //p class is day
        else{
            table += "\t<td class=\"calendar_grid\"><p class=\"day\">" +"\n" + day_counter + "</p></td>\n";
        }
        day_counter+=1;
        if(days > 31){
            day_counter = 1;
        } 
    }
    table += "\t</tr>\n";
}
//adds on the built table elements from the loop
document.getElementById("calendar").innerHTML += table;
