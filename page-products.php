<?php get_header(); ?>

    <div id="trigger"></div>
    <section class="mainContent productPage hero">
      <div class="container">
        <div class="caps">
          <div class="cap LBCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/lightBlue_cap.png"></div>
          <div class="cap greenCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/green_cap.png"></div>
          <div class="cap redCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/red_cap.png"></div>
          <div class="cap yellowCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/yellow_cap.png"></div>
          <div class="cap goldCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/gold_cap.png"></div>
          <div class="cap silverCap visible-lg"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/silver_cap.png"></div>
          <div class="cap pinkCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/pink_cap.png"></div>
          <div class="cap blackCap visible-lg"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/black_cap.png"></div>
          <div class="cap clearCap visible-lg"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/clear_cap.png"></div>
          <div class="cap blueCap"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/blue_cap.png"></div>
          <div class="cap brownCap visible-lg"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/brown_cap.png"></div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/shatto.svg" class="productLogo"></div>
        </div>
      </div>
      <div class="container-fluid subMenu">
        <div class="row">
          <div class="col-md-12 table">
            <ul>
              <li><a href="#milk" class="btn invert">Milk</a></li>
              <li><a href="#flavoredMilk" class="btn invert">Flavored Milk</a></li>
              <li><a href="#iceCream" class="btn invert">Ice Cream</a></li>
              <li><a href="#cheese" class="btn invert">Cheese</a></li>
              <li><a href="#" class="btn invert">Butter</a></li>
              <li><a href="#" class="btn invert">Non-dairy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div id="mobileCollapse"><a data-toggle="collapse" data-parent="#mobileCollapse" href="#milk" aria-controls="milk" class="mobileCategory collapsed">MILK</a>
      <section role="tabpanel" id="milk" class="productPage productSection collapse">
        <div class="container ML_Fluid">
          <div class="row hidden-xs">
            <div class="col-md-12 text-center productTitle">
              <h2>MILK</h2>
              <div class="milkLines lines"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="HG_skim" class="product trigger text-center front"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/Skim.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/Skim.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/2x/Skim.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Skim</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="HG_onePercent" class="product onePercent trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/1.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/1.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/2x/1.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>1% </h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="HG_twoPercent" class="product twoPercent trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/2.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/2.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/2x/2.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>2% </h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="HG_whole" class="product whole trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/Whole.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/1x/Whole.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/2x/Whole.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Whole</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="pint_cream" class="product pintCream trigger text-center"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/pints/pint_cream.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/pints/pint_cream.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/pints/pint_cream_2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Whole Cream</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><a data-toggle="collapse" data-parent="#mobileCollapse" href="#flavoredMilk" aria-controls="flavored milk" class="mobileCategory collapsed">FLAVORED MILK             </a>
      <section role="tabpanel" id="flavoredMilk" class="productPage productSection collapse">
        <div class="container ML_Fluid">
          <div class="row hidden-xs">
            <div class="col-md-12 text-center productTitle">
              <h2>FLAVORED MILK</h2>
              <div class="milkLines lines"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="chocolate" class="product trigger text-center chocolate"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Chocolate.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Chocolate.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/Chocolate.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Chocolate</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="strawberry" class="product trigger text-center strawberry"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Strawberry.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Strawberry.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/Strawberry.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Strawberry</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="cookies_N_Cream" class="product trigger text-center cookies_N_Cream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/CookiesandCream.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/CookiesandCream.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/CookiesandCream.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Cookies N' Cream</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="banana" class="product trigger text-center banana"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Banana.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Banana.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/Banana.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Banana</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="cottonCandy" class="product trigger text-center cottonCandy"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/CottonCandy.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/CottonCandy.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/CottonCandy.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Cotton Candy</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="coffee" class="product trigger text-center coffee"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Coffee.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/Coffee.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/Coffee.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Coffee</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="eggNog" class="product trigger text-center eggNog"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/EggNog.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/EggNog.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/EggNog.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Egg Nog</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="rootBeer" class="product trigger text-center rootBeer"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/RootBeer.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/RootBeer.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/RootBeer.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Root Beer</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="pumpkinSpiceEggNog" class="product trigger text-center pumpkinSpiceEggNog"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/PumpkinSpiceEggNog.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/1x/PumpkinSpiceEggNog.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/quarts/2x/PumpkinSpiceEggNog.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Pumpkin Spice Egg Nog</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><a data-toggle="collapse" data-parent="#mobileCollapse" href="#iceCream" aria-controls="Ice Cream" class="mobileCategory collapsed">ICE CREAM</a>
      <section role="tabpanel" id="iceCream" class="productPage productSection collapse">
        <div class="container ML_Fluid">
          <div class="row hidden-xs">
            <div class="col-md-12 text-center productTitle">
              <h2>ICE CREAM</h2>
              <div class="milkLines lines"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="Vanilla" class="product trigger text-center vanilla"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/Vanilla.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/Vanilla.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/2x/Vanilla.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
                <div class="productName">
                  <h5>Vanilla</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="Strawberry" class="product trigger text-center strawberryIceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/Strawberry.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/Strawberry.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/2x/Strawberry.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
                <div class="productName">
                  <h5>Strawberry</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="Chocolate" class="product trigger text-center chocolateIceCream"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/Chocolate.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/Chocolate.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/2x/Chocolate.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
                <div class="productName">
                  <h5>Chocolate</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="CaramelSeaSalt" class="product trigger text-center caramelSeaSalt"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/CaramelSeaSalt.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/1x/CaramelSeaSalt.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/2x/CaramelSeaSalt.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
                <div class="productName">
                  <h5>Caramel Sea Salt</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="oatmealRaisin" class="product trigger text-center bar oatmealRaisin"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/oatmealRaisin.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/oatmealRaisin.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/2x/oatmealRaisin.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-pints/shadow.png"></div>
                <div class="productName">
                  <h5>Oatmeal raisin cookie and caramel sea salt ice cream</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="sugarCookie" class="product trigger text-center bar sugarCookie"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/SugarCookie.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/SugarCookie.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/2x/SugarCookie.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Sugar cookie and strawberry ice cream</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="ChocolateChip" class="product trigger text-center bar chocolateChip"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/ChocolateChip.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/ChocolateChip.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/2x/ChocolateChip.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Chocolate chip cookie and vanilla ice cream</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="Brownie" class="product trigger text-center bar brownie"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/Brownie.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/1x/Brownie.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/icecream-bars/2x/Brownie.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Chocolate brownie and vanilla ice cream</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><a data-toggle="collapse" data-parent="#mobileCollapse" href="#cheese" aria-controls="Cheese" class="mobileCategory collapsed">CHEESE</a>
      <section role="tabpanel" id="cheese" class="productPage productSection collapse">
        <div class="container ML_Fluid">
          <div class="row hidden-xs">
            <div class="col-md-12 text-center productTitle">
              <h2>CHEESE</h2>
              <div class="milkLines lines"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="Cajun" class="product trigger text-center cajun"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/Cajun.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/Cajun.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/2x/Cajun.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Cajun-flavored Cheddar Cheese Curds</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="whiteCheddar" class="product trigger text-center whiteCheddar"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/WhiteCheddar.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/WhiteCheddar.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/2x/WhiteCheddar.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>White CheDdar Cheese Curds </h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="Dill" class="product trigger text-center dill"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/Dill.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/Dill.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/2x/Dill.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Dill-flavored Cheddar Cheese Curds</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="MushroomGarlic" class="product trigger text-center mushroomGarlic"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/MushroomGarlic.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/1x/MushroomGarlic.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese-curds/2x/MushroomGarlic.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Garlic Mushroom Cheddar Cheese Curds</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
          <div id="cheeseOne" class="row">
            <div class="col-md-12 productImages">
              <div data-product="platsburg" class="product trigger text-center plattsburg"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/plattsburg/1x/plattsburg.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/plattsburg/1x/plattsburg.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/plattsburg/2x/plattsburg.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Plattsburg <span class="smaller">(A gouda style cheese)</span></h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="smithFork" class="product trigger text-center smithFork"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/smith/1x/smith.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/smith/1x/smith.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/smith/2x/smith.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Smith Fork <span class="smaller">(A cheddar style cheese)</span></h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="winstead" class="product trigger text-center winstead"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/winstead/1x/winstead.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/winstead/1x/winstead.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/winstead/2x/winstead.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Winstead Reserve <span class="smaller">(A havarti style cheese)</span></h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
          <div id="cheeseTwo" class="row">
            <div class="col-md-12 productImages">
              <div data-product="wexford" class="product trigger text-center wexford"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/wexford/1x/wexford.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/wexford/1x/wexford.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/wexford/2x/wexford.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Wexford <span class="smaller">(A Shatto original with a bite)</span></h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="lilly" class="product trigger text-center lilly"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/lilly/1x/lilly.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/lilly/1x/lilly.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/lilly/2x/lilly.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Lilly <span class="smaller">(A Shatto original that makes a strong statement)</span></h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="perrin" class="product trigger text-center perrin"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/perrin/1x/perrin.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/perrin/1x/perrin.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/cheese/perrin/2x/perrin.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/half-gallons/shadow.png"></div>
                <div class="productName">
                  <h5>Perrin <span class="smaller">(A Shatto original with a mild manner)</span></h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><a data-toggle="collapse" data-parent="#mobileCollapse" href="#butter" aria-controls="Butter" class="mobileCategory collapsed">BUTTER</a>
      <section role="tabpanel" id="butter" class="productPage productSection collapse">
        <div class="container ML_Fluid">
          <div class="row hidden-xs">
            <div class="col-md-12 text-center productTitle">
              <h2>BUTTER</h2>
              <div class="milkLines lines"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="garlicButter" class="product trigger text-center garlic"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/garlic/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/garlic/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/butter/garlic/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>Garlic Butter</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="honeyButter" class="product trigger text-center honey"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/honey/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/honey/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/butter/honey/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>Honey Butter</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="plainButter" class="product trigger text-center plain"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/plain/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/plain/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/butter/plain/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>Plain Ol' Butter</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="unsaltedButter" class="product trigger text-center unsalted"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/unsalted/garlic/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/unsalted/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/butter/unsalted/2x.png 2x" alt="Unsalted Butter" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>Unsalted Butter</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><a data-toggle="collapse" data-parent="#mobileCollapse" href="#nonDairy" aria-controls="Non-Dairy" class="mobileCategory collapsed">NON-DAIRY           </a>
      <section role="tabpanel" id="nonDairy" class="productPage productSection collapse">
        <div class="container ML_Fluid">
          <div class="row hidden-xs">
            <div class="col-md-12 text-center productTitle">
              <h2>NON-DAIRY</h2>
              <div class="milkLines lines"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 productImages">
              <div data-product="unsweetenedTea" class="product trigger text-center unsweetenedTea"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/iceTea/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/iceTea/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/juices/iceTea/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>UNSWEETENED TEA</h5>
                  <p class="factsLabel">Nutrition Facts</p>
                </div>
              </div>
              <div data-product="fruitPunch" class="product trigger text-center fruitPunch"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/fruitPunch/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/fruitPunch/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/juices/fruitPunch/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>FRUIT PUNCH</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="lemonade" class="product trigger text-center lemonade"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/lemon/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/lemon/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/juices/lemon/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>Lemonade</h5>
                  <p class="factsLabel">Nutrition Facts </p>
                </div>
              </div>
              <div data-product="orangeDrink" class="product trigger text-center orangeDrink"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/orange/1x.png" srcset="<?php echo get_template_directory_uri(); ?>/dist/images/products/juices/orange/1x.png 1x, <?php echo get_template_directory_uri(); ?>/dist/images/products/juices/orange/2x.png 2x" class="main">
                <div class="bottleShadow"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/products/butter/shadow.png"></div>
                <div class="productName">
                  <h5>Orange Drink</h5>
                  <p class="factsLabel">Nutrition Facts           </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="popUp_info__overlay"></div>
    <div class="popUp_info">
      <div class="popUp_info__content">
        <div class="row">
          <div class="popUp_close"></div>
          <div class="col-lg-9 col-sm-10">
            <ul>
              <li>Flavor One</li>
              <li>Flavor Two</li>
              <li>Flavor Three</li>
            </ul>
            <div class="nutritionFacts">
              <div class="row">
                <div class="col-sm-12 top">
                  <div class="row tableRow">
                    <div class="col-md-5 col-lg-6 nutFacts">
                      <h2>Nutrition Facts</h2>
                    </div>
                    <div class="col-md-4 col-lg-3 servingSize">
                      <p>Serving size 1 package</p>
                      <p>Amount per package</p>
                    </div>
                    <div class="col-md-3 col-lg-3 calories">
                      <h3>Calories&nbsp;<span>45</span></h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="border"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-10 col-md-8 middle">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-sm-4 column">
                          <p><span class="dailyValue">2% DV</span><span class="title bold">Total Fat</span><span class="weight">1g</span></p>
                          <p><span class="dailyValue">2% DV</span><span class="title bold">Total Fat</span><span class="weight">1g  </span></p>
                        </div>
                        <div class="col-sm-4 column">
                          <p><span class="dailyValue">3% DV</span><span class="title bold">Total Fat</span><span class="weight">2g</span></p>
                          <p><span class="dailyValue">3% DV</span><span class="title bold">Total Fat</span><span class="weight">2g</span></p>
                        </div>
                        <div class="col-sm-4 column">
                          <p><span class="dailyValue">3% DV</span><span class="title bold">Total Fat</span><span class="weight">2g</span></p>
                          <p><span class="dailyValue">3% DV</span><span class="title bold">Total Fat</span><span class="weight">2g    </span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="border smaller"></div>
                      <div class="row attributes">
                        <div class="col-sm-2">
                          <p><span class="bold">Protein</span>&nbsp;<span class="protein">1g</span></p>
                        </div>
                        <div class="col-sm-10">
                          <ul>
                            <li><span class="percent">2</span>% DV <span class="attribute">Vitamin D</span></li>
                            <li><span class="percent">2</span>% DV <span class="attribute">Vitamin D</span></li>
                            <li><span class="percent">2</span>% DV <span class="attribute">Vitamin D</span></li>
                            <li><span class="percent">2</span>% DV <span class="attribute">Vitamin D</span></li>
                            <li><span class="percent">2</span>% DV <span class="attribute">Vitamin D</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-4 footnotes">
                  <p>Abbrev. footnote statement to be inserted here.</p>
                </div>
              </div>
            </div>
            <div class="ingredients">
              <p><span>Ingredients:</span>MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes.</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-2 sizes">
            <p>Available Sizes:</p>
            <ul>
              <li>
                <h2>Gallon</h2>
              </li>
              <li>
                <h2>Half Gallon</h2>
              </li>
              <li>
                <h2>Pint</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

<?php get_footer(); ?>