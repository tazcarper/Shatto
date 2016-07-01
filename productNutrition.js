  '<div class="row">'+
    '<div class="col-lg-4">'+
      '<div class="row">'+
        '<div class="col-sm-12 nutFacts">'+
          '<h2>nutrition facts</h2>'+
        '</div>'+
        '<div class="col-sm-12 servingSize">'+
          '<h3><span class="servingSize">'+thisNut["Servings Per Container"]+'</span> Servings per container</h3>'+
          '<p>Serving Size <span class="servingPerContainer">'+thisNut["Serving Size"]+'</span></p>'+
        '</div>'+
        '<div class="col-sm-12 calories">'+
          '<div class="row">'+
            '<div class="col-sm-12">'+
              '<h2 class="calories">'+thisNut["Calories"]+'</h2>'+
              '<div class="closeUp">'+
                '<h3>Calories</h3>'+
                '<p>Per Serving</p>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="col-lg-8 stats">'+
      '<div class="row">'+
        '<div class="col-sm-6">'+
          '<div class="row">'+
            '<div class="col-sm-12 topPart">'+
              '<h5>% DV* amount per serving</h5>'+
            '</div>'+
          '</div>'+
          '<div class="row">'+
            '<div class="col-sm-12">'+
              '<table class="table">'+
                '<tr>'+
                  '<td>'+thisNut["Total Fat (% of Daily Value)"]+'%</td>'+
                  '<td>Total Fat <span class="lighter">'+thisNut["Total Fat (grams)"]+'g</span></td>'+
                '</tr>'+
                '<tr>'+
                  '<td>'+thisNut["Saturated Fat (% of Daily Value)"]+'%</td>'+
                  '<td class="child">Saturated Fat <span class="lighter">'+thisNut["Saturated Fat (grams)"]+'g</span></td>'+
                '</tr>'+
                '<tr>'+
                  '<td>'+thisNut["Cholesterol (% of Daily Value)"]+'%</td>'+
                  '<td>Cholesterol <span class="lighter">'+thisNut["Cholesterol (mg)"]+'mg</span></td>'+
                '</tr>'+
                '<tr>'+
                  '<td>'+thisNut["Sodium (% of Daily Value)"]+'%</td>'+
                  '<td>Sodium <span class="lighter">'+thisNut["Sodium (mg)"]+'mg</span></td>'+
                '</tr>'+
              '</table>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="col-sm-6">'+
          '<div class="row">'+
            '<div class="col-sm-12 topPart">'+
              '<h5>% DV* amount per serving</h5>'+
            '</div>'+
          '</div>'+
          '<div class="row">'+
            '<div class="col-sm-12">'+
              '<table class="table">'+
                '<tr>'+
                  '<td>'+thisNut["Total Carbohydrates (% of Daily Value)"]+'%</td>'+
                  '<td>Total Carbs <span class="lighter">'+thisNut["Total Carbohydrates (grams)"]+'g</span></td>'+
                '</tr>'+
                '<tr>'+
                  '<td>'+thisNut["Dietary Fiber (% of Daily Value)"]+'%</td>'+
                  '<td class="child">Dietary Fiber <span class="lighter">'+thisNut["Dietary Fiber (grams)"]+'g</span></td>'+
                '</tr>'+
                '<tr>'+
                  '<td class="child">Sugars <span class="lighter">'+thisNut["Sugars (grams)"]+'g</span></td>'+
                '</tr>'+
                '<tr>'+
                  '<td>Protein <span class="lighter">'+thisNut["Proteins (grams)"]+'g</span></td>'+
                '</tr>'+
              '</table>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="row bottomList">'+
        '<div class="col-sm-12">'+
          '<ul>'+
            '<li>'+thisNut["Vitamin A"]+'% <span class="title">Vitamin A</span></li>'+
            '<li>'+thisNut["Vitamin B"]+'% <span class="title">Vitamin C</span></li>'+
            '<li>'+thisNut["Vitamin C"]+'% <span class="title">Vitamin D</span></li>'+
          '</ul>'+
          '<ul>'+
            '<li>'+thisNut["Iron"]+'% <span class="title">Iron</span></li>'+
            '<li>'+thisNut["Calcium"]+'% <span class="title">Calcium</span></li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="row dailyValues">'+
    '<div class="col-sm-12 text-center">'+
      '<p>*Percent Daily Values are based on a 2000 calorie diet.</p> <p>Your daily values may be higher or lower depending on your calorie needs.</p>'+
    '</div>'+
  '</div>';