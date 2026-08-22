import { motion } from "motion/react";

const EFFECTIVE_DATE = "August 19, 2026";

const sections = [
  {
    n: "1",
    title: "SCOPE",
    body: `This Privacy Policy applies to information processed in connection with your use of the App.

It describes: what information the Company does and does not collect; how the App operates without Company-operated user accounts or backend storage; how subscription-related information may be processed; the role of Apple; how third-party technologies may operate independently from the Company; and your applicable privacy rights.

This Privacy Policy does not govern the independent privacy practices of third parties that provide their own products, devices, operating systems, platforms, or services.`,
  },
  {
    n: "2",
    title: "NO COMPANY USER ACCOUNTS",
    body: `The App does not require you to create or maintain an account with the Company.

We do not operate a user-registration system for the App. Accordingly, we do not request or maintain account credentials such as usernames or passwords for ordinary use of the App.

Any Apple ID or other third-party account that may be involved in accessing platform functionality or completing a purchase is maintained by the applicable third party and is subject to that third party's privacy practices.`,
  },
  {
    n: "3",
    title: "NO COMPANY-OPERATED BACKEND",
    body: `The App does not use a Company-operated backend to collect or store personal information for its ordinary functionality.

We do not maintain a remote Company database containing profiles, listening histories, audio content, device-control activity, or other records concerning ordinary use of the App.

The App's core audio and device-control functionality is designed to operate without transmitting such information to Company-operated servers.`,
  },
  {
    n: "4",
    title: "INFORMATION WE DO NOT COLLECT FOR ORDINARY APP USE",
    body: `Based on the App's current functionality, the Company does not collect through a Company-operated backend: your name; postal address; telephone number; date of birth; account credentials; precise or approximate location; contacts or address-book information; photographs or videos; microphone recordings; music or audio files; listening history; browsing history; search history; advertising identifiers for behavioral advertising; health or fitness information; financial account credentials; complete payment-card information; or user-generated profiles.

The App does not use a Company-operated system to create behavioral profiles of users.`,
  },
  {
    n: "5",
    title: "DEVICE AND AUDIO FUNCTIONALITY",
    body: `The App provides functionality related to music playback, audio controls, sound personalization, and interaction with compatible audio devices.

The Company does not operate a backend service that receives or stores your audio content, listening activity, equalizer preferences, playback activity, or device-control history as part of ordinary App use.

Certain functionality may rely on technologies, operating-system capabilities, compatible hardware, or services made available by third parties. Those technologies may perform processing independently under their own terms and privacy practices.`,
  },
  {
    n: "6",
    title: "BOSE PRODUCTS AND BRAND AUTHORIZATION",
    body: `Certain App functionality is designed for interaction with compatible Bose products.

Bose and applicable Bose names, trademarks, product marks, logos, and brand elements are owned by Bose Corporation or its applicable affiliates.

The Company's use of authorized Bose trademarks and brand elements in connection with the App is made pursuant to applicable authorization and licensing rights granted by Bose Corporation.

The existence of such licensing or authorization does not mean that Bose Corporation receives personal information from the Company through a Company-operated backend. Unless a particular Bose service or technology is separately used and expressly disclosed, the Company does not transmit personal information to Bose Corporation merely because the App is designed to interact with compatible Bose products.`,
  },
  {
    n: "7",
    title: "AIRPLAY",
    body: `The App may support AirPlay, a technology provided by Apple Inc., to facilitate supported wireless audio playback and interaction between compatible devices.

AirPlay functionality is provided through Apple's technologies and compatible devices. The Company does not operate the AirPlay infrastructure and does not receive or store the content of your AirPlay transmissions through a Company-operated backend.

Your use of Apple technologies remains subject to Apple's applicable terms and privacy practices.`,
  },
  {
    n: "8",
    title: "SUBSCRIPTIONS AND PURCHASE INFORMATION",
    body: `The App may offer subscriptions or other in-app purchases through the Apple App Store. Payments are processed by Apple, not directly by the Company.

The Company does not receive or store your complete payment-card number, card security code, Apple ID password, or other complete payment credentials.

To provide subscription functionality, limited transaction and entitlement information may be processed in connection with a purchase. This may include: product or subscription identifier; transaction or purchase identifier; subscription status; entitlement status; purchase or renewal status; expiration information; trial or introductory-offer status; and other limited technical information necessary to validate and administer a subscription.`,
  },
  {
    n: "9",
    title: "APPLE",
    body: `If you download the App or purchase a subscription through the Apple App Store, Apple may independently process information relating to: App Store downloads; purchases and subscriptions; payment processing; transaction history; Apple ID; device and platform information; fraud prevention; security; and operation of Apple's services.

Apple determines its own purposes and means of processing for its independent platform and payment activities. Such processing is governed by Apple's applicable privacy policies and terms and is not controlled by this Privacy Policy.`,
  },
  {
    n: "10",
    title: "NO ADVERTISING OR TRACKING",
    body: `The App does not contain third-party advertising networks.

The Company does not use personal information collected through the App for cross-app or cross-website behavioral advertising. The Company does not sell personal information. The Company does not rent personal information to data brokers or advertisers. The Company does not use advertising identifiers for targeted advertising through the App. The Company does not combine App activity with information obtained from unrelated third-party applications or websites for advertising or behavioral profiling.`,
  },
  {
    n: "11",
    title: "NO GENERAL-PURPOSE ANALYTICS",
    body: `The Company does not integrate general-purpose third-party analytics services into the App for monitoring ordinary user behavior.

In particular, the App is not designed to transmit ordinary App usage activity to a Company-operated analytics backend.`,
  },
  {
    n: "12",
    title: "NO FIREBASE",
    body: `The App does not use Firebase as a Company-operated backend, user-authentication system, analytics platform, cloud database, or storage service.

Accordingly, the Company does not maintain App user profiles, listening histories, audio content, or ordinary App activity through Firebase.`,
  },
  {
    n: "13",
    title: "DATA RETENTION",
    body: `Because the Company does not operate user accounts or a backend database for ordinary App functionality, the Company does not maintain a centralized retention period for personal information relating to ordinary App usage.

Where limited subscription-related information is processed through Apple, retention may be determined by the applicable provider according to its legal, operational, security, accounting, fraud-prevention, and contractual requirements.

If the Company is required by law to retain particular records, such records will be retained only for the period required or permitted by applicable law.`,
  },
  {
    n: "14",
    title: "DATA SHARING",
    body: `The Company does not sell personal information. The Company does not share personal information with advertising networks or data brokers.

Limited information may be processed or disclosed where reasonably necessary in the following circumstances:

Apple. Information associated with purchases, subscriptions, transactions, or entitlements may be processed by Apple as described above.

Legal obligations. Information may be disclosed where required by applicable law, a valid court order, governmental request, or other legally binding process.

Protection of rights. Where legally permitted, information may be used or disclosed where reasonably necessary to establish, exercise, or defend legal claims or protect the rights and security of the Company or others.

Corporate transactions. If the Company undergoes a merger, acquisition, restructuring, or similar transaction, relevant information lawfully held by the Company may be transferred as part of that transaction, subject to applicable law.`,
  },
  {
    n: "15",
    title: "LEGAL BASES FOR PROCESSING",
    body: `Where the General Data Protection Regulation ("GDPR"), UK GDPR, or comparable legislation applies, personal information may be processed only where an applicable legal basis exists.

Performance of a contract — where limited processing is necessary to provide a purchased subscription or requested functionality.

Legal obligations — where processing is necessary to comply with applicable law.

Legitimate interests — where processing is necessary for legitimate operational, security, fraud-prevention, legal, or business purposes and those interests are not overridden by your rights and interests.

Consent — where applicable law requires consent for a particular form of processing.

The Company does not rely on consent as a mechanism for behavioral advertising because the App does not use personal information for such advertising.`,
  },
  {
    n: "16",
    title: "INTERNATIONAL DATA PROCESSING",
    body: `Apple or other infrastructure providers may process information in countries other than the country in which you reside.

Where international transfers of personal information are subject to legal safeguards, the applicable service provider is responsible for implementing appropriate safeguards for processing performed under its responsibility, as required by applicable law.

The Company does not independently transfer ordinary App usage information to a Company-operated international backend because no such backend is used for ordinary App functionality.`,
  },
  {
    n: "17",
    title: "DATA SECURITY",
    body: `The Company applies reasonable administrative and technical measures appropriate to the nature of the App and the information processed under the Company's control.

The App's privacy architecture reduces centralized data exposure by operating without Company user accounts, advertising systems, general-purpose analytics, or a Company-operated backend for ordinary App functionality.

No method of electronic processing or transmission can be guaranteed to be completely secure. Accordingly, absolute security cannot be guaranteed. Third-party providers are responsible for the security of information processed within systems independently controlled by them.`,
  },
  {
    n: "18",
    title: "CHILDREN'S PRIVACY",
    body: `The App is not designed for the purpose of knowingly collecting personal information from children.

The Company does not operate user accounts, advertising profiles, or a Company backend that knowingly collects personal information from children through ordinary App use.

If we become aware that personal information has been collected by the Company from a child in violation of applicable law, we will take reasonable steps to address the matter as required by law.

A parent or legal guardian who believes that the Company possesses personal information relating to a child may contact us using the details provided below.`,
  },
  {
    n: "19",
    title: "YOUR PRIVACY RIGHTS",
    body: `Depending on your jurisdiction and the nature of any personal information actually processed by the Company, you may have rights including the right to: request access to personal information; request correction of inaccurate personal information; request deletion of personal information; request restriction of certain processing; object to certain processing; request portability of eligible personal information; withdraw consent where processing is based on consent; and lodge a complaint with an applicable supervisory authority.

Because the Company does not maintain Company user accounts or a centralized database of ordinary App usage, we may not possess information that can be identified as relating to you in response to a privacy request.

Where information is controlled independently by Apple or another third-party provider, requests concerning that information may need to be directed to the relevant provider.`,
  },
  {
    n: "20",
    title: "EUROPEAN ECONOMIC AREA AND CROATIA",
    body: `For processing for which the Company determines the purposes and means, the data controller is:

PAR - NEPAR d.o.o.
Prilaz Gjure Deželića 89
10000 Zagreb
Croatia

Individuals located in the European Economic Area may exercise applicable rights under the GDPR.

You also have the right to lodge a complaint with the competent data-protection supervisory authority. In Croatia, the competent supervisory authority is the Croatian Personal Data Protection Agency (AZOP).

We encourage you to contact us first if you have a question or concern regarding our privacy practices.`,
  },
  {
    n: "21",
    title: "UNITED STATES PRIVACY RIGHTS",
    body: `Residents of certain U.S. states may have additional privacy rights under applicable state privacy laws.

Depending on the applicable law and whether its statutory requirements apply to the Company, these may include rights concerning access, correction, deletion, portability, sale, sharing, or targeted advertising.

The Company does not sell personal information and does not use personal information collected through the App for cross-context behavioral advertising.

Nothing in this Privacy Policy limits rights that cannot lawfully be waived under applicable privacy legislation.`,
  },
  {
    n: "22",
    title: "THIRD-PARTY PRIVACY PRACTICES",
    body: `Third-party technologies, platforms, hardware manufacturers, subscription providers, and operating-system providers may process information independently from the Company.

Their processing is governed by their respective privacy notices and contractual terms.

The Company does not control and cannot modify the independent privacy practices of Apple, Bose Corporation, or other third parties.

The inclusion of compatibility with a third-party product or technology does not, by itself, mean that the Company transfers personal information to the owner of that product or technology.`,
  },
  {
    n: "23",
    title: "CHANGES TO THIS PRIVACY POLICY",
    body: `We may update this Privacy Policy from time to time to reflect changes in the App, legal requirements, or our privacy practices.

The current version will be made available through the App or an associated Company website.

Where required by applicable law, material changes will be communicated appropriately and consent will be obtained where legally required.

The "Effective Date" above identifies the effective date of the current version.`,
  },
  {
    n: "24",
    title: "CONTACT US",
    body: `If you have questions concerning this Privacy Policy, the Company's privacy practices, or an applicable privacy request, please contact:

PAR - NEPAR d.o.o.
Prilaz Gjure Deželića 89
10000 Zagreb
Croatia

Email: marija@par-nepar.store`,
  },
];

