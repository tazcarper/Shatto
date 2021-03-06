<?php get_header(); ?>

<section class="container-fluid mainContent hero contact">
  <div class="videoSteam"></div>
  <div class="container">

    <div class="row">
      <div class="col-lg-8 col-lg-offset-4 col-md-10 col-md-offset-2 formBG hidden-xs">
        <form id="nl-form" class="contactForm ">
          <div class="innerForm">
            <p>Dear Shatto,</p>
            <p>My name is
              <span class="form-group"><input type="text" placeholder="__________" value="" id="name" class="name" name="name" required></span><span>&nbsp;</span>and I wanted to send you a note about
              <select id="subject" name="subject">
                <option value="one of your products" selected>one of your products.</option>
                <option value="touring the farm">touring the farm.</option>
                <option value="a question I had">a question I had.</option>
                <option value="something random">something random.</option>
              </select>
            </p>
            <p>More specifically,
              <span class="form-group"><input type="text" placeholder="" value="" id="message" name="message" class="message" required></span>
            </p>
            <p>Email me back at&nbsp;
              <br/>
              <span class="form-group"><input type="text" id="email" name="email" placeholder="__________" value="" class="email"><br/></span> or call me at <span class="form-group"><input type="text" id="phone" name="phone" placeholder="__________" value="" class="phone"></span>.
            </p>
            <p style="margin-bottom:.4em;">Thanks for your time!</p>
            <button class="submit btn invert">SEND</button>
            <div class="formOverlay"></div>
          </div>

        </form>
        <div class="sentSuccess">
          <h1>We got your message.</h1>
          <h3>We&rsquo;ll be in touch!</h3>
        </div>
      </div>
      <div class="col-xs-12 visible-xs text-center mobileContact">
        <h2>Contact Us</h2>
        <form id="mobileContact" class="">
          <div class="form-group">
            <input type="text" name="mobileContact_name" id="mobileContact_name" class="form-control" placeholder="Name" tabindex="1">
          </div>
          <div class="form-group">
            <input type="email" name="mobileContact_email" id="mobileContact_email" class="form-control" placeholder="Email" tabindex="2">
          </div>
          <div class="form-group">
            <input type="text" name="mobileContact_phone" id="mobileContact_phone" class="form-control" placeholder="Phone Number" tabindex="3">
          </div>
          <div class="form-group">
            <select id="mobileContact_subject" name="mobileContact_subject" class="form-control" tabindex="4">
              <option selected disabled>Choose a Reason</option>
              <option value="Product Question">Product Question</option>
              <option value="Tour Question">Tour Question</option>
              <option value="General Question">General Question</option>
              <option value="Something random">Something Random</option>
            </select>
          </div>
          <div class="form-group">
            <textarea name="mobileContact_message" id="mobileContact_message" cols="30" rows="10" class="form-control" placeholder="Question / Comments / Random " tabindex="5"></textarea>
          </div>
          <button class="btn invert" tabindex="6">Submit</button>
        </form>
        <div class="sentSuccess">
          <h1>THANK YA.</h1>
          <h3>We just checked our mailbox and got your message. We’ll be in contact soon. Real soon. But maybe not before the cows come home.</h3>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <h6>If email isn't your thing, you can always call us at the office, too</h6>
            <h6> <a href="tel:18169303862" style="color:black; text-decoration:none;">816-930-3862</a></h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>