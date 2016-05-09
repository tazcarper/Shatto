<?php get_header(); ?>
<div id="trigger"></div>
<section class="mainContent productPage hero">
  <div class="container">
    <div class="caps">
      
      <picture class="cap LBCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/lightBlue_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap greenCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/green_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap redCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/red_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap yellowCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/yellow_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      
      <picture class="cap goldCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/gold_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap silverCap visible-lg">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/silver_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap pinkCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/pink_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap blackCap visible-lg">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/black_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap clearCap visible-lg">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/clear_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap blueCap">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/blue_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      <picture class="cap brownCap visible-lg">
        <source srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/brown_cap.png" media="(min-width: 768px)">
        <img srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" alt="…">
      </picture>
      
    </div>
    <div class="row hidden-xs">
      <div class="col-md-12 text-center logo"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/shatto.svg" class="productLogo"></div>
    </div>
  </div>
  <div class="row visible-xs">
    <div class="col-xs-10 center-block">
      <h2 class="visible-xs text-center">NEED A HEADLINE</h2>
      <p class="visible-xs text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tortor dolor. Phasellus cursus lacus ut mi tristique, non condimentum felis pretium. Suspendisse tempus leo sodales orci pulvinar, ac pellentesque est eleifend. Sed elementum orci lacus, in pellentesque dolor ultricie. </p>
      <div class="mobileHeroImg"></div>
    </div>
  </div>
  
