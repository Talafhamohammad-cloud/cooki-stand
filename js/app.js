'using strict'

const hours =['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm'];
function random(min,max) {
    return Math.floor(Math.random()*(max-min +1)+min);
    
}

/* ###############################################[seattle]#################################################################*/

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

/* ###############################################[Tokyo]#################################################################*/
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

/* ###############################################[Dubai]#################################################################*/

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

/* ###############################################[paris]#################################################################*/

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

/* ###############################################[lima]#################################################################*/

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
lima.render();
