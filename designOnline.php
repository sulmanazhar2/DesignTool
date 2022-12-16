<?php
session_start();
$uploadOk = 1;
if ( isset( $_FILES['file'] ) and !$_FILES['file']['error'] ) {

    if ( $_SESSION['sessionType'] == 'admin' ) {
        $fname = random_str( 10 );
        move_uploaded_file( $_FILES['file']['tmp_name'], 'AdminProjectsForUsers/Project/' . $_SESSION['email'] . $fname . '.txt' );
        move_uploaded_file( $_FILES['front']['tmp_name'], 'AdminProjectsForUsers/Images/' . $_SESSION['email'] . $fname . '-front.jpeg' );
        move_uploaded_file( $_FILES['back']['tmp_name'], 'AdminProjectsForUsers/Images/' . $_SESSION['email'] . $fname .'-back.jpeg' );
    } elseif ( $_SESSION['sessionType'] == 'customer' ) {
        $fname = random_str( 10 );
        move_uploaded_file( $_FILES['file']['tmp_name'], 'UserProjects/Projects/' . $_SESSION['ema'] . $fname . '.txt' );
        move_uploaded_file( $_FILES['front']['tmp_name'], 'UserProjects/Images/' . $_SESSION['ema'] . $fname . '-front.jpeg' );
        move_uploaded_file( $_FILES['back']['tmp_name'], 'UserProjects/Images/' . $_SESSION['ema'] . $fname .'-back.jpeg' );
    } elseif ( $_SESSION['sessionType'] == 'seller' ) {
        $fname = random_str( 10 );
        move_uploaded_file( $_FILES['file']['tmp_name'], 'SellerProjects/Projects/' . $_SESSION['sema'] . $fname . '.txt' );
        move_uploaded_file( $_FILES['front']['tmp_name'], 'SellerProjects/Images/' . $_SESSION['sema'] . $fname . '-front.jpeg' );
        move_uploaded_file( $_FILES['back']['tmp_name'], 'SellerProjects/Images/' . $_SESSION['sema'] . $fname .'-back.jpeg' );
    }

} else {

}

function random_str(
    int $length = 64,
    string $keyspace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
): string {
    if ( $length < 1 ) {
        throw new \RangeException( 'Length must be a positive integer' );
    }
    $pieces = [];
    $max = mb_strlen( $keyspace, '8bit' ) - 1;
    for ( $i = 0; $i < $length; ++$i ) {
        $pieces [] = $keyspace[random_int( 0, $max )];
    }
    return implode( '', $pieces );
}

?>
