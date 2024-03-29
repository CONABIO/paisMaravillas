// Set the date we're counting down to
// var countDownDate = new Date("Jul 24, 2019 16:14:25").getTime();
var countDownDate = new Date().getTime() + 31000;

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    var elapsedtime = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    console.clear();
    console.log(elapsedtime);

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        console.log('EXPIRED');
    }
}, 1000);
