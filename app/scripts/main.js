

(function(library) {
    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    library(window, document, window.jQuery);
  }

  (function(window, document, $) {

    // lazy loader INIT
    //var layzr = new Layzr();

    var isLateralNavAnimating = false;

    var toggleFAQ = function(faq) {
      $(faq).next('.answer').toggleClass('open');
    };


    // TEMP JSON
    var productJson = {
      "products": {
        "HG_skim": {
          "title": "Skim",
          "category": "half-gallon",
          "sizes": ["half gallon", "Quart"],
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Skim.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        "HG_onePercent": {
          "title": "One Percent",
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
          "title": "2%",
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
          "title": "Whole",
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
          "title": "Half-Half",
          "category": "pint",
          "sizes": {
            'pint': 2
          },
          "image": "/pints/final/large/Half.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        
        "pint_cream": {
          "title": "Whole Cream",
          "category": "pint",
          "sizes": {
            'pint': 2
          },
          "image": "/pints/final/large/Whole.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        },
        // flavor
        "chocolate": {
          "title": "Chocolate",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_ChocolateMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "strawberry": {
          "title": "Strawberry",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_StrawberryMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "cookies_N_Cream": {
          "title": "Cookies & Cream",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_CookiesNCreamMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "banana": {
          "title": "Banana Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_BananaMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "cottonCandy": {
          "title": "Cotton Candy Milk",
          "category": "Quart",
          "sizes": {
           'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_CottonCandyMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "coffee": {
          "title": "Coffe Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_CoffeeMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "eggNog": {
          "title": "Egg Nog Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_EggNog.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "rootBeer": {
          "title": "Root Beer Milk",
          "category": "Quart",
          "sizes": {
            'quart': 4,
          },
          "image": "/milkFlavored/final/large/ShattoMilk_Quart_RootBeerMilk.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
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
        }
        ,
        "vanilla_iceCream": {
          "title": "Vanilla Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Vanilla.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "chocolate_iceCream": {
          "title": "Chocolate Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Chocolate.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "caramelSeaSalt_iceCream": {
          "title": "Caramel Sea Salt Ice Cream",
          "category": "Pint",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_CaramelSeaSalt.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "oatmealRaisin": {
          "title": "Oatmeal Raisin",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_OatmealRaisinCaramelSeaSalt.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "sugarCookie": {
          "title": "Sugar Cookie Strawberry",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_SugarCookieStrawberry.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "chocolateChip_icecreamBar": {
          "title": "Chocolate Chip Vanilla",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_ChocChipVanilla.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "brownie": {
          "title": "Brownie Choclate",
          "category": "bar",
          "sizes": {
            'pint': 2
          },
          "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_BrownieChocolate.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        // Cheese Curds
        "Cajun": {
          "title": "Cajun",
          "category": "cheese curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_Cajun.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "whiteCheddar": {
          "title": "White Cheddar",
          "category": "cheese curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_WhiteCheddar.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "Dill": {
          "title": "Dill",
          "category": "cheese curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_Dill.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "MushroomGarlic": {
          "title": "Mushroom Garlic",
          "category": "cheese curds",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_MushroomGarlic.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        // big cheese
        ,
        "platsburg": {
          "title": "Platsburg",
          "category": "artisan cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Plattsburg.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "smithFork": {
          "title": "Smith Fork",
          "category": "artisan cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_SmithFork.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "winstead": {
          "title": "Winstead Reserve",
          "category": "artisan cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_WinsteadReserve.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "wexford": {
          "title": "Wexford",
          "category": "artisan cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Wexford.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "lilly": {
          "title": "Lilly",
          "category": "artisan cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Lilly.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "perrin": {
          "title": "Perrin",
          "category": "artisan cheese",
          "sizes": {
            'pint': 2
          },
          "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Perrin.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        // butter
        "garlicButter": {
          "title": "Garlic Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Garlic.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "honeyButter": {
          "title": "Honey Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Honey.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "plainButter": {
          "title": "Plain Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Plain.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "unsaltedButter": {
          "title": "UnSalted Butter",
          "category": "butter",
          "sizes": {
            'pint': 2
          },
          "image": "/butter/final/large/ShattoMilk_Butter_Unsalted.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        // flavored
        "unsweetenedTea": {
          "title": "Unsweetened Tea",
          "category": "non-dairy",
          "sizes": {
            'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_SweetTea.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "fruitPunch": {
          "title": "Fruit Punch",
          "category": "non-dairy",
          "sizes": {
           'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_FruitPunch.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "lemonade": {
          "title": "Lemonade",
          "category": "non-dairy",
          "sizes": {
           'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Lemonade.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
        "orangeDrink": {
          "title": "Orange Drink",
          "category": "non-dairy",
          "sizes": {
            'half-gallon': 8
          },
          "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_OrangeDrink.png",
          "nutrition": "Ingredients: MILK, CREAM, SUGAR, CORN SYRUP, EGG YOLKS, WHEY, CAROB BEAN GUM, MONO AND DIGLYCERIDES, VANILLA BEANS*, NATURAL FLAVOR, RUM, NATURAL VANILLA FLAVOR*, TARA GUM, ANNATTO (FOR COLOR), GUAR GUM, SALT. Ingredients and Nutrition Facts are current as of 2/11/15. Please see shelf packaging for any changes."
        }
        ,
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
        // console.log($(window).height());
        // console.log(maxHeight);
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

      // homepage scripts
      if ($('#floatingBottle')[0]) {

        var theH = 0,
          floatingBottle = $('#floatingBottle');

        var bottleWidth = $('#floatingBottle').width(),
          theBottle = $('#mainBottle'),
          bottles = 16,
          arrayIndex = 8,
          currentUrl = stylesheet_directory_uri,
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
          //console.log('screenwidth ',screenWidth);
          if (floatingBottle.hasClass('start')) {
            floatingBottle.addClass('disableTransition');
            var x = e.pageX - theBottle.offset().left;
            // Find bottle pos
            var bottlePos = customRotation[parseInt(x / 370 * customRotation.length)];
            console.log(bottlePos);
            arrayIndex = parseInt(x / screenWidth * customRotation.length);
            console.log('arrayindex ', arrayIndex);
            $('.pod').removeClass('visible');
            if (arrayIndex === 8) {
              $('.pod').removeClass('visible');
            } else if (arrayIndex <= 3) {

              $('.pod1').addClass('visible');
            } else if (arrayIndex <= 7) {
              $('.pod2').addClass('visible');
            } else if (arrayIndex <= 12) {
              $('.pod3').addClass('visible');
            } else if (arrayIndex <= 16) {
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


        var waypoints = $('#floatingTrigger').waypoint(function(direction) {
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
            floatingBottle.addClass('start').removeClass('stop').find('a').attr('href', '');
            //$('#mainBottle').unwrap('<a href="/products.html#milk"></a>');

          }
        }, {
          offset: '-650'
        })

      }



      if ($('.about')[0]){

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
        loop:true,
        resizing: true
        });
      }
      }



      // Events page - Grid init

      var eventTours = $('.events-tours');

      if (eventTours[0]){
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
        loop:true,
        resizing: true
        });
       }
        $('.scheduleOverlay').stick_in_parent({
         'offset_top': 60,
         'parent' : eventTours
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

        // $('.gallery').on('click', '.slide', function(e){
        //   console.log($(this).find('img'));
        // })
         var popUp = $('.popUp'),
        grownElements = $('.slick-track, .galleryButtons'),
        bigImageEl = $('.popUp .bigImage'),
        popUpDesc = $('.popUp .description');


        $('.slide').on('click', function(e){
          if (Modernizr.mq('(min-width: 767px)')) {
            e.preventDefault();
          var largeImage = $(this).attr('data-largeImage'),
          description = $(this).attr('data-desc');
          bigImageEl.find('img').attr('src', largeImage);
          popUpDesc.html('').html(description);

          togglePopUp();
          }
          
        })
        $('.popUp').on('click', '.closePopUP', function(e){
          togglePopUp();
        });


        $('.gallerySlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

          console.log(slick['$slides'][nextSlide]);
          var nextImage = $(slick['$slides'][nextSlide]).attr('data-largeImage');
          console.log(nextImage);
          bigImageEl.find('img').attr('src', nextImage);
        });

       
        togglePopUp = function(){
          if (popUp.hasClass('shown')){
            popUp.removeClass('shown');
            grownElements.removeClass('grown');
          }
          else {

            popUp.addClass('shown');
            grownElements.addClass('grown');

          }
        }


        $('.intro').on('click', '.scheduleTour', function(e){
          $('.schedulePopUp').fadeIn();
          $('#schedule_date').dateDropper();

        });

        $('.schedulePopUp').on('click', '.closeSchedule, .cancelSchedule', function(e){
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

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

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

        function loadImage(img) {

        }


        function overlayToggle() {
          if (overlay.hasClass('open')) {
            overlay.removeClass('open');
            overlay.addClass('close');
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
        $('.overlay').on('click', '.overlay-close', function() {
          overlayToggle();
        });
        var imagePath = $('.product img').attr('src');

        imagePath = imagePath.substring(0, imagePath.indexOf('products/')) + 'products';

        $('.product').on('click', 'img', function(e) {
          var product = $(this),
            current = $(this).parent(),
            theProduct = current.data('product'),
            gotData = false;

          console.log(product, current, theProduct);



          // Load image for overlay
          if (!gotData) {



            console.log(theProductImage);
            if (productJson['products'].hasOwnProperty(theProduct)) {
              var theProductImage = productJson['products'][theProduct].image;
              var productCategory = productJson['products'][theProduct].category;
              console.log(imagePath);
              var combinedPath = imagePath + theProductImage;
              var retinaPath = imagePath + '/2x' + theProductImage;
              console.log(retinaPath);
              var srcSetData = combinedPath + " 1x, " + retinaPath + " 2x";
              console.log(combinedPath);
              $('#overlay_image').attr({
                'srcset': srcSetData,
                'src': combinedPath
              }).removeClass().addClass(productCategory);
            } else {
              $('#overlay_image').attr({
                'src': imagePath + '/missingImage.png',
                'srcset': ''
              }).removeClass().addClass('missing');
            }

            // var jqxhr = $.getJSON("../products.json", function(data) {
            //     console.log("success");
            //     console.log(data);
            //   })
            //   .done(function() {
            //     console.log("second success");
            //   })
            //   .fail(function() {
            //     console.log("error");
            //   })
            //   .always(function() {
            //     console.log("complete");
            //   });
          } else {

          }

          overlayToggle();


        });


        $(window).load(function() {
          var waypointOffset = 200;

          // var milk = $('#milk').waypoint(function(direction) {

          //   if (direction === 'down') {
          //     if (!$(this.element).hasClass('visible')) {
          //       $(this.element).addClass('visible');
          //       $(this.element).find('.product').addClass('reveal');

          //       // console.log(this.element.id)
          //       // console.log(setSectionHeight(this.element));
          //       // $(this.element).find('.productImages').height(setSectionHeight(this.element));
          //     }
          //   }
          // }, {
          //   offset: waypointOffset
          // });
          // var flavoredMilk = $('#flavoredMilk').waypoint(function(direction) {

          //   if (direction === 'down') {
          //     if (!$(this.element).hasClass('visible')) {
          //       $(this.element).addClass('visible');
          //       $(this.element).find('.product').addClass('reveal');
          //       // console.log(this.element.id);
          //       // $(this.element).find('.productImages').height(setSectionHeight(this.element));
          //     }
          //   }
          // }, {
          //   offset: '250'
          // });
          // var iceCream = $('#iceCream').waypoint(function(direction) {

          //   if (direction === 'down') {
          //     if (!$(this.element).hasClass('visible')) {
          //       $(this.element).addClass('visible');
          //       $(this.element).find('.product').addClass('reveal');
          //       // console.log(this.element.id);
          //       // $(this.element).find('.productImages').height(setSectionHeight(this.element));
          //     }
          //   }
          // }, {
          //   offset: waypointOffset
          // });
          // var cheese = $('#cheese').waypoint(function(direction) {


          //   if (direction === 'down') {
          //     if (!$(this.element).hasClass('visible')) {
          //       $(this.element).addClass('visible');
          //       $(this.element).find('.product').addClass('reveal');
          //       // console.log(this.element.id);
          //       // $(this.element).find('.productImages').height(setSectionHeight(this.element));
          //     }
          //   }
          // }, {
          //   offset: waypointOffset
          // });
          // var butter = $('#butter').waypoint(function(direction) {


          //   if (direction === 'down') {
          //     if (!$(this.element).hasClass('visible')) {
          //       $(this.element).addClass('visible');
          //       $(this.element).find('.product').addClass('reveal');
          //       // console.log(this.element.id);
          //       // $(this.element).find('.productImages').height(setSectionHeight(this.element));
          //     }
          //   }
          // }, {
          //   offset: waypointOffset
          // });

          var productsToShow = $('section.productSection').waypoint(function(direction) {


            if (direction === 'down') {
             
              if (!$(this.element).hasClass('visible')) {
                $(this.element).addClass('visible');
                $(this.element).find('.product').addClass('reveal');
                var theImg = $(this.element).find('.product').find('img.main');
                     theImg.unveil(1, function(){
                  console.log('load img');
                });
                // console.log(this.element.id);
                // $(this.element).find('.productImages').height(setSectionHeight(this.element));
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

        $('#jlocator').jlocator({
          startZoom: 13,
          latitude: 39.0936738,
          longitude: -94.589048
        });
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