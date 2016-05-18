<?php get_header(); ?>

    <section class="container-fluid mainContent hero contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-4 col-md-10 col-md-offset-2 formBG">
            <form id="nl-form" class="contactForm">
              <div class="innerForm">
                <p>Dear Shatto,</p>
                <p>My name is
                  <input type="text" placeholder="{insert your name here}" value="" id="name" class="name" name="name"><span>&nbsp;</span>and I wanted to send you a note about
                  <select id="subject" name="subject">
                    <option value="1" selected>one of your products.</option>
                    <option value="2">touring the farm.</option>
                    <option value="3">a question I had.</option>
                    <option value="4">something random.</option>
                  </select>
                </p>
                <p>More specifically,&nbsp;
                  <input type="text" placeholder="{insert additional comments}" value="" id="message" name="message" class="message">
                </p>
                <p>Email me back at&nbsp;<br/>
                  <input type="text" id="email" name="email" placeholder="{give us your email address}" value="" class="email">
                </p>
                <p>Thanks for your time!</p>
                <button class="submit btn invert">SEND</button>
                <div class="formOverlay"></div>
              </div>
              <div class="sentSuccess">
                <h1>We got your message.</h1>
                <h3>We'll be in touch!</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

<?php get_footer(); ?>