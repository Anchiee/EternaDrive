<?php

function createCode()
{
  $digit1 = mt_rand(1, 9);
  $digit2 = mt_rand(1, 9);
  $digit3 = mt_rand(1, 9);
  $digit4 = mt_rand(1, 9);

  $code = strval($digit1) . strval($digit2) . strval($digit3) . strval($digit4);
  return $code; 
}