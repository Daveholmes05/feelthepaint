<?php

  require 'recaptchalib.php';
  $privatekey = "6Ld97_ESAAAAAKaj9fIPwJBJVPWNj66B9ujTfzZB";
  $resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    die ("Aren't these things hard? You entered in the wrong CAPTCHA. Try again and swear to me that you're real." .
         "(reCAPTCHA said: " . $resp->error . ")");
  } else {
    // Your code here to handle a successful verification
  }
  ?>