
//
//    var mytime = new Date(),
//        h = mytime.getHours,
//        m = mytime.getMinutes,
//        s = mytime.getSeconds;
//    
//    $('h1').append(h);
//    
//    var showTime = setInterval(function(){
//                $('h1').append(h);
//                },1000);
//    
//});
//
var d = new Date(), h, m, s, colorTime;
////sorry moment.js, maybe next time

function showTime() {
    document.getElementById("thecolor").innerHTML =  "";
    document.getElementById("theclock").innerHTML =  "";
   d.setSeconds(d.getSeconds() + 1); //Date is a JS function be sure to use a capital D
    
   h = d.getHours(); //returns just the Hours
   m = d.getMinutes();//returns just the 
   s = d.getSeconds();//returns just the 

    //  need more zero to keep six digits!
       if(h <= 9) h = '0' + h;
       if(m <= 9) m = '0' + m;
       if(s <= 9) s = '0' + s;

        //provides the hexidecimal code for the color
       colorTime = "#" + h + m + s;

        //colors the background to the per second color
       document.body.style.background = colorTime;
        //writes to document the color
        if (s % 2 == 0) {
            document.getElementById("thecolor").innerHTML =  colorTime;}
        //writes to document the time
       else {
            document.getElementById("theclock").innerHTML =  (h + ":" + m + ":" + s);}
    //sets the interval to 1 second
setTimeout(showTime, 1000);       
    
}

showTime();
    
