var expired = false;

document.addEventListener('DOMContentLoaded', function () {
    
    $.ajax({
        url: "log.php",

        success: function (result) {
            jQuery.get('time.txt', function(data) {    
                var endTime = new Date((new Date(data)).getTime() + 30 * 60000);
                
                jQuery.get('time.php', function(data) {
                    var now = new Date(data);
                    
                    function getTimeRemaining(endtime) {
                        now = new Date(now.getTime() + 1000);

                        var t = Date.parse(endtime) - now;
                        var seconds = Math.floor((t / 1000) % 60);
                        var minutes = Math.floor((t / 1000 / 60) % 60);
                        return {
                            'total': t,
                            'minutes': minutes,
                            'seconds': seconds
                        };
                    }

                    function initializeClock(endtime) {
                        var clock = document.getElementById('clockdiv');
                        var minutesSpan = clock.querySelector('.minutes');
                        var secondsSpan = clock.querySelector('.seconds');

                        function updateClock() {
                            var t = getTimeRemaining(endtime);

                            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                            if (t.total <= 0) {
                                clearInterval(timeinterval);
                                
                                expired = true;
                            }
                        }

                        updateClock();
                        var timeinterval = setInterval(updateClock, 1000);
                    }

                    initializeClock(endTime);
                });
            });
        }
    });
});

function checkPassword()
{
    if(!expired) 
    {    
        $.ajax({
            url: 'checkPassword.php',
            type: 'POST',
            data: {pass: document.getElementById('password').value},

            success: function(data) {       
                if(data == 0)
//                    win();
                    alert("1");
//                else
//                    blame();
            }
        });
    }
    
    return false;
}