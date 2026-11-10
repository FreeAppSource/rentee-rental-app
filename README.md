# Rentee Rental App

A mobile room & property rental application built with **React Native**, **Expo SDK 58+**, and **Expo Router**, based on the Sketch UI Kit (`rentee-ui-kit-rachelizmarvel.sketch`).

## 🚀 Features & Completed Artboards

Rentee includes complete implementations of all **32 Sketch artboards** with both **Light Mode** and **Black Mode (Dark Mode)** support:

| # | Screen | Sketch Artboard ID | Route | Description |
|---|---|---|---|---|
| 1 | **Onboarding 4, 5, 6, 7** | `34C239E6`, `FEA31C58`, `5A47366F`, `CCDFA159` | `src/app/index.jsx` | Multi-slide intro (*"Choose from a thousand of places"*, *"Well-selected accommodation"*, *"Cool and secure service"*), Sign up & Sign in triggers. |
| 2 | **Sign In** | `7FE430D9` | `src/app/login.jsx` | Phone number, Password input, show/hide toggle, and Forgot password trigger. |
| 3 | **Sign Up** | `C6EB211D` | `src/app/signup.jsx` | Full name, phone number, password, and Verification flow. |
| 4 | **Verify OTP** | `9E7FE6EC` & `E3DC0F78` | `src/app/verify.jsx` | 4-digit code verification boxes, timer countdown (12s), and resend link. |
| 5 | **Homescreen & Black Mode** | `80A3C7EC` & `AFC4B779` | `src/app/(tabs)/index.jsx` | User location (*Ho Chi Minh, Viet Nam*), Kind of accommodation chips (*Service Room, Apartment, Studio, Villa*), Featured room card, nearby listings, and instant Black Mode toggle. |
| 6 | **Searching Filter & Product** | `99747B27` & `AA7C4E4F` | `src/app/(tabs)/explore.jsx` | Filter sheet with Hourly vs Monthly price sorting, $10-$100 range slider, Bed/Bath counters, and listings catalog. |
| 7 | **Interactive Map** | `3F992141` | `src/app/(tabs)/map.jsx` | Map background with interactive price pins ($12.5, $15.0, $11.0), floating search bar, and bottom property card preview. |
| 8 | **Property Detail** | `8EBF750D` & `CD7793ED` | `src/app/details.jsx` | Property gallery (*Blue Vibe Room*), rating badge, Description / Facilities / Comments tabs, Host card (*Karen Smith*), and Book Room CTA. |
| 9 | **Booking & Complete** | `5F6F3EF8`, `BAA2B0C1`, `BF471A27` | `src/app/book.jsx` | Rental duration hours selector, price breakdown, confirmation code (*NVC35S*), and completion screen. |
| 10 | **Your Booking** | `B83C3531`, `CD7793ED`, `5610ECDE` | `src/app/(tabs)/bookings.jsx` | Ongoing vs Past booking tabs, active stay status, Message host, and Write Review trigger. |
| 11 | **Host Chat & Messages** | `FE1A5FB8`, `DF734278`, `EE7B3FF9` | `src/app/(tabs)/messages.jsx` & `src/app/chat.jsx` | Conversations list (*Karen Smith, Hilary*), live chat messaging with reception instructions, and promo notifications (*50% off*). |
| 12 | **Review Screen** | `94E066F6` | `src/app/review.jsx` | 5-star rating selector, review textarea, photo upload trigger, and submit action. |
| 13 | **Profile & Settings** | `DB6AB8B8`, `07096C7A`, `75728329`, `9CFCE3B3` | `src/app/(tabs)/profile.jsx`, `src/app/personal-info.jsx`, `src/app/settings.jsx`, `src/app/support.jsx` | Henry Quill profile, 320 points badge, Personal Info editor, Notification switches, Support hotline & FAQ accordion. |

## 🛠️ Tech Stack

- **Framework**: React Native 0.88+ / Expo SDK 58+
- **Navigation**: Expo Router (Tabs & Stacks)
- **Language**: JavaScript & JSX (`.js`, `.jsx` strictly)
- **Icons**: `@expo/vector-icons` (Ionicons)

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Rentee UI Kit** design by **Rachelizmarvel**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Rachelizmarvel](https://www.sketchappsources.com/contributor/rachelizmarvel) |
| Original design | [Rentee UI Kit](https://www.behance.net/gallery/121614473/RENTEE-ROOM-BOOKING-APP-UI-KIT) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4738-rentee-ui-kit-rsketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/rachelizmarvel> |
| Website | <https://www.behance.net/thaonguyend1bf> |
| Original file | `rentee-ui-kit-rachelizmarvel.sketch` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Rentee UI Kit" by Rachelizmarvel (https://www.behance.net/gallery/121614473/RENTEE-ROOM-BOOKING-APP-UI-KIT), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4738-rentee-ui-kit-rsketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
