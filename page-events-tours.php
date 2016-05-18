<?php get_header(); ?>
<div class="events-tours">
  <section class="container-fluid mainContent hero viveVideo">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1><?php the_field('hero_title'); ?></h1>
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid intro" id="tourSection">
    <div class="container center">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <?php the_field('intro_copy'); ?>
        </div>
      </div>
      <div class="row images">
        <div class="scheduleOverlay">
          <a href="#tourSection" class="btn scheduleTour" id="scheduleTour">GET TO SCHEDULIN’ A TOUR</a>
        </div>
        <div class="col-md-6 leftPod"><img src="<?php $image = get_field('intro_left_image'); echo $image['url']; ?>">
          <?php the_field('intro_left'); ?>
          <a class="btn invert center scheduleTour">Schedule a Tour</a>
        </div>
        <div class="col-md-6 rightPod"><img src="<?php $image = get_field('intro_right_image'); echo $image['url']; ?>">
          <?php the_field('intro_right'); ?>
          <a href="https://www.facebook.com/ShattoMilk" class="btn invert center">Check out our Facebook</a>
        </div>
      </div>
    </div>
    <div class="schedulePopUp">
      <div class="closeSchedule">X</div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 center-block">
            <h4>GET TO SCHEDULIN’ A TOUR</h4>
            <form action="">
              <div class="form-group">
                <input type="text" id="schedule_name" class="" name="schedule_name" placeholder="Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="schedule_email" name="schedule_email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="number" id="schedule_phone" name="schedule_phone" placeholder="Phone" required>
              </div>
              <div class="form-group">
                <input type="number" id="schedule_groupSize" name="schedule_groupSize" placeholder="Estimated size of group">
              </div>
              <div class="form-group">
                <input type="text" id="schedule_date" name="schedule_date" placeholder="Date" required readonly>
              </div>
              <div class="form-group">
                <textarea name="schedule_comment" id="schedule_comment" cols="30" rows="10" placeholder="Have any questions or concerns you like to ask us?"></textarea>
              </div>
              <button class="btn submit invert">Request Tour</button>
              <div class="cancelSchedule">Cancel</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container-fluid farm-experience center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2><?php the_field('farm_experience_title'); ?></h2>
          <?php the_field('farm_experience_copy'); ?>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 82.68 55.6" style="enable-background:new 0 0 82.68 55.6;" xml:space="preserve" class="cowHead">
            <g>
            <path d="M32.37,40.75c-1.35,3.02-4.07,5.41-4.07,6.58c0,3.19,2.55,3.68,4.82,3.68c1.42,0,6.39-1.13,7.81-1.13 c1.42,0,5.23,1.13,6.65,1.13c4.96,0,6.8-1.49,6.8-5.1c0-3.61-2.16-2.12-4.86-4.24c-0.33-0.28-0.63-0.6-0.92-0.93l5.89,0 c-0.03,0.28-0.04,0.57,0.02,0.85c0.28,1.13,1.57,2.61,1.57,4.03c0,3.4-3.64,6.24-7.11,6.65c-2.09,0.79-3.49,3.01-6.21,3.27 c-2.43,0.23-3.98-0.28-6.06-1.57c-1.15-0.72-2.13-1.41-2.6-2.3c-1.01-0.1-2.98,0.57-4.49-0.33c-1.65-0.99-2.44-2.88-2.44-4.3 s2.27-3.68,2.27-5.1c0-0.51-0.74-0.73-1.33-1.2L32.37,40.75L32.37,40.75z M35.15,51.64c0,0,3.9-0.9,6.41-0.78 c2.35,0.11,5.91,1.23,5.91,1.23s-3.57,2.37-6.12,2.32C38.7,54.36,35.15,51.64,35.15,51.64L35.15,51.64z"></path>
          <path d="M28.1,40.75c-0.38-0.3-0.71-0.7-0.74-1.36c-0.01-0.12,1.49,0.11,1.45-0.14c-0.06-0.37-0.56-0.8-0.49-1.07 l-1.96,0.28c-0.08-0.75-1.39-1.52-0.9-1.84c-1.53-0.5-2.4-2.82-2.4-4.87c0-1.5,1.74-5.15,3.51-6.13c0.06-0.48-0.41-0.34-0.6-0.93 c0,0-2.78,1.67-3.06,2.24c-0.28-0.57-1.39-1.57-1.79-2.57c-2.05,1.12-6.15,1.71-7.56,1.71c-1.42,0-2.46-0.57-4.36-0.65 c-0.08-0.77-0.65-0.48-0.65-1.9c0-1.42,4.68-7.79,5.73-8.76c0,0,0.08-0.32-0.31-0.81c-1.52,1.09-6.69,7.46-7.93,9.26 c-1.83,0.03-1.83-0.53-2.6-0.62c-0.08-0.77,0.84-2.25,1.38-3.21c-0.49-0.41-1.75,0.46-2.55,0.34c0.53-1.96,1.16-3.57,1.38-5.56 C3.41,15.15,1.38,15.87,0,15.73c0.2-2.79,4.99-4.4,6.76-4.4c1.05,0,1.64,0.19,2.45,0.51c0.28,0.11,0.59,0.63,0.95,0.63 c0.4,0,0.7-0.59,1-0.77c0.86-0.54,1.7-0.98,4.89,0.21l0.91-0.83l-0.57-0.58c2.06-0.22,4.29-0.85,6.05,2.56 c2.63-1.13,5.63-1.39,8.26-3.02c1.84-1.13,3.01-5.91,5.16-6.47c0.63-0.17,0.49,1.44,0.84,1.45c0.24,0.01,0.7-1.32,0.93-1.34 c1.19-0.11,2.29-0.54,3.3-1.02C41.86,2.22,42.47,0,43.89,0s1.7,0.57,3.08,0.71c-0.96,1.81-1.93,2.11-1.86,2.62 c0.02,0.17,0.75,0.36,0.84,0.64c0.26-0.22,1.76-1.62,2.23-1.4c0.64,0.3,0.69,2.21,0.69,1.39c0,1.42-1.29,4.25-1.57,5.95 c-0.29-0.57-1.57-1.42-1.99-1.46c-0.46,1.02,0.01,2.03-0.08,3.36c-0.62,0.08-3.43,0.27-2.58,1.68c-1.25-0.26-2.69-0.46-3.7-0.37 c-0.68,1.19-2.15,2.07-2.85,2.87c-0.95,1.09-1.04,2.03-1.01,3.44c0.51,0.48,1.57,0.42,2.79,1.1v2.63 c-0.78,0.07-1.15,0.56-1.63,0.92c0.48,0.37,0.85,0.85,1.62,0.93c0.04,0.97,0.2,1.48-0.14,1.82c-0.33,0.33-1.15,0.48-1.34,0.7 c0.1,0.37,0.59,0.76,0.6,1.17c0.03,0.99-1.05,2.04-1.27,2.97c-0.08,0.32,0.53,0.63,0.53,0.9c0,1.45-1.87,3.42-3.15,5.47 c-0.07,0.94-0.34,1.84-0.72,2.69L28.1,40.75L28.1,40.75z M48.6,40.75c-0.33-0.38-0.65-0.77-0.98-1.15 c-0.05-0.05,1.07-0.43,1.55-0.83c0.55-0.45,0.47-0.92,0.42-0.98c-0.04-0.04-0.22-0.41-0.58-0.24c-0.31,0.15,0.05,0.45-0.2,0.75 c-0.4,0.48-1.35,0.96-1.41,0.91c-0.44-0.41-1.46-1.12-2.05-1.34c-0.06-0.73,0.59-1.5,1.08-1.91c-0.28-0.5-1.21-0.87-1.92-0.61 c-0.74-0.39-1.09-1.3-1.09-1.98c0-0.78,0.74-0.63,0.18-3.12c1.54-1.52,4.25-1.67,6.1-2.99c0.07-0.34-0.28-0.68-0.37-1.19 c-0.85,1.06-3.19,1.9-4.68,2.38c0.76-0.91,1.74-2.36,2-4.03c1.88-1.88,5.11-3.79,6.64-4.65c0,0,0.07-0.29-0.4-0.79 c-1.02,0.02-5.74,4.76-6.08,3.39c-0.27-1.08,0.76-0.82,0.76-2.24c0-1.42-1.05-3.2-2.26-4.5c1.24-2.24,4.46-4.29,6.51-4.29 c3.33,0,5.15,1.98,7.34,3.97c2.07-2.66,8.94-2.04,11.84-3.03c0.99-0.28,1.95-1.98,3.49-1.85c1.53,0.13,1.83,1.51,3.11,2.39 c-0.84,0.22-1.78,0.7-2.26,1.06c1.75,1.5,3.09,1,4.44,2.2c0.78,0.71,1.64,1.52,2.88,2.19c0.04,0.72-0.61,1.48-1.68,2.52 c0.01,0.66,0.72,1.12,1.19,1.74c0.26,0.34,0.01,1.17-0.04,1.67c-0.37-0.15-0.28-0.7-0.62-0.8c-0.97-0.29-1.82-0.53-2.59-1.32 c-0.46,0.02-0.88,1.11-1.44,1.46c-1.13,0.77-2.95,0.82-4.02,0.95c-0.5,0.39-1.02,1.48-1.87,2.46c-1,0.25-2.55,0.15-3.4,1.13 c0,0-2.51-0.39-2.53,0.12c-1.25,0.67-2.51,0.13-3.79,0.09c0,0-0.05-0.61-0.7-1.35c0.52-0.77,0.24-1.23,0.59-1.51 c0.35-0.28,1.32-0.37,1.72-0.4v-1.43c-0.26-0.16-0.57-0.32-1.17-0.37c-0.46-0.04-0.01,0.67-0.45,0.96 c-0.28,0.18-1.45-0.07-1.75,0.05c-0.69,0.27-2.23,0.87-1.52,0.78c0.46-0.06,0.94,0.42,1.45,0.72c-1.78,1.95-3.53,4.25-6.11,5.8 c0.42,0.94-0.69,1.61-0.69,3.03c0,1.42,1.13-0.28,1.13,1.13c0,1.42-1.13,1.42-1.16,1.88c0.51,0.47,0.87,0.39,1.64,0.47 c0.06,0.98-0.27,1.86-0.37,2.68L48.6,40.75L48.6,40.75z"></path>
        <path d="M37.26,41.01l-1.5-0.39c0,0-4.6,4.21-3.11,6.03c1.49,1.81,1.88,1.43,3.05,1.3c1.17-0.13,3.12-1.94,3.12-1.94l-2.02-1.81 c0,0-2.59,2.33-2.85,1.55C33.69,44.96,37.26,41.01,37.26,41.01L37.26,41.01z"></path>
      <path d="M44.15,41.01l1.5-0.39c0,0,4,2.92,2.91,5.19c-1.02,2.11-1.46,2.07-2.84,2.13c-0.85,0.04-2.08-0.64-2.08-0.64l1.36-2.33 c0,0,1.75,0.46,2.01-0.32C47.26,43.86,44.15,41.01,44.15,41.01L44.15,41.01z"></path>
    </g>
  </svg>
  <p>We do have an area where visitors can have a blanket picnic if desired.<br>These areas are only available when the weather is appropriate and the grass is dry.</p>
