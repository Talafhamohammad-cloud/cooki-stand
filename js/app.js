 'using strict'

const hours =['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm'];
function random(min,max) {
    return Math.floor(Math.random()*(max-min +1)+min);
    
}

/* ###############################################[seattle]#################################################################

const seattle ={
    locationName:'seattle',
    mincustomers:23,
    maxcustomers:65,
    avgcookies:6.3,
    customerseacHhour:[],
    cookieseacHhour:[],
    total:0,


    calccostumerseacHhours:function () {
        for (let i = 0; i <hours.length; i++) {
            
         this.customerseacHhour.push(random(this.mincustomers,this.maxcustomers));

        }
    },
    calccookieseacHhours:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookieseacHhour.push(Math.floor(this.customerseacHhour[i]*this.avgcookies));
            this.total+=this.cookieseacHhour[i];

   
        }
        

        
    },
    
    render:function () {
        let parent = document.getElementById('parent');
        let nameelement = document.createElement('h2');
        parent.appendChild(nameelement);
        nameelement.textContent=this.locationName;
        let ulelement=document.createElement('ul');
        parent.appendChild(ulelement);
        for (let i = 0; i < hours.length; i++) {
         let lielement=document.createElement('li');
         ulelement.appendChild(lielement);
         lielement.textContent=`${hours[i]}: ${this.cookieseacHhour[i]} cookies`   
        }

        let totalelement=document.createElement('li');
        ulelement.appendChild(totalelement);
        totalelement.textContent=`total: ${this.total}   cookies`



        
    }

}
seattle.calccostumerseacHhours();
seattle.calccookieseacHhours();
seattle.render();

/* ###############################################[Tokyo]#################################################################
const Tokyo={
locationName:'tokyo',
    mincustomers:3,
    maxcustomers:24,
    avgcookies:1.2,
    customerseacHhour:[],
    cookieseacHhour:[],
    total:0,


    calccostumerseacHhours:function () {
        for (let i = 0; i <hours.length; i++) {
            
         this.customerseacHhour.push(random(this.mincustomers,this.maxcustomers));

        }
    },
    calccookieseacHhours:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookieseacHhour.push(Math.floor(this.customerseacHhour[i]*this.avgcookies));
            this.total+=this.cookieseacHhour[i];

   
        }
        

        
    },
    
    render:function () {
        let parent = document.getElementById('parent');
        let nameelement = document.createElement('h2');
        parent.appendChild(nameelement);
        nameelement.textContent=this.locationName;
        let ulelement=document.createElement('ul');
        parent.appendChild(ulelement);
        for (let i = 0; i < hours.length; i++) {
         let lielement=document.createElement('li');
         ulelement.appendChild(lielement);
         lielement.textContent=`${hours[i]}: ${this.cookieseacHhour[i]} cookies`   
        }

        let totalelement=document.createElement('li');
        ulelement.appendChild(totalelement);
        totalelement.textContent=`total: ${this.total}   cookies`



        
    }

}
Tokyo.calccostumerseacHhours();
Tokyo.calccookieseacHhours();
Tokyo.render();

/* ###############################################[Dubai]#################################################################

const Dubai={
    locationName:'Dubai',
        mincustomers:3,
        maxcustomers:24,
        avgcookies:1.2,
        customerseacHhour:[],
        cookieseacHhour:[],
        total:0,
    
    
        calccostumerseacHhours:function () {
            for (let i = 0; i <hours.length; i++) {
                
             this.customerseacHhour.push(random(this.mincustomers,this.maxcustomers));
    
            }
        },
        calccookieseacHhours:function () {
            for (let i = 0; i < hours.length; i++) {
                this.cookieseacHhour.push(Math.floor(this.customerseacHhour[i]*this.avgcookies));
                this.total+=this.cookieseacHhour[i];
    
       
            }
            
    
            
        },
        
        render:function () {
            let parent = document.getElementById('parent');
            let nameelement = document.createElement('h2');
            parent.appendChild(nameelement);
            nameelement.textContent=this.locationName;
            let ulelement=document.createElement('ul');
            parent.appendChild(ulelement);
            for (let i = 0; i < hours.length; i++) {
             let lielement=document.createElement('li');
             ulelement.appendChild(lielement);
             lielement.textContent=`${hours[i]}: ${this.cookieseacHhour[i]} cookies`   
            }
    
            let totalelement=document.createElement('li');
            ulelement.appendChild(totalelement);
            totalelement.textContent=`total: ${this.total}   cookies`
    
    
    
            
        }
    

}
Dubai.calccostumerseacHhours();
Dubai.calccookieseacHhours();
Dubai.render();

/* ###############################################[paris]#################################################################

const Paris ={
    locationName:'Paris',
    mincustomers:20,
    maxcustomers:38,
    avgcookies:2.3,
    customerseacHhour:[],
    cookieseacHhour:[],
    total:0,




    calccostumerseacHhours:function () {
        for (let i = 0; i <hours.length; i++) {
            
            this.customerseacHhour.push(random(this.mincustomers,this.maxcustomers));

        }
    },
    calccookieseacHhours:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookieseacHhour.push(Math.floor(this.customerseacHhour[i]*this.avgcookies));
            this.total+=this.cookieseacHhour[i];

   
        }
        

        
    },
    
    render:function () {
        let parent = document.getElementById('parent');
        let nameelement = document.createElement('h2');
        parent.appendChild(nameelement);
        nameelement.textContent=this.locationName;
        let ulelement=document.createElement('ul');
        parent.appendChild(ulelement);
        for (let i = 0; i < hours.length; i++) {
         let lielement=document.createElement('li');
         ulelement.appendChild(lielement);
         lielement.textContent=`${hours[i]}: ${this.cookieseacHhour[i]} cookies`   
        }

        let totalelement=document.createElement('li');
        ulelement.appendChild(totalelement);
        totalelement.textContent=`total: ${this.total} cookies`



        
    }

}
Paris.calccostumerseacHhours();
Paris.calccookieseacHhours();
Paris.render();

/* ###############################################[lima]#################################################################

const lima ={
    locationName:'Lima',
    mincustomers:23,
    maxcustomers:65,
    avgcookies:6.3,
    customerseacHhour:[],
    cookieseacHhour:[],
    total:0,




    calccostumerseacHhours:function () {
        for (let i = 0; i <hours.length; i++) {
            
            this.customerseacHhour.push(random(this.mincustomers,this.maxcustomers));
         

        }
    },
    calccookieseacHhours:function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookieseacHhour.push(Math.floor(this.customerseacHhour[i]*this.avgcookies));
            this.total+=this.cookieseacHhour[i];

   
        }
        

        
    },
    
    render:function () {
        let parent = document.getElementById('parent');
        let nameelement = document.createElement('h2');
        parent.appendChild(nameelement);
        nameelement.textContent=this.locationName;
        let ulelement=document.createElement('ul');
        parent.appendChild(ulelement);
        for (let i = 0; i < hours.length; i++) {
         let lielement=document.createElement('li');
         ulelement.appendChild(lielement);
         lielement.textContent=`${hours[i]}: ${this.cookieseacHhour[i]} cookies`   
        }

        let totalelement=document.createElement('li');
        ulelement.appendChild(totalelement);
        totalelement.textContent=`total: ${this.total} cookies`



        
    }

}
lima.calccostumerseacHhours();
lima.calccookieseacHhours();
lima.render(); */

