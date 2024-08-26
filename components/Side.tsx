"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TickPlacementBars from "./Graph/TickPlacementBars";
import { PieChart } from '@mui/x-charts/PieChart';
import { Avatar } from "@mui/material";
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Graph from "./Graph/Graph.png"
export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: " Interview Board",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-right dark:bg-neutral-800 w-screen flex-1 mx-auto border border-neutral-200 dark:border-neutral-700",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "College Name",
                href: "#",
                icon: (
                  <Image
                    src=""
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black whitespace-pre"
      >
        Interain
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const Dashboard = () => {
  let top4 = [{
    heading: "Total Sessions",
    actual: "380",
    comp: "+40.03%"
  },
  {
    heading: "Engagement Level",
    actual: "189",
    comp: "-9.19%"
  }, {
    heading: "Progression Level",
    actual: "53",
    comp: "+19.83%"
  },
  {
    heading: "Interviews Attended",
    actual: "113",
    comp: "+29.01%"
  }];
  let student = {
    img: "",
    name: "Swetha",
    dept: "B.Com",
    year: "2024"
  }  
  return (
    <div className="p-2 border bg-gray-200 flex flex-col gap-2 flex-1 w-full h-full text-black box-border">
      <div className="w-full rounded-full bg-right p-1 flex items-center gap-5 shadow-md">
        <Avatar alt={student.name} src={student.img} className="mr-8" />
        <div>{student.name}</div>
        <div>{student.dept}</div>
        <div>{student.year}</div>
      </div>
      <div className="flex gap-3">
        {top4.map((obj, i) => (
          <div key={"first-array" + i} className="h-32 w-full rounded-2xl bg-[#e2f6ff] p-6 shadow-md flex flex-col justify-between">
            <h2>{obj.heading}</h2>
            <div className="flex justify-between items-center text-sm gap-2">
              <div className="text-4xl font-semibold">{obj.actual}</div>
              <div className="text-gray-700 flex justify-between items-center text-sm gap-1">{obj.comp[0] == '-' ? <TrendingDownIcon /> : <TrendingUpIcon />}
                {obj.comp}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="w-[33%] rounded-xl bg-right p-5 shadow-md">
          Interaction Frequency with Interbot
          <TickPlacementBars />
        </div>
        <div className="w-[33%] rounded-xl bg-right p-5 shadow-md">
          Interaction Frequency with Commbot
          <TickPlacementBars />
        </div>
        <div className="w-[32%] rounded-xl bg-right p-5 shadow-md">
          General graph
          <Image
      src={Graph}
      alt=""
      width={400}
      height={400}
      className="mix-blend-multiply"
    />
        </div>
        <div className="w-[45%] rounded-xl bg-right pt-5 pl-5 shadow-md flex flex-col">
          Time Allocation Breakdown
          <PieChart
            className="h-48"
            colors={["#7C8CF8", "#8ACBF8", "#A2AFC4", "#A7EBD8"]}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Technical" },
                  { id: 1, value: 15, label: "Aptitude" },
                  { id: 2, value: 20, label: "Communication" },
                  { id: 3, value: 20, label: "GD" },
                ],
                innerRadius: 35,
                outerRadius: 70,
                paddingAngle: 4,
                cornerRadius: 5,
                startAngle: 0,
                endAngle: 360,
                cx: 120
              }
            ]}
          />
        </div>
        <div className="w-[53.4%] rounded-xl bg-right p-5 shadow-md">
          <div className="flex gap-4 mb-1">
            Summarization
            <AutoAwesomeSharpIcon />
          </div>
          <div className="text-gray-700 text-sm flex flex-col gap-1">
            <div>1. Communication Skills: The student has shown a need for improvement in communication skills. Increased engagement with the Combot is recommended to build vocabulary and interaction confidence.
            </div>
            <div>2. Aptitude: The student’s aptitude is satisfactory. Continued practice with the MCQ Bot will help strengthen problem-solving abilities and maintain performance.
            </div>
            <div>3. Group Discussions (GD): The student has room for improvement in group discussions. Additional practice sessions or workshops focused on GD skills will be beneficial.</div>
            <div>4. Daily Practice: The student has been consistent with daily practice. Continuing this routine will help reinforce skills and ensure steady progress.</div>
            </div>
        </div>
      </div>
    </div>
  );
};
