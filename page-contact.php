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
                <p>Email me back at&nbsp;<br/>
                  <span class="form-group"><input type="text" id="email" name="email" placeholder="__________" value="" class="email" required></span>
                </p>
                <p style="margin-bottom:.4em;">Thanks for your time!</p>
                <button class="submit btn invert">SEND</button>
                <div class="formOverlay"></div>
              </div>

            </form>
            <div class="sentSuccess">
                <h1>We got your message.</h1>
                <h3>We'll be in touch!</h3>
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
              <select id="mobileContact_subject" name="mobileContact_subject" class="form-control" tabindex="3">
                    <option  selected disabled>Choose a reason</option>
                    <option value="1">Product Question.</option>
                    <option value="2">Tour Question.</option>
                    <option value="3">General Question.</option>
                    <option value="4">Something random.</option>
                  </select>
              </div>
               <div class="form-group">
              <textarea name="mobileContact_message" id="mobileContact_message" cols="30" rows="10" class="form-control" placeholder="Question / Comments / Random " tabindex="4"></textarea>
              </div>
              <submit class="btn invert" tabindex="5">Submit</submit>
            </form>
            <div class="sentSuccess">
                <h1>THANK YA.</h1>
                <h3>We just checked our mailbox and got your message. We’ll be in contact soon. Real soon. But maybe not before the cows come home.</h3>
              </div>
              <div class="row">
                <div class="col-xs-12 text-center">
                  <h6>If email isn't our thing, you can always call us at the office, too</h6>
                 <h6> <a href="tel:18169303862" style="color:black; text-decoration:none;">816-930-3862</a></h6>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>