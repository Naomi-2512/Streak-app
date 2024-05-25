class Habits {
    btn = document.querySelector('.submit') as HTMLButtonElement;
    myInput = document.querySelector('#one') as HTMLInputElement;
    today = document.querySelector('#two') as HTMLInputElement;
    myError = document.querySelector('.error') as HTMLParagraphElement;
    myDisplay = document.querySelector('.display') as HTMLDivElement;

    constructor() {
        this.displayItems();
        this.btn.addEventListener('click', (event) =>{
            event.preventDefault();
            
            let habitInput = this.myInput.value;
            let todayDate = this.today.value;
            if (habitInput === ''|| todayDate === '') {
                this.myError.textContent = 'Enter a value';
            }
            else{ 
                let submittedDate = new Date(todayDate);
                let currentDate = new Date();

                submittedDate.setHours(0,0,0,0);
                currentDate.setHours(0,0,0,0);

                let daysCount = Math.ceil((Math.abs(currentDate.getTime() - submittedDate.getTime()))/(1000*60*60*24));
                console.log(daysCount);

                let yourObject : object = {
                    id: Date.now(),
                    activity: habitInput,
                    startDate : todayDate,
                    days : daysCount
                }
                
                let pushData = new Promise<any>(async(resolve, reject) => {
                    try {
                        let postedData = await fetch('http://localhost:3000/holder', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(yourObject)
                        })

                        if (!postedData) {
                            console.log(`error ${postedData}`);                            
                        }

                    } catch (error) {
                        reject('there was an error saving data')
                    }
                })
                this.displayItems();               
            }
        })
    }

    displayItems() {
        let fetchData = new Promise(async (resolve, reject) =>{
            let data1;
            try {
                let receivedData = await fetch('http://localhost:3000/holder');
                data1 = await receivedData.json();
                resolve(data1);
                console.log(data1);
            }
            catch(error){
                reject('error in fetching')
            }
            data1.forEach((element: any, index:number) => {

                let element1 = document.createElement('div');
                element1.className = 'element1'; 

                let icon = document.createElement('img');
                icon.setAttribute('src', '12789412.png');
                icon.className = 'icon';

                let habit1 = document.createElement('h1');
                habit1.textContent = element.activity + 'days';
                habit1.className = 'habit1';

                let date1 = document.createElement('h2');
                date1.textContent = element.startDate;
                date1.className = 'date1';

                let day1 = document.createElement('h2');
                day1.textContent = element.days + 'days';
                day1.className = 'day1';

                let button1 = document.createElement('button');
                button1.textContent = 'delete';
                button1.className = 'button1';
        

                element1.appendChild(icon);
                element1.appendChild(habit1);
                element1.appendChild(date1);
                element1.appendChild(day1);
                element1.appendChild(button1);
                this.myDisplay.appendChild(element1);

                // button1.addEventListener('click',() => {
                //     let myNumber = index;
                //     let deleter = new Promise<any>(async(resolve, reject) => {
                //         let deletedItem = await fetch('http://localhost:3000/holder', {
                //             method:'DELETE'
                //         })
                //     })
                // })
            });
        }) 
    }
}
let myObject = new Habits();