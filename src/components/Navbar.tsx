"use client";
import { UserNavItems } from "@/utils/navItems";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 bg-inherit px-6">
        <div className="navbar-start">
          {/* dropdown section */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {UserNavItems.map((items) => (
                <li key={items.id}>
                  <Link href={items.path}>{items.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* site name or heading */}
          <div className="font-serif px-8 tracking-wider font-bold text-2xl">
            Heritage
          </div>
        </div>
        {/* items to show at the nav bar at full screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {UserNavItems.map((items) => (
              <li key={items.id}>
                <Link href={items.path}>{items.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* right side items */}
        <div className="navbar-end">
          <div>
            <Button size="small">Profile</Button>
          </div>
        </div>
      </div>
    </>
  );
}
