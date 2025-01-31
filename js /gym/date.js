//Psu
// 


const dotest= (secs) =>{
    if(secs <= 0){
        return 'now'
    }
     let years,days,hours,minutes,seconds;
     years = Math.floor(secs / 31536000)
     resultY = years > 0 ? `${years} years,` : ``
     days = `${Math.floor((secs % 31536000) /86400 )}`
     hours = `${Math.floor(Math.floor((secs % 31536000) %86400 ) / 3600)}`
     minutes = `${Math.floor(Math.floor((secs % 31536000) %86400 ) % 3600 /60 )}`
     seconds = `${Math.floor(Math.floor((secs % 31536000) %86400 ) % 3600 %60 )}`

    //  if(years){
    //     if(years && seconds){
    //         return `${years} years, ${days} days, ${hours} hours and ${minutes} minutes and ${seconds} seconds`
    //     }
    //     return `${years} years, ${days} days, ${hours} hours and ${minutes} minutes`
    //  } else if( days){
    //     return `${days} days, ${hours} hour, ${minutes} minutes and ${seconds} seconds`
    //  } else if(hours){
    //     return `${hours} hour, ${minutes} minutes and ${seconds} seconds`
    //  } else if(minutes){
    //     if(minutes && seconds){
    //         return `${minutes} minutes and ${seconds} seconds`
    //     }
    //     return `${minutes} minutes`
    //  } else if(seconds){
    //     return `${seconds} seconds`

    //  }

    return `${
        resultY
    }${
        days > 0 ? ` ${days} days,` :``
    }${
        hours >0 ? hours ==1 ? ` ${hours} hour,`:` ${hours} hours,` :``
    }${
        minutes >0 ?  minutes == 1? ` ${minutes} minute`:` ${minutes} minutes` :``
    }${
        seconds >0 ?  seconds == 1? ` ${seconds} seconds`:` ${seconds} seconds` :``
    }`
}

// console.log(dotest(120, "2 minutes"));
// console.log(dotest(3600, "1 hour"));
// console.log(dotest(3662, "1 hour, 1 minute and 2 seconds"));
// console.log(dotest(15731080, "182 days, 1 hour, 44 minutes and 40 seconds"));
// console.log(dotest(132030242, "4 years, 68 days, 3 hours and 4 minutes"));

console.log(dotest(5))

