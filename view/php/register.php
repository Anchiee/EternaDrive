
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

  <main>
    
    <section class="input-section">
      <div class="socials">
          <h1>Use other socials</h1>

          <address>
            <a href="https://discord.com/oauth2/authorize?client_id=1320191678493102190&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2FEternaDrive%2Fincludes%2Fcontroller%2FDiscord%2Fcallback.php&scope=identify+email">
              <i class="fa-brands fa-discord fa-xl" style="color: #444444;"></i>
            </a>
            <a href="https://github.com/login/oauth/authorize?client_id=Ov23liIdfbnrRJ7k2SYU&scope=user:read++user:email">
              <i class="fa-brands fa-github fa-xl" style="color: #444444;"></i>
            </a>

          </address>
      </div>

      <h2>Sign-in</h2>
      <form action="../../includes/controller/FormHandlerRegister.php" method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder="Enter your username" required>

        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter your passsword" minlength="6" required>
        
        <label for="confirmPassword">Confirm password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" minlength="6" required>
        
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" required>

        <button>Next</button>
      </form>
      <p>Already have an account? <a href="../../includes/controller/UserRedirection.php"><strong>Log-in</strong></a></p>
    </section>

    <section class="info-section">
      
      <img src="../../assets/images/cloud.png" width="300" alt="cloud image">
      <h3><strong>Your files, your way. Forever.</strong></h3>
      <p><strong>Eterna</strong>Drive is free for everyone, all it takes is a few clicks! Join to the wide community of people.</p>
    </section>
  
  </main>

</body>
</html>