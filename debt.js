var holder = document.getElementById('holder');
var button = document.getElementById('button');




   button.addEventListener('click', function(){
   	var rev = document.getElementById('rev').value;
   	var rent = document.getElementById('rent').value;
   	var cnote = document.getElementById('cnote').value;
   	var pbill = document.getElementById('pbill').value;
   	var misc = document.getElementById('misc').value;
  	
  	 rent = parseInt(rent);
  	 cnote = parseInt(cnote);
  	 pbill = parseInt(pbill);
  	 misc = parseInt(misc);
  	
  	var parseVal = (rent + cnote + pbill + misc) / 4;

   	
   	var wklySV = rev - parseVal;
   	 var mnthR = rent / 4;
   	 var mnthCR = cnote / 4;
   	 var mnthPH = pbill / 4;
   	 var mnthMS = misc / 4;




   	//var displayTotal = document.getElementById('rv');
   //	displayTotal.textContent = `$${total}`;
   	var rt = document.getElementById('rt');
   	rt.textContent = `$${mnthR}`;
   	var cr = document.getElementById('cr');
   	cr.textContent = `$${mnthCR}`;
   	var ph = document.getElementById('ph');
   	ph.textContent = `$${mnthPH}`;
   	var ms = document.getElementById('ms');
   	ms.textContent = `$${mnthMS}`;
   	var sv = document.getElementById('sv');
   	sv.textContent = `$${wklySV}`;




});


//display

var tblCont = document.getElementById('dp');
var table = document.createElement('table');
table.classList.add("table");
table.classList.add("table-striped");

table.innerHTML = 
	`<thead>
		<tr>
        	
        	<th>Rent</th>
        	<th>Car Payment</th>
        	<th>Phone Bill</th>
        	<th>Misc</th>
      	</tr>
      </thead>
 		<tbody>
      	<tr>
        	
        	<td id="rt">$0.00</td>
        	<td id="cr">$0.00</td>
        	<td id="ph">$0.00</td>
        	<td id="ms">$0.00</td>
      	</tr>
       </tbody>`;

 
    tblCont.appendChild(table);

    var wklyGross = document.createElement('table');
    wklyGross.classList.add("table");
    wklyGross.classList.add("table-striped");
    wklyGross.classList.add("wklyGross");
    wklyGross.innerHTML =
    `<thead>
		<tr>        	
        	<th>What you should Save per week</th>        	
      	</tr>
      </thead>
      <tbody>
      	<tr>        	
        	<td id="sv">$0.00</td>
       	</tr>
       </tbody>`;
    
    tblCont.appendChild(wklyGross);