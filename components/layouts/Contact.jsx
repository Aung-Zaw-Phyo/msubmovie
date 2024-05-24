"use client"

import React, { useState } from 'react'
import Swal from "sweetalert2";
import { useTranslations } from 'next-intl'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');
    const t = useTranslations()

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    const successAlert = (message) => {
        Toast.fire({
          icon: "success",
          title: message,
        });
    };

    const errorAlert = (message) => {
        Toast.fire({
            icon: "error",
            title: message,
        });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const isValid = value && value.trim().length >= 1;
        if (!isValid) {
            errorAlert("Please enter your advice!")
            return;
        }

        setIsLoading(true);
        try {
          const response = await fetch(
            "https://msub-yoteshin-mail.onrender.com/api/send-email",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                message: value,
              }),
            }
          );
    
          if (response.status === 422) {
            throw await response.json();
          }
          if (!response.ok) {
            throw new Error("Sending Message failed!");
          }
          successAlert("Your message sent successfully.");
          setValue('')
        } catch (err) {
            errorAlert(err.message || "Something went wrong!")
        }
        setIsLoading(false);
    };


    return (
        <div className='lg:col-span-1 flex lg:justify-end items-center'>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 justify-center items-center w-full'>
                <input 
                    type="text"
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={t("enter_advice")}
                    className='h-14 w-full sm:!w-[68%] inline-flex p-3 !border-none rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg sm:rounded-tr-none sm:rounded-br-none !focus:outline-none !focus:border-none'
                />
                <button disabled={isLoading} onClick={submitHandler} className="inline-flex h-14 w-full sm:!w-[30%] justify-center items-center py-3 px-4 sm:px-6 tracking-wide rounded-tr-lg rounded-br-lg rounded-tl-lg rounded-bl-lg sm:rounded-tl-none sm:rounded-bl-none bg-blue-600 hover:bg-blue-500 border-none text-white duration-300">
                    {isLoading ? 
                        <span className='text-sm'>{t("loading")}</span>
                        : 
                        <span className='uppercase text-lg'>{t("send")}</span>
                    }
                </button>
            </div>
        </div>
    )
}

export default Contact