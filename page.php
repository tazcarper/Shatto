<?php get_header(); ?>

<main role="main" id="main">

<?php
if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();
        the_title( '<h3>', '</h3>' );
        the_content();
    }
}
?>

<?php get_footer(); ?>