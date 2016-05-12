(function(library) {
    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    library(window, document, window.jQuery);
  }

  (function(window, document, $) {

   

    var isLateralNavAnimating = false;

    var toggleFAQ = function(faq) {
      $(faq).next('.answer').toggleClass('open');
    };


    // TEMP JSON
    var productJson = {
      "products": {
        "HG_skim": {
          "title": "Skim Milk",
          "category": "half-gallon",
          "sizes": ["half gallon", "Quart"],
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Skim.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR , CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "HG_onePercent": {
          "title": "1% Milk",
          "category": "half-gallon",
          "sizes": {
            'half-gallon': 8,
            'quart': 4,
            'pint': 2
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_1Percent.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },

        "HG_twoPercent": {
          "title": "2% Milk",
          "category": "half-gallon",
          "sizes": {
            'half-gallon': 8,
            'quart': 4,
            'pint': 2
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_2Percent.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },

        "HG_whole": {
          "title": "Whole Milk",
          "category": "half-gallon",
          "sizes": {
            'half-gallon': 8,
            'quart': 4,
            'pint': 2
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Whole.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "pint_half": {
          "title": "Half-Half Cream",
          "category": "pint",
          "sizes": {
            'pint': 2
          },
          "image": "/pints/final/large/Half.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },

        "pint_cream": {
          "title": "Whole Cream Milk",
          "category": "pint",
          "sizes": {
            'pint': 2
          },
          "image": "/pints/final/large/Whole.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        // flavor
        "chocolate": {
          "title": "Chocolate Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_ChocolateMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "strawberry": {
          "title": "Strawberry Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_StrawberryMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "cookies_N_Cream": {
          "title": "Cookies and Cream Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_CookiesNCreamMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "banana": {
          "title": "Banana Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_BananaMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "cottonCandy": {
          "title": "Cotton Candy Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_CottonCandyMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "coffee": {
          "title": "Coffe Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_CoffeeMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "eggNog": {
          "title": "Egg Nog Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_EggNog.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "rootBeer": {
          "title": "Root Beer Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_RootBeerMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "pumpkinSpiceEggNog": {
          "title": "Pumpkin Spce Egg Nog Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_PumpkinSpiceEggNog.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        // Ice Cream
        ,
        "strawberry_iceCream": {
          "title": "Strawberry Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Strawberry.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "vanilla_iceCream": {
          "title": "Vanilla Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Vanilla.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "chocolate_iceCream": {
          "title": "Chocolate Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Chocolate.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "caramelSeaSalt_iceCream": {
          "title": "Caramel Sea Salt Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_CaramelSeaSalt.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "oatmealRaisin": {
          "title": "Oatmeal Raisin Ice Cream Bar",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_OatmealRaisinCaramelSeaSalt.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "sugarCookie": {
          "title": "Sugar Cookie Strawberry Ice Cream Bar",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_SugarCookieStrawberry.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "chocolateChip_icecreamBar": {
          "title": "Chocolate Chip Vanilla Ice Cream Bar",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_ChocChipVanilla.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "brownie": {
          "title": "Brownie Choclate Ice Cream Bar",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_BrownieChocolate.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        // Cheese Curds
        "Cajun": {
          "title": "Cajun Cheese Curds",
          "category": "cheese_curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_Cajun.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "whiteCheddar": {
          "title": "White Cheddar Cheese Curds",
          "category": "cheese_curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_WhiteCheddar.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "Dill": {
          "title": "Dill Cheese Curds",
          "category": "cheese_curds ",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_Dill.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "MushroomGarlic": {
          "title": "Mushroom Garlic Cheese Curds",
          "category": "cheese_curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_MushroomGarlic.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        // big cheese
        ,
        "platsburg": {
          "title": "Platsburg Artisan Cheese",
          "category": "artisan_cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Plattsburg.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "smithFork": {
          "title": "Smith Fork Artisan Cheese",
          "category": "artisan_cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_SmithFork.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "winstead": {
          "title": "Winstead Reserve Artisan Cheese",
          "category": "artisan_cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_WinsteadReserve.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "wexford": {
          "title": "Wexford Artisan Cheese",
          "category": "artisan_cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Wexford.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "lilly": {
          "title": "Lilly Artisan Cheese",
          "category": "artisan_cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Lilly.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "perrin": {
          "title": "Perrin Artisan Cheese",
          "category": "artisan_cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Perrin.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        // butter
        "garlicButter": {
          "title": "Garlic Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Garlic.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "honeyButter": {
          "title": "Honey Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Honey.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "plainButter": {
          "title": "Plain Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Plain.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "unsaltedButter": {
          "title": "Unsalted Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Unsalted.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        // flavored
        "unsweetenedTea": {
          "title": "Unsweetened Tea",
          "category": "non-dairy",
          "sizes": {
            'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_SweetTea.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "fruitPunch": {
          "title": "Fruit Punch",
          "category": "non-dairy",
          "sizes": {
            'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_FruitPunch.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "lemonade": {
          "title": "Lemonade",
          "category": "non-dairy",
          "sizes": {
            'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Lemonade.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "orangeDrink": {
          "title": "Orange Drink",
          "category": "non-dairy",
          "sizes": {
            'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_OrangeDrink.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
      }
    }


    // on ready
    $(function() {



      var maxHeight = 0,
        halfHeight = 0;

      var widthMatch = matchMedia("all and (max-width: 767px)");
      var widthHandler = function(matchList) {
        if (matchList.matches) {
          // console.log('small')
        } else {
          // Do stuff for larger screens
        }
      };

      widthMatch.addListener(widthHandler);
      widthHandler(widthMatch);

      // browser check


      // header scroll
      window.addEventListener('scroll', function(e) {
        // distance from top
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          //parallax image


          shrinkOn = 200;

        //console.log(distanceY);
        maxHeight = $(window).height() - ($(window).height() * 0.15);
        halfHeight = maxHeight * 0.5;

        if (distanceY > shrinkOn) {
          $('body').addClass('smaller');

        } else {
          if ($('body').hasClass('smaller')) {
            $('body').removeClass('smaller');
          }
          var newH = 300 - distanceY;
          // $('#floatingBottle').css({
          //  'top': newH
          // });
        }
        // adjust bg of parallax
        if ($('.parallax')[0]) {
          $('.parallax').each(function() {

            var yPos = (($(window).scrollTop() - $(this).offset().top) / $(this).data('speed')),
              coords = '50% ' + yPos + 'px';
            $(this).css({
              backgroundPosition: coords
            });
          });
        }
      });



      //open/close lateral navigation
      $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        $('.cd-navigation-wrapper').addClass("transition");
        // console.log('clicked')
        //stop if nav animation is running
        if (!isLateralNavAnimating) {
          if ($(this).parents('.csstransitions').length > 0) {
            isLateralNavAnimating = true;
          }
          $('html').toggleClass('navigation-is-open');
          $('.headerMain').toggleClass('makeBlack');
          $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            //animation is over
            isLateralNavAnimating = false;
          });
        }
      });

      $('.faqContainer .question').on('click', function(event) {
        toggleFAQ(event.target);
      });

      // homepage scripts / .home
      if ($('#floatingBottle')[0]) {

        var theH = 0,
          floatingBottle = $('#floatingBottle');

        var bottleWidth = $('#floatingBottle').width(),
          theBottle = $('#mainBottle'),
          bottles = 16,
          arrayIndex = 8,
         // currentUrl = stylesheet_directory_uri,
          // Custom rotation order
          customRotation = [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          screenWidth,
          bottlesArray = Array.apply(null, {
            length: bottles
          }).map(Number.call, Number);
        // for (var i = 2; i <= bottlesArray.length; i++) {
        //   theBottle.append('<img src="'+currentUrl+'/dist/images/rotation/' + i + '.png" data-bottleposition="' + i + '">');
        // }

        function bottleMouseMove(e) {
          
          if (floatingBottle.hasClass('start')) {
            floatingBottle.addClass('disableTransition');
            var x = e.pageX - theBottle.offset().left;
            // Find bottle pos
            var bottlePos = customRotation[parseInt(x / 370 * customRotation.length)];
            console.log(bottlePos);
            arrayIndex = parseInt(x / screenWidth * customRotation.length);
            console.log('arrayindex ', arrayIndex);
            var textPod = $('.pod');
            textPod.removeClass('visible');
            console.log(arrayIndex);
            if (arrayIndex === 11 || arrayIndex === 12) {
              textPod.removeClass('visible');
            } else if (arrayIndex <= 5) {
              $('.pod1').addClass('visible');
            } else if (arrayIndex <= 10) {
              $('.pod2').addClass('visible');
            } else if (arrayIndex <= 18) {
              $('.pod3').addClass('visible');
            } else if (arrayIndex <= 23) {
              $('.pod4').addClass('visible');
            }

            var bottleBgPos = 'img-' + bottlePos;
            theBottle.attr('class',
                function(i, c) {
                  return c.replace(/(^|\s)img-\S+/g, '');
                })
              .addClass(bottleBgPos);

            // $('.shown').removeClass('shown');
            // theBottle.find("[data-bottleposition='" + bottlePos + "']").addClass('shown');

          }
        }

        // bottle turn function
        function changeIt(i) {
          var origNum = i;


          theBottle.attr('class',
            function(i, c) {
              return c.replace(/(^|\s)img-\S+/g, '');
            }).addClass('img-' + customRotation[origNum]);
          // if not on starting position
          if (i !== 8) {

            if (arrayIndex !== 8 && arrayIndex < 8) {
              origNum++;
              setTimeout(function() {
                changeIt(origNum)
              }, 25);
            } else if (arrayIndex !== 8 && arrayIndex > 8) {
              origNum--;
              setTimeout(function() {
                changeIt(origNum)
              }, 25);
            }

          }
          // if center frame, reset base array index to starting position (8)
          if (i === 8) {
            arrayIndex = 8;
          }
        }

        function rotateBack() {
          changeIt(arrayIndex);
        }

        // if desktop
        function onResize() {
          screenWidth = theBottle.width();
        }


        theBottle.on('mousemove', bottleMouseMove);


        $(window).resize(onResize);
        onResize();


        var floatTrigger = $('#floatingTrigger').waypoint(function(direction) {
          if (direction === 'down') {
            //$('#mainBottle').css({'max-width':'400px'});
            floatingBottle.addClass('start');
            $('#mainBottle').addClass('shown');



            $('.shadow').addClass('hideIt');

          } else {
            floatingBottle.removeClass('start disableTransition');
            rotateBack();

            if (!floatingBottle.hasClass('stop')) {
              $('.shadow').removeClass('hideIt');
            }
          }


        }, {
          offset: '-600'
        });
        var stopWay = $('.bottleDetail').waypoint(function(direction) {
          if (direction === 'down' && !floatingBottle.hasClass('stop')) {
            // $('#mainBottle').css({'max-width':'300px'});

            floatingBottle.addClass('stop').removeClass('start disableTransition').find('a').attr('href', '/products.html#milk');
            rotateBack();
            //$('#mainBottle').wrap('<a href="/products.html#milk"></a>');
            $('.product').each(function(e) {
              $(this).addClass('productShown');

            })
          } else {
            // $('#mainBottle').css({'max-width':'250px'});
            floatingBottle.addClass('start').removeClass('stop').find('a').removeAttr('href');
            //$('#mainBottle').unwrap('<a href="/products.html#milk"></a>');

          }
        }, {
          offset: '-650'
        })

        var max_chars = 10,
          zipField = $('.findText form input');

        $('.findText form').submit(function(e) {
          e.preventDefault();
          goToLocate();
        });

        $('.mapFinder').on('click', '.zipFind', function(e) {
          e.preventDefault();
          goToLocate();
        });

        var goToLocate = function(e) {
          var zip = zipField.val();
          console.log(zip.length);
          zipField.removeClass('error');
          if (zip !== '' && zip.length >= 5) {
            window.location.href = ('locate/?zip=' + zip);
          } else {
            zipField.addClass('error');
          }
        }

        zipField.keydown(function(e) {
          if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
          }
        });

        zipField.keyup(function(e) {
          if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
          }
        });

      }



      if ($('.about')[0]) {

        var podAnim = $('.shattoStory .pods').waypoint(function(direction) {


          if (direction === 'down') {
            if (!$(this.element).hasClass('visible')) {
              $(this.element).addClass('visible');
            }
          }
        }, {
          offset: '325'
        });

        if (Modernizr.mq('(min-width: 767px)')) {
          $('.viveVideo').vide({
            mp4: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/bottlingWeb.mp4',
            webm: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/bottlingWeb.webm',
            ogv: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/bottlingWeb.ogv'
          }, {
            posterType: 'none',
            autoplay: true,
            position: '50% 50%',
            volume: 1,
            loop: true,
            resizing: true
          });
        }
      }



      // Events page - Grid init

      var eventTours = $('.events-tours');

      if (eventTours[0]) {
        if (Modernizr.mq('(min-width: 767px)')) {
          $('.viveVideo').vide({
            mp4: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/feedingBarn2.mp4',
            webm: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/feedingBarn2.webm',
            ogv: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/feedingBarn2.ogv'
          }, {
            posterType: 'none',
            autoplay: true,
            position: '50% 100%',
            volume: 1,
            loop: true,
            resizing: true
          });
        }
        $('.scheduleOverlay').stick_in_parent({
          'offset_top': 60,
          'parent': eventTours
        });


        $('.gallerySlider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          prevArrow: $('.left'),
          nextArrow: $('.right'),
          slide: '.slide',
          focusOnSelect: true
        });


        var popUp = $('.popUp'),
          grownElements = $('.slick-track, .galleryButtons'),
          bigImageEl = $('.popUp .bigImage'),
          popUpDesc = $('.popUp .description');


        $('.slide').on('click', function(e) {
          if (Modernizr.mq('(min-width: 767px)')) {
            e.preventDefault();
            var largeImage = $(this).attr('data-largeImage'),
              description = $(this).attr('data-desc');
            bigImageEl.find('img').attr('src', largeImage);
            popUpDesc.html('').html(description);
            togglePopUp();
          }

        })
        $('.popUp').on('click', '.closePopUP', function(e) {
          togglePopUp();
        });


        $('.gallerySlider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          var nextImage = $(slick['$slides'][nextSlide]).attr('data-largeImage');
          bigImageEl.find('img').attr('src', nextImage);
        });


        togglePopUp = function() {
          if (popUp.hasClass('shown')) {
            popUp.removeClass('shown');
            grownElements.removeClass('grown');
          } else {
            popUp.addClass('shown');
            grownElements.addClass('grown');

          }
        }


        $('.intro').on('click', '.scheduleTour', function(e) {
          $('.schedulePopUp').fadeIn();
          $('#schedule_date').dateDropper();
        });

        $('.schedulePopUp').on('click', '.closeSchedule, .cancelSchedule', function(e) {
          $('.schedulePopUp').fadeOut();
        });


      }

      // Contact
      if ($('.contact')[0]) {
        if (Modernizr.mq('(min-width: 767px)')) {
          var nlform = new NLForm(document.getElementById('nl-form'));
        }
        var span = $('<span>').css('display', 'inline-block')
          .css('word-break', 'break-all').appendTo('body').css('visibility', 'hidden');

        function initSpan(textarea) {
          span.text(textarea.text())
            .width(textarea.width())
            .css('font', textarea.css('font'));
        }
        $('textarea').on({
          input: function() {
            var text = $(this).val();
            if (text !== '') {
              span.text(text);
              $(this).height(text ? span.height() : '1.1em');
            }
          },
          focus: function() {
            initSpan($(this));
          },
          keypress: function(e) {
            if (e.which == 13) e.preventDefault();
          }
        });

        $('form').submit(function(event) {
          event.preventDefault();
          console.log('submit');

          // var stuffToSend = {'input_values':{}}, myForm = $(this);

          // // find form values and assign for gravity forms
          // stuffToSend.input_values.input_1 = myForm.find('input#name').val();
          // stuffToSend.input_values.input_2 = myForm.find('select#subject').val();
          // stuffToSend.input_values.input_3 = myForm.find('input#message').val();
          // stuffToSend.input_values.input_4 = myForm.find('input#email').val();


          // $.ajax({
          //   url: "/gravityformsapi/forms/1/submissions",
          //   method: "POST",
          //   data: JSON.stringify(stuffToSend),
          //   dataType: "json",
          //   processData: false,
          //   headers: {"Content-Type":"application/json"}
          // }).success(function(data) {
          //   if ( data.response.is_valid ) {
          //     // hide form
          //     contactForm.hide();
          //     // show thank you
          //     $('.thankYou').html($(data.response.confirmation_message).find('.gform_confirmation_message').text());
          //     $('.thankYou').show();
          //     // fire analytics event
          //     // ga();
          //   } else {
          //     // handle errors
          //   }
          // });
 
        });
      }   

      $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
        e.preventDefault();

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname && Modernizr.mq('(min-width: 767px)') ) {

          var target = $(this.hash);

          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          if (target.length) {
            console.log($('.headerMain').height(), $(this).height());
            $('html, body').animate({

              scrollTop: target.offset().top - ($('.headerMain').height() + $(this).height() + 5)

            }, 1000);

            e.preventDefault();

          }

        }

      });

      // Product Page Animation
      if ($('.productPage')[0]) {



        var time = 0;
        var cap = $('.cap');
        cap.each(function(i, v) {
          setTimeout(function() {
            $(v).addClass('shown');
            if (i == cap.length - 1) {
              $(' .logo').addClass('shown');
            }
          }, time);
          time += 65;
        });


        $('.subMenu').stick_in_parent({
          'offset_top': 175
        });


        // product image clicking
        var overlay = $('.overlay'),
          closeBttn = $('.overlay-close'),
          transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
          },
          transitionProps = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
          transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
          support = {
            transitions: Modernizr.csstransitions
          };



        function overlayToggle() {
          if (overlay.hasClass('open')) {
            overlay.removeClass('open');
            overlay.addClass('close');
            $('#overlay_image').addClass('hideIt');
            var onEndTransitionFn = function(ev) {
              overlay.removeClass('close');
              if (support.transitions) {
                if (ev.propertyName !== 'visibility') return;
                this.removeEventListener(transEndEventName, onEndTransitionFn);
              }

            };
            if (support.transitions) {
              // callback for when css transition finishes
              overlay.one(transEndEventName, onEndTransitionFn);
            } else {
              onEndTransitionFn();
            }
          } else if (!overlay.hasClass('open')) {
            // callback for when css transition finishes

            overlay.addClass('open');



          }
        }
  

        // listener
        $(document).keyup(function(e) {
          if (e.keyCode === 27) overlayToggle();   
        });
        $('.overlay').on('click', '.overlay-close', function() {
          overlayToggle();
        });
        var imagePath = $('.product img').attr('src');

        imagePath = imagePath.substring(0, imagePath.indexOf('products/')) + 'products';

        $('.productImages').on('click', '.product', function(e) {
          var product = $(this),
           
            theProduct = product.data('product'),
            gotData = false;

        



          // Load image for overlay
          if (!gotData) {



            if (productJson['products'].hasOwnProperty(theProduct)) {
              var theProductImage = productJson['products'][theProduct].image,
                productCategory = productJson['products'][theProduct].category;
              console.log(imagePath);
              var combinedPath = imagePath + theProductImage;
              var retinaPath = imagePath + theProductImage.replace('/large/', '/large/2x/');
              console.log('sliced', retinaPath);
              var srcSetData = combinedPath + " 1x, " + retinaPath + " 2x";
              console.log(combinedPath);
              $('.flavors h3').html(productJson['products'][theProduct].title);
              $('#overlay_image').attr({
                'src': imagePath + '/loading_spinner.gif',
                'data-src': combinedPath,
                'data-src-retina': retinaPath
              }).removeClass().addClass(productCategory).unveil(5, function() {
                $(this).removeClass('hideIt');
              });


            } else {
              $('#overlay_image').attr({
                'src': imagePath + '/missingImage.png',
                'srcset': ''
              }).removeClass().addClass('missing');
            }

          } else {

          }

          overlayToggle();


        });

         


        $(window).load(function() {
          var waypointOffset = 200;


          var productsToShow = $('section.productSection').waypoint(function(direction) {


            if (direction === 'down') {

              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                var theImg = $(this.element).find('.product').find('img.main');
                theImg.unveil();
                
              }
            }
          }, {
            offset: waypointOffset
          });

        });


      }



      // Store Locatore / Find Page
      if ($('.mapContainer')[0]) {

        // $('#jlocator').height($(window).height()-$('.headerMain').height());

        // $(window).resize(function() {
        //   $('#jlocator').height($(window).height()-$('.headerMain').height());
        // }).resize();

        var lat, lng;
        var QueryString = function() {
          // This function is anonymous, is executed immediately and 
          // the return value is assigned to QueryString!
          var query_string = {};
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
              query_string[pair[0]] = decodeURIComponent(pair[1]);
              // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
              var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
              query_string[pair[0]] = arr;
              // If third or later entry with this name
            } else {
              query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
          }
          return query_string;
        }();
        console.log(QueryString.zip);


        if (QueryString.zip !== '' && QueryString.zip !== undefined) {


          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            "address": QueryString.zip
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log(results);
              lat = results[0].geometry.location.lat(),
                lng = results[0].geometry.location.lng();
              var placeName = results[0].address_components[0].long_name,
                formattedAddress = results[0].formatted_address;
              $(".findInput input").val(formattedAddress);
              console.log(lat, lng);
              $('.mapOverlay').addClass('shrink');
              $('#jlocator').jlocator({
                startZoom: 13,
                latitude: lat,
                longitude: lng
              });
            }
          });
        } else {
          console.log('else run');
          $('#jlocator').jlocator({
            startZoom: 13,
            latitude: 39.0936738,
            longitude: -94.589048
          });
        }



      }
      transitionChange();
      $(window).on('resize', function() {
        transitionChange();
      });

    }); // end ready
  })
);
var breakpoint = 767;

function transitionChange(e) {

  if (Modernizr.mq('(min-width:' + breakpoint + 'px)')) {
    $('.cd-navigation-wrapper').removeClass("transition");
    $('html').removeClass('navigation-is-open');
    $('.headerMain').removeClass('makeBlack');
  }
}


function newpage() {

  window.location = newLocation;

}