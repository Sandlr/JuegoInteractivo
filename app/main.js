
window.onload = function () {
    const cvs = document.querySelector('#canvas');
    const ctx = cvs.getContext('2d');
    
    //change here circles line-width



    function getTime() {
        let date = new Date();

        let h = date.getHours();
        let s = date.getSeconds();
        let m = date.getMinutes();

        // Calculate percentage to be drawn
        var hp = 100 / 12 * (h % 12);
        var mp = 100 / 60 * m;
        var sp = 100 / 60 * s;

        // Ensure double digits

        ctx.clearRect(0, 0, 350, 350);
        
        draw(95, hp, '#9544f8'); //change here circles radius y color
        ctx.lineWidth = 8; //círculo minutos  
        draw(115, mp, '#b173fd');
        ctx.lineWidth = 4; //círculo segundos
        draw(132, sp, '#d7b7fd');
        ctx.lineWidth = 12; //círculo horas
        

    }


    /**
     * Draw circles
    */
    var draw = (function () {
        var start = 1.5 * Math.PI; // Start circle from top
        var end = (2 * Math.PI) / 100; // One percent of circle

        /**
         * Draw percentage of a circle
         *
         * @param {number} r Radius
         * @param {number} p Percentage of circle
         * @param {string} c Stroke color
         * @return void
         */
        return function (r, p, c) {
            p = p || 100; // When time is '00' we show full circle
            ctx.strokeStyle = c;
            ctx.beginPath();
            ctx.arc(175, 175, r, start, p * end + start, false);
            ctx.stroke();
        };
    }());

    setInterval(getTime, 1000);
};




window.addEventListener('load', () => {
    startTime()
    checkTime()
});

function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hr = (hr == 0) ? 24 : hr;
    hr = (hr > 24) ? hr - 24 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.querySelector(".hour").innerHTML = hr + ":" + min + ":" + sec;

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];

    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.querySelector(".dayname").innerHTML = date;

    let time = setTimeout(function () { startTime() }, 500);
}



function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

