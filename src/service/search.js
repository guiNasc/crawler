const puppeteer = require('puppeteer');
const cheerio = require('cheerio')

const basePath = `https://myreservations.omnibees.com`;
let baseUrl = `${basePath}/default.aspx?
q=5462
&version=MyReservation
&sid=32c1c8de-5418-40b2-a237-d86b59345d7c#/
&diff=false
&NRooms=1
&ad=1
&ch=0
&ag=-`;

const find = async (checkIn, checkOut) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    url = baseUrl + `&CheckIn=${checkIn}&CheckOut=${checkOut}`
    console.log(url)
    await page.goto(url);
    const html = await page.content()
    const $ = cheerio.load(html)
    const rooms = [];

    $('.roomExcerpt').each((i, elem) => {
        const image = basePath + $(elem)
                                    .first()
                                    .children()
                                    .find('a')
                                    .attr('href');
        const name = $(elem)
                        .children('.excerpt')
                        .children('h5')
                        .text();

        const description = $(elem)
                                .children('.excerpt')
                                .children('p')
                                .text();

        const price = $(elem)
                        .children('.sincePrice')
                        .find('h6')
                        .text();

        rooms.push({image,name,description,price})
    });

    await browser.close();
    return rooms
  };
  
  module.exports = {find};