// coomment the previous code for lab 06 and doing the new one for lab 07

let stores = [];

function Cookie(name, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;

    this.total = 0;
    this.cookiesperhour = [];

    stores.push(this);

}

Cookie.prototype.calcCustomerPerHour=function () {
    return random(this.min, this.max);
}


Cookie.prototype.calcookiesperhour = function () {
    for (let i = 0; i < hours.length; i++) { 
        this.cookiesperhour.push(Math.floor( this.calcCustomerPerHour() * this.avg));
        this.total += this.cookiesperhour[i];
       
    }
}

const Seattle = new Cookie('Seattle', 23, 65, 6.3);
const Tokyo = new Cookie('Tokyo', 3, 24, 1.2);
const Dubai = new Cookie('Dubai', 11, 38, 3.7);
const Paris = new Cookie('Paris', 20, 38, 2.3);
const Lima = new Cookie('Lima', 2, 16, 4.6);
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);
function makingHeader() {
    let headingrow = document.createElement('tr');
    table.appendChild(headingrow);
    let firstTh = document.createElement('th');
    headingrow.appendChild(firstTh);
    firstTh.textContent='Name';
    
    for (let i = 0; i < hours.length; i++) {
        let hoursTh = document.createElement('th');
        headingrow.appendChild(hoursTh);
        hoursTh.textContent = hours[i];
    
    }
    
    let finalTh = document.createElement('th');
    headingrow.appendChild(finalTh);
    finalTh.textContent = "Daily Location Total";

    
}    

Cookie.prototype.render = function () { 
    let storeRow = document.createElement('tr');
    table.appendChild(storeRow);
    let nameTd = document.createElement('td');
    storeRow.appendChild(nameTd);
    nameTd.textContent=this.name;


    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td');
        storeRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesperhour[i];
    }
    let totalTd = document.createElement('td');
    storeRow.appendChild(totalTd);
    totalTd.textContent = this.total;

}

function makingFooter() {
    let footerRow=document.createElement('tr');
    table.appendChild(footerRow);
    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent='Totals';

    let totalForEachHour;
    let megaTotal=0;
    for (let i = 0; i < hours.length; i++) {
        totalForEachHour=0;
        for (let j = 0; j < stores.length; j++) {
            totalForEachHour+=stores[j].cookiesperhour[i];
            megaTotal+=stores[j].cookiesperhour[i];
         
        }
        let footerTh=document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent=totalForEachHour;

    }
    let totalTh= document.createElement('th');
    footerRow.appendChild(totalTh);
    totalTh.textContent=megaTotal;
     
}

makingHeader();
for (let i = 0; i < stores.length; i++) {
    stores[i].calcookiesperhour();
    stores[i].render();
}
makingFooter();

/* ################################## adding form ################################*/

let form = document.getElementById('forms');
forms.addEventListener('submit',adddata)
function adddata(event) {
    event.preventDefault();
    let name = event.target.cityname.value;
    let mini = event.target.minimum.value;
    let max = event.target.maximum.value;
    let avg = event.target.average.value;
    let input = new Cookie (name,mini,max,avg);
    table.textContent="";
    makingHeader();
    for (let i = 0; i < stores.length; i++) {
        stores[i].calcookiesperhour();
        stores[i].render();
    }
    makingFooter(); 
}