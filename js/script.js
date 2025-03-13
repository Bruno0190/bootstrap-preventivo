//Prima di tutto dichiaro le variabili dello script
const userForm = document.getElementById("user-form");
const jobFee = { job: ['Back-Dev', 'Front-End', 'Proj-Analyst'], fee: [20.50, 15.30, 33.60] };
const promo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
const checkBox = document.getElementById("check-box");
let jobType = document.getElementById("job-type");
let discountCode = document.getElementById("promotion");
//Importante per far funzionare il condizionale del codice promozionale ho creato una variabile booleana foundPromo
let foundPromo = false;
let initialCost = 0;
let finalCost = 0;
let discount = 0;


userForm.addEventListener("submit", quote);



function quote(event) {
    event.preventDefault();
    if (checkBox.checked == true) {
        for (i = 0; i <= jobFee.job.length-1; i++) {
            if (jobType.value === jobFee.job[i]) {
                initialCost = jobFee.fee[i] * 10;
//Prima verifico se vi è un effettivo match tra il valore codice promozionale e un elemento dell'array promo              
                for (j = 0; j <= promo.length - 1; j++) {
                    if (discountCode.value === promo[j]) {
                        foundPromo = true;
                        discount = (initialCost*25)/100;
                    }
                }
//Anzichè usare un else che all'interno del ciclo for avrebbe generato un controllo in loop, verifico separatamente se il valore inserito nel campo codice promozionale abbia un valore diverso dagli elementi dell'array promo
                if (discountCode.value !== "" && foundPromo === false) {
                    alert(`Codice promozionale non valido\nLa tariffa da applicarsi è piena.`
                    )
                }
                finalCost = (initialCost - discount).toFixed(2);
            }
        }
        document.getElementById("cost").innerHTML = finalCost + "€";
    } else {
        alert("Si prega di accettare la Privacy Policy");
    }
}


