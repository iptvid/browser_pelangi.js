function myFunction() {

<?php

$ip = $_SERVER['REMOTE_ADDR'];
$brow = $_SERVER['HTTP_USER_AGENT']; 


$teks = "$brow";
$hasil="";
$warna=0;
$turn=0;
while($warna<=strlen($teks)){ $warnahuruf = substr ($teks,$warna,1);

$warna++;
if($turn==0){ $turn=1;
$hasil.= "<FONT color=\"#ff00ff\">".$warnahuruf."</FONT>"; }
else
if($turn==1){ $turn=2;
$hasil.= "<FONT color=\"#ff00cc\">".$warnahuruf."</FONT>"; }
else
if($turn==2){ $turn=3;
$hasil.= "<FONT color=\"#ff0099\">".$warnahuruf."</FONT>"; }
else
if($turn==3){$turn=4;
$hasil.= "<FONT color=\"#ff0066\">".$warnahuruf."</FONT>"; } else if($turn==4){$turn=5;  $hasil.= "<FONT color=\"#ff0033\">".$warnahuruf."</FONT>"; }   else if($turn==5){$turn=6; $hasil.= "<FONT color=\"#ff0000\">".$warnahuruf."</FONT>"; } 
else if($turn==6){$turn=7; $hasil.= "<FONT color=\"#ff3300\">".$warnahuruf."</FONT>";  } else if($turn==7){$turn=8; $hasil.= "<FONT color=\"#ff6600\">".$warnahuruf."</FONT>"; }
else if($turn==8){$turn=9; $hasil.= "<FONT color=\"#ff9900\">".$warnahuruf."</FONT>"; }
else if($turn==9){$turn=10; $hasil.= "<FONT color=\"#ffcc00\">".$warnahuruf."</FONT>"; } 
else if($turn==10){$turn=11; $hasil.= "<FONT color=\"#ffff00\">".$warnahuruf."</FONT>"; } 
else if($turn==11){$turn=12; $hasil.= "<FONT color=\"#ccff00\">".$warnahuruf."</FONT>"; } 
else if($turn==12){$turn=13; $hasil.= "<FONT color=\"#99ff00\">".$warnahuruf."</FONT>"; }
else if($turn==13){$turn=14; $hasil .= "<FONT color=\"#66ff00\">".$warnahuruf."</FONT>"; } 
else if($turn==14){$turn=15; $hasil .= "<FONT color=\"#33ff00\">".$warnahuruf."</FONT>"; } 
else if($turn==15){$turn=16; $hasil .= "<FONT color=\"#00ff00\">".$warnahuruf."</FONT>"; } 
else if($turn==16){$turn=17; $hasil .= "<FONT color=\"#00ff33\">".$warnahuruf."</FONT>"; } 
else if($turn==17){$turn=18; $hasil .= "<FONT color=\"#00ff66\">".$warnahuruf."</FONT>"; } 
else if($turn==18){$turn=19; $hasil .= "<FONT color=\"#00ff99\">".$warnahuruf."</FONT>"; } 
else if($turn==19){$turn=20; $hasil .= "<FONT color=\"#00ffcc\">".$warnahuruf."</FONT>"; }  
else if($turn==20){$turn=21; $hasil .= "<FONT color=\"#00ffff\">".$warnahuruf."</FONT>"; }
else if($turn==21){$turn=22; $hasil .= "<FONT color=\"#00ccff\">".$warnahuruf."</FONT>"; } 
else if($turn==22){$turn=23; $hasil .= "<FONT color=\"#0099ff\">".$warnahuruf."</FONT>"; } 
else if($turn==23){$turn=24; $hasil .= "<FONT color=\"#0066ff\">".$warnahuruf."</FONT>"; } 
else if($turn==24){$turn=25; $hasil .= "<FONT color=\"#0033ff\">".$warnahuruf."</FONT>"; } 
else if($turn==25){$turn=26; $hasil .= "<FONT color=\"#0000ff\">".$warnahuruf."</FONT>"; } 
else if($turn==26){$turn=27; $hasil .= "<FONT color=\"#3300ff\">".$warnahuruf."</FONT>"; } 
else if($turn==27){$turn=28; $hasil .= "<FONT color=\"#6600ff\">".$warnahuruf."</FONT>"; } 
else if($turn==28){$turn=29; $hasil .= "<FONT color=\"#9900ff\">".$warnahuruf."</FONT>"; } 
else if($turn==29){$turn=0; $hasil .= "<FONT color=\"#cc00ff\">".$warnahuruf."</FONT>"; } }
echo "$hasil"; 
?>
}
