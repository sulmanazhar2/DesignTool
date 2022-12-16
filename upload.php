<?php
session_start();
error_reporting( 0 );
$uploadOk = 1;
echo $target_dir;
if ( $_FILES['file']['name'] != '' ) {
    $target_file = $target_dir . basename( $_FILES['file']['name'] );
    $imageFileType = strtolower( pathinfo( $target_file, PATHINFO_EXTENSION ) );
    $check = getimagesize( $_FILES['file']['tmp_name'] );
    if ( $check !== false ) {
        $uploadOk = 1;
    } else {
        echo "alert('File is not an image.');";
        $uploadOk = 0;
    }

    // Check file size
    if ( $_FILES['file']['size'] > 2000000 ) {
        echo "alert('Sorry, your file is too large.');";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if ( $imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'jpeg'
    && $imageFileType != 'gif' ) {
        echo "alert('Sorry, only JPG, JPEG, PNG & GIF files are allowed.')";
        $uploadOk = 0;
    }
    if ( $uploadOk == 0 ) {
        echo "alert('Sorry, your file was not uploaded.')";
        // if everything is ok, try to upload file
    } else {
        $test = explode( '.', $_FILES['file']['name'] );
        $extension = end( $test );

        if ( $_SESSION['sessionType'] == 'admin' ) {
            $usermail = $_SESSION['email'];
            $usermail = $usermail . '-';
            $name = uniqid( $usermail, true ) . '.' . $extension;
            $location = 'uploadedImages/AdminUploadedImages/' . $name;
            ;
        }
        if ( $_SESSION['sessionType'] == 'customer' ) {
            $usermail = $_SESSION['ema'];
            $usermail = $usermail . '-';
            $name = uniqid( $usermail, true ) . '.' . $extension;
            $location = 'uploadedImages/UserImages/'. $usermail . $name;
            ;
        }
        if ( $_SESSION['sessionType'] == 'seller' ) {
            $usermail = $_SESSION['sema'];
            $usermail = $usermail . '-';
            $name = uniqid( $usermail, true ) . '.' . $extension;
            $location = 'uploadedImages/SellerImages/'. $usermail . $name;
        }
        move_uploaded_file( $_FILES['file']['tmp_name'], $location );
        echo ' <img style="cursor:pointer;" class="img-polaroid" src="'.$location.'">';
    }

} else {

}

?>
