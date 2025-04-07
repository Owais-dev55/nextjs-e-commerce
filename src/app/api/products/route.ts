import { StaticImageData } from "next/image";
import { NextResponse } from "next/server";
import image1 from '@/public/image/decription airpods.webp'
import image2 from '@/public/image/xiaomi-mainimage.avif'
import siliconmain from '@/public/image/silicon-mainimage.jpeg'
import silicondes from '@/public/image/silicon-desimage.jpeg'
import silicon1 from '@/public/image/silicon-img1.jpeg'
import silicon2 from '@/public/image/silicon-img1.jpeg'
import silicon3 from '@/public/image/silicon-img1.jpeg'
import earbudsmain from '@/public/image/earbudsmain.avif'
import earbuds1 from '@/public/image/earbuds-img1.avif'
import earbuds2 from '@/public/image/earbuds-img2.avif'
import earbuds3 from '@/public/image/earbuds-img3.avif'

 export interface Product {
    _id:string;
    Title:string;
    Description:string;
    BulletPoints:string[];
    DiscountedPrice:number
    OriginalPrice:number;
    MainImage:string | StaticImageData;
    Images:string[] | StaticImageData[];
    DescriptionImages:string | StaticImageData;
    Category:string;
    Tags:string[];
    Rating:number;
    Reviews:number;
    Stock:number;
    Colors?:string[];
}

