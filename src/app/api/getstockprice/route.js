export async function GET(req, res) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('stockname');
    console.log("zz", query)
    let max;
    let min;
    let stockPrice;
    //let stockName;
    let responseData;
    switch (query) {
        case 'icici':
            max = 1000
            min = 900
            stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
            responseData = { stockPrice, stockName: query }
            break;
        case 'idfc':
            max = 100
            min = 80
            stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
            responseData = { stockPrice, stockName: query }
            break;
        case 'hdfc':
            max = 1500
            min = 1600
            stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
            responseData = { stockPrice, stockName: query }
            break;
        case 'sbi':
            max = 500
            min = 600
            stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
            responseData = { stockPrice, stockName: query }
            break;
        case 'pnb':
            max = 70
            min = 80
            stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
            responseData = { stockPrice, stockName: query }
            break;
        case 'axis':
            max = 950
            min = 1000
            stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
            responseData = { stockPrice, stockName: query }
            break;

        default:
            responseData = { message: 'Invalid Data' }
    }
    return Response.json(responseData)





}


