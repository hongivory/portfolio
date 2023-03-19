<?php
$mobileKey = array ('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'Mobile', 'Symbian', 'Opera Mobi', 'Opera Mini', 'IEmobile');
for($i = 0 ; $i < count($mobileKey) ; $i++)
{
if(strpos($_SERVER['HTTP_USER_AGENT'],$mobileKey[$i]) == true)
{

header("Location: http://hongivory.dothome.co.kr/sorry.html");
exit;
}
}
?>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title>홍상아의 포트폴리오</title>


</head>
<body>
  <h1>홍상아's 포트폴리오</h1>
  <ul>
    <li><a href="http://hongivory.dothome.co.kr/kodak_apparel/">PC WEB 1</a></li>
    <li><a href="http://hongivory.dothome.co.kr/seoul_bike/">PC WEB 2</a></li>
    <li><a href="http://hongivory.dothome.co.kr/helinox/">Responsive Web</a></li>
  </ul>

</body>
</html>
