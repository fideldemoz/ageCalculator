const today = new Date ();
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getNoofDays(year, month) {
	return new Date(year,month,0).getDate();
}

class age {
	constructor (date) {
		this.bornDate = new Date(date);
		this.bornYear = this.bornDate.getFullYear();
		this.bornMonth = this.bornDate.getMonth();
		this.bornDay = this.bornDate.getDate();
	}
}
class diff {
	constructor (userAge) {
		this.Years = today.getFullYear() - userAge.bornYear;
		this.Months = today.getMonth() - userAge.bornMonth;
		this.Days = today.getDate() - userAge.bornDay;
		if (this.Days < 0) {
			this.Days += getNoofDays(today.getFullYear(), today.getMonth());
			this.Months -= 1;
		}
		if (this.Months < 0) {
			this.Months = 12-1;
			this.Years -= 1;
		}
		this.Days = this.Days.toString();
		this.Months = this.Months.toString();
		this.Years = this.Years.toString();
		if (this.Days.length < 2)  {
			this.Days = '0' + this.Days; 
		} else if (this.Years < 2) {
			this.Years = '0' + this.Years; 			
		} else if (this.Months.length < 2) {
			this.Months = '0' + this.Months; 
		}
	}
}


const monthNode = document.querySelector("#month");
const list = document.createDocumentFragment();
months.forEach( (element, index) => {
	const option = document.createElement("option");
	option.textContent = element;
	list.appendChild(option);
})
monthNode.appendChild(list);

const yD = document.querySelector(".years span"),
mD = document.querySelector(".months span"),
dD = document.querySelector(".days span");


const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const bD = document.querySelector("#date").value,
	bM = document.querySelector("#month").value,
	bY = document.querySelector("#year").value;
	const myage = new age (`${bM}/${bD}/${bY}`);
	const result = new diff(myage);
	yD.textContent = result.Years;
	mD.textContent = result.Months;
	dD.textContent = result.Days;
})