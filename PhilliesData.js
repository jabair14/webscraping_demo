const request= require('request-promise')
const cheerio= require('cheerio');

//using third party plugin cheerio to scrape questionairre website.  Allows user
// to 'select' specific html data similar to CSS selection.


//scraping questionnairre website 

request("https://questionnaire-148920.appspot.com/swe/data.html",(error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        
        const datarow= $('th:contains("Salary")');
        
        const output= $(datarow).find('tr');


        //setting an empty array which items will later be pushed into
        let salaryArray = [];

        $('td.player-salary').each((i, data) => {
            
            
            //sanitize items
            const items= parseInt($(data).text().replaceAll('$', '').replaceAll(',',''));
            
            salaryArray.push(items)
            

            //ideally here he would have an array to work with which would then be able to decipher 
            //averages with.  Still a work in progress as the above attempt is not formatting the data
            //correctly.

            //the concept for this scraping idea was taken from https://www.analyticsvidhya.com/blog/2020/10/web-scraping-using-node-js/ 
            //initially I tried scraping via react, but was blocked by the CORS policy and decided this would only
            //work if done from the backend.
            console.log(salaryArray)

          
           
           
            
        })
    }
})


