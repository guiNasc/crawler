const puppeteer = require('puppeteer');
const cheerio = require('cheerio')

const getContent = async (checkIn, checkOut) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    url = process.env.BASE_URL + `&CheckIn=${checkIn}&CheckOut=${checkOut}`
    await page.goto(url);
    const content = await page.content();
    await browser.close();
    return content
}

const buildRooms = (html) => {
    const $ = cheerio.load(html)
    const rooms = [];

    $('.roomExcerpt').each((i, elem) => {
        const image = process.env.BASE_PATH + $(elem)
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
    return rooms
}

const formatDates = (checkin, checkout) => {
    let dates = {}
    if (checkin && checkout) {
        dates.dtIn = checkin.replace(/\//g, "")
        dates.dtOut = checkout.replace(/\//g, "")
    }
    return dates
}

const find = async (checkIn, checkOut) => {
    const {dtIn, dtOut} = formatDates(checkIn, checkOut);
    const html = await getContent(dtIn, dtOut);
    const rooms = buildRooms(html);
    return rooms;
  };
  
  module.exports = {find};