</div>
</div>
</div>
</section>
<section class="container-fluid caution center">
<div class="container">
<div class="row">
<div class="col-md-8 col-md-offset-2">
  <h2><?php the_field('warning_title'); ?></h2>
  <?php the_field('warning_copy'); ?>
</div>
</div>
</div>
</section>
<section class="container-fluid country-store">
<div class="container">
<div class="row">
<div class="col-md-8 col-md-offset-2 text-center">
  <h2><?php the_field('store_title'); ?></h2>
  <?php the_field('store_copy'); ?>
</div>
</div>
</div>
</section>
<section class="container-fluid gallery noPadding">
<div class="row">
<div class="col-md-12 text-center">
<h3><?php the_field('gallery_title'); ?></h3>
<div class="gallerySlider">
  <div class="popUp">
    <div class="row">
      <div class="closePopUP">X</div>
      <div class="col-sm-8 col-sm-offset-2 white">
        <div class="bigImage">
          <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp1_large.jpg" alt="">
        </div>
        <div class="description">
          <p>Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos.</p>
          <p>Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos.</p>
        </div>

      </div>

    </div>
  </div>
  <div class="galleryButtons">
    <div class="left">
      <div class="arrow"></div>
    </div>
    <div class="right">
      <div class="arrow"></div>
    </div>
  </div>
  <div class="slide" data-desc="Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos." data-largeImage="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp1_large.jpg">
    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp1.jpg" alt="">
  </div>
  <div class="slide" data-desc="Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos." data-largeImage="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp3_large.jpg">
    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp2.jpg" alt="">
  </div>
  <div class="slide" data-desc="Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos." data-largeImage="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp3_large.jpg">
    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp3.jpg" alt="">
  </div>
  <div class="slide" data-desc="Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos." data-largeImage="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp1_large.jpg">
    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp1.jpg" alt="">
  </div>
  <div class="slide" data-desc="Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos." data-largeImage="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp3_large.jpg">
    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp2.jpg" alt="">
  </div>
  <div class="slide" data-desc="Libris pertinacia cu sea, qui ea omnes eirmod recteque. Ius ne viderer tacimates theophrastus. Mazim ridens aperiri ad mei, nec nobis epicurei ne. Cu quot aliquam adolescens per, no modus suavitate eam. Vix vivendo commune ad, convenire definitiones cu eos." data-largeImage="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp3_large.jpg">
    <img src="<?php echo get_template_directory_uri(); ?>/dist/images/events/temp3.jpg" alt="">
  </div>
</div>
</div>
</div>
</section>

</div>
<?php get_footer(); ?>