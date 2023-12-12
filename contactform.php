<?php

	if (isset($_POST['submit'])) {
		
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$mail = $_POST['mail'];
		$subject = "AVALSKE DOLINE";
		$phone = $_POST['phone'];
		$message = $_POST['message'];
		
		$mailTo = "avdgugl@gmail.com";
		$headers = "From: ".$mail;
		$txt = "Poruka poslata sa sajta AVALSKE DOLINE.\n\n Poruku poslao: ".$firstname." ".$lastname."\n\n Mail: ".$mail."\n\n Telefon: ".$phone."\n\n".$message;
		
		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.html?mailsend");

	}
?>

<?php

	if (isset($_POST['submit'])) {
		
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$mail = $_POST['mail'];
		$phone = $_POST['phone'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
		
		$mailTo = "aylmao@aylmao.com";
		$headers = "From: ".$mail;
		$txt = "Poruka poslata sa sajta AVALSKE DOLINE.\n Poruku poslao: ".$firstname." ".$lastname.".\n\n".$message;
		
		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.html?mailsend");

	}
?>