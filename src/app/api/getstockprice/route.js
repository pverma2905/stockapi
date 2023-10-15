import { NextResponse } from "next/server";

export async function GET(req, res) {
    console.log("xxx", req.url.split("=")[1])
    const max = 100;
    const min = 80;
    const stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
    //         console.log("testttt222", stockPrice)
    //         //const data =  res.json();
    //         //return NextResponse.json({ "price": stockPrice });
    return Response.json({ price: stockPrice })
    // try {
    //     if (req.url.split("=")[1] == "icici") {
    //         console.log("testttttt")
    //         const max = 1000;
    //         const min = 900;
    //         selectStock(max, min)
    //     } else if (req.url.split("=")[1] == "idfc") {
    //         const max = 100;
    //         const min = 80;
    //         selectStock(max, min)
    //     } else if (req.url.split("=")[1] == "hdfc") {
    //         const max = 1500;
    //         const min = 1600;
    //     } else if (req.url.split("=")[1] == "sbi") {
    //         const max = 500;
    //         const min = 600;
    //         selectStock(max, min)
    //     } else if (req.url.split("=")[1] == "pnb") {
    //         const max = 70;
    //         const min = 80;
    //         selectStock(max, min)
    //     } else if (req.url.split("=")[1] == "axis") {
    //         const max = 990;
    //         const min = 1000;
    //         selectStock(max, min)
    //     } else {
    //         const max = 990;
    //         const min = 1000;
    //         selectStock(max, min)
    //     }
    //     function selectStock(max, min) {
    //         console.log("testttt111", max, min)
    //         const stockPrice = parseFloat(Math.random() * (max - min) + min).toFixed(2);
    //         console.log("testttt222", stockPrice)
    //         //const data =  res.json();
    //         //return NextResponse.json({ "price": stockPrice });
    //         return Response.json({ price: stockPrice })
    //         // return NextResponse.next()
    //     }
    // } catch (err) {
    //     console.error(error)
    //     return new Response('Could not fetch', { status: 500 })
    // }




}


