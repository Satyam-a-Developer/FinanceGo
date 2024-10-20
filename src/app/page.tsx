
"use client"

import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"
import React from "react";
import handshake from "../photos/handshake.webp"
import stoke from "../photos/d-money-coin-holding-loan-blue-background-holding-money-saving-business-hand-concept-online-payment-payment-concept-331234110.webp"
import money from "../photos/pngtree-bag-of-money-3d-png-image_12722999-Photoroom.png"

import Link from "next/link";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Button } from "@/components/ui/button";
import photos from "../photos/cool-background.png"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <div>
      <div className=" flex justify-center ">
        <div className="m-[9rem] flex justify-center">
          <div className="w-[60vw] h-[60vh]  bg-white mr-9 text-wrap ">
            <h1 className="text-[4rem] text-black  font-bold">
              work with your future work with your finance go finance free with
              “financeGO”
            </h1>
            <div className=" m-10 flex justify-between w-[400px] ">
            <Button className="text-[2rem] p-10">Login</Button>
            <Button className="text-[2rem] p-10">Sign up  </Button>
            </div>
          </div>
          <div className=" w-[20vw]  mt-[8vh] ">
            <Image src={money} className="bg-white"  width={800}
      height={800}/>
          </div>
        </div>
      </div>

      <div className=" w-[60vw]   m-auto">
      

        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
      <div className= "flex relative justify-center">
      <Image src={photos} alt="Cool Background" />
      <h1 className="absolute z-50 text-[3rem] "> Calculate how much interest u have to pay if u take loan</h1>
      <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border absolute z-50 mt-[100px] bg-slate-500"
  />
      </div>
      <div className="h-[100vh] flex justify-evenly mt-20">
      <div className="">
        <Image src={stoke} width={500} height={500}/>
        </div>
        <div className="h-[600px] w-[400px]">
        <p className="text-[60px] line-clamp-4 mt-10">
           We all also Provide a munual fund offer and also offers health insurance for a 1 year of joining 
        </p>
        </div>
       
      
      </div>
      <div className="h-[100vh] flex justify-evenly ">
        <div className="h-[600px] w-[400px]">
        <p className="text-[60px] line-clamp-4 mt-10">
            your trust is more important our money
        </p>
        </div>
        <div className="">
        <Image src={handshake} width={500} height={500}/>
        </div>
      
      </div>

    </div>
  );
}
