import { motion } from "motion/react";

const EFFECTIVE_DATE = "August 19, 2026";

const sections = [
  {
    n: "1",
    title: "AGREEMENT TO THESE TERMS",
    body: `By downloading, installing, or using the App, you indicate that you have read, understood, and agree to these Terms. If you do not agree to these Terms, do not download, install, or use the App.

If you are using the App on behalf of a business, organization, or other legal entity, you represent that you have authority to bind that entity to these Terms, and these Terms apply to that entity as well.`,
  },
  {
    n: "2",
    title: "BOSE PRODUCTS AND BRAND AUTHORIZATION",
    body: `The App is designed to interact with compatible Bose audio products.

Bose and applicable Bose names, trademarks, product marks, logos, and brand elements are owned by Bose Corporation or its applicable affiliates. The Company is not affiliated with, sponsored by, endorsed by, or otherwise associated with Bose Corporation except to the extent of any authorization or licensing arrangements as described below.

The Company's use of authorized Bose trademarks and brand elements in connection with the App is made pursuant to applicable authorization and licensing rights granted by Bose Corporation. Such authorization does not mean that Bose Corporation has endorsed or approved the App, its content, or the Company's services.

Compatibility with Bose devices depends on the applicable device, operating system, network, and software versions. The Company does not warrant or represent that all Bose device models are supported or that any supported model will remain so following updates by Bose Corporation or by Apple.`,
  },
  {
    n: "3",
    title: "AIRPLAY",
    body: `The App may support AirPlay, a technology provided by Apple Inc.

AirPlay is a trademark of Apple Inc. The Company uses the AirPlay name and associated functionality in accordance with applicable rights.

Use of AirPlay functionality is subject to Apple's applicable terms and conditions, and is dependent on hardware compatibility, network conditions, and Apple platform requirements.`,
  },
  {
    n: "4",
    title: "LICENSE",
    body: `Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use one copy of the App on a device that you own or control, for your personal, non-commercial use.

You may not: copy or reproduce the App (except as permitted by applicable law); modify, adapt, translate, or create derivative works of the App; reverse engineer, decompile, disassemble, or attempt to derive the source code of the App, except to the extent permitted by applicable law that cannot be waived by contract; rent, lease, lend, sell, redistribute, or sublicense the App; remove or alter any proprietary notices, labels, or marks on the App; use the App for any commercial purpose or for any public display, whether commercial or non-commercial; or use the App in any way that violates applicable laws or regulations.

The App is licensed, not sold, to you.`,
  },
  {
    n: "5",
    title: "APPLE APP STORE",
    body: `The App is made available through the Apple App Store and is subject to Apple's Usage Rules set forth in Apple's App Store Terms of Service.

In the event of a conflict between these Terms and Apple's Usage Rules, Apple's Usage Rules will prevail to the extent of that conflict.

Apple has no obligation to provide maintenance or support services for the App. Any claims relating to the App — including product liability claims, consumer protection claims, or intellectual property infringement claims — are governed by these Terms and, as between the Company and Apple, the Company is responsible for such claims, not Apple.

Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance, will have the right to enforce these Terms against you as a third-party beneficiary.`,
  },
  {
    n: "6",
    title: "DEVICE AND NETWORK REQUIREMENTS",
    body: `Use of the App requires a compatible iPhone or iPad running a supported version of iOS or iPadOS. Certain functionality may additionally require: a local Wi-Fi network; compatible Bose hardware; AirPlay-compatible devices; and sufficient system resources.

The Company does not guarantee App functionality in all environments. Performance and feature availability may vary depending on your device, operating system version, network configuration, and the specific Bose hardware you are using.

You are responsible for obtaining and maintaining the hardware, software, and network connections required to use the App.`,
  },
  {
    n: "7",
    title: "MUSIC LIBRARY AND AUDIO CONTENT",
    body: `The App may access and display content from your device's local music library to facilitate music playback on compatible Bose devices.

You are solely responsible for ensuring that your use of music content through the App complies with all applicable licenses, rights, and restrictions. The Company does not grant any rights to music, audio, or other third-party content accessible through the App.

The Company does not upload, transmit, or store your music library content on Company-operated servers.`,
  },
  {
    n: "8",
    title: "SUBSCRIPTIONS AND PURCHASES",
    body: `The App may offer optional subscriptions or other in-app purchases. If you choose to purchase a subscription or other in-app purchase, the following terms apply.

All subscriptions and in-app purchases are processed by Apple through the Apple App Store. You agree to Apple's applicable payment terms and conditions.

Subscription pricing, billing cycles, introductory offers, and trial periods (if any) are displayed within the App and through the App Store at the time of purchase. Prices may vary by region and are subject to change.

Subscriptions may renew automatically for the same subscription period unless cancelled before the renewal date. Managing or cancelling a subscription can be done through your Apple ID account settings.

The Company does not receive your complete payment-card information. Limited transaction information may be provided by Apple to the Company to enable subscription entitlement and validation.`,
  },
  {
    n: "9",
    title: "APPHUD",
    body: `The App may use Apphud, a third-party subscription management platform, to validate and manage subscription entitlements and to process subscription-related events.

Apphud is an independent third party that operates its own services subject to its own terms of service and privacy policy. The Company is not responsible for Apphud's independent practices.

Subscription-related information processed through Apphud may include: purchase or transaction identifiers; subscription status and entitlement information; renewal and expiration information; trial-offer status; and other technical information necessary to validate and administer a subscription.

Your use of the App constitutes your acknowledgment that subscription management functionality may be facilitated by Apphud.`,
  },
  {
    n: "10",
    title: "REFUNDS",
    body: `All purchases are final and non-refundable, subject to applicable law and Apple's refund policies.

If you believe a refund is appropriate, please contact Apple Support or submit a refund request through Apple's applicable process, as Apple processes all payments for App Store transactions.

The Company does not independently process App Store refunds.`,
  },
  {
    n: "11",
    title: "INTELLECTUAL PROPERTY",
    body: `The App, including its design, graphics, text, software, audio, and other content created by or for the Company, is owned by or licensed to the Company and is protected by applicable intellectual property laws.

Nothing in these Terms transfers any intellectual property rights to you. You may not use the Company's intellectual property without prior written permission, except as expressly permitted by these Terms.

All Bose trademarks, product names, and brand elements remain the exclusive property of Bose Corporation or its affiliates. All Apple trademarks, including AirPlay, remain the exclusive property of Apple Inc. No right, title, or interest in those marks is conferred on you by these Terms.`,
  },
  {
    n: "12",
    title: "THIRD-PARTY SERVICES AND LINKS",
    body: `The App may reference, link to, or interact with third-party services, platforms, hardware, or content, including Apple services, Bose products, and others.

These third parties have their own terms and privacy practices, and the Company is not responsible for their independent practices, availability, or content.

Inclusion of or compatibility with a third-party service or product does not imply the Company's endorsement of that third party.`,
  },
  {
    n: "13",
    title: "ACCEPTABLE USE",
    body: `You may use the App only for lawful purposes and in accordance with these Terms.

You agree not to use the App: in any way that violates any applicable law or regulation; to interfere with, disrupt, or damage the App or any systems, networks, or servers associated with it; to attempt to gain unauthorized access to any portion or feature of the App or any system or network connected to it; to introduce any viruses, malware, or other harmful code; in any manner that could damage, disable, overburden, or impair the App; or to engage in unauthorized commercial activities, including advertising or solicitation, through the App.`,
  },
  {
    n: "14",
    title: "USER CONTENT AND FEEDBACK",
    body: `If you submit feedback, suggestions, bug reports, or other content to the Company, you grant the Company a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, create derivative works from, and otherwise exploit that feedback for any lawful purpose, without compensation to you.

You represent that any feedback you submit does not infringe any third-party intellectual property rights and does not contain any information that is confidential or that you are not authorized to disclose.`,
  },
  {
    n: "15",
    title: "DISCLAIMER OF WARRANTIES",
    body: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.

THE COMPANY DOES NOT WARRANT THAT: THE APP WILL MEET YOUR REQUIREMENTS; THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; THE RESULTS OBTAINED FROM USING THE APP WILL BE ACCURATE OR RELIABLE; ANY ERRORS OR DEFECTS IN THE APP WILL BE CORRECTED; OR THE APP WILL BE COMPATIBLE WITH ANY PARTICULAR BOSE DEVICE OR OPERATING SYSTEM VERSION.

SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT FULLY APPLY TO YOU.`,
  },
  {
    n: "16",
    title: "LIMITATION OF LIABILITY",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE APP, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

IN NO EVENT SHALL THE COMPANY'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE APP EXCEED THE AMOUNT ACTUALLY PAID BY YOU TO THE COMPANY IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR FIFTY EUROS (€50), WHICHEVER IS GREATER.

THE LIMITATIONS OF LIABILITY IN THIS SECTION ARE A FUNDAMENTAL PART OF THE BASIS OF THE BARGAIN BETWEEN YOU AND THE COMPANY.

SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT FULLY APPLY TO YOU.`,
  },
  {
    n: "17",
    title: "INDEMNIFICATION",
    body: `You agree to defend, indemnify, and hold harmless the Company and its officers, directors, employees, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to: your violation of these Terms; your use of the App in a manner not authorized by these Terms; your violation of any applicable law or the rights of any third party; or any content you submit through the App.`,
  },
  {
    n: "18",
    title: "UPDATES AND CHANGES TO THE APP",
    body: `The Company may update, modify, or discontinue the App or any features of the App at any time, with or without notice.

The Company may release new versions of the App through the Apple App Store. Certain updates may be required for the continued use of the App. The Company is not obligated to maintain any particular feature or version of the App.

Continued use of the App following any update constitutes your acceptance of the updated App as provided.`,
  },
  {
    n: "19",
    title: "TERMINATION",
    body: `These Terms are effective until terminated.

You may terminate these Terms at any time by deleting the App from your device and ceasing all use of the App.

The Company may suspend or terminate your access to the App at any time, without notice, if you breach these Terms or if the Company determines that suspension or termination is necessary to comply with applicable law or to protect the interests of the Company or others.

Upon termination, your license to use the App ceases immediately. Sections that by their nature should survive termination will survive, including Sections 11, 14, 15, 16, 17, 22, and 23.`,
  },
  {
    n: "20",
    title: "PRIVACY",
    body: `Your use of the App is also subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.`,
  },
  {
    n: "21",
    title: "CHILDREN",
    body: `The App is not directed to children. We do not knowingly permit children to use the App in a way that would require them to provide personal information.

If you are a parent or legal guardian and you believe your child has used the App in a way that violates this section or applicable law, please contact us using the details below.`,
  },
  {
    n: "22",
    title: "GOVERNING LAW",
    body: `These Terms are governed by and construed in accordance with the laws of the Republic of Croatia, without regard to conflict-of-law principles.

If you are a consumer resident in the European Union, nothing in this section affects your rights under mandatory consumer-protection laws of your country of residence that cannot be waived by contract. The foregoing is without prejudice to any mandatory jurisdiction rules that apply to you as a consumer under applicable EU law.`,
  },
  {
    n: "23",
    title: "DISPUTE RESOLUTION",
    body: `We hope to resolve any dispute informally. If you have a concern, please contact us first using the details below.

Subject to mandatory consumer-protection law that cannot be waived by contract, any dispute arising out of or in connection with these Terms, including any dispute about its existence, validity, or termination, shall be subject to the exclusive jurisdiction of the competent courts in Zagreb, Croatia.

If you are a consumer in the European Union, you also have the right to submit a complaint to the European Online Dispute Resolution platform at https://ec.europa.eu/consumers/odr/.`,
  },
  {
    n: "24",
    title: "CHANGES TO THESE TERMS",
    body: `We may update these Terms from time to time. When we do, we will revise the "Effective Date" above.

If the change is material, we will provide notice through the App or by other appropriate means where required by applicable law.

Your continued use of the App after the revised Terms become effective constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, stop using the App.`,
  },
  {
    n: "25",
    title: "ENTIRE AGREEMENT",
    body: `These Terms, together with the Privacy Policy and any other policies or notices referenced in these Terms, constitute the entire agreement between you and the Company regarding the App and supersede all prior agreements, understandings, and representations, whether written or oral, relating to the subject matter of these Terms.`,
  },
  {
    n: "26",
    title: "SEVERABILITY AND WAIVER",
    body: `If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.

The Company's failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of that right or provision.`,
  },
  {
    n: "27",
    title: "CONTACT US",
    body: `If you have questions about these Terms, please contact:

PAR - NEPAR d.o.o.
Prilaz Gjure Deželića 89
10000 Zagreb
Croatia

Email: marija@par-nepar.store`,
  },
];

export default function Terms() {
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
              Terms of Use
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
              These Terms of Use ("Terms") govern your download, installation, and use of the Bose Sound Controller mobile application (the "App") made available by <strong style={{ color: "#ffffff" }}>PAR - NEPAR d.o.o.</strong>, with its registered address at Prilaz Gjure Deželića 89, 10000 Zagreb, Croatia (the "Company," "we," "us," or "our").
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
              These Terms should be read together with our Privacy Policy.
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