</section>
<div id="mobileCollapse">
  <div class="container-fluid subMenu">
    <div class="row">
      <div class="col-md-12 subNav table">
        <ul>
          <li><a href="#milk" class="btn invert">Milk</a></li>
          <li><a href="#flavoredMilk" class="btn invert">Flavored Milk</a></li>
          <li><a href="#iceCream" class="btn invert">Ice Cream</a></li>
          <li><a href="#cheese" class="btn invert">Cheese</a></li>
          <li><a href="#butter" class="btn invert">Butter</a></li>
          <li><a href="#nonDairy" class="btn invert">Non-dairy</a></li>
        </ul>
      </div>
    </div>
  </div>
  <a data-toggle="collapse" data-parent="#mobileCollapse" href="#milk" aria-controls="milk" class="mobileCategory collapsed">MILK</a>
  <section role="tabpanel" id="milk" class="productPage productSection collapse">
    <div class="container ">
      <div class="row hidden-xs">
        <div class="col-md-12 text-center productTitle">
          <h2>MILK</h2>
          <div class="milkLines lines"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 productImages">
          <div data-product="HG_twoPercent" class="product twoPercent trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/two.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/two_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>2% </h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="HG_onePercent" class="product onePercent trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/one.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/one_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>1% </h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="HG_skim" class="product trigger text-center front"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/Skim.png"  data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/Skim_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Skim</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          
          <div data-product="HG_whole" class="product whole trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/Whole.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/Whole_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Whole</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="pint_half" class="product halfCream  trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/halfHalf.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/halfHalf_2x.png" class="main">
            <div class="bottleShadow pint"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Half/Half</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="pint_cream" class="product pintCream trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/heavyCream.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/final/heavyCream_2x.png" class="main">
            <div class="bottleShadow pint">
              <img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png">
            </div>
            <div class="productName">
              <h5>Whole Cream</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a data-toggle="collapse" data-parent="#mobileCollapse" href="#flavoredMilk" aria-controls="flavored milk" class="mobileCategory collapsed">FLAVORED MILK             </a>
  <section role="tabpanel" id="flavoredMilk" class="productPage productSection collapse">
    <div class="container ">
      <div class="row hidden-xs">
        <div class="col-md-12 text-center productTitle">
          <h2>FLAVORED MILK</h2>
          <div class="milkLines lines"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 productImages">
          <div data-product="chocolate" class="product trigger text-center chocolate"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Chocolate.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Chocolate_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Chocolate</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="strawberry" class="product trigger text-center strawberry"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Strawberry.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Strawberry_2x.png " class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Strawberry</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="cookies_N_Cream" class="product trigger text-center cookies_N_Cream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/CookiesAndCream.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/CookiesAndCream_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Cookies N' Cream</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="banana" class="product trigger text-center banana"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Banana.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Banana_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Banana</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="cottonCandy" class="product trigger text-center cottonCandy"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/CottonCandy.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/CottonCandy_2x.png" class="main">
            <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Cotton Candy</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div class="rowSplit">
            <div data-product="coffee" class="product trigger text-center coffee"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Coffee.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Coffee_2x.png" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
              <div class="productName">
                <h5>Coffee</h5>
                <p class="factsLabel">Nutrition Facts</p>
              </div>
            </div>
            <div data-product="eggNog" class="product trigger text-center eggNog"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/EggNog.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/EggNog_2x.png" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
              <div class="productName">
                <h5>Egg Nog</h5>
                <p class="factsLabel">Nutrition Facts</p>
              </div>
            </div>
            <div data-product="rootBeer" class="product trigger text-center rootBeer"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/RootBeer.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/RootBeer_2x.png" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
              <div class="productName">
                <h5>Root Beer</h5>
                <p class="factsLabel">Nutrition Facts</p>
              </div>
            </div>
            <div data-product="pumpkinSpiceEggNog" class="product trigger text-center pumpkinSpiceEggNog"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Pumpkin.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/milkFlavored/Pumpkin_2x.png" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
              <div class="productName">
                <h5>Pumpkin Spice Egg Nog</h5>
                <p class="factsLabel">Nutrition Facts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a data-toggle="collapse" data-parent="#mobileCollapse" href="#iceCream" aria-controls="Ice Cream" class="mobileCategory collapsed">ICE CREAM</a>
  <section role="tabpanel" id="iceCream" class="productPage productSection collapse">
    <div class="container ">
      <div class="row hidden-xs">
        <div class="col-md-12 text-center productTitle">
          <h2>ICE CREAM</h2>
          <div class="milkLines lines"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 productImages">
          <div data-product="strawberry_iceCream" class="product trigger text-center strawberryIceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/Strawberry.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/Strawberry_2x.png" class="main">
            <div class="bottleShadow iceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
            <div class="productName">
              <h5>Strawberry</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="vanilla_iceCream" class="product trigger text-center vanilla"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/Vanilla.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/Vanilla_2x.png" class="main">
            <div class="bottleShadow iceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
            <div class="productName">
              <h5>Vanilla</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          
          <div data-product="chocolate_iceCream" class="product trigger text-center chocolateIceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/Chocolate.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/Chocolate.png" class="main">
            <div class="bottleShadow iceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
            <div class="productName">
              <h5>Chocolate</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="caramelSeaSalt_iceCream" class="product trigger text-center caramelSeaSalt"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/CaramelSeaSalt.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/CaramelSeaSalt.png" class="main">
            <div class="bottleShadow iceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
            <div class="productName">
              <h5>Caramel Sea Salt</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Ice Cream Bars -->
      <div class="row">
        <div class="col-md-12 productImages">
          <div data-product="oatmealRaisin" class="product trigger text-center bar oatmealRaisin"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/OatmealRaisin.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/OatmealRaisin_2x.png" class="main">
            <div class="bottleShadow iceCreamBar"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
            <div class="productName">
              <h5>Oatmeal raisin cookie and caramel sea salt ice cream</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="sugarCookie" class="product trigger text-center bar sugarCookie"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/SugarCookie.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/SugarCookie_2x.png" class="main">
            <div class="bottleShadow iceCreamBar"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Sugar cookie and strawberry ice cream</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="chocolateChip_icecreamBar" class="product trigger text-center bar chocolateChip"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/ChocolateChip.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/ChocolateChip_2x.png" class="main">
            <div class="bottleShadow iceCreamBar"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Chocolate chip cookie and vanilla ice cream</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="brownie" class="product trigger text-center bar brownie"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/Brownie.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/Brownie_2x.png" class="main">
            <div class="bottleShadow iceCreamBar"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Chocolate brownie and vanilla ice cream</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a data-toggle="collapse" data-parent="#mobileCollapse" href="#cheese" aria-controls="Cheese" class="mobileCategory collapsed">CHEESE</a>
  <section role="tabpanel" id="cheese" class="productPage productSection collapse">
    <div class="container">
      <div class="row hidden-xs">
        <div class="col-md-12 text-center productTitle">
          <h2>CHEESE</h2>
          <div class="milkLines lines"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 productImages">
          <div data-product="Cajun" class="product trigger text-center cajun"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/Cajun.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/Cajun_2x.png" class="main">
            <div class="bottleShadow cheeseCurds"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Cajun-flavored Cheddar Cheese Curds</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="whiteCheddar" class="product trigger text-center whiteCheddar"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/WhiteCheddar.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/WhiteCheddar_2x.png" class="main">
            <div class="bottleShadow cheeseCurds"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>White Cheddar Cheese Curds </h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="Dill" class="product trigger text-center dill"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/Dill.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/Dill_2x.png" class="main">
            <div class="bottleShadow cheeseCurds"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Dill-flavored Cheddar Cheese Curds</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="MushroomGarlic" class="product trigger text-center mushroomGarlic"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/MushroomGarlic.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/MushroomGarlic_2x.png" class="main">
            <div class="bottleShadow cheeseCurds"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Garlic Mushroom Cheddar Cheese Curds</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
      <div id="cheeseOne" class="row">
        <div class="col-md-12 productImages">
          <div data-product="platsburg" class="product trigger text-center plattsburg"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Plattsburg.png " data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Plattsburg_2x.png" class="main">
            <div class="bottleShadow cheese"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Plattsburg <span class="smaller">(A gouda style cheese)</span></h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="smithFork" class="product trigger text-center smithFork"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/SmithFork.png " data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/SmithFork_2x.png" class="main">
            <div class="bottleShadow cheese"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Smith Fork<br/><span class="smaller">(A cheddar style cheese)</span></h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="winstead" class="product trigger text-center winstead"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/WinsteadReserve.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/WinsteadReserve_2x.png" class="main">
            <div class="bottleShadow cheese"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Winstead Reserve <span class="smaller">(A havarti style cheese)</span></h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
      <div id="cheeseTwo" class="row">
        <div class="col-md-12 productImages">
          <div data-product="wexford" class="product trigger text-center wexford"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Wexford.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Wexford_2x.png" class="main">
            <div class="bottleShadow cheese"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Wexford <span class="smaller">(A Shatto original with a bite)</span></h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="lilly" class="product trigger text-center lilly"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Lilly.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Lilly_2x.png" class="main">
            <div class="bottleShadow cheese"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Lilly <br/><span class="smaller">(A Shatto original that makes a strong statement)</span></h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="perrin" class="product trigger text-center perrin"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Perrin.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/Perrin_2x.png" class="main">
            <div class="bottleShadow cheese"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Perrin <span class="smaller">(A Shatto original with a mild manner)</span></h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <a data-toggle="collapse" data-parent="#mobileCollapse" href="#butter" aria-controls="Butter" class="mobileCategory collapsed">BUTTER</a>
  <section role="tabpanel" id="butter" class="productPage productSection collapse">
    <div class="container ">
      <div class="row hidden-xs">
        <div class="col-md-12 text-center productTitle">
          <h2>BUTTER</h2>
          <div class="milkLines lines"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 productImages">
          <div data-product="garlicButter" class="product trigger text-center garlic"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Garlic.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Garlic_2x.png" class="main">
            <div class="bottleShadow butterShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Garlic Butter</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
          <div data-product="honeyButter" class="product trigger text-center honey"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Honey.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Honey_2x.png" class="main">
            <div class="bottleShadow butterShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Honey Butter</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="plainButter" class="product trigger text-center plain"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Plain.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Plain_2x.png" class="main">
            <div class="bottleShadow butterShadow topButter"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Plain Ol' Butter</h5>
              <p class="factsLabel">Nutrition Facts </p>
            </div>
          </div>
          <div data-product="unsaltedButter" class="product trigger text-center unsalted"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Unsalted.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/Unsalted_2x.png" alt="Unsalted Butter" class="main">
            <div class="bottleShadow butterShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
            <div class="productName">
              <h5>Unsalted Butter</h5>
              <p class="factsLabel">Nutrition Facts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section><a data-toggle="collapse" data-parent="#mobileCollapse" href="#nonDairy" aria-controls="Non-Dairy" class="mobileCategory collapsed">NON-DAIRY</a>
    <section role="tabpanel" id="nonDairy" class="productPage productSection collapse">
      <div class="container ">
        <div class="row hidden-xs">
          <div class="col-md-12 text-center productTitle">
            <h2>NON-DAIRY</h2>
            <div class="milkLines lines"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 productImages">
            <div data-product="unsweetenedTea" class="product trigger text-center unsweetenedTea"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/SweetTea.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/SweetTea_2x.png" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
              <div class="productName">
                <h5>UNSWEETENED TEA</h5>
                <p class="factsLabel">Nutrition Facts</p>
              </div>
            </div>
            <div data-product="fruitPunch" class="product trigger text-center fruitPunch"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/FruitPunch.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/FruitPunch_2x.png" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
              <div class="productName">
                <h5>FRUIT PUNCH</h5>
                <p class="factsLabel">Nutrition Facts </p>
              </div>
            </div>
            <div data-product="lemonade" class="product trigger text-center lemonade"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/Lemonade.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/Lemonade_2x.png 2x" class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
              <div class="productName">
                <h5>Lemonade</h5>
                <p class="factsLabel">Nutrition Facts </p>
              </div>
            </div>
            <div data-product="orangeDrink" class="product trigger text-center orangeDrink"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/loading_spinner.gif" data-src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/OrangeDrink.png" data-src-retina="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/OrangeDrink_2x.png"  class="main">
              <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
              <div class="productName">
                <h5>Orange Drink</h5>
                <p class="factsLabel">Nutrition Facts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="overlay">
    
    <div class="productInfo">
      <div class="overlay-close">X</div>
      <div class=" container">
        <div class="row">
          
          <div class="col-sm-5 overflow">
            <div class="productShot">
              <img src="" alt="" id="overlay_image">
            </div>
          </div>
          <div class="col-sm-7 ">
            <div class="row">
              <div class="col-sm-12 flavors">
                <h3></h3>
              </div>
              
            </div>
            <div class="nutritionFacts">
              <div class="row">
                <div class="col-lg-4">
                  <div class="row">
                    <div class="col-sm-12 nutFacts">
                      <h2>Nutrition Facts</h2>
                    </div>
                    <div class="col-sm-12 servingSize">
                      <h3>10 Servings</h3>
                      <p>Amount per package</p>
                    </div>
                    <div class="col-sm-12 calories">
                      <div class="row">
                        <div class="col-sm-12">
                          <h2 class="calories">170</h2>
                          <div class="closeUp">
                            <h3>Calories</h3>
                            <p>Per Serving</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 stats">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="col-sm-12 topPart">
                          <h5>% DV* amount per serving</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table class="table">
                            <tr>
                              <td>2%</td>
                              <td>Total Fat <span class="lighter">1.5g</span></td>
                            </tr>
                            <tr>
                              <td>2%</td>
                              <td class="child">Saturated Fat <span class="lighter">1.5g</span></td>
                            </tr>
                            <tr>
                              <td>0%</td>
                              <td>Cholesterol <span class="lighter">0mg</span></td>
                            </tr>
                            <tr>
                              <td>12%</td>
                              <td>Sodium <span class="lighter">260mg</span></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="col-sm-12 topPart">
                          <h5>% DV* amount per serving</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <table class="table">
                            <tr>
                              <td>2%</td>
                              <td>Total Carbs <span class="lighter">36g</span></td>
                            </tr>
                            <tr>
                              <td>3%</td>
                              <td class="child">Dietary Fiber <span class="lighter">1.5g</span></td>
                            </tr>
                            <tr>
                              <td>0%</td>
                              <td class="child">Sugars <span class="lighter">2g</span></td>
                            </tr>
                            <tr>
                              <td>12%</td>
                              <td>Protein <span class="lighter">4g</span></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row bottomList">
                    <div class="col-sm-12">
                      <ul>
                        <li>0% <span class="title">Vitamin A</span> 0mg</li>
                        <li>0% <span class="title">Vitamin A</span> 0mg</li>
                        <li>0% <span class="title">Vitamin A</span> 0mg</li>
                        <li>0% <span class="title">Vitamin A</span> 0mg</li>
                        <li>0% <span class="title">Vitamin A</span> 0mg</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row dailyValues">
                <div class="col-sm-12 text-center">
                  <p>*Percent Daily Values are based on a 2000 calorie diet.</p> <p>Your daily values may be higher or lower depending on your calorie needs.</p>
                </div>
              </div>
            </div>
            <div class="row ingredients">
              <div class="col-sm-12">
                <p><span style="font-weight:500">Ingredients:</span> MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes.</p>
              </div>
            </div>
            
            
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
  <?php get_footer(); ?>