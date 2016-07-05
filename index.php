<?php get_header(); ?>

    <section class="container-fluid mainContent belowNavigation news">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 center">
            <p class="largerCopy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <form class="form-inline" id="newsletterSignUpForm">
              <div class="form-group">
                <input id="newsletterSignUp" name="newsletterSignUp" placeholder="Email Address" class="form-control"/>
                <div class="newsletterSignUpThanks">You&rsquo;re signed up!</div>
              </div>
              <button class="form-control btn invert">Sign Up</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 center-block center categoryFilter">
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

          <div class="col-md-12 center-block">
            <?php
            if ( have_posts() ) :
              $i = 0;
              while ( have_posts() ) :
                the_post();
              $thumb = get_field('thumbnail_image');
              
                $i++;
                $columns_this_row = $i % 3; ?>
            <?php if ( $i === 1 || $i === 3 ) : ?>
            <div class="row ">
            <div class="equalHeights">
              <a href="<?php the_permalink(); ?>">
              <div class="col-md-7 topColumns articleImage">
               <div class="overflowHide">
              <?php if( get_field('thumbnail_image') ){ ?>
                <img src="<?php echo $thumb['url']; ?>" />
              <?php } else{ ?>
                <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=697%C3%97463&w=697&h=463" />
                <?php } ?>
              </div>
            </div>
              <div class="col-md-5 topColumns text">
                
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
               
              </div>
              </a>
            </div>
          </div>
              <?php elseif ( $i === 2 ) : ?>
            <div class="row ">
            <div class="equalHeights">
              <a href="<?php the_permalink(); ?>">
              
              <div class="col-md-7 col-md-push-5 topColumns articleImage">
               <div class="overflowHide">
              <?php if( get_field('thumbnail_image') ){ ?>
                <img src="<?php echo $thumb['url']; ?>" />
              <?php } else{ ?>
                <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=697%C3%97463&w=697&h=463" />
                <?php } ?>
              </div>
              </div>
              <div class="col-md-5 col-md-pull-7 topColumns text">
              
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
              
              </div>
              </a>
            </div>
            </div>
              <?php else : ?>
                <?php if ( $columns_this_row === 1 ) : $row_open = true; ?>
            <div class="row">
            <div class="equalHeights">
                <?php endif; ?>
              
              <div class="col-md-4 topColumns smallColumns articleImage">
              <div class="overflowHide">
              <a href="<?php the_permalink(); ?>">
                <?php if( get_field('thumbnail_image') ){ ?>
                <img src="<?php echo $thumb['url']; ?>" />
              <?php } else{ ?>
                <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=697%C3%97463&w=697&h=463" />
                <?php } ?>
                </div>
                <h6><?php the_time('M j, Y'); ?></h6>
                <h1><?php the_title(); ?></h1>
                <p><?php echo get_the_excerpt(); ?></p>
                
                </a>
              </div>
              
                <?php if ( $columns_this_row === 0 && $row_open === true ) : $row_open = false; ?>
            </div>
                <?php endif; ?>

              <?php endif; ?>

              <?php endwhile;
              if ( $row_open ) : ?>
            </div>
          </div>
              <?php endif;
            endif;
            ?>
          </div>
        </div>
      </div>
    </section>


<?php get_footer(); ?>