import React from "react";
import img from "../images/p1.png";
import img2 from "../images/p2.png";
import img3 from "../images/p3.png";
import img4 from "../images/p4.png";
import img5 from "../images/p5.png";


export function Home()
{
    return(
        <div className="">
            <div className="flex justify-around px-20 ">
                <div className="w-1/3 m-10 float-left ">
                    <h1 className="text-green-700 text-2xl font-bold my-2 ">LA SYSTEME CLIMATIQUE</h1>
                    <p className="text-meduim font-semibold">La Terre est entourée d’une très mince enveloppe gazeuse : 
                        l’atmosphère, qui est composée principalement d’azote (78 %) et d’oxygène (21 %). 
                        La surface de la Terre est quant à elle recouverte à 70 % par les océans,
                        les 30 % de terres émergées restantes étant très inégalement réparties.
                    </p>
                </div>
                <img 
                    className="float-right  pt-10 mx-20 "
                    src={img} 
                    alt="p1" 
                    />
            </div>
            <div className="flex justify-around px-20">
                <img 
                    className="float-left mx-20"
                    src={img2}
                    alt="p2" 
                />
                <div className="float-right w-1/3 pt-8 mx-10 my-20 flex  items-center justify-center">
                    <p className="text-meduim font-semibold">
                        L’atmosphère, les surfaces continentales, les océans et les glaces sont en interactions permanentes, 
                        à travers de nombreux processus physiques, chimiques ou biologiques. Cet ensemble influence les températures, 
                        les vents et les précipitations auxquels nous sommes confrontés au fil des jours, des saisons et des siècles.
                    </p>
                </div>
            </div>
            <div className="flex justify-around px-20 m-4">
                <div className="w-1/3 mt-8">
                    <img className="text-green-600 text-lg font-bold m-2" 
                    src={img4}
                    alt="p4"
                    />
                    
                </div>
                <img 
                src={img3}
                alt="p3"
                />
            </div>
            <div className="flex justify-around bg-green-700 h-100 w-100 p-10">
                <img
                src={img5}
                alt="p5"
                />
                <div className="w-1/3 py-20">
                    <h1 className="text-white text-2xl font-bold my-4">
                        SOLUTIONS ?
                    </h1>
                    <h2 className="text-xl text-white ">
                    Face aux défis pressants du changement climatique, 
                    explorons ensemble des solutions innovantes et durables pour préserver notre planète 
                    et créer un avenir plus équilibré et résilient."
                    </h2>
                    <button className="border-2 border-white py-3 px-8 my-4 text-white">Explore</button>
                
                </div>

            </div>

        </div>
    )
}