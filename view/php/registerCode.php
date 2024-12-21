<?php require "../../config/config.php";

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Sign-in</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles/main.css">
  <link rel="stylesheet" href="../styles/register.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Delius&family=Funnel+Display:wght@300..800&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Lexend:wght@100..900&family=Manrope:wght@200..800&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rouge+Script&display=swap" rel="stylesheet">
  
</head>
<body>

  <main>
    
    <section class="input-section">

      <form action="../../includes/controller/FormHandlerCodeVerify.php" method="post">

        <h1>Verify email</h1>
        <p>We've sent a verification code to your email. Please check your spam in case it's not there. </p>

        <input type="number" name="digit1" class="opt" maxlength="1" autofocus required>
        <input type="number" name="digit2" class="opt" maxlength="1" required>
        <input type="number" name="digit3" class="opt" maxlength="1" required>
        <input type="number" name="digit4" class="opt" maxlength="1" required>
        <button>Sign-in</button>
        <p class="send-again">Code didn't arrive? <a href="../../includes/controller/SendEmailAgain.php"><strong>Send again</strong></a></p>
      </form>
    </section>

    <section class="info-section">
      
      <img src="../../assets/cloud.png" width="300" alt="cloud image">
      <h3><strong>Your files, your way. Forever.</strong></h3>
      <p class="eterna-text"><strong>Eterna</strong>Drive is free for everyone, all it takes is a few clicks! Join to the wide community of people.</p>
    </section>
  
  </main>

</body>
</html>