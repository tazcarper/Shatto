(function(library) {
    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    library(window, document, window.jQuery);
  }
  (function(window, document, $) {
    var isLateralNavAnimating = false;
    var toggleFAQ = function(faq) {
      $(faq).parent('.faqContainer').toggleClass('open');
      $(faq).next('.answer').toggleClass('open');
    };
    // TEMP JSON
    var productJson = {
        "products": {
          "HG_skim": {
            "title": "Skim Milk",
            "category": "half-gallon",
            "sizes": {
              'half-gallon': 8,
              'quart': 4
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Skim.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 90,
              "Calories from Fat": 0,
              "Total Fat (grams)": 0,
              "Total Fat (% of Daily Value)": 0,
              "Saturated Fat (grams)": 0,
              "Saturated Fat (% of Daily Value)": 0,
              "Cholesterol (mg)": "<5",
              "Cholesterol (% of Daily Value)": 2,
              "Sodium (mg)": 130,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 13,
              "Total Carbohydrates (% of Daily Value)": 4,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 12,
              "Proteins (grams)": 9,
              "Vitamin A": 10,
              "Vitamin C": 4,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Skim Milk, Vitamin A Palmitate, Vitamin D3"
            }
          },
          "HG_onePercent": {
            "title": "1% Milk",
            "category": "half-gallon",
            "sizes": {
              'half-gallon': 8,
              'quart': 4
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_1Percent.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 100,
              "Calories from Fat": 20,
              "Total Fat (grams)": 2.5,
              "Total Fat (% of Daily Value)": 4,
              "Saturated Fat (grams)": 1.5,
              "Saturated Fat (% of Daily Value)": 8,
              "Cholesterol (mg)": 15,
              "Cholesterol (% of Daily Value)": 5,
              "Sodium (mg)": 120,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 11,
              "Total Carbohydrates (% of Daily Value)": 4,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 11,
              "Proteins (grams)": 8,
              "Vitamin A": 10,
              "Vitamin C": 4,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "1% Milk, Vitamin A Palmitate, Vitamin D3"
            }
          },
          "HG_twoPercent": {
            "title": "2% Milk",
            "category": "half-gallon",
            "sizes": {
              'half-gallon': 8,
              'quart': 4
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_2Percent.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 130,
              "Calories from Fat": 45,
              "Total Fat (grams)": 5,
              "Total Fat (% of Daily Value)": 8,
              "Saturated Fat (grams)": 3,
              "Saturated Fat (% of Daily Value)": 15,
              "Cholesterol (mg)": 20,
              "Cholesterol (% of Daily Value)": 7,
              "Sodium (mg)": 125,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 13,
              "Total Carbohydrates (% of Daily Value)": 4,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 12,
              "Proteins (grams)": 8,
              "Vitamin A": 10,
              "Vitamin C": 4,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Reduced Fat Milk, Vitamin A Palmitate, Vitamin D3"
            }
          },
          "HG_whole": {
            "title": "Whole Milk",
            "category": "half-gallon",
            "sizes": {
              'half-gallon': 8,
              'quart': 4
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Whole.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 150,
              "Calories from Fat": 70,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 12,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 35,
              "Cholesterol (% of Daily Value)": 11,
              "Sodium (mg)": 125,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 13,
              "Total Carbohydrates (% of Daily Value)": 4,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 12,
              "Proteins (grams)": 9,
              "Vitamin A": 10,
              "Vitamin C": 4,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Milk, Vitamin D3"
            }

          },
          "pint_half": {
            "title": "Half-Half Cream",
            "category": "pint",
            "sizes": {
              'pint': 2
            },
            "image": "/pints/final/large/Half.png",
            "nutrition": {
              "Serving Size": "2 tbsp. (30 mL)",
              "Servings Per Container": 16,
              "Calories": 40,
              "Calories from Fat": 30,
              "Total Fat (grams)": 3,
              "Total Fat (% of Daily Value)": 5,
              "Saturated Fat (grams)": 2,
              "Saturated Fat (% of Daily Value)": 10,
              "Cholesterol (mg)": 10,
              "Cholesterol (% of Daily Value)": 3,
              "Sodium (mg)": 30,
              "Sodium (% of Daily Value)": 1,
              "Total Carbohydrates (grams)": 1,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 1,
              "Proteins (grams)": 1,
              "Vitamin A": 2,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 4,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Cream and Milk"
            }
          },
          "pint_cream": {
            "title": "Whole Cream Milk",
            "category": "pint",
            "sizes": {
              'pint': 2
            },
            "image": "/pints/final/large/Whole.png",
            "nutrition": {
              "Serving Size": "1 tbsp. (15 mL)",
              "Servings Per Container": "~31",
              "Calories": 50,
              "Calories from Fat": 50,
              "Total Fat (grams)": 5,
              "Total Fat (% of Daily Value)": 8,
              "Saturated Fat (grams)": 3.5,
              "Saturated Fat (% of Daily Value)": 17,
              "Cholesterol (mg)": 20,
              "Cholesterol (% of Daily Value)": 7,
              "Sodium (mg)": 5,
              "Sodium (% of Daily Value)": 0,
              "Total Carbohydrates (grams)": 1,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 1,
              "Proteins (grams)": 0,
              "Vitamin A": 4,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Cream"
            }
          },
          // flavor
          "chocolate": {
            "title": "Chocolate Milk",
            "category": "Quart",
            "sizes": {
              'half-gallon': 8,
              'quart': 4,
              'pint': 2
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_ChocolateMilk.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 2,
              "Calories": 220,
              "Calories from Fat": 70,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 13,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 26,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 230,
              "Sodium (% of Daily Value)": 10,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 17,
              "Proteins (grams)": 8,
              "Vitamin A": 6,
              "Vitamin C": 6,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sugar, Cocoa, Corn Starch, Dextrose, Carrageenan, Guar Gum, Vitamin D3"
            }
          },
          "strawberry": {
            "title": "Strawberry Milk",
            "category": "Quart",
            "sizes": {
              'half-gallon': 8,
              'quart': 4,
              'pint': 2
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_StrawberryMilk.png",
            "nutrition": {
              "Servings Per Container": 8,
              "Calories": 240,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 27,
              "Cholesterol (mg)": 35,
              "Cholesterol (% of Daily Value)": 11,
              "Sodium (mg)": 125,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 31,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 20,
              "Proteins (grams)": 8,
              "Vitamin A": 6,
              "Vitamin C": 25,
              "Vitamin D": 6,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sucrose, Natural and Artificial Flavors, Propylene Glycol, FD&C Red #40 and FD&C Blue #1, Vitamin D3"
            }
          },
          "cookies_N_Cream": {
            "title": "Cookies N' Cream Milk",
            "category": "Quart",
            "sizes": {

              'quart': 4

            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_CookiesNCreamMilk.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 230,
              "Calories from Fat": 70,
              "Total Fat (grams)": 7,
              "Total Fat (% of Daily Value)": 11,
              "Saturated Fat (grams)": 4,
              "Saturated Fat (% of Daily Value)": 20,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 180,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 34,
              "Total Carbohydrates (% of Daily Value)": 11,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 34,
              "Proteins (grams)": 7,
              "Vitamin A": 4,
              "Vitamin C": 0,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 25,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sugar, Fructose, Cocoa (processed with Alkali), Salt, Carrageenan, Guar Gum, Vanillin, Vitamin D3"
            }
          },
          "banana": {
            "title": "Banana Milk",
            "category": "Quart",
            "sizes": {
              'quart': 4,
              'pint': 2
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_BananaMilk.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 220,
              "Calories from Fat": 70,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 13,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 26,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 125,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 17,
              "Proteins (grams)": 8,
              "Vitamin A": 6,
              "Vitamin C": 6,
              "Vitamin D": 25,
              "Iron": 4,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sugar, Annatto color, Natural Flavor, Propylene Glycol, Natural Turmeric Color, Sodium Benzoate, Polysorbate 80, Znthan Gum, Citric Acid, Vitamin D3"
            }
          },
          "cottonCandy": {
            "title": "Cotton Candy Milk",
            "category": "Quart",
            "sizes": {
              'quart': 4,
              'pint': 2
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_CottonCandyMilk.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 200,
              "Calories from Fat": 70,
              "Total Fat (grams)": 7,
              "Total Fat (% of Daily Value)": 11,
              "Saturated Fat (grams)": 4.5,
              "Saturated Fat (% of Daily Value)": 23,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 95,
              "Sodium (% of Daily Value)": 4,
              "Total Carbohydrates (grams)": 30,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 30,
              "Proteins (grams)": 7,
              "Vitamin A": 4,
              "Vitamin C": 0,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sugar, Natural and Artificial Flavor, Blue #1, Vitamin D3"
            }
          },
          "coffee": {
            "title": "Coffee Milk",
            "category": "Quart",
            "sizes": {
              'quart': 4,
              'pint': 2
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_CoffeeMilk.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 200,
              "Calories from Fat": 70,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 12,
              "Saturated Fat (grams)": 4.5,
              "Saturated Fat (% of Daily Value)": 23,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 170,
              "Sodium (% of Daily Value)": 7,
              "Total Carbohydrates (grams)": 27,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 26,
              "Proteins (grams)": 8,
              "Vitamin A": 4,
              "Vitamin C": 0,
              "Vitamin D": 25,
              "Iron": 0,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sugar, 100% Columbian Coffee, Salt, Vanilla, Carrageenan, Vitamin D3"
            }
          },
          "eggNog": {
            "title": "Egg Nog Milk",
            "category": "Quart",
            "sizes": {
              'quart': 4
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_EggNog.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 230,
              "Calories from Fat": 110,
              "Total Fat (grams)": 12,
              "Total Fat (% of Daily Value)": 18,
              "Saturated Fat (grams)": 7,
              "Saturated Fat (% of Daily Value)": 36,
              "Cholesterol (mg)": 65,
              "Cholesterol (% of Daily Value)": 22,
              "Sodium (mg)": 105,
              "Sodium (% of Daily Value)": 4,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 28,
              "Proteins (grams)": 4,
              "Vitamin A": 10,
              "Vitamin C": 2,
              "Vitamin D": 25,
              "Iron": 4,
              "Calcium": 10,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Milk, Vitamin A, Sugar, Egg Yolks, Corn Starch, Whey Powder, Nu Tumeric, Propylene Glycol, Natural and Artificial Flavors, Guar Gum, Garrageen dextrose"
            }
          },
          "rootBeer": {
            "title": "Root Beer Milk",
            "category": "Quart",
            "sizes": {
              'half-gallon': 8,
              'quart': 4,
              'pint': 2
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_RootBeerMilk.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 220,
              "Calories from Fat": 70,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 13,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 26,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 230,
              "Sodium (% of Daily Value)": 10,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 4,
              "Dietary Fiber (% of Daily Value)": 4,
              "Sugars (grams)": 17,
              "Proteins (grams)": 8,
              "Vitamin A": 6,
              "Vitamin C": 6,
              "Vitamin D": 25,
              "Iron": 4,
              "Calcium": 30,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Whole Milk, Sugar, Water, Caramel Color, Propylene Glycol, Natural and Artificial Flavors, Gum Tragacanth"
            }
          },
          "pumpkinSpiceEggNog": {
            "title": "Pumpkin Spice Egg Nog Milk",
            "category": "Quart",
            "sizes": {
              'quart': 4
            },
            "image": "/milkFlavored/final/large/ShattoMilk_Quart_PumpkinSpiceEggNog.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 4,
              "Calories": 230,
              "Calories from Fat": 110,
              "Total Fat (grams)": 12,
              "Total Fat (% of Daily Value)": 18,
              "Saturated Fat (grams)": 7,
              "Saturated Fat (% of Daily Value)": 36,
              "Cholesterol (mg)": 65,
              "Cholesterol (% of Daily Value)": 22,
              "Sodium (mg)": 105,
              "Sodium (% of Daily Value)": 4,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 28,
              "Proteins (grams)": 4,
              "Vitamin A": 10,
              "Vitamin C": 2,
              "Vitamin D": 25,
              "Iron": 4,
              "Calcium": 10,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Milk, Vitamin A, Sugar, Egg Yolks, Corn Starch, Whey Powder, Nu Tumeric, Propylene Glycol, Natural and Artificial Flavors, Guar Gum, Garrageen dextrose"
            }
          }
          // Ice Cream
          ,
          "strawberry_iceCream": {
            "title": "Strawberry Ice Cream",
            "category": "Pint",
            "sizes": {
              'pint': 4
            },
            "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Strawberry.png",
            "nutrition": {
              "Serving Size": "1 Pint (473 ml)",
              "Servings Per Container": 4,
              "Calories": 290,
              "Calories from Fat": 180,
              "Total Fat (grams)": 20,
              "Total Fat (% of Daily Value)": 31,
              "Saturated Fat (grams)": 12,
              "Saturated Fat (% of Daily Value)": 60,
              "Cholesterol (mg)": 95,
              "Cholesterol (% of Daily Value)": 32,
              "Sodium (mg)": 60,
              "Sodium (% of Daily Value)": 3,
              "Total Carbohydrates (grams)": 25,
              "Total Carbohydrates (% of Daily Value)": 8,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 24,
              "Proteins (grams)": 4,
              "Vitamin A": 15,
              "Vitamin C": 2,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 15,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "cream, milk, sugar, strawberries, nonfat dry milk, egg yolks"
            }
          },
          "vanilla_iceCream": {
            "title": "Vanilla Ice Cream",
            "category": "Pint",
            "sizes": {
              'pint': 4
            },
            "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Vanilla.png",
            "nutrition": {
              "Serving Size": "1 Pint (473 ml)",
              "Servings Per Container": 4,
              "Calories": 330,
              "Calories from Fat": 210,
              "Total Fat (grams)": 23,
              "Total Fat (% of Daily Value)": 35,
              "Saturated Fat (grams)": 14,
              "Saturated Fat (% of Daily Value)": 70,
              "Cholesterol (mg)": 110,
              "Cholesterol (% of Daily Value)": 37,
              "Sodium (mg)": 65,
              "Sodium (% of Daily Value)": 3,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 26,
              "Proteins (grams)": 5,
              "Vitamin A": 20,
              "Vitamin C": 2,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 15,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "cream, milk, sugar, nonfat dry milk, egg yolks, vanilla extract"
            }
          },
          "chocolate_iceCream": {
            "title": "Chocolate Ice Cream",
            "category": "Pint",
            "sizes": {
              'pint': 4
            },
            "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_Chocolate.png",
            "nutrition": {
              "Serving Size": "1 Pint (473 ml)",
              "Servings Per Container": 4,
              "Calories": 330,
              "Calories from Fat": 200,
              "Total Fat (grams)": 23,
              "Total Fat (% of Daily Value)": 35,
              "Saturated Fat (grams)": 14,
              "Saturated Fat (% of Daily Value)": 70,
              "Cholesterol (mg)": 105,
              "Cholesterol (% of Daily Value)": 35,
              "Sodium (mg)": 65,
              "Sodium (% of Daily Value)": 3,
              "Total Carbohydrates (grams)": 29,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 1,
              "Sugars (grams)": 25,
              "Proteins (grams)": 6,
              "Vitamin A": 15,
              "Vitamin C": 2,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 15,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "cream, milk, sugar, nonfat dry milk, cocoa, egg yolks"
            }
          },
          "caramelSeaSalt_iceCream": {
            "title": "Caramel Sea Salt Ice Cream",
            "category": "Pint",
            "sizes": {
              'pint': 4
            },
            "image": "/icecream-pints/final/large/ShattoMilk_IceCream_Pint_CaramelSeaSalt.png",
            "nutrition": {
              "Serving Size": "1 Pint (473 ml)",
              "Servings Per Container": 4,
              "Calories": 330,
              "Calories from Fat": 210,
              "Total Fat (grams)": 23,
              "Total Fat (% of Daily Value)": 35,
              "Saturated Fat (grams)": 14,
              "Saturated Fat (% of Daily Value)": 70,
              "Cholesterol (mg)": 110,
              "Cholesterol (% of Daily Value)": 37,
              "Sodium (mg)": 65,
              "Sodium (% of Daily Value)": 3,
              "Total Carbohydrates (grams)": 28,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 26,
              "Proteins (grams)": 5,
              "Vitamin A": 20,
              "Vitamin C": 2,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 15,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Cream, milk, sugar, organic caramel variegate, nonfat dry milk, egg yolks, sea salt"
            }
          },
          "oatmealRaisin": {
            "title": "Oatmeal Raisin Ice Cream Bar",
            "category": "bar",
            "sizes": {
              'container': 4
            },
            "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_OatmealRaisinCaramelSeaSalt.png",
            "nutrition": {
              "Serving Size": 0,
              "Servings Per Container": 2,
              "Calories": 280,
              "Calories from Fat": 120,
              "Total Fat (grams)": 13,
              "Total Fat (% of Daily Value)": 20,
              "Saturated Fat (grams)": 8,
              "Saturated Fat (% of Daily Value)": 40,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 130,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 36,
              "Total Carbohydrates (% of Daily Value)": 12,
              "Dietary Fiber (grams)": 1,
              "Dietary Fiber (% of Daily Value)": 4,
              "Sugars (grams)": 23,
              "Proteins (grams)": 4,
              "Vitamin A": 8,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 6,
              "Calcium": 4,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "cream, milk, sugar, organic caramel variegate, nonfat dry milk, egg yolks, sea salt - granulated sugar, old-fashioned oats, all-purpose flour, unsalted butter, brown sugar, eggs, dark raisins, golden raisins, cinnamon, aged rum, vanilla extract, baking soda, sea salt"
            }
          },
          "sugarCookie": {
            "title": "Sugar Cookie Strawberry Ice Cream Bar",
            "category": "bar",
            "sizes": {
              'container': 4
            },
            "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_SugarCookieStrawberry.png",
            "nutrition": {
              "Serving Size": 0,
              "Servings Per Container": 2,
              "Calories": 280,
              "Calories from Fat": 150,
              "Total Fat (grams)": 17,
              "Total Fat (% of Daily Value)": 26,
              "Saturated Fat (grams)": 6,
              "Saturated Fat (% of Daily Value)": 30,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 210,
              "Sodium (% of Daily Value)": 9,
              "Total Carbohydrates (grams)": 30,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 1,
              "Dietary Fiber (% of Daily Value)": 4,
              "Sugars (grams)": 14,
              "Proteins (grams)": 3,
              "Vitamin A": 6,
              "Vitamin C": 4,
              "Vitamin D": 0,
              "Iron": 6,
              "Calcium": 4,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "cream, milk, sugar, strawberries, nonfat dry milk, egg yolks - all-purpose flour, granualted sugar, canola oil, unsalted butter, eggs, vanilla extract, baking soda, baking powder"
            }
          },
          "chocolateChip_icecreamBar": {
            "title": "Chocolate Chip Vanilla Ice Cream Bar",
            "category": "bar",
            "sizes": {
              'container': 4
            },
            "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_ChocChipVanilla.png",
            "nutrition": {
              "Serving Size": 0,
              "Servings Per Container": 2,
              "Calories": 330,
              "Calories from Fat": 170,
              "Total Fat (grams)": 19,
              "Total Fat (% of Daily Value)": 29,
              "Saturated Fat (grams)": 11,
              "Saturated Fat (% of Daily Value)": 55,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 210,
              "Sodium (% of Daily Value)": 9,
              "Total Carbohydrates (grams)": 39,
              "Total Carbohydrates (% of Daily Value)": 13,
              "Dietary Fiber (grams)": 1,
              "Dietary Fiber (% of Daily Value)": 4,
              "Sugars (grams)": 26,
              "Proteins (grams)": 4,
              "Vitamin A": 10,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 6,
              "Calcium": 6,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "cream, milk, sugar, nonfat dry milk, egg  yolks, vanilla extract - all-purpose flour, semi-sweet chocolate chunks, unsalted butter, grnaulated sugar, brown sugar, eggs, vanilla extract, baking soda, sea salt."
            }
          },
          "brownie": {
            "title": "Brownie Choclate Ice Cream Bar",
            "category": "bar",
            "sizes": {
              'container': 4
            },
            "image": "/icecream-bars/final/large/ShattoMilk_IceCream_Sammich_BrownieChocolate.png",
            "nutrition": {
              "Serving Size": 0,
              "Servings Per Container": 2,
              "Calories": 220,
              "Calories from Fat": 110,
              "Total Fat (grams)": 13,
              "Total Fat (% of Daily Value)": 20,
              "Saturated Fat (grams)": 7,
              "Saturated Fat (% of Daily Value)": 35,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 55,
              "Sodium (% of Daily Value)": 2,
              "Total Carbohydrates (grams)": 26,
              "Total Carbohydrates (% of Daily Value)": 9,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 20,
              "Proteins (grams)": 2,
              "Vitamin A": 8,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 4,
              "Calcium": 6,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "cream, milk, sugar, nonfat dry milk, egg yolks, vanilla extract - unsalted butter, bittersweet sugar, all-purpose flour, eggs, vanilla extract, sea salt."
            }
          },
          // Cheese Curds
          "Cajun": {
            "title": "Cajun-flavored Cheddar Cheese Curds",
            "category": "cheese_curds",
            "sizes": {
              'container': 12
            },
            "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_Cajun.png",
            "nutrition": {
              "Serving Size": "340.2g",
              "Servings Per Container": 12,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 180,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 6,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 20,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Pasturized cow milk, culture, salt, vegetable rennet, organic paprika, organic onion, organic garlic, organic marjoram, organic thyme, organic fennel seed, organic cumin, organic cayene"
            }
          },
          "whiteCheddar": {
            "title": "White Cheddar Cheese Curds",
            "category": "cheese_curds",
            "sizes": {
              'container': 12
            },
            "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_WhiteCheddar.png",
            "nutrition": {
              "Serving Size": "340.2g",
              "Servings Per Container": 12,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 180,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 6,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 20,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Pasturized Cow Milk, culture, salt, vegetable rennet"
            }
          },
          "Dill": {
            "title": "DILL-FLAVORED CHEDDAR CHEESE CURDS",
            "category": "cheese_curds ",
            "sizes": {
              'container': 12
            },
            "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_Dill.png",
            "nutrition": {
              "Serving Size": "340.2g",
              "Servings Per Container": 12,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 180,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 6,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 20,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "pasturized cow milk, culture, salt, vegetable rennet, orgnaic dill weed."
            }
          },
          "MushroomGarlic": {
            "title": "Mushroom Garlic Cheddar Cheese Curds",
            "category": "cheese_curds",
            "sizes": {
              'container': 12
            },
            "image": "/cheese-curds/final/large/ShattoMilk_Cheese_Curds_MushroomGarlic.png",
            "nutrition": {
              "Serving Size": "340.2g",
              "Servings Per Container": 12,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 180,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 6,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 20,
              "Total Fat": "65 g",
              "Sat. Fat": "20 g",
              "Cholesterol": "300 mg",
              "Sodium": "2400 mg",
              "Total Carbohydrates": "300 g",
              "Dietary Fiber": "25 g",
              "Ingredients": "Pasturized cow milk, culture, salt, vegetable rennet, organic portobellow mushrooms, organic garlic powder."
            }
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
            "nutrition": {
              "Serving Size": "1 oz",
              "Servings Per Container": 1,
              "Calories": 101,
              "Calories from Fat": 80,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 12,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 32,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 232,
              "Sodium (% of Daily Value)": 9,
              "Total Carbohydrates (grams)": 0.6,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0.6,
              "Proteins (grams)": 7,
              "Vitamin A": 3,
              "Vitamin C": 0,
              "Vitamin D": 1,
              "Iron": 0,
              "Calcium": 19,
              "Total Fat": "8 g",
              "Sat. Fat": "5 mg",
              "Cholesterol": "32 mg",
              "Sodium": "232 mg",
              "Total Carbohydrates": "0.6 g",
              "Dietary Fiber": "0",
              "Ingredients": "Pasteurized Cow’s Milk, Salt, Cheese Culture, Vegetable Rennet"
            }
          },
          "smithFork": {
            "title": "Smith Fork Artisan Cheese",
            "category": "artisan_cheese",
            "sizes": {
              'pint': 2
            },
            "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_SmithFork.png",
            "nutrition": {
              "Serving Size": "1 oz",
              "Servings Per Container": 1,
              "Calories": 113,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 13,
              "Saturated Fat (grams)": 6,
              "Saturated Fat (% of Daily Value)": 30,
              "Cholesterol (mg)": 29,
              "Cholesterol (% of Daily Value)": 9,
              "Sodium (mg)": 174,
              "Sodium (% of Daily Value)": 7,
              "Total Carbohydrates (grams)": 0.4,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0.1,
              "Proteins (grams)": 7,
              "Vitamin A": 5,
              "Vitamin C": 0,
              "Vitamin D": 1,
              "Iron": 1,
              "Calcium": 20,
              "Total Fat": "9 g",
              "Sat. Fat": "6 mg",
              "Cholesterol": "29 mg",
              "Sodium": "174 mg",
              "Total Carbohydrates": "0.4 g",
              "Dietary Fiber": "0",
              "Ingredients": "Pasteurized Cow’s Milk, Salt, Cheese Culture, Vegetable Rennet"
            }
          },
          "winstead": {
            "title": "Winstead Reserve Artisan Cheese",
            "category": "artisan_cheese",
            "sizes": {
              'pint': 2
            },
            "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_WinsteadReserve.png",
            "nutrition": {
              "Serving Size": "1 oz",
              "Servings Per Container": 1,
              "Calories": 110,
              "Calories from Fat": 72,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 12,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 25,
              "Cholesterol (% of Daily Value)": 8,
              "Sodium (mg)": 160,
              "Sodium (% of Daily Value)": 7,
              "Total Carbohydrates (grams)": 1,
              "Total Carbohydrates (% of Daily Value)": 1,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 5,
              "Vitamin C": 0,
              "Vitamin D": 1,
              "Iron": 0,
              "Calcium": 20,
              "Total Fat": "8 g",
              "Sat. Fat": "5 mg",
              "Cholesterol": "25 mg",
              "Sodium": "160 mg",
              "Total Carbohydrates": "1 g",
              "Dietary Fiber": "0",
              "Ingredients": "Pasteurized Cow’s Milk, Salt, Cheese Culture, Vegetable Rennet"
            }
          },
          "wexford": {
            "title": "Wexford Artisan Cheese",
            "category": "artisan_cheese",
            "sizes": {
              'container': 1
            },
            "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Wexford.png",
            "nutrition": {
              "Serving Size": "1 oz",
              "Servings Per Container": 1,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 6,
              "Saturated Fat (% of Daily Value)": 30,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 11,
              "Sodium (mg)": 200,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 0,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 32,
              "Total Fat": "9 g",
              "Sat. Fat": "6 mg",
              "Cholesterol": "30 mg",
              "Sodium": "200 mg",
              "Total Carbohydrates": "0",
              "Dietary Fiber": "0",
              "Ingredients": "Pasteurized Cow’s Milk, Salt, Cheese Culture, Vegetable Rennet"
            }
          },
          "lilly": {
            "title": "Lilly Artisan Cheese",
            "category": "artisan_cheese",
            "sizes": {
              'container': 1
            },
            "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Lilly.png",
            "nutrition": {
              "Serving Size": "1 oz",
              "Servings Per Container": 1,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 6,
              "Saturated Fat (% of Daily Value)": 30,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 11,
              "Sodium (mg)": 200,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 0,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 32,
              "Total Fat": "9 g",
              "Sat. Fat": "6 mg",
              "Cholesterol": "30 mg",
              "Sodium": "200 mg",
              "Total Carbohydrates": "0",
              "Dietary Fiber": "0",
              "Ingredients": "Pasteurized Cow’s Milk, Salt, Cheese Culture, Vegetable Rennet"
            }
          },
          "perrin": {
            "title": "Perrin Artisan Cheese",
            "category": "artisan_cheese",
            "sizes": {
             'container': 1
            },
            "image": "/cheese/final/large/ShattoMilk_Cheese_Artisan_Perrin.png",
            "nutrition": {
              "Serving Size": "1 oz",
              "Servings Per Container": 1,
              "Calories": 110,
              "Calories from Fat": 80,
              "Total Fat (grams)": 9,
              "Total Fat (% of Daily Value)": 14,
              "Saturated Fat (grams)": 6,
              "Saturated Fat (% of Daily Value)": 30,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 11,
              "Sodium (mg)": 200,
              "Sodium (% of Daily Value)": 8,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 7,
              "Vitamin A": 0,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 32,
              "Total Fat": "9 g",
              "Sat. Fat": "6 mg",
              "Cholesterol": "30 mg",
              "Sodium": "200 mg",
              "Total Carbohydrates": "0",
              "Dietary Fiber": "0",
              "Ingredients": "Pasteurized Cow’s Milk, Salt, Cheese Culture, Vegetable Rennet"
            }
          },
          // butter
          "garlicButter": {
            "title": "Garlic Butter",
            "category": "butter",
            "sizes": {
              'container': 8
            },
            "image": "/butter/final/large/ShattoMilk_Butter_Garlic.png",
            "nutrition": {
              "Serving Size": "227g",
              "Servings Per Container": 16,
              "Calories": 90,
              "Calories from Fat": 70,
              "Total Fat (grams)": 8,
              "Total Fat (% of Daily Value)": 12,
              "Saturated Fat (grams)": 4,
              "Saturated Fat (% of Daily Value)": 19,
              "Cholesterol (mg)": 15,
              "Cholesterol (% of Daily Value)": 4,
              "Sodium (mg)": 40,
              "Sodium (% of Daily Value)": 2,
              "Total Carbohydrates (grams)": 4,
              "Total Carbohydrates (% of Daily Value)": 1,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 0,
              "Vitamin A": 4,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Cream, Garlic"
            }
          },
          "honeyButter": {
            "title": "Honey Butter",
            "category": "butter",
            "sizes": {
              'container': 8
            },
            "image": "/butter/final/large/ShattoMilk_Butter_Honey.png",
            "nutrition": {
              "Serving Size": "227g",
              "Servings Per Container": 16,
              "Calories": 90,
              "Calories from Fat": 90,
              "Total Fat (grams)": 10,
              "Total Fat (% of Daily Value)": 15,
              "Saturated Fat (grams)": 5,
              "Saturated Fat (% of Daily Value)": 25,
              "Cholesterol (mg)": 20,
              "Cholesterol (% of Daily Value)": 7,
              "Sodium (mg)": 110,
              "Sodium (% of Daily Value)": 5,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 0,
              "Vitamin A": 6,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Cream, Garlic, Salt"
            }
          },
          "plainButter": {
            "title": "Plain Ol' Butter",
            "category": "butter",
            "sizes": {
              'container': 8
            },
            "image": "/butter/final/large/ShattoMilk_Butter_Plain.png",
            "nutrition": {
              "Serving Size": "227g",
              "Servings Per Container": 16,
              "Calories": 100,
              "Calories from Fat": 100,
              "Total Fat (grams)": 11,
              "Total Fat (% of Daily Value)": 17,
              "Saturated Fat (grams)": 10,
              "Saturated Fat (% of Daily Value)": 36,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 100,
              "Sodium (% of Daily Value)": 4,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 0,
              "Vitamin A": 8,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Cream, Salt"
            }
          },
          "unsaltedButter": {
            "title": "Unsalted Butter",
            "category": "butter",
            "sizes": {
              'container': 8
            },
            "image": "/butter/final/large/ShattoMilk_Butter_Unsalted.png",
            "nutrition": {
              "Serving Size": "227g",
              "Servings Per Container": 16,
              "Calories": 100,
              "Calories from Fat": 100,
              "Total Fat (grams)": 11,
              "Total Fat (% of Daily Value)": 17,
              "Saturated Fat (grams)": 10,
              "Saturated Fat (% of Daily Value)": 36,
              "Cholesterol (mg)": 30,
              "Cholesterol (% of Daily Value)": 10,
              "Sodium (mg)": 0,
              "Sodium (% of Daily Value)": 0,
              "Total Carbohydrates (grams)": 0,
              "Total Carbohydrates (% of Daily Value)": 0,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 0,
              "Proteins (grams)": 0,
              "Vitamin A": 8,
              "Vitamin C": 0,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Cream"
            }
          },
          // flavored
          "sweetenedTea": {
            "title": "Sweet Tea",
            "category": "non-dairy",
            "sizes": {
              'half-gallon': 8
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_SweetTea.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 120,
              "Calories from Fat": 0,
              "Total Fat (grams)": 0,
              "Total Fat (% of Daily Value)": 0,
              "Saturated Fat (grams)": 0,
              "Saturated Fat (% of Daily Value)": 0,
              "Cholesterol (mg)": 0,
              "Cholesterol (% of Daily Value)": 0,
              "Sodium (mg)": 50,
              "Sodium (% of Daily Value)": 1,
              "Total Carbohydrates (grams)": 29,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 29,
              "Proteins (grams)": 0,
              "Vitamin A": 0,
              "Vitamin C": 4,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Water, Sugar, Tea, Carmel Color, Citric Acid, Cellulose Gum, Artificial Flavor, Sodium Benzoate, and Potassium Sorbate."
            }
          },
          "fruitPunch": {
            "title": "Fruit Punch",
            "category": "non-dairy",
            "sizes": {
              'half-gallon': 8
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_FruitPunch.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 130,
              "Calories from Fat": 0,
              "Total Fat (grams)": 0,
              "Total Fat (% of Daily Value)": 0,
              "Saturated Fat (grams)": 0,
              "Saturated Fat (% of Daily Value)": 0,
              "Cholesterol (mg)": 0,
              "Cholesterol (% of Daily Value)": 0,
              "Sodium (mg)": 25,
              "Sodium (% of Daily Value)": 1,
              "Total Carbohydrates (grams)": 30,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 30,
              "Proteins (grams)": 0,
              "Vitamin A": 0,
              "Vitamin C": 2,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Water, Sucrose, Pineapple Juice Concentrate, Propylene Glycol, Modified Food Starch, FD&C Red #40, Glyceryal Abiatate, FD&C Blue #2, Sodium Benzoate, and Potassium Sorbate."
            }
          },
          "lemonade": {
            "title": "Lemonade",
            "category": "non-dairy",
            "sizes": {
              'half-gallon': 8
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_Lemonade.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 120,
              "Calories from Fat": 0,
              "Total Fat (grams)": 0,
              "Total Fat (% of Daily Value)": 0,
              "Saturated Fat (grams)": 0,
              "Saturated Fat (% of Daily Value)": 0,
              "Cholesterol (mg)": 0,
              "Cholesterol (% of Daily Value)": 0,
              "Sodium (mg)": 5,
              "Sodium (% of Daily Value)": 0,
              "Total Carbohydrates (grams)": 30,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 27,
              "Proteins (grams)": 0,
              "Vitamin A": 0,
              "Vitamin C": 120,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 8,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Water, Sugar, Lemon Juice Concentrate, Gum Arabic, Natural Flavors, Citric Acid, Glycerol Ester of Wood Rosin, BVO, Natural Flavors, Citric Acid, Sodium Benzoate and Potassium Sorbate (perservatives), FD&C Yellow #5."
            }
          },
          "orangeDrink": {
            "title": "Orange Drink",
            "category": "non-dairy",
            "sizes": {
              'half-gallon': 8
            },
            "image": "/half-gallons/final/large/ShattoMilk_HalfGallon_OrangeDrink.png",
            "nutrition": {
              "Serving Size": "1 Cup (240 mL)",
              "Servings Per Container": 8,
              "Calories": 120,
              "Calories from Fat": 0,
              "Total Fat (grams)": 0,
              "Total Fat (% of Daily Value)": 0,
              "Saturated Fat (grams)": 0,
              "Saturated Fat (% of Daily Value)": 0,
              "Cholesterol (mg)": 0,
              "Cholesterol (% of Daily Value)": 0,
              "Sodium (mg)": 50,
              "Sodium (% of Daily Value)": 1,
              "Total Carbohydrates (grams)": 29,
              "Total Carbohydrates (% of Daily Value)": 10,
              "Dietary Fiber (grams)": 0,
              "Dietary Fiber (% of Daily Value)": 0,
              "Sugars (grams)": 29,
              "Proteins (grams)": 0,
              "Vitamin A": 0,
              "Vitamin C": 4,
              "Vitamin D": 0,
              "Iron": 0,
              "Calcium": 0,
              "Total Fat": 0,
              "Sat. Fat": 0,
              "Cholesterol": 0,
              "Sodium": 0,
              "Total Carbohydrates": 0,
              "Dietary Fiber": 0,
              "Ingredients": "Water, Sucrose, Concentrated Orange Juice, Citric Acid, Modified Food Starch, Propylene Glycol, FD&C Yellow #6, Xantham Gum, Glyceryal Abiatate, Sodium Benzoate, and Potassium Sorbate."
            }
          }
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

      });


      function draw() {
        requestAnimationFrame(draw);
        // Drawing code goes here
        scrollEvent();
      }
      draw();



      function scrollEvent() {

        if (!is_touch_device()) {
          viewportTop = $(window).scrollTop();
          windowHeight = $(window).height();
          viewportBottom = windowHeight + viewportTop;

          if ($(window).width())

            $('[data-parallax="true"]').each(function() {
            distance = viewportTop * $(this).attr('data-speed');
            if ($(this).attr('data-direction') === 'up') {
              sym = '-';
            } else {
              sym = '';
            }
            $(this).css('transform', 'translate(0, ' + sym + distance + 'px)');
          });

        }
      }

      function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers
          || 'onmsgesturechange' in window; // works on ie10
      }


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
          callout = $('.callOut'),
          closeCallOut = $('.closeCallout'),
          floatingBottle = $('#floatingBottle'),
          bottleWidth = $('#floatingBottle').width(),
          theBottle = $('#mainBottle'),
          bottles = 16,
          arrayIndex = 8,
          bottlePos = 11,
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

        // var showInstructions = window.setTimeout(function(e) {
        //   if (!instructionCall) {
        //     $('.instructions').fadeIn();
        //   }
        // }, 30000);

        function bottleMouseMove(e) {
          if (floatingBottle.hasClass('start')) {

            floatingBottle.addClass('disableTransition');
            var x = e.pageX - theBottle.offset().left;
            // Find bottle pos
            bottlePos = customRotation[parseInt(x / 370 * customRotation.length)];

            arrayIndex = parseInt(x / screenWidth * customRotation.length);

            var textPod = $('.pod');
            textPod.removeClass('visible');

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
          // Quick fix for this. Fix later
          if (i >= 16) {
            i = 16;
          }
          var origNum = i;
          theBottle.attr('class',
            function(i, c) {
              return c.replace(/(^|\s)img-\S+/g, '');
            }).addClass('img-' + customRotation[origNum]);
          // if not on starting position
          if (i !== 8) {
            if (arrayIndex < 8) {
              origNum++;
              setTimeout(function() {
                changeIt(origNum)
              }, 25);
            } else if (arrayIndex > 8) {
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
            callout.removeClass('active');
          } else {
            floatingBottle.removeClass('start disableTransition');
            rotateBack();
            var quickDelay = window.setTimeout(function(e) {
              callout.addClass('active');
            }, 501);

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
        });

        if (callout[0]) {
          callout.addClass('active');
          closeCallOut.on('click', function(e) {
            callout.fadeOut();
          })
        }

        // end homepage
      }

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
      if ($('.about')[0]) {

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
      var theVideo;

      function eventBg(event) {
        if (event === 'start') {
          if (theVideo === undefined) {
            theVideo = $('.viveVideo').vide({
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
        } else {
          if (theVideo !== undefined) {
            theVideo.destroy();
            theVideo = undefined;
          }
        }
      }
      if (Modernizr.mq('(min-width: 767px)')) {
        eventBg('start');
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

      $(window).on('resize', function() {
        if (Modernizr.mq('(min-width: 767px)')) {
          eventBg('start');
        } else {
          eventBg('end');
        }
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
      $('#schedule_date').on('touchstart', function(e) {
        $(this).blur();
      })
      $('.schedulePopUp').on('click', '.closeSchedule, .cancelSchedule', function(e) {
        $('.schedulePopUp').fadeOut();
      });

      var scheduleForm = $('.schedulePopUp form');

      scheduleForm.formValidation({
        framework: 'bootstrap',
        fields: {
          schedule_name: {
            validators: {
              notEmpty: {
                message: 'Forget your name?'
              }
            }
          },
          schedule_phone: {
            validators: {
              notEmpty: {
                message: 'We need your phone number.'
              }
            }
          },
          schedule_groupSize: {
            validators: {
              notEmpty: {
                message: 'How many people are coming?'
              }
            }
          },
          schedule_email: {
            validators: {
              notEmpty: {
                message: 'Please provide your email.'
              },
              emailAddress: {
                message: 'The input is not a valid email address.'
              }
            }
          },
          schedule_date: {
            validators: {
              notEmpty: {
                message: 'Let us know when you want to visit.'
              }
            }
          }
        }
      }).on('success.form.fv', function(event) {
        event.preventDefault();

        var stuffToSend = {
            'input_values': {}
          },
          myForm = $(this),
          theButton = myForm.find('button');

        theButton.html('Processing <span class="loading-pulse"></span>');
        // find form values and assign for gravity forms
        stuffToSend.input_values.input_1 = myForm.find('input#schedule_name').val();
        stuffToSend.input_values.input_2 = myForm.find('input#schedule_email').val();
        stuffToSend.input_values.input_3 = myForm.find('input#schedule_phone').val();
        stuffToSend.input_values.input_4 = myForm.find('input#schedule_groupSize').val();
        stuffToSend.input_values.input_5 = myForm.find('input#schedule_date').val();
        stuffToSend.input_values.input_6 = myForm.find('textarea#schedule_comment').val();
        if (theButton.is('[disabled=disabled]')) {
          theButton.prop('disabled', true);
          $.ajax({
            url: "/gravityformsapi/forms/2/submissions",
            method: "POST",
            data: JSON.stringify(stuffToSend),
            dataType: "json",
            processData: false,
            headers: {
              "Content-Type": "application/json"
            }
          }).success(function(data) {
            if (data.response.is_valid) {
              // hide form
              $('.schedulePopUp form').hide();
              // show thank you
              $('.successThanks').show();
              theButton.prop('disabled', false);

              // fire analytics event
              // ga();

              // hide the overlay
              setTimeout(function() {
                $('.schedulePopUp').fadeOut();
              }, 10000);
            } else {
              // handle errors from gravity forms
              $('.errorAlert').show();
              theButton.html('Submit');
              theButton.prop('disabled', false);
            }
          });
        }
      });
    }
      // Contact
      if ($('.contact')[0]) {




        if (Modernizr.mq('(max-width: 767px)')) {

          $('#mobileContact').formValidation({
            framework: 'bootstrap',
            fields: {
              mobileContact_name: {
                validators: {
                  notEmpty: {
                    message: 'Forget your name?'
                  }
                }
              },
              mobileContact_subject: {
                validators: {
                  notEmpty: {
                    message: 'Select a subject.'
                  }
                }
              },
              mobileContact_message: {
                validators: {
                  notEmpty: {
                    message: 'Fill in a message.'
                  }
                }
              },
              mobileContact_email: {
                validators: {

                  emailAddress: {
                    message: 'The input is not a valid email address.'
                  }
                }
              },
              mobileContact_phone: {
                validators: {
                 notEmpty: {
                    message: 'Fill in your phone number.'
                  },
                  phone: {
                    country:'US',
                    message: 'Not a valid phone number.'
                  }
                }
              }

            }

          }).on('success.form.fv', function(e) {
            e.preventDefault();

            var stuffToSend = {
                'input_values': {}
              },
              myForm = $(this),
              theButton = myForm.find('button');

              theButton.html('Processing <span class="loading-pulse"></span>');
            // find form values and assign for gravity forms
            stuffToSend.input_values.input_1 = myForm.find('input#mobileContact_name').val();
            stuffToSend.input_values.input_2 = myForm.find('select#mobileContact_subject').val();
            stuffToSend.input_values.input_3 = myForm.find('textarea#mobileContact_message').val();
            stuffToSend.input_values.input_4 = myForm.find('input#mobileContact_email').val();
            stuffToSend.input_values.input_5 = myForm.find('input#mobileContact_phone').val();
            if (theButton.is('[disabled=disabled]')){
               theButton.prop('disabled', true);
            $.ajax({
              url: "/gravityformsapi/forms/1/submissions",
              method: "POST",
              data: JSON.stringify(stuffToSend),
              dataType: "json",
              processData: false,
              headers: {
                "Content-Type": "application/json"
              }
            }).success(function(data) {
              if (data.response.is_valid) {
                // hide form
                $('#mobileContact').fadeOut();
                $('#nl-form').fadeOut();
                $('.sentSuccess').fadeIn();
                $('.submit').fadeOut();
                // fire analytics event
                ga('send', 'event', 'contact', 'mobile_contact_submit', 'click');
              } else {
                // handle errors from gravity forms
                alert(JSON.stringify(data.response.validation_messages));
                theButton.html('Submit');
                theButton.prop('disabled',false);
              }
            });
          }
          })
        } else {

          $('.videoSteam').vide({
            mp4: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/shattoSteam_loseless4.mp4',
            webm: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/shattoSteam_loseless4.webm',
            ogv: 'http://6344650e56c93a4cbec3-9648dd174d28e6eb0fc37fdb4970a0be.r54.cf2.rackcdn.com/shatto/shattoSteam_loseless4.ogv'
          }, {
            posterType: 'none',
            autoplay: true,
            position: '0 50%',
            volume: 1,
            loop: true,
            resizing: true
          });


          $('#nl-form').formValidation({
            framework: 'bootstrap',
            fields: {
              name: {
                excluded: false,
                validators: {
                  notEmpty: {
                    message: 'Forget your name?'
                  }
                }
              },

              message: {
                excluded: false,
                validators: {
                  notEmpty: {
                    message: 'Fill in a message.'
                  }
                }
              },
              email: {
                excluded: false,
                validators: {
                   notEmpty: {
                            message: 'Enter your email'
                        },
                  emailAddress: {
                    message: 'The input is not a valid email address.'
                  }
                }
              },
              phone: {
                excluded: false,
                enabled:false,
                validators: {
                  notEmpty: {
                    message: 'Let us know your phone number'
                  },
                  phone: {
                    country:'US',
                    message: 'Not a valid phone number.'
                  }
                }
              }
            }
          }).on('success.form.fv', function(e) {
            event.preventDefault();

            var stuffToSend = {
                  'input_values': {}
                },
                myForm = $(this),
                theButton = myForm.find('button');

            
            theButton.html('Processing <span class="loading-pulse"></span>')
            // find form values and assign for gravity forms
            stuffToSend.input_values.input_1 = myForm.find('input#name').val();
            stuffToSend.input_values.input_2 = myForm.find('select#subject').val();
            stuffToSend.input_values.input_3 = myForm.find('input#message').val();
            stuffToSend.input_values.input_4 = myForm.find('input#email').val();
            
            console.log(theButton.is('[disabled=disabled]'));
            if (theButton.is('[disabled=disabled]')){
              theButton.prop('disabled',true);
            $.ajax({
              url: "/gravityformsapi/forms/1/submissions",
              method: "POST",
              data: JSON.stringify(stuffToSend),
              dataType: "json",
              processData: false,
              headers: {
                "Content-Type": "application/json"
              }
            }).success(function(data) {
              if (data.response.is_valid) {
                // hide form
                $('#nl-form').fadeOut();
                $('#mobileContact').fadeOut();
                $('.sentSuccess').fadeIn();
                theButton.fadeOut();
                // fire analytics event
                ga('send', 'event', 'contact', 'contact_submit', 'click');
              } else {
                // handle errors from gravity forms
                alert(JSON.stringify(data.response.validation_messages));
                 theButton.html('Submit');
                theButton.prop('disabled',false);
              }
            }).error(function(data){
              theButton.prop('disabled',false);
              theButton.html('Submit')
            });
            }

          })

        }


        var nlform = new NLForm(document.getElementById('nl-form'));


        $('#mobileContact submit').on('click touchstart', function(e) {
          $('#mobileContact').submit();
        })

        var span = $('<span>').css('display', 'inline-block')
          .css('word-break', 'break-all').appendTo('body').css('visibility', 'hidden');

        function initSpan(textarea) {
          span.text(textarea.text())
            .width(textarea.width())
            .css('font', textarea.css('font'));
        }
        $('#nl-form textarea').on({
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
        $('.nl-ti-input input').on({
          keypress: function(e) {
            if (e.which == 13) e.preventDefault();
          }
        });
        // $('#mobileContact').submit(function(event) {

        // });
        // $('form#nl-form').submit(function(event) {

        // });
      }

      if ($('#newsletterSignUp')[0]) {
        $('#newsletterSignUpForm').formValidation({
          framework: 'bootstrap',
          fields: {
            newsletterSignUp: {
              validators: {
                notEmpty: {
                  message: 'We will need your email.'
                },
                emailAddress: {
                  message: 'The input is not a valid email address.'
                }
              }
            }
          }
        }).on('success.form.fv', function(e) {
          event.preventDefault();

          var stuffToSend = {
              'input_values': {}
            },
            myForm = $(this);
          // find form values and assign for gravity forms

          stuffToSend.input_values.input_1 = myForm.find('input#newsletterSignUp').val();
          $.ajax({
            url: "/gravityformsapi/forms/3/submissions",
            method: "POST",
            data: JSON.stringify(stuffToSend),
            dataType: "json",
            processData: false,
            headers: {
              "Content-Type": "application/json"
            }
          }).success(function(data) {
            if (data.response.is_valid) {
              // hide form
             var newsletterBtn = $('#newsletterSignUpForm .btn');
              $('.newsletterSignUpThanks').fadeIn();
              newsletterBtn.addClass('success').html('<span class="icon-checkmark"></span> Success!');
              var successReset = window.setTimeout(function(e){
                newsletterBtn.removeClass('success').html('Sign Up');
              },10000);
              // fire analytics event
              // ga();
            } else {
              // handle errors from gravity forms
              alert(JSON.stringify(data.response.validation_messages));
            }
          });
        })
      }

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

        $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
          e.preventDefault();

          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname && Modernizr.mq('(min-width: 767px)')) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

              $('html, body').animate({
                scrollTop: target.offset().top - ($('.headerMain').height() + 95)
              }, 1000);
              //$(document).scrollTop( target.offset().top - ($('.headerMain').height() + 95) );
              e.preventDefault();
            }
          }
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
            var removeClassOnImage = window.setTimeout(function(e){
              $('#overlay_image').removeClass();
            }, 270);
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
          if (e.keyCode === 27) {
            overlayToggle();
          }
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
              var combinedPath = imagePath + theProductImage;
              var retinaPath = imagePath + theProductImage.replace('/large/', '/large/2x/');
              var srcSetData = combinedPath + " 1x, " + retinaPath + " 2x";
              $('.flavors h3').html(productJson['products'][theProduct].title);
              var thisProduct = productJson['products'][theProduct],
                thisNut = thisProduct['nutrition'],
                sizeKeys = Object.keys(thisProduct['sizes']),
                curCat = thisProduct['category'];

              if (curCat == 'bar' || curCat == 'Pint' || curCat == 'cheese_curds' || curCat == 'butter' || curCat == 'artisan_cheese') {
                $('.sizes').hide();
              } else {
                $('.sizes').show();
              }
              $('.size.available').removeClass('available currentSize');
              sizeKeys.forEach(function(e, i) {

                $('.' + e + '').addClass('available');
              });
              $('.nutritionFacts').html('').append('<div class="row">' +
                '<div class="col-lg-4">' +
                '<div class="row">' +
                '<div class="col-sm-12 nutFacts">' +
                '<h2>nutrition facts</h2>' +
                '</div>' +
                '<div class="col-sm-12 servingSize">' +
                '<h3><span class="servingSizeNum">' + thisNut["Servings Per Container"] + '</span> Servings per container</h3>' +
                '<p>Serving Size <span class="servingPerContainer">' + thisNut["Serving Size"] + '</span></p>' +
                '</div>' +
                '<div class="col-sm-12 calories">' +
                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<h2 class="calories">' + thisNut["Calories"] + '</h2>' +
                '<div class="closeUp">' +
                '<h3>Calories</h3>' +
                '<p>Per Serving</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-lg-8 stats">' +
                '<div class="row">' +
                '<div class="col-sm-6">' +
                '<div class="row">' +
                '<div class="col-sm-12 topPart">' +
                '<h5>% DV* amount per serving</h5>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<table class="table">' +
                '<tr>' +
                '<td>' + thisNut["Total Fat (% of Daily Value)"] + '%</td>' +
                '<td>Total Fat <span class="lighter">' + thisNut["Total Fat (grams)"] + 'g</span></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + thisNut["Saturated Fat (% of Daily Value)"] + '%</td>' +
                '<td class="child">Saturated Fat <span class="lighter">' + thisNut["Saturated Fat (grams)"] + 'g</span></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + thisNut["Cholesterol (% of Daily Value)"] + '%</td>' +
                '<td>Cholesterol <span class="lighter">' + thisNut["Cholesterol (mg)"] + 'mg</span></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + thisNut["Sodium (% of Daily Value)"] + '%</td>' +
                '<td>Sodium <span class="lighter">' + thisNut["Sodium (mg)"] + 'mg</span></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-sm-6">' +
                '<div class="row">' +
                '<div class="col-sm-12 topPart">' +
                '<h5>% DV* amount per serving</h5>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<table class="table">' +
                '<tr>' +
                '<td>' + thisNut["Total Carbohydrates (% of Daily Value)"] + '%</td>' +
                '<td>Total Carbs <span class="lighter">' + thisNut["Total Carbohydrates (grams)"] + 'g</span></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + thisNut["Dietary Fiber (% of Daily Value)"] + '%</td>' +
                '<td class="child">Dietary Fiber <span class="lighter">' + thisNut["Dietary Fiber (grams)"] + 'g</span></td>' +
                '</tr>' +
                '<tr>' +
                '<td></td><td class="child">Sugars <span class="lighter">' + thisNut["Sugars (grams)"] + 'g</span></td>' +
                '</tr>' +
                '<tr>' +
                '<td></td><td>Protein <span class="lighter">' + thisNut["Proteins (grams)"] + 'g</span></td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="row bottomList">' +
                '<div class="col-sm-12">' +
                '<ul>' +
                '<li>' + thisNut["Vitamin A"] + '% <span class="title">Vitamin A</span></li>' +
                '<li>' + thisNut["Vitamin C"] + '% <span class="title">Vitamin C</span></li>' +
                '<li>' + thisNut["Vitamin D"] + '% <span class="title">Vitamin D</span></li>' +
                '</ul>' +
                '<ul>' +
                '<li>' + thisNut["Iron"] + '% <span class="title">Iron</span></li>' +
                '<li>' + thisNut["Calcium"] + '% <span class="title">Calcium</span></li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="row dailyValues">' +
                '<div class="col-sm-12 text-center">' +
                '<p>*Percent Daily Values are based on a 2000 calorie diet.</p> <p>Your daily values may be higher or lower depending on your calorie needs.</p>' +
                '</div>' +
                '</div>');

              $('#ingredientList').html('').append(thisNut["Ingredients"])

              $('.size').on('click', function(e) {
                $('.size').removeClass('currentSize');
                $(this).addClass('currentSize');
                var curSize = $(this).data('size');
                $('.servingSizeNum').html(thisProduct['sizes'][curSize]);
              })
              $('#overlay_image').attr({
                'src': imagePath + '/loading_spinner.gif',
                'data-src': combinedPath,
                'data-src-retina': retinaPath
              }).addClass(productCategory).unveil(15, function() {
                $(this).removeClass('hideIt');
              });
            } else {
              $('#overlay_image').attr({
                'src': imagePath + '/missingImage.png',
                'srcset': ''
              }).removeClass().addClass('missing');
            }
          } else {}

          // Remove this conditional once nutrition facts added.

            overlayToggle();


        });

      function activateWaypoint() {
        var waypointOffset = 400;
        var productsToShow = $('section.productSection').waypoint(function(direction) {
          if (!$(this.element).hasClass('visible')) {
            $(this.element).addClass('visible');
            //$(this.element).find('.product').addClass('reveal');

            var theProd = $(this.element).find('.product img.main'),
              theImg = theProd.find('img.main');
              theProd.each(function(i, product) {
              $(product).unveil(200, function() {
                $(this).load(function() {
                  this.style.opacity = 1;
                  theProd.addClass('reveal')
                });
              });
            })

          }
        }, {
          offset: '100%'
        });
        }
        if (!Modernizr.mq('(min-width:' + breakpoint + 'px)')) {
          $('#mobileCollapse').on('shown.bs.collapse', function(e) {
            var id = $(e.target).attr('id');

            navigateToElement(id);
          })

          function navigateToElement(id) {
            $('html, body').animate({
              scrollTop: $('#' + id).offset().top - 128
            }, 150);
          }
        }

        $(window).load(function() {
          var subNavMenu = $('.subNav'),
            scrolledAlready = false;

          if (window.location.hash.substr(1) !== null && window.location.hash.substr(1) !== '') {

            var theHash = '#' + window.location.hash.substr(1);
            var target = $(theHash);
            if (!Modernizr.mq('(min-width:' + breakpoint + 'px)')) {
              target.addClass('in');
              $('a.mobileCategory[href="' + theHash + '"]').removeClass('collapsed');
              window.location.href = theHash;
              activateWaypoint();
            }

            if (target.length) {
              var len = target.find('img.main').length;
              target.addClass('visible').find('.product').find('img.main').each(function(i, e) {

                // console.log(i);
                if (i === len - 1) {
                  $(this).unveil(200, function() {
                    $(this).load(function() {
                      this.style.opacity = 1;
                      $(document).scrollTop(target.offset().top - ($('.headerMain').height() + 105));
                      activateWaypoint()
                    });
                  });
                } else {
                  $(this).unveil(200, function() {
                    $(this).load(function() {
                      this.style.opacity = 1;

                    });
                  });
                }
              });
            }



          } else {
            activateWaypoint()
          }


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

        if (QueryString.zip !== '' && QueryString.zip !== undefined) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            "address": QueryString.zip
          }, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {

              lat = results[0].geometry.location.lat(),
                lng = results[0].geometry.location.lng();
              var placeName = results[0].address_components[0].long_name,
                formattedAddress = results[0].formatted_address;
              $(".findInput input").val(formattedAddress);

              $('.mapOverlay').addClass('shrink');
              $('#jlocator').jlocator({
                startZoom: 13,
                latitude: lat,
                longitude: lng
              });
            } else {
              alert('The zip code ' + QueryString.zip + ' has zero results.');
              $('#jlocator').jlocator({
                startZoom: 13,
                latitude: 39.0936738,
                longitude: -94.589048
              });
            }
          });
        } else {

          $('#jlocator').jlocator({
            startZoom: 13,
            latitude: 39.0936738,
            longitude: -94.589048,

          });
        }
      }
      transitionChange();
      $(window).on('resize', function() {
        transitionChange();
      });
    }); // end ready
  }));
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