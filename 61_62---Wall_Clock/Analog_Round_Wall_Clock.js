console.log('This is Analog Clock');

function currenTime() {
    let date=new Date()
    let hr=date.getHours();
    let sec=date.getSeconds();
    let min=date.getMinutes();

    let Seconds_Degree_Movement = 6*sec;   /* 6 degree movement every second*/
    let Minutes_Degree_Movement_With_res_to_second = 6*min;   /* Movement of minutes hand every minute in  degrees i.e 6 degree per minute, minute hand will move*/ 
    let Hours_Degree_Movement = 30*hr + min/2; /*Movement of hour every hour i.e 360/12=30 + 12*60=720  =>720/2=360*/

    let boxMinHand = document.getElementById('boxMinHand')
    let boxHourHand = document.getElementById('boxHourHand')
    let boxSecondHand = document.getElementById('boxSecondHand')

    boxMinHand.style.transform = `rotate(${Minutes_Degree_Movement_With_res_to_second}deg)`
    boxHourHand.style.transform = `rotate(${Hours_Degree_Movement}deg)`
    boxSecondHand.style.transform = `rotate(${Seconds_Degree_Movement}deg)`
}

setInterval(() => {
    currenTime()
}, 1000);




// Another way by directly using set interval

// setInterval(()=> {
//     let date=new Date()
//     let hr=date.getHours();
//     let sec=date.getSeconds();
//     let min=date.getMinutes();

//     let Seconds_Degree_Movement = 6 * sec   /* 6 degree movement every second*/
//     let Minutes_Degree_Movement_With_res_to_second = 6*min;   /* Movement of minutes hand every second in degrees */ 
//     let Hours_Degree_Movement = 30 * hr + min / 2; /*Movement of hour hand every second in degrees */

//     let boxMinHand = document.getElementById('boxMinHand')
//     let boxHourHand = document.getElementById('boxHourHand')
//     let boxSecondHand = document.getElementById('boxSecondHand')

//     boxMinHand.style.transform = `rotate(${Minutes_Degree_Movement_With_res_to_second}deg)`
//     boxHourHand.style.transform = `rotate(${Hours_Degree_Movement}deg)`
//     boxSecondHand.style.transform = `rotate(${Seconds_Degree_Movement}deg)`
// }, 1000);
