let years=Number(prompt("Вкажіть 2020 рік народження  Viktoria  ."));
let Viktoria = {
    firstname: 'Viktoria', 
    lastname: 'Krutp', 
    birthday: '05/22/2020', 
    showInfo: function(){ 
    console.log('Student name: ' + this.firstname + 
    ' ' + this.lastname); 
    if(( years%4==0 && years%100!=0) || years%400==0)// високосний рік 
{
    console.log(" Рік народження людини "+years+" високосний");
}

else
{
 console.log(" Рік народження людини" +years+" не високосний");
}
   },
   
   showAge: function(){ 
    const deltaTime = Date.now() -  
    Date.parse(this.birthday); 
    const studentAge = Math.floor(deltaTime/ 
    (365*24*60*60*1000)); 
    console.log(this.firstname + ' ' + this.lastname + 
    ' is ' + studentAge + ' years old.'); 
    } 
   
   } 

   let year=Number(prompt("Вкажіть 2005 рік народження  Roman ."));
   let Roman = { 
    firstname: 'Roman', 
    lastname: 'Mikolenko', 
    birthday: '05/10/2005', 
    showInfo: function(){ 
    console.log('Student name: ' + this.firstname +  
    ' ' + this.lastname); 

    if(( year%4==0 && year%100!=0) || year%400==0)// високосний рік 
{
    console.log(" Рік народження людини "+year+" високосний");
}

else
{
    console.log(" Рік  народження людини " +year+" не високосний");
}
    }, 
    
    showAge: function(){ 
    const deltaTime = Date.now() -  
    Date.parse(this.birthday); 
    const studentAge = Math.floor(deltaTime/ 
    (365*24*60*60*1000)); 
    console.log(this.firstname + ' ' + this.lastname +  
    ' is ' + studentAge +' years old.'); 
    } 
   } 

   let yea=Number(prompt("Вкажіть 2021 рік народження Anna ."));
   let Anna= { 
    firstname: 'Anna', 
    lastname: 'Check', 
    birthday: '07/01/2021', 
    showInfo: function(){ 
    console.log('Student name: ' + this.firstname + 
    ' ' + this.lastname); 
    if(( yea%4==0 && yea%100!=0) || yea%400==0)// високосний рік 
{
    console.log(" Рік народження людини "+yea+" високосний");
}

else
{
    console.log(" Рік народження людини " +yea+" не високосний");
}
   },
   showAge: function(){ 
    const deltaTime = Date.now() -  
    Date.parse(this.birthday); 
    const studentAge = Math.floor(deltaTime/ 
    (365*24*60*60*1000)); 
    console.log(this.firstname + ' ' + this.lastname + 
    ' is ' + studentAge + ' years old.'); 
    } 
   } 
   let y=Number(prompt("Вкажіть 2008 рік народження Andriy."));
   let Andriy = { 
    firstname: 'Andriy', 
    lastname: 'Richi',
    birthday: '06/08/2008', 
    showInfo: function(){ 
    console.log('Student name: ' + this.firstname +  
    ' ' + this.lastname); 
    if(( y%4==0 && y%100!=0) || y%400==0)// високосний рік 
    {
        console.log(" Рік народження людини "+y+" високосний");
    }
    
    else
    {
        console.log(" Рік  народження людини " +y+" не високосний");
    }
    }, 
    showAge: function(){ 
    const deltaTime = Date.now() -  
    Date.parse(this.birthday); 
    const studentAge = Math.floor(deltaTime/ 
    (365*24*60*60*1000)); 
    console.log(this.firstname + ' ' + this.lastname +  
    ' is ' + studentAge +' years old.'); 
    } 
   } 
 console.log(Viktoria); 
Viktoria.showInfo(); 
Viktoria.showAge(); 
 console.log(Roman); 
Roman.showInfo(); 
Roman.showAge();
 console.log(Anna); 
Anna.showInfo(); 
Anna.showAge(); 
 console.log(Andriy); 
Andriy.showInfo(); 
Andriy.showAge(); 
  

  