let Travelsname = new Array("GT", "Preethitravels", "sivasankaripunipurishop", "kpn");


let Adding = () => {
  let newvalue = document.getElementById('Travels').value;

  Travelsname.push(newvalue);

  alert(newvalue + "  this travels is added succcessfully...!")
  Printall()
}

var Printall = () => {
  let temp = " "

  Travelsname.map((getting) => {
    temp += " <tr><td><ul><li>" + getting + "</li></ul</td></tr>";

  })

  document.getElementById('list').innerHTML =
    "<table><thead bgcolor='red'><tr><th>Travels List</th></tr></thead><tbody bgcolor='pink' align='center'>"+
    temp + "</tbody></table>";
}
//  


let Updating = () => {
  let updateindex = document.getElementById('Travels').value;

  let newvalue = prompt("please enter your update Travel name" + Travelsname[updateindex])

  Travelsname[updateindex] = newvalue;
  Printall();
}

var Removing = () => {
  let delete_value = document.getElementById('Travels').value;

  Travelsname = Travelsname.filter((getting) => {
    if (getting !== delete_value) {
      return getting;
    }
  })

  Travelsname.map((get) => {
     Printall(); 
  });
 
}

function Finding() {
  let searchingvalue = document.getElementById('Travels').value;

  for (i = 0; i < Travelsname.length; i++) {
    if (Travelsname[i] === searchingvalue) {
      return i;
    }
  }
}

function Findfirst() {
  for (i = 0; i < Travelsname.length; i++) {
    alert("Travel name is: " + Travelsname[i]);
    break;
  }
}