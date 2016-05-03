<?php get_header(); ?>
<div id="floatingTrigger">
  <section class="container-fluid mainContent hero">
    <div class="container">
      <div class="row">
        <div class="col-md-12 desktop text-center">
          <h1><?php the_field('hero_title'); ?></h1>
          <?php the_field('hero_copy'); ?>
          <div class="callOut">
            <h2>Extra! Extra!</h2>
            <p>Lorem ipsum dolor sit amet, ius et paulo platonem molestiae, ad usu possit docendi inimicus. Et sed tota debet, no quo vitae sanctus philosophia.</p>
          </div>
        </div>
        <div class="col-xs-12 mobile">
          <object type="image/svg+xml" data="<?php echo get_template_directory_uri(); ?>/dist/images/mobile_hero.svg"></object>
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid bottleDetail desktop">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 center-block">
          <h2><?php the_field('bottle_title'); ?></h2>
          <div class="stopPoint"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="pod pod1">
            <p><?php the_field('fact_1'); ?></p>
          </div>
          <div class="pod pod2">
            <p><?php the_field('fact_2'); ?></p>
          </div>
        </div>
        <div class="col-sm-6"></div>
        <div class="col-sm-3">
          <div class="pod pod3">
            <p><?php the_field('fact_3'); ?></p>
          </div>
          <div class="pod pod4">
            <p><?php the_field('fact_4'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid products visible">
   
      <div class="row">
        <div class="col-xs-12 visible-xs"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/rotation/1.png" alt="Shatto Milk" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/rotation/1.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/rotation/1_2x.png 2x" style="display:block; width:100%; max-width:270px; margin:0 auto; margin-bottom:25px;"/></div>
        <div class="col-xs-12 title">
          <h2 class="desktop"><?php the_field('products_title'); ?></h2>
          <h2 class="mobile">Products</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 productImages home">
          <div id="floatingBottle" class="img-1">
          <a>
            <div id="mainBottle"></div>
          <img src="<?php echo get_template_directory_uri(); ?>/dist/images/rotation/reflection.png" class="shadow"/>
              <div class="productName hidden-xs">
                <h5>Milk</h5>
              </div></a></div><a href="/products.html#milk" class="product milkButton text-center visible-xs">
            <div class="productName">
              <h5>Milk</h5>
            </div></a>
            <div class="productContainer">
            <a href="/products.html#cheese" class="product cheese text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/home/cheese.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/home/cheese.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/home/cheese_2x.png 2x"/>
            <div class="productName">
              <h5>Cheese</h5>
            </div></a>
            <a href="/products.html#juice" class="product juice text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/home/juice.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/home/juice.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/home/juice_2x.png 2x"/>
            <div class="productName">
              <h5>Non-Dairy</h5>
            </div></a>
            <a href="/products.html#flavoredMilk" class="product flavoredMilk text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/home/flavored.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/home/flavored.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/home/flavored_2x.png 2x"/>
            <div class="productName">
              <h5>Flavored <span class="hidden-xs">Milk</span></h5>
            </div></a><a href="/products.html#iceCream" class="product iceCream text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/home/iceCream.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/home/iceCream.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/home/iceCream_2x.png 2x"/>
            <div class="productName">
              <h5>Ice Cream</h5>
            </div></a><a href="/products.html#butter" class="product butter text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/home/butter.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/home/butter.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/home/butter_2x.png 2x"/>
            <div class="productName">
              <h5>Butter</h5>
            </div></a>
        </div>
      </div>
      </div>
  </section>
  <section class="container-fluid mapFinder">
    <div class="row">
      <div class="col-sm-6 col-sm-offset-6 setHeight">
        <div class="findText">
          <h3 class="desktop"><?php the_field('map_title'); ?></h3>
          <h3 class="mobile">Find Shatto Near You</h3>
          <form class="form-inline">
            <input placeholder="ZIP Code" class="form-control"/>
            <button class="form-control btn invert">GO</button>
          </form><br class="hidden-xs"/>
          <!-- <p class="mobile"><a href="#">Oh, just use my location. I'm not hiding.</a></p> -->
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid signUp desktop">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2><?php the_field('newsletter_title'); ?></h2>
          <?php the_field('newsletter_copy'); ?>
          <form class="form-inline">
            <input placeholder="Email Address" class="form-control"/>
            <button class="form-control btn invert">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section data-speed="10" class="container-fluid tours parallax">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h3 class="desktop"><?php the_field('tours_title'); ?></h3>
          <h3 class="mobile">Come Tour the Farm</h3>
          <?php the_field('tours_copy'); ?>
          <a href="#" class="btn">Schedule a tour</a>
        </div>
      </div>
    </div>
  </section>
</div>

<?php get_footer(); ?>