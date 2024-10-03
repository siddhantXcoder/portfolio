"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/util";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
          <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"/>
            </Link>

            <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About"/>
            </Link>

            <Link href={"/project"}>
            <MenuItem setActive={setActive} active={active} item="Project"/>
            </Link>

            <Link href={"/connect"}>
            <MenuItem setActive={setActive} active={active} item="Connect"/>
            </Link>
          </Menu>
        </div>
    );
}

export default Navbar