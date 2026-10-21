# 🚗 GaragePro Kenya 🇰🇪

**A responsive garage website MVP built by MagiVibe 🇰🇪🔥**

GaragePro Kenya is a website concept designed to help automotive garages and mechanics establish a professional online presence, showcase their services, and make it easier for potential customers to send enquiries through WhatsApp.

## 📌 Project Overview

Many independent garages and automotive service providers rely heavily on physical locations, referrals, and social media to attract customers. Without a dedicated website, it can be difficult for potential customers to find their services, understand what they offer, and contact them conveniently.

GaragePro Kenya explores a simple, accessible digital solution to this problem.

The project provides a responsive website where a garage can present its services, introduce its business, explain its service process, and connect prospective customers to WhatsApp.

This MVP is designed as a starting point that can be customized for individual garages and automotive businesses in Kenya.

## 🎯 The Problem It Solves

GaragePro Kenya addresses several common challenges faced by small automotive businesses:

* **Limited online visibility:** Garages may lack a dedicated website where customers can discover their services.
* **Scattered business information:** Customers may have difficulty finding service details and contact information in one place.
* **Difficult customer enquiries:** Potential customers need a convenient way to contact a garage about its services.
* **Limited digital presence:** Smaller garages may not have access to affordable, professionally designed websites.

### 💡 The Proposed Solution

GaragePro Kenya provides a mobile-friendly website concept that brings essential business information and customer enquiries together in one place.

The goal is to help automotive businesses present themselves professionally and make it easier for potential customers to initiate contact.

## ✨ Features

* Responsive website layout for desktop and mobile devices.
* Modern automotive-inspired design.
* Garage service listings.
* Business introduction and service-process sections.
* Customer enquiry form.
* WhatsApp integration that prepares an enquiry message for the customer to review and send.
* Customizable website content and contact configuration.

## 🛠️ Technologies Used

* **HTML5** — website structure and content.
* **CSS3** — layout, styling, responsiveness, and visual design.
* **JavaScript** — interactive functionality and WhatsApp enquiry handling.
* **WhatsApp** — customer enquiry communication.
* **Git and GitHub** — source control and project hosting.

## 📂 Project Structure

```text
GaragePro-Kenya/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

**Note:** The stylesheet is named `style.css`, not `styles.css`. The filename referenced in `index.html` must match the actual filename.

## 🚀 How to Run the Website

You can run GaragePro Kenya locally on your computer without installing a web framework or database.

### Prerequisites

* A computer with Windows, macOS, or Linux.
* A modern web browser.
* Python 3 installed, or another local static web server.
* Git, if you want to clone the repository.

### Option 1: Download the Project

1. Open the GaragePro Kenya GitHub repository.
2. Select **Code → Download ZIP**.
3. Extract the downloaded ZIP file.
4. Open the extracted project folder in Visual Studio Code.

### Option 2: Clone the Repository

Open a terminal and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual repository URL.

Navigate into the project directory:

```bash
cd GaragePro-Kenya
```

Open the folder in Visual Studio Code:

```bash
code .
```

### Start the Local Server

Open the VS Code terminal and run:

```bash
python -m http.server 8000
```

Open your browser and visit:

```text
http://localhost:8000/index.html
```

The GaragePro Kenya website should now be running locally.

**Important:** Keep the terminal running while using the website. Press `Ctrl + C` in the terminal to stop the server.

### Troubleshooting

**The page loads without its styling**

Check that the stylesheet exists and that `index.html` references the correct filename:

```html
<link rel="stylesheet" href="style.css">
```

**The browser displays a 404 error**

Ensure that the server is running from the project directory containing `index.html`, `style.css`, and `script.js`.

**WhatsApp does not open**

Check your WhatsApp configuration in `script.js` and ensure that the correct contact number is configured in international format without the leading zero or a plus sign.

## 📲 WhatsApp Integration

GaragePro Kenya includes a WhatsApp enquiry workflow.

When a customer completes the enquiry form, JavaScript prepares a message containing the submitted information and opens a WhatsApp conversation.

The customer can review the message and send it.

The current MVP does not automatically transmit messages, store enquiries in a database, or provide a backend booking system.

Before using the website for a real garage, configure the correct business WhatsApp number and test the enquiry form.

## 🔧 Customization

GaragePro Kenya is intended to be customized for individual automotive businesses.

Possible customizations include:

* Garage name and logo.
* Business location and contact details.
* Services and pricing.
* Workshop photographs.
* Business opening hours.
* WhatsApp contact number.
* Additional customer enquiry features.

The current version is a frontend MVP. Features such as customer accounts, online payments, appointment management, persistent enquiry storage, and an administrative dashboard would require additional development.

## 🔮 Future Improvements

Potential future enhancements include:

* A backend for storing and managing enquiries.
* Online service appointment requests.
* A garage administration dashboard.
* Customer reviews and testimonials.
* Service pricing and quotation requests.
* Search-engine optimization.
* Deployment to a public hosting platform.
* Improved accessibility and performance.

## 👨‍💻 Developer

**MagiVibe 🇰🇪🔥**

GaragePro Kenya is a demonstration project exploring practical digital solutions for automotive businesses in Kenya.

The project combines an interest in automotive engineering with web development to explore how accessible technology can help local businesses improve their online presence.

## 📄 Project Status

**Status: Working frontend MVP**

The website runs locally and includes a WhatsApp enquiry workflow. It is a demonstration project and may require customization, testing, and deployment before being used by a real garage.

---

*Built with a vision to connect automotive businesses with practical technology. 🇰🇪*