export default function Privacy() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white min-h-screen">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pt-40 pb-16">
        <div className="max-w-[860px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#6B6B6B",
                marginBottom: "20px",
              }}
            >
              Legal
            </p>
            <h1
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.25rem, 6vw, 5rem)",
                lineHeight: 0.93,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "28px",
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ fontSize: "14px", color: "#6B6B6B", marginBottom: "8px" }}>
              Effective Date: {EFFECTIVE_DATE}
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#888888",
                maxWidth: "720px",
                marginTop: "24px",
              }}
            >
              This Privacy Policy explains how <strong style={{ color: "#ffffff" }}>PAR - NEPAR d.o.o.</strong>, with its registered address at Prilaz Gjure Deželića 89, 10000 Zagreb, Croatia ("Company," "we," "us," or "our"), handles information in connection with our mobile application and its related functionality (collectively, the "App").
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#888888",
                maxWidth: "720px",
                marginTop: "16px",
              }}
            >
              We have designed the App to operate with minimal processing of personal information. The App does not require a Company account, does not use a Company-operated backend for ordinary App functionality, and does not use advertising networks or general-purpose analytics services.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#888888",
                maxWidth: "720px",
                marginTop: "16px",
              }}
            >
              This Privacy Policy should be read together with our Terms of Use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTIONS ───────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pb-24 md:pb-36">
        <div className="max-w-[860px] mx-auto" style={{ borderTop: "1px solid #1A1A1A" }}>
          {sections.map((sec) => (
            <div
              key={sec.n}
              className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-8 lg:gap-16 py-10 md:py-12"
              style={{ borderBottom: "1px solid #1A1A1A" }}
            >
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 items-start">
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#B5920A",
                    minWidth: "28px",
                    paddingTop: "2px",
                  }}
                >
                  {sec.n.padStart(2, "0")}
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#ffffff",
                    marginBottom: "16px",
                  }}
                >
                  {sec.title}
                </h2>
                {sec.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.78,
                      color: "#888888",
                      marginBottom: "16px",
                      maxWidth: "680px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
