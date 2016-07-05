<?php get_header(); ?>

    <section class="container-fluid mainContent belowNavigation news">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 center">
            <p class="largerCopy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <form class="form-inline" id="newsletterSignUpForm">
              <div class="form-group">
                <input id="newsletterSignUp" name="newsletterSignUp" placeholder="Email Address" class="form-control"/>
              </div>
              <button class="form-control btn invert">Sign Up</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 center center-block categoryFilter">
            <hr>

            <h4>Filter Posts <ul><?php $cat = get_the_category();
            $args = array(
              'show_option_all'=>'All',
              'title_li'=>'',
              'separator'=>' ',
              'current_category'=>$cat->cat_ID,
              'echo'=>false
            );
            $cats = wp_list_categories($args);

            if(strpos($cats,'current-cat') == false) {
              $cats = str_replace('cat-item-all', 'cat-item-all current-cat', $cats);
            }

            echo $cats; ?></ul></h4>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <?php
            if ( have_posts() ) :
              $i = 0;
              while ( have_posts() ) :
                the_post();
                $i++;
                $columns_this_row = $i % 3; ?>
            <?php if ( $i === 1 || $i === 3 ) : ?>
            <div class="row">
              <a href="<?php the_permalink(); ?>">
              <div class="col-md-7">
                <img src="xxx" />
              </div>
              <div class="col-md-5">
                <hr>
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
                <hr>
              </div>
              </a>
            </div>
              <?php elseif ( $i === 2 ) : ?>
            <div class="row">
              <a href="<?php the_permalink(); ?>">
              <div class="col-md-5">
                <hr>
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
                <hr>
              </div>
              <div class="col-md-7">
                <img src="xxx" />
              </div>
              </a>
            </div>
              <?php else : ?>
                <?php if ( $columns_this_row === 1 ) : $row_open = true; ?>
            <div class="row">
                <?php endif; ?>
              <a href="<?php the_permalink(); ?>">
              <div class="col-md-4">
                <img src="xxx" />
                <hr>
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
                <hr>
              </div>
              </a>
                <?php if ( $columns_this_row === 0 && $row_open === true ) : $row_open = false; ?>
            </div>
                <?php endif; ?>

              <?php endif; ?>

              <?php endwhile;
              if ( $row_open ) : ?>
            </div>
              <?php endif;
            endif;
            ?>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>
<?php get_footer(); ?>