const products:Product[] = [
    {
    _id: 'touch-screen-airpods',
    Title: 'A9 Pro Touch Screen AirPods_Pro ANC Wireless Earbuds With Bluetooth 5.0, LCD Display, Super Bass & Pop-Up Feature',
Description: `A9 Pro Touch Screen Airpods

Experience superior audio quality and cutting-edge technology with the A9 Pro Touch Screen AirPods_Pro. These ANC (Active Noise Cancellation) wireless earbuds are designed for those who demand crystal-clear sound, deep bass, and seamless connectivity. Perfect for music lovers, professionals, and gamers alike, these earbuds offer the ultimate wireless audio experience.

Advanced LCD Display for Easy Control
With the unique LCD display on the case, you can easily monitor battery levels and charging status at a glance. This added feature offers more convenience, ensuring you're always in control of your earbuds' performance and power.

Bluetooth 5.0 for Seamless Connectivity
The A9 Pro AirPods_Pro come equipped with the latest Bluetooth 5.0 technology, providing a stable and fast connection to all your devices. Enjoy smooth, uninterrupted audio whether you're on a call, streaming music, or playing games. The pop-up feature makes pairing with your device effortless, ensuring you’re always connected in seconds.

Immersive Audio with Super Bass
Feel every beat with the super bass feature, designed to deliver deep, rich sound for an immersive listening experience. Combined with Active Noise Cancellation, the A9 Pro ensures you enjoy high-quality audio without any distractions from the outside world.

Key Features:
LCD Display: Keep track of battery and charging levels effortlessly.
ANC Technology: Block out background noise for clear, uninterrupted sound.
Bluetooth 5.0: Fast, stable connections with all your devices.
Super Bass: Enhanced bass for rich, immersive audio.
Pop-Up Feature: Quick and easy pairing with iOS devices.
Touch Controls: Manage calls, music, and volume with a simple touch.`,
        BulletPoints: [
            "LCD Display: Track battery and charging levels easily",
            "Active Noise Cancellation (ANC): Enjoy clear, distraction-free sound",
            "Bluetooth 5.0: Fast, stable wireless connectivity",
            "Super Bass: Deep, immersive audio experience",
            "Pop-Up Pairing: Quick connection with iOS devices",
            "Touch Controls: Effortless management of calls and music",
            "Ergonomic Design: Comfortable fit for long wear"
        ],
        DiscountedPrice: 3499,
        OriginalPrice: 1999,
        MainImage: image1,
        Images: ['/public/images/products/airpods.png', '/public/images/products/airpods.png', '/public/images/products/airpods.png'],
        DescriptionImages: '/public/images/decriptionairpods.png',
        Category: 'Airpods',
        Tags: ['Airpods', 'Touch Screen' , "Featured Products"],
        Rating: 4.5,
        Reviews: 255,
        Stock: 10,      
    },
    {
        _id: "Xiaomi-airpods", 
        Title: "XIAOMI Bluetooth 5.3 Headphones A2 Pro Wireless Earbuds Waterproof In Ear Earphones Sports Headest With Mic For Phone Workout",
        Description: `Truly Wireless
This TWS Earbuds let you discover the freedom of a wireless lifestyle listening to music, managing your calls or working out.
 
Comfort Fit
Bluetooth wireless earbuds adopt an ergonomic and lightweight design and it fits comfortably and snugly in your ear. They fit well, stay firmly in your ear even for a workout or running.
 
Handsfree calls
Integrated microphone for clear phone calls. Automatic stereo-mono mode switching for a natural call experience.
 
Waterproof
Waterproof design keeps the music playing through sunshine and rain.
 
Smart Touch Control
Multi-function touch panel on each earphone helps to play, pause, adjust volume, answer, end calls, activate siri and google assistant more convenient.
 
Wide Compatibility
This bluetooth earphones is compatible with smartphones, tablets and laptops that use iOS 9.0/Android 5.0 or later(not compatible with smart watches).you will enjoy the convenience brought by these sport earphones.`,
        BulletPoints: [
            "Truly Wireless: Discover the freedom of a wireless lifestyle",
            "Comfort Fit: Ergonomic and lightweight design",
            "Handsfree calls: Integrated microphone for clear phone calls",
            "Waterproof: Keeps the music playing through sunshine and rain",
            "Smart Touch Control: Multi-function touch panel",
            "Wide Compatibility: Compatible with smartphones, tablets, and laptops"
        ],
        DiscountedPrice: 1500,
        OriginalPrice: 1249,
        MainImage: image2,
        Images: ['/public/images/products/xiaomi-imag1.png', '/public/images/products/xiaomi-imag1.png'],
        DescriptionImages: '/public/images/xiaomi-desimage.png',
        Category: 'Airpods',
        Tags: ['Airpods', 'Bluetooth', 'Waterproof' ],
        Rating: 4.2,
        Reviews: 150,
        Stock: 10,
    },
    {
        _id: "Wireless-earbuds",
        Title: "X9 Wireless Headphones Bluetooth 5.0 Earphones With Mic Single in-Ear Sports Waterproof TWS Earbuds Bluetooth Handsfree Headset" , 
        Description: `
Headphone Type: Both left and right ears can be used
Wireless Version: V5.0 + EDR
Wireless Profiles: Hands free/Headset
Supporting Agreement: HEP/HSP/A2D/AVRCP
Transmission Range: more than 10 meters
Battery Type: 55mA rechargeable lithium battery
Charging Time: about 1h-2h
Working Time: Music 4-6 hours (The Volume will affect the time)
Standby Time: about 100-150 hours
Frequency Range: 2.40-2.48GHz
Distortion factor: ≤1%
Frequency Response: 20Hz-20KHz
Wearing Styles: in-Ear/stealth headphones
Color:black ,white (optional)

Package Included:
1* Mini Wireless Earphone(single earphone)
1* USB Charging Cable
1* User Manual

Notes:
1. Due to the difference between different monitors, the picture may not reflect the actual color of the item. We guarantee the style is the same as shown in the pictures.
2. Please allow slight dimension difference due to different manual measurement.

If you have any questions about products and orders, please contact us in time, we will reply and help you in the shortest possible time` , 
BulletPoints: [
    "Wireless Version: V5.0 + EDR for stable connection.",
"Battery Life: 4-6 hours (music), 100-150 hours (standby).",
"Charging Time: 1-2 hours." , 
"Range: Over 10 meters." , 
"Wearing Style: In-ear, stealth design." , 
"Color Options: Black, White." ,
] , 
DiscountedPrice: 0,
OriginalPrice: 999,
MainImage: earbuds3 ,
Images: [earbuds1, earbuds2 , earbudsmain ] , 
DescriptionImages: earbuds3,
Category: 'Earbuds',
Tags: ['Earbuds', 'Bluetooth', 'Waterproof'],
Rating: 4.5,
Reviews: 200,
Stock: 20,
  } ,
  {
    _id: "silicon-Wireless-earbuds",
    Title: "6 Months Warranty Wireless Earplugs In-ear Bluetooth Headset Bluetooth 5.3 IPX3 Waterproofing Grade Intelligent Noise Reduction LED Power Display Rectangular Drawer Charging Case", 
    Description: `6 Months Warranty Wireless Earplugs In-ear Bluetooth Headset Bluetooth 5.3 IPX3 Waterproofing Grade Intelligent Noise Reduction LED Power Display Rectangular Drawer Charging Case
Wireless Earplugs In-ear Bluetooth Headset Bluetooth 5.3 IPX3 Waterproofing Grade Intelligent Noise Reduction LED Power Display Rectangular Drawer Charging Case
Features:
Product Name: Wireless earbuds
Product color: Silvery
Material: Plastic
Gross weight: 140g/0.309lbs
Packing size: 14*7*5.5cm/5.51*2.76*2.17in
Bluetooth version: 5.3
Connection range: 0-15m
Input voltage: 5V 1A
Nominal voltage: 3.7V
Battery capacity: 200mAh
Charging time: 1-2h
Frequency: 20Hz-20kHz
Waterproofing grade: IPX3


Product Description:
Good sound quality comes from good quality. The speaker and metal diaphragm enhance the output, so that the sound is richer, like a pleasant and beautiful voice in the ear.
Built-in new generation 5.3 Bluetooth chip to ensure reliable wireless transmission, further improve communication efficiency. 15 meters connection distance, the connection is stable, not easy to disconnect.
Equipped with a large capacity battery charging case, a charge can be used for a whole day, long battery life. Anytime, anywhere, whenever you want. Small and convenient, easy to carry at any time, music is never far away.
IPX3 waterproof rating. Whether it is really sports, sweating, swimming, bathing, you can use it to your heart's content and listen to it all the time.
Double ear noise reduction call, clearer voice. Suitable for devices with Bluetooth function, mobile phones, tablets, laptops can be used.
Package Include:
2* Wireless earbuds
1* Charging case 1* USB charging line 1* Specification

Key words:

Welcome to COFEST's store！ We aim at providing consumer with low price quality items and The more you buy, the more money you save NOTE: All items are at clearance prices
【High quality and professional】:Through the application of high-quality products, help you change the home and work environment reflect comfortable, simple, high-end life concept. In order to make you experience the convenience of smart home, we pursue perfection everywhere, through clear details, bring you a new experience. Our products are simple and smart. What's more, you can define it according to your own living habits. All of this makes the joy extend infinitely. Premium quality material, durable, sturdy, weather resistant, fade resistant and made to last. It's easy to install and you don't need any other tools, just follow the instructions.
Great Gift:An ideal gift for Valentine, Birthday, Christmas, Thanksgiving, Halloween, Women's day, Mothers' Day, Fathers'day, and etc.Tool Gift For Lover，christmas gifts for Family，Smart Electronics，Smart Home for Family Christmas gifts. Please allow 1-2cm for measurement error. Please make sure you don't mind before you bid. Color may have different display, please understand.
【Fit for you】A good product is worth having, please take it home! Easy to operate Safe & Environmental，Unique design, do not follow the trend, which makes it useful and fashionable，Beautiful and practical generous, comfortable and durable, safe and reliable，This is the best gift for family, friends and colleagues, I believe they will like it，Easy to carry, easy to use, It can gives you a euphoric feeling，Made of environmental friendly material, moisture-proof, non-toxic, non-irritating.
In order to protect your privacy, we will only contact you through the Wal-Mart platform. When there is a problem with the order, please pay attention to check. You can contact us if you have any questions about our product and service, and we will try our best to answer your question within 24 hours. we will offer the best solution to make you satisfied. -We are committed to provide product with high quality. Or, you can also contact us if you have any questions about our products`,
BulletPoints: [
    "Bluetooth 5.3: Stable and efficient wireless connection up to 15m.",
"Intelligent Noise Reduction: Clearer calls and immersive sound quality.",
"LED Power Display: Easy battery level tracking on the charging case.",
"IPX3 Waterproof: Resistant to sweat and light rain.",
"Long Battery Life: Large capacity charging case for all-day use.",
"Compact & Portable: Lightweight design for easy carrying.",
],
MainImage: siliconmain,
Images: [silicon1, silicon2 , silicon3] , 
DescriptionImages: silicondes,
DiscountedPrice : 99,
OriginalPrice: 1299 ,
Category: 'Earbuds',
Tags: ['Earbuds', 'Bluetooth', 'Waterproof'],
Rating: 4.5,
Reviews: 200,
Stock: 20,
  }
];

export async function GET(){
    return NextResponse.json(products)
}