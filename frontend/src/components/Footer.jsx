import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook, FaTiktok,  } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import { images } from "../constants";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Informasi</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.rsaku.mobile">Pendaftaran Online</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/Indikatormutu">Indikator Mutu</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/informasi/antrean/poliklinik">Antrean Poliklinik</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/informasi/antrean/apotik">Antrean Apotik</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/informasi/jadwal">Jadwal Dokter</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Layanan</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">IGD 24 Jam</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Rawat Jalan</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Rawat Inap</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Laboratorium</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Radiologi Terpadu</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Hemodialisa</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">About</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Terms</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Privacy Policy</a>
            </li>
            <li>
              <a href="https://rsaisyiyahkudus.com/home/dasboard">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
          <b>RS Aisyiyah Kudus</b>
          </p>
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
          <b>KUDUS 59319, JAWA TENGAH</b>
          </p><br></br>
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Phone: <b>(0291) 437780</b>
          </p>
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Email: <b>rsa_kudus@yahoo.com</b>
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="https://twitter.com/rsakudus">
                <AiOutlineTwitter className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@rsaisyiyahkudus">
                <FaTiktok  className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rsaisyiyahkudus">
                <AiFillInstagram className="w-6 h-auto" />
              </a>
            </li>
            {/* <li>
              <a href="/">
                <FaFacebook className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram className="w-6 h-auto" />
              </a>
            </li> */}
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2024 - RSA Kudus.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
