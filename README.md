## 📱 eSIM Manager – Data Usage Tracker Web App
    A responsive, 3-page web application built with Next.js 14 and Tailwind CSS

   that allows users to:
   Enter their eSIM booking ID
   View their current eSIM plan, usage details, and session information
   Recharge by selecting a new plan and making a mock payment


##  Pages Overview
1. Home Page (/)

    User inputs Booking ID (e.g., esim_12345678)

    On submit, navigates to Dashboard page

2. Dashboard Page (/dashboard)

    Displays:

        Current Plan Info (Plan Name, Price, Validity, Remaining Data)

        Usage Stats (Data, SMS, Voice)

        Current Session (Session ID, Start Time, Usage)

3. Recharge Page (/recharge)
    
    Current Plan

    Displays available plans (Basic, Premium, Unlimited)

    User can select a plan

    Simulate recharge (Mock Payment)

    Show success confirmation



##  Tech Stack

    Next.js 14

    Tailwind CSS

    React Hooks (useState, useEffect, useRouter)

    Client-side routing (next/navigation)



##  Installation & Setup

    Clone the Repository

   git clone https://github.com/ashish123256/esim.git
   cd esim

    Install Dependencies

npm install

    Run Development Server

npm run dev


## Live Demo

 deployed on Netlify:

 https://esim-manager1.netlify.app/

## Authors

- [Ashish Babu Rao](https://github.com/ashish123256)
