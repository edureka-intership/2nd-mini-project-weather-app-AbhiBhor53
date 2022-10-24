//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//3fd161543549d06e9095651461c9227
//3fd161543549d06e9095651461c92278
const weatherapi={
    key:"3fd161543549d06e9095651461c9227",
    baseurl:"//https://api.openweathermap.org/data/2.5/weather?"
}

let state_cities={
    "Andaman and Nicobar Islands" : ["Port Blair"],
    "Andhra Pradesh":["Adoni","Amaravati","Anantapur","Chandragiri","Chittoor",
        "Tirupati","Vijayawada","Visakhapatnam","Vizianagaram","Yemmiganur"],
    "Arunachal Pradesh":["Itanagar"],
    "Assam":["Dhuburi","Dibrugarh","Dispur","Guwahati","Jorhat","Nagaon","Sivasagar"
    ,"Silchar","Tezpur","Tinsukia"],
    "Bihar":["Ara","Barauni","Begusarai","Bettiah","Bhagalpur","Bihar Sharif","Bodh Gaya",
        "Buxar","Chapra","Darbhanga","Gaya","Hajipur","Jamalpur","Katihar","Madhubani",
        "Motihari","Munger","Muzaffarpur","Patna","Purnia"],
    "Chandigarh":["Chandigarh "],
    "Chhattisgarh" :["Ambikapur","Bhilai","Bilaspur","Dhamtari","Durg","Jagdalpur","Raipur","Rajnandgaon"] ,
    "Dadra and Nagar Haveli":["Daman","Diu"],
    "The Government of NCT of Delhi":["Delhi","New Delhi"],
    "Goa":["Madgaon","Panaji"],
    "Gujarat":["Ahmadabad","Amreli","Bharuch","Bhavnagar","Bhuj","Dwarka","Gandhinagar","Godhra"],
    "Haryana":["Ambala","Bhiwani","Chandigarh","Faridabad","Firozpur","Jhirka","Gurugram",
    "Hansi" ,"Hisar","Jind","Kaithal","Karnal","Kurukshetra","Panipat"],
    "Himachal Pradesh":["Bilaspur","Chamba","Dalhousie","Dharmshala","Hamirpur"],
    "Jammu & Kashmir":["Anantnag","Baramula","Doda","Gulmarg","Jammu","Kathua"],
    "Jharkhand":["Jamshedpur","Jharia","Rajmahal","Ranchi","Saraikela"],
    "Karnataka":["Badami","Ballari","Bengaluru"],
    "Kerala":["Kottayam", "Kozhikode","Mattancheri","Palakkad","Thalassery","Thiruvananthapuram","Thrissur"],
    "Ladakh":["Kargil","Leh"],
    "Madhya Pradesh":["Datia","Dewas","Dhar","Dr. Ambedkar Nagar (Mhow)","Guna","Gwalior","Hoshangabad","Indore","Itarsi","Jabalpur"],
    "Maharashtra":["Ahmadnagar","Akola","Amravati","Aurangabad","Bhandara","Bhusawal","Bid","Buldhana","Chandrapur",
    "Daulatabad","Dhule","Jalgaon","Kalyan","Karli","Kolhapur","Mahabaleshwar","Malegaon","Matheran","Mumbai",
    "Nagpur","Nanded","Nashik","Osmanabad","Pandharpur","Parbhani","Pune","Ratnagiri","Sangli","Satara","Sevagram","Solapur",
    "Thane","Ulhasnagar","Vasai-Virar","Wardha","Yavatmal"],
    "Manipur":["Imphal"],
    "Meghalaya":["Cherrapunji","Shillong"],
    "Mizoram":["Aizawl","Lunglei"],
    "Nagaland":["Kohima","Mon","Phek","Zunheboto"],
    "Odisha":["Bhubaneshwar","Brahmapur","Cuttack"],
    "Puducherry":["Mahe", "Puducherry","Yanam"],
    "Punjab":["Amritsar","Batala","Chandigarh","Faridkot","Firozpur","Gurdaspur","Hoshiarpur"],
    "Rajasthan":["Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunu","Jodhpur","Kishangarh","Kota"],
    "Sikkim":["Gangtok","Gyalshing","Lachung","Mangan"],
    "Tamil Nadu":["Arcot","Chengalpattu","Chennai","Chidambaram","Coimbatore","Cuddalore","Dharmapuri","Dindigul"],
    "Telangana":["Hyderabad","Karimnagar","Khammam","Mahbubnagar","Nizamabad","Sangareddi","Warangal"],
    "Tripura":["Agartala"],
    "Uttar Pradesh":["Kanpur","Lakhimpur","Lalitpur","Lucknow","Mainpuri","Mathura","Meerut","Mirzapur-Vindhyachal",
    "Moradabad","Muzaffarnagar","Partapgarh","Pilibhit","Prayagraj"],
    "Uttarakhand":["Almora","Dehra Dun","Haridwar","Mussoorie","Nainital","Pithoragarh"],
    "West Bengal":["Jalpaiguri","Kalimpong","Kamarhati","Kanchrapara","Kharagpur","Cooch Behar","Kolkata","Krishnanagar"]


}   

let state=document.getElementById("state");
let city=document.getElementById("city");
let mystate;
let new_city
state.addEventListener("change",function(){
    city.innerHTML="";
    mystate=state.value;
    
    city.addEventListener("focus",function(){

    len=state_cities[mystate].length;
    city.innerHTML="";
    for(let i=0;i<len;i+=1)
    {
       
        let option=document.createElement("option");
        option.value=state_cities[mystate][i];
        option.text=state_cities[mystate][i];
        city.add(option);
        
        
    }
    
    
    

   
});

   
});
function validate(){
    cit_val=city.value;
    if (cit_val.length>0){
        
        geteweatherreport(cit_val);

    }
}
function geteweatherreport(cit_val){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cit_val}&appid=3fd161543549d06e9095651461c92278&units=metric`).then((weather)=>{
        return weather.json();

    }).then(showweatherreport);

}
function showweatherreport(weather){
    console.log(weather);
    document.getElementById("temp").innerHTML=`${weather.main.temp}&#8451`;
    document.getElementById("Max").innerHTML=`${weather.main.temp_max}&#8451`;
    document.getElementById("Min").innerHTML=`${weather.main.temp_min}&#8451`;
    document.getElementById("Wind").innerHTML=`${weather.wind.speed}`;
    
    


}

a = setInterval(fun, 1000); 
Dt= new Date(); 
function fun(){
    dt=new Date();
    document.getElementById("Time").innerHTML=` ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
}   
document.getElementById("Date").innerHTML=` ${Dt.getDate()}-${Dt.getMonth()}-${Dt.getFullYear()}`;






















