<!--Sets variable for timer countdown to 10-->
<script>var countdown = 10</script>

<script>var BlastoffTimer = setInterval(function(){
<!--If time hits 0, change to say Blastoff!-->
  if(countdown <= 0){
    clearInterval(BlastoffTimer);
    document.getElementById("DisplayCountdown").innerHTML = "Blastoff!";
  } else {
  <!--Tells timer to count down by 1 if timer is above 0-->
    document.getElementById("DisplayCountdown").innerHTML = countdown;
  }
  countdown -= 1;
}, 1000);
</script>