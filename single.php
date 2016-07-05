<?php get_header(); ?>

    <section class="container-fluid mainContent belowNavigation news">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <?php
            if ( have_posts() ) :
              $i = 0;
              while ( have_posts() ) :
                the_post(); ?>

            <div class="row">
              <div class="col-md-12">
                <img src="//placehold.it/1920x800">
              </div>
              <div class="col-md-10 col-md-offset-1 overlapPhoto">
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <?php $currentLink = get_permalink(); ?>
                <div class="social">
                  <a  target="_blank" class="socialIcon icon-facebook2" id="fbShare" data-link="<?php echo $currentLink; ?>"></a>
                  <a href="http://twitter.com/share?text=<?php echo urlencode(the_title()); ?>&url=<?php echo urlencode(the_permalink()); ?>&via=Shattomilk" target="_blank" class="socialIcon icon-twitter"></a>
                  <a href="mailto:Sendto?Subject=<?php echo urlencode(the_title()); ?>&Body=<?php echo urlencode( get_the_content()); ?>" target="_blank" class="socialIcon icon-mail2"></a>  
                </div>
                <hr>
                <div class="articleContent">
                <?php the_content(); ?>
                </div>
                <!-- <hr>
                Categories
                <hr> -->
                <hr>
              </div>
            </div>

            <div class="row signUp">
              <div class="col-md-8 col-md-offset-2 center">
                <h4>Sign Up for News Alerts</h4>
                <form class="form-inline">
                  <input placeholder="Email Address" class="form-control"/>
                  <button class="form-control btn invert">Sign Up</button>
                </form>
              </div>
            </div>

              <?php endwhile;
            endif; ?>
          </div>
        </div>
      </div>
    </section>
<script>
document.getElementById('fbShare').onclick = function() {
  var curLink = document.getElementById('fbShare').dataset.link;
  console.log(curLink)
  FB.ui({
    method: 'share',
    display: 'popup',
    href: curLink,
  }, function(response){});
}
</script>
<?php get_footer(); ?>
<?php get_footer(); ?>