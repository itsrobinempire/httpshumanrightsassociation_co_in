import React, { useState } from 'react'
import logo from './assets/logo.png'
import sambhaji_historical from './assets/sambhaji_historical.jpg'
import ahilyabai_historical from './assets/ahilyabai_historical.png'
import hemu_historical from './assets/hemu_historical.png'
import s1 from './assets/service_culture.jpg'
import s2 from './assets/service_distribution.jpg'
import s3 from './assets/service_distribution_2.jpg'
import s4 from './assets/service_mural_2.jpg'
import s5 from './assets/service_publicity.jpg'
import s6 from './assets/service_sports.jpg'
import wa1 from './assets/service_wa1.jpg'
import wa2 from './assets/service_wa2.jpg'
import wa3 from './assets/service_wa3.jpg'
import wa4 from './assets/service_wa4.jpg'
import wa5 from './assets/service_wa5.jpg'
import wa6 from './assets/service_wa6.jpg'
import wa7 from './assets/service_wa7.jpg'
import wa8 from './assets/service_wa8.jpg'
import wa9 from './assets/service_wa9.jpg'
import wa10 from './assets/service_wa10.jpg'
import wa11 from './assets/service_wa11.jpg'
import wa12 from './assets/service_wa12.jpg'
import wa13 from './assets/service_wa13.jpg'
import wa14 from './assets/service_wa14.jpg'
import wa15 from './assets/service_wa15.jpg'
import wa16 from './assets/service_wa16.jpg'
import wa17 from './assets/service_wa17.jpg'
import wa18 from './assets/service_wa18.jpg'
import './App.css'

const content = {
  en: {
    orgName: "Kshatriya Freedom Fighters & Human Rights Association",
    tagline: "Honoring the Legacy of Valor, Protecting the Rights of Humanity",
    nav: {
      home: "Home",
      about: "About Us",
      mission: "Our Mission",
      vision: "Our Vision",
      services: "Services",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      freedomFighters: "Freedom Fighters",
      moa: "MoA",
      faq: "FAQs"
    },
    hero: {
      title: "Protecting Fundamental Human Rights",
      subtitle: "Join us in our journey towards a society where every individual's dignity is preserved and protected.",
      cta: "Learn More"
    },
    news: "Latest News: New awareness program launched for rural areas. | Volunteer applications are open for 2026. | Join us for the Global Rights Summit next month.",
    about: {
      title: "About Our Association",
      description: "The Kshatriya Freedom Fighters & Human Rights Association is dedicated to honoring the heroic legacy of Kshatriya warriors who fought for India's independence while simultaneously advocating for the fundamental rights of all citizens today. We bridge the gap between historical valor and modern justice.",
      background: "Our association was formed to bring together the descendants and admirers of great Kshatriya freedom fighters like Babu Kunwar Singh, Ram Prasad Bismil, and countless others who sacrificed their lives for the motherland. We aim to carry forward their torch of liberty by protecting human rights in the contemporary world."
    },
    mission: {
      title: "Our Mission",
      statement: "To empower individuals and communities to claim their rights and advocate for systemic change through education, legal support, and global solidarity.",
      objectives: [
        "Provide legal aid to victims of human rights violations.",
        "Organize educational workshops on constitutional rights.",
        "Advocate for policy changes at local and national levels.",
        "Create a support network for human rights defenders."
      ]
    },
    vision: {
      title: "Our Vision",
      statement: "A society where the spirit of 'Kshatriya Dharma' (righteous duty) inspires everyone to stand up against injustice and where every individual's rights are naturally respected.",
      impact: "We envision a future where the courage of our ancestors serves as a foundation for a modern, just, and equitable society.",
      manifesto: [
        {
          title: "1. Economic Disparity: Profit vs. Wages",
          desc: "Associating minimum wage directly with the inflation index. When commodity prices double, corporate profits soar while a laborer's daily wage stagnates. This is a call for an economic war against corporate exploitation."
        },
        {
          title: "2. The 'Invisible' Contribution & Mental Health of Drivers",
          desc: "Changing drivers after 300-400 km is a 'Right to Rest'. A safe and stress-free driver drastically reduces road fatalities. Extortion by RTOs and police highlights the 'One Constitution, Multiple Rules' flaw, demanding administrative reform."
        },
        {
          title: "3. Consumer Sovereignty",
          desc: "Government services and Municipalities are 'service providers'. If citizens pay for 30 days of service, they deserve 30 days of service. Enforcing the Consumer Protection Act shifts citizens from being 'beggars' to the 'owners' of the system."
        },
        {
          title: "4. The 'Trust' Model of Education and its Decline",
          desc: "Institutions using 'non-profit' statuses are often doing the most profiteering. Working-class families take on heavy debt to buy degrees, but not skills. We must end this commercialization, moving towards a nationalized and skill-based education system."
        },
        {
          title: "5. Coordination of Self-Respect and History",
          desc: "Drawing inspiration from historic struggles links today's 'struggle against the system' to our glorious traditions. Furthermore, recognizing figures like Rani Padmavati emphasizes that women's safety is about dignity, values, and sacrifice, not just law."
        },
        {
          title: "6. Legal & Constitutional Guard",
          desc: "Rooted in the 'Rule of Law', we connect UN human rights standards directly to the grassroots of Indian villages. Our strategy revolves around 'cooperation and pressure'—improving the system from within by collaborating with administration to stop crimes while actively punishing corrupt officials."
        },
        {
          title: "7. Healthcare Justice",
          desc: "We focus critically on healthcare facilities. Exploitative practices like 'prescribing outside medicine' in government hospitals are massive rackets, and we take direct legal action against this corruption. Our agenda also heavily focuses on preventing diseases through widespread health awareness campaigns."
        },
        {
          title: "8. Surgical Strike on Social Evils",
          desc: "We tackle sensitive taboo subjects head-on: curbing female feticide, dowries, and child marriage requires a true 'cultural renaissance'. Moving beyond mere sympathy, we actively propose and build solid infrastructure like public hostels, orphanages, and organized mass marriages for the destitute."
        },
        {
          title: "9. Ecological Responsibility",
          desc: "Environmental health is inextricably linked to human rights. We champion tree plantation, clean river initiatives, and public drinking fountains. We strive to make water conservation a central pillar of local public discourse."
        },
        {
          title: "10. Nation Building and Integrity",
          desc: "At the core of our humanity is fostering unity, secularism, and patriotic devotion. Going beyond charity, our ultimate goal is to generate true self-reliance—providing self-employment opportunities and restoring the unshakeable self-confidence of everyday citizens."
        }
      ],
      bigPicture: {
        title: "A Holistic View (The Big Picture)",
        intro: "Our overarching goal is to implement a 'Social Audit' system built on:",
        points: [
          "Accountability: Government officials and companies must be accountable to the public.",
          "Dignity: A street vendor or driver deserves the same respect as an administrative officer.",
          "Transparency: Services received in exchange for taxes and fees must be completely transparent."
        ],
        conclusion: "A Crucial Thought: This manifesto lays the foundation for 'Satyagraha 2.0', to reform the system through digital consciousness."
      },
      implementation: {
        title: "Translating Universal Rights to Local Reality",
        intro: "To implement this vision faithfully on the ground, we operate on three distinct levels:",
        levels: [
          { title: "Legal Cell:", desc: "A dedicated team of lawyers fighting human rights violations and corruption." },
          { title: "Volunteer Network:", desc: "A robust grassroots network across villages providing direct real-time information." },
          { title: "Publicity Wing:", desc: "Educating the general public about their 'Constitutional Rights' through seminars and cultural programs." }
        ],
        conclusion: "Active Citizenship: We aim to transform the public from mere 'voters' into 'rights-conscious citizens'."
      },
      servicesVision: {
        title: "Manpower & Service Vision",
        points: [
          {
            title: "1. Security & Protection",
            desc: "Beyond ideas, we provide manpower to enforce discipline. Supplying everything from security guards to gunmen and bouncers shows our capacity for versatile, high-profile protection."
          },
          {
            title: "2. Publicity & Outreach",
            desc: "Expertise in mass communication: utilizing 'Nukkad Nataks' (street plays) for emotional messaging, roadshows for visibility, and wall/shop branding for long-term recall."
          },
          {
            title: "3. Research & Survey",
            desc: "Data-driven strategy: Understanding genuine public issues, the ground reality of government schemes, and market demand through factual research."
          }
        ]
      },
      hybridModel: {
        title: "Integrated Deep Dive: The Hybrid Model",
        desc: "When we combine our human rights vision with our manpower and service vision, a powerful 'Social Enterprise' emerges. On one hand, we generate employment and revenue by providing professional services. On the other hand, we deploy that exact same manpower and those very resources to passionately drive social reform and protect human rights."
      }
    },
    services: {
      title: "Our Programs & Services",
      list: [
        { title: "Legal Advocacy", desc: "Expert legal assistance for those whose rights have been compromised." },
        { title: "Right to Education", desc: "Ensuring every child has access to quality education without discrimination." },
        { title: "Women's Empowerment", desc: "Programs focusing on the social, economic, and legal rights of women." },
        { title: "Environmental Justice", desc: "Fighting for the right to a clean and safe environment for all communities." }
      ]
    },
    driverWelfare: {
      title: "Driver Welfare Mission",
      subtitle: "We are dedicated to the safety and respect of all drivers.",
      content: [
        "We provide free health checkup camps, life insurance for drivers, and health insurance for all family members to ensure their safety.",
        "We stand with drivers to ensure swift action and justice in incidents of assault or bribery demands.",
        "We strongly oppose illegal and arbitrary extortion, forced labor, and underpayment by RTOs, police officers, or politicians.",
        "To reduce accidents on long routes, we advocate for at least three drivers per vehicle (max 300-400 km per driver). The organization takes responsibility for advocating this safety measure.",
        "If India is one and its constitution is one, why are drivers looted in the name of paper checking at different RTOs? This corruption must end immediately. The organization is available 24/7 to support drivers."
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help and listen to your concerns.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message"
      },
      info: {
        address: "C/O SANTOSH KUMAR RAI, S/O AMAR SINGH, WAR, Begumganj, Raisen, Begamganj, Madhya Pradesh, India, 464881",
        phone: "9755534989 / 9713354353",
        email: "kshatriyafreedomfigters@gmail.com"
      }
    },
    footer: {
      about: "Honoring our heroes, protecting our future. Dedicated to Kshatriya legacy and universal rights.",
      quickLinks: "Quick Links",
      reachUs: "Reach Us",
      copyright: "© 2026 Kshatriya Freedom Fighters & Human Rights Association. All Rights Reserved."
    },
    privacy: {
      title: "Privacy Policy",
      content: "Your privacy is important to us. This privacy policy document outlines the types of personal information that is received and collected by the Human Rights Association and how it is used.",
      sections: [
        { title: "Information Collection", text: "We may collect information you provide directly to us through forms, such as your name and email address, only to respond to your inquiries." },
        { title: "Data Security", text: "We implement a variety of security measures to maintain the safety of your personal information." }
      ]
    },
    faqPg: {
      title: "Frequently Asked Questions",
      list: [
        { q: "How can I volunteer?", a: "To volunteer, please visit our contact page and send us a message with your background and area of interest." },
        { q: "Does the association provide legal aid?", a: "Yes, we operate dedicated Legal Aid Cells to provide free or subsidized representation to marginalized sections of society." },
        { q: "How do I report a human rights violation?", a: "You can report violations through our contact form or by visiting our nearest regional office." }
      ]
    },
    labels: {
      clause: "CLAUSE",
      reachUs: "Reach Us",
      address: "Address",
      phone: "Phone",
      email: "Email",
      objectives: "Objectives",
      futureImpact: "Future Impact"
    },


    moa: {
      title: "Memorandum of Association (MoA)",
      subtitle: "Official Charter and Objectives",
      sections: [
        {
          id: "A",
          title: "PRIMARY SOCIAL & CHARITABLE OBJECTS",
          items: [
            {
              title: "1. PROMOTION OF EDUCATION",
              points: [
                "Establish and manage schools (Primary to Higher Secondary), colleges (Engineering, Medical, Law), ITIs, and polytechnics across India.",
                "Promote education among poor, SC/ST, OBC, and minority communities via scholarships and subsidies.",
                "Establish free libraries and digital learning centers in rural and slum areas.",
                "Distribute free educational kits (books, stationery, uniforms).",
                "Promote adult literacy and non-formal education programs."
              ]
            },
            {
              title: "2. HUMAN RIGHTS AND SOCIAL JUSTICE",
              points: [
                "Operate Legal Aid Cells to provide free/subsidized representation to marginalized sections.",
                "Assist victims of injustice, atrocities, and human rights violations.",
                "Organize legal awareness camps (Lok Adalats) and workshops.",
                "Collaborate with DLSA/SLSA for pro-bono services.",
                "Promote RTI Act as a tool for transparency and public accountability."
              ]
            },
            {
              title: "3. DRIVER'S WELFARE ASSOCIATION",
              points: [
                "Organize a dedicated 'Driver's Welfare Organisation' for all vehicle types.",
                "Provide subsidized health and life insurance for drivers.",
                "Organize free medical, eye, and de-addiction camps.",
                "Establish strategic rest houses and nominal food stalls for long-distance drivers."
              ]
            },
            {
              title: "4. WOMEN EMPOWERMENT & RIGHTS",
              points: [
                "Host seminars and 'Mahila Sammelans' for awareness on rights and hygiene.",
                "Form Self-Help Groups (SHGs) for economic empowerment.",
                "Establish working women's hostels and creches.",
                "Provide counseling for victims of domestic violence and abuse."
              ]
            },
            {
              title: "5. CULTURE AND NATURE CONSERVATION",
              points: [
                "Undertake large-scale tree plantations and water conservation projects (rainwater harvesting).",
                "Preserve ancient monuments and cultural heritage sites.",
                "Maintain the National Flag and install memorials for freedom fighters and cultural icons.",
                "Conduct awareness programs on biodiversity and plastic reduction."
              ]
            },
            {
              title: "6. GAUSHALA & RURAL DEVELOPMENT",
              points: [
                "Establish and manage Gaushalas for abandoned cattle.",
                "Produce organic manure and bio-gas from cow by-products.",
                "Provide milk products to the needy at minimum rates.",
                "Promote sustainable agricultural practices in villages."
              ]
            },
            {
              title: "7. SKILL DEVELOPMENT",
              points: [
                "Establish vocational training centers in tailoring, IT, electrical, and hospitality.",
                "Provide certification and placement assistance."
              ]
            },
            {
              title: "8. ELDERLY & ORPHAN WELFARE",
              points: [
                "Manage Old Age Homes (Vriddh Ashram) with dignity and medical care.",
                "Run Children's Homes (Bal Ashram) for orphaned or street children."
              ]
            },
            {
              title: "9. WIDOW REHABILITATION",
              points: [
                "Provide skill training and social rehabilitation.",
                "Promote and facilitate widow remarriage."
              ]
            },
            {
              title: "10. CHILD WELFARE & RTE",
              points: [
                "Implement 'Beti Bachao, Beti Padhao' and ensure Right to Education (RTE) enrollment.",
                "Organize bridge courses for child laborers."
              ]
            },
            {
              title: "11. COMMUNITY KITCHEN & HEALTH",
              points: [
                "Operate Roti Banks and 'Neki ki Deewar' for hunger relief.",
                "Organize blood donation and free medicine distribution camps."
              ]
            },
            {
              title: "12. ORGAN DONATION",
              points: [
                "Create mass awareness and register voluntary donors for eyes/organs.",
                "Collaborate with hospitals for transplant facilitation."
              ]
            },
            {
              title: "13. PILGRIMAGE & TRAVEL",
              points: [
                "Sponsor free 'Teerth Yatra' for poor or aged citizens annually.",
                "Operate affordable transport services for the general public."
              ]
            },
            {
              title: "14. EVENT & MANPOWER SERVICES",
              points: [
                "Handle commercial Event Management and Manpower Supply/Security.",
                "Revenue generated is strictly used for the organization's charitable objects."
              ]
            },
            {
              title: "15. CYBER & NATIONAL SECURITY",
              points: [
                "Dedicated Cyber Safety team and anti-terror awareness workshops."
              ]
            },
            {
              title: "16. DISASTER MANAGEMENT",
              points: [
                "Active relief during floods, riots, or pandemics (food, water, shelter)."
              ]
            }
          ]
        },
        {
          id: "VI",
          title: "INCIDENTAL OR ANCILLARY OBJECTS",
          points: [
            "Acquire or lease property for organization objects.",
            "Invest funds subject to Companies Act provisions.",
            "Accept donations, grants, and subscriptions.",
            "Collaborate with NGOs and Govt bodies."
          ]
        },
        {
          id: "VII",
          title: "APPLICATION OF PROFITS",
          points: [
            "Income used solely for promoting organization objects.",
            "No dividends or bonuses to members; only reasonable remuneration for staff/services."
          ]
        }
      ]
    }
  },
  hi: {
    orgName: "क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन",
    tagline: "वीरता की विरासत का सम्मान, मानवता के अधिकारों की रक्षा",
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      mission: "हमारा लक्ष्य",
      vision: "हमारा दृष्टिकोण",
      services: "सेवाएं",
      contact: "संपर्क करें",
      privacy: "गोपनीयता नीति",
      freedomFighters: "स्वतंत्रता सेनानी",
      moa: "एमओए (संस्था का ज्ञापन)",
      faq: "एफएक्यू"
    },
    hero: {
      title: "मौलिक मानवाधिकारों की रक्षा",
      subtitle: "एक ऐसे समाज की ओर हमारी यात्रा में शामिल हों जहाँ प्रत्येक व्यक्ति की गरिमा सुरक्षित और संरक्षित हो।",
      cta: "अधिक जानें"
    },
    news: "ताज़ा समाचार: ग्रामीण क्षेत्रों के लिए नया जागरूकता कार्यक्रम शुरू। | 2026 के लिए स्वयंसेवक आवेदन खुले हैं। | अगले महीने ग्लोबल राइट्स समिट में हमारे साथ जुड़ें।",
    about: {
      title: "हमारे एसोसिएशन के बारे में",
      description: "क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन उन क्षत्रिय नायकों की वीरतापूर्ण विरासत को सम्मानित करने के लिए समर्पित है जिन्होंने भारत की स्वतंत्रता के लिए लड़ाई लड़ी, साथ ही आज सभी नागरिकों के मौलिक अधिकारों की वकालत करते हैं। हम ऐतिहासिक वीरता और आधुनिक न्याय के बीच की खाई को पाटते हैं।",
      background: "हमारा एसोसिएशन मातृभूमि के लिए अपने प्राणों की आहुति देने वाले अनगिनत  महान क्षत्रिय स्वतंत्रता सेनानियों के वंशजों और प्रशंसकों को एक साथ लाने के लिए बनाया गया था। हमारा लक्ष्य समकालीन दुनिया में मानवाधिकारों की रक्षा करके उनकी स्वतंत्रता की मशाल को आगे ले जाना है।"
    },
    mission: {
      title: "हमारा लक्ष्य",
      statement: "शिक्षा, कानूनी सहायता और वैश्विक एकजुटता के माध्यम से व्यक्तियों और समुदायों को उनके अधिकारों का दावा करने और प्रणालीगत परिवर्तन की वकालत करने के लिए सशक्त बनाना।",
      objectives: [
        "मानवाधिकार उल्लंघन के पीड़ितों को कानूनी सहायता प्रदान करना।",
        "संवैधानिक अधिकारों पर शैक्षिक कार्यशालाएं आयोजित करना।",
        "स्थानीय और राष्ट्रीय स्तर पर नीति परिवर्तन की वकालत करना।",
        "मानवाधिकार रक्षकों के लिए एक सहायता नेटवर्क बनाना।"
      ]
    },
    vision: {
      title: "हमारा दृष्टिकोण",
      statement: "एक ऐसा समाज जहाँ 'क्षत्रिय धर्म' (धर्मी कर्तव्य) की भावना सभी को अन्याय के विरुद्ध खड़े होने के लिए प्रेरित करती है और जहाँ प्रत्येक व्यक्ति के अधिकारों का स्वाभाविक रूप से सम्मान किया जाता है।",
      impact: "हम एक ऐसे भविष्य की कल्पना करते हैं जहाँ हमारे पूर्वजों का साहस एक आधुनिक, न्यायपूर्ण और न्यायसंगत समाज के लिए आधार के रूप में कार्य करे।",
      manifesto: [
        {
          title: "1. आर्थिक विसंगति: मुनाफा बनाम मजदूरी",
          desc: "जब किसी वस्तु की कीमत दोगुनी हो जाती है, तो कंपनी का मुनाफा बढ़ता है, लेकिन मजदूर की दिहाड़ी वही रहती है। न्यूनतम वेतन को सीधे महंगाई दर से जोड़ा जाना चाहिए। यह 'कॉरपोरेट शोषण' के खिलाफ एक आर्थिक युद्ध का आह्वान है।"
        },
        {
          title: "2. ड्राइवरों का 'अदृश्य' योगदान और मानसिक स्वास्थ्य",
          desc: "300-400 किमी के बाद ड्राइवर बदलना केवल सुरक्षा नहीं, बल्कि 'विश्राम का अधिकार' (Right to Rest) है। तनावमुक्त ड्राइवर से सड़क दुर्घटनाएं कम होंगी। आरटीओ और पुलिस का भ्रष्टाचार 'संविधान एक, नियम अनेक' की प्रशासनिक खामी को उजागर करता है।"
        },
        {
          title: "3. उपभोक्ता संप्रभुता (Consumer Sovereignty)",
          desc: "नगर निगम और सरकारी सेवाएं 'सर्विस प्रोवाइडर' हैं। यदि पेमेंट 30 दिन का है, तो सेवा भी 30 दिन की होनी चाहिए। सरकारी निकायों पर Consumer Protection Act लागू कर पेनल्टी/रिफंड मांगना नागरिक को 'याचक' से हटाकर 'मालिक' की कुर्सी पर बिठाता है।"
        },
        {
          title: "4. शिक्षा का 'ट्रस्ट' मॉडल और उसका पतन",
          desc: "'लाभ न कमाने' की शपथ लेकर टैक्स छूट लेने वाली संस्थाएं सबसे ज्यादा मुनाफाखोरी कर रही हैं। लोग कर्ज लेकर डिग्री खरीद रहे हैं, कौशल नहीं। हमने निजी संस्थानों को बंद करने और शिक्षा के राष्ट्रीयकरण (Nationalization) की ओर इशारा किया है।"
        },
        {
          title: "5. स्वाभिमान और इतिहास का समन्वय",
          desc: "स्वतंत्रता सेनानियों और राजाओं का जिक्र 'सांस्कृतिक पहचान' की बहाली है। मुगलों और अंग्रेजों के खिलाफ संघर्ष आज के 'सिस्टम के खिलाफ संघर्ष' से जुड़ता है। पदमावती जैसी नारियों का उल्लेख दर्शाता है कि महिला सुरक्षा कानून के साथ 'संस्कार और बलिदान' का भी विषय है।"
        },
        {
          title: "6. कानूनी और संवैधानिक संरक्षक (Legal & Constitutional Guard)",
          desc: "हमारा दृष्टिकोण पूरी तरह से 'Rule of Law' पर आधारित है। संयुक्त राष्ट्र (UN) के मानवाधिकार घोषणापत्र को सीधे भारतीय गांवों से जोड़कर हम अंतरराष्ट्रीय मानकों के अनुरूप न्याय दिलाना चाहते हैं। हमारी रणनीति पुलिस और शासन के साथ तालमेल बिठाकर व्यवस्था के भीतर रहकर व्यवस्था सुधारने की है।"
        },
        {
          title: "7. स्वास्थ्य और चिकित्सा न्याय (Healthcare Justice)",
          desc: "सरकारी अस्पतालों में 'बाहर की दवा लिखना' एक बड़ा रैकेट और भ्रष्टाचार है; जिस पर हम कानूनी कार्यवाही की बात करते हैं। केवल इलाज ही नहीं, बल्कि जागरूकता (AIDS, कैंसर, पल्स पोलियो) के माध्यम से बीमारियों को रोकना भी हमारे एजेंडे में है।"
        },
        {
          title: "8. सामाजिक बुराइयों पर सर्जिकल स्ट्राइक",
          desc: "कन्या भ्रूण हत्या, दहेज प्रथा और बाल विवाह पर अंकुश लगाना केवल कानूनी लड़ाई नहीं, बल्कि एक 'सांस्कृतिक पुनर्जागरण' है। हमने अनाथ और निराश्रितों के लिए हॉस्टल, अनाथालय निर्माण और सामूहिक विवाह जैसे ठोस समाधान (Infrastructure) प्रस्तावित किए हैं।"
        },
        {
          title: "9. पर्यावरण और संसाधन संरक्षण (Ecological Responsibility)",
          desc: "हम पर्यावरण को मानवाधिकार का हिस्सा मानते हैं। वृक्षारोपण और नदियों की स्वच्छता को 'पीने के पानी के प्याऊ' जैसे छोटे लेकिन प्रभावी कार्यों से जोड़ा है। जल संरक्षण को आम जन-संवाद का हिस्सा बनाना हमारी प्राथमिकता है।"
        },
        {
          title: "10. राष्ट्र निर्माण और अखंडता (Nation Building)",
          desc: "एकता, धर्मनिरपेक्षता और राष्ट्रप्रेम की भावनाओं को जगाना इसके केंद्र में है। लोगों को केवल दान देना ही नहीं, बल्कि उन्हें 'स्वरोजगार' और 'आत्मविश्वास' के माध्यम से आत्मनिर्भर बनाना हमारा अंतिम लक्ष्य है।"
        }
      ],
      bigPicture: {
        title: "एक समग्र दृष्टिकोण (The Big Picture)",
        intro: "एक ऐसी 'सोशल ऑडिट' (Social Audit) व्यवस्था की स्थापना जहाँ:",
        points: [
          "जवाबदेही: सरकारी अफसर और कंपनियां जनता के प्रति जवाबदेह हों।",
          "गरिमा: एक रेहड़ी-पटरी वाले या ड्राइवर को भी वही सम्मान मिले जो एक अधिकारी को मिलता है।",
          "पारदर्शिता: टैक्स और शुल्क के बदले मिलने वाली सेवा पारदर्शी हो।"
        ],
        conclusion: "एक महत्वपूर्ण विचार: यह 'घोषणापत्र' एक 'सत्याग्रह 2.0' की नींव रख सकता है, जहाँ डिजिटल चेतना के माध्यम से व्यवस्था को सुधारा जाए।"
      },
      implementation: {
        title: "सार्वभौमिक मानवाधिकारों को धरातल पर उतारना",
        intro: "इस विजन को धरातल पर उतारने के लिए हम तीन स्तरों पर काम करते हैं:",
        levels: [
          { title: "लीगल सेल (Legal Cell):", desc: "वकीलों की एक टीम जो मानवाधिकार हनन और भ्रष्टाचार के खिलाफ केस लड़ सके।" },
          { title: "स्वयंसेवक नेटवर्क (Volunteer Network):", desc: "गांव-गांव में ऐसे लोग जो सटीक सूचनाएं (Information) हम तक पहुंचा सकें।" },
          { title: "प्रचार विंग (Publicity Wing):", desc: "सेमिनार और सांस्कृतिक कार्यक्रमों के माध्यम से जनता को उनके 'संवैधानिक अधिकारों' के प्रति शिक्षित करना।" }
        ],
        conclusion: "सक्रिय नागरिकता (Active Citizenship): हम जनता को केवल 'वोटर' नहीं, बल्कि 'अधिकारों के प्रति सचेत नागरिक' बनाना चाहते हैं।"
      },
      servicesVision: {
        title: "मैनपॉवर और सर्विस विजन",
        points: [
          {
            title: "1. सुरक्षा और अनुशासन (Security & Protection)",
            desc: "विचारों को सुरक्षित रखने व अनुशासन के लिए मैनपॉवर: गार्ड, गनमैन और बाउंसर—सामान्य से हाई-प्रोफाइल सुरक्षा क्षमताओं को दर्शाते हैं।"
          },
          {
            title: "2. जन-संपर्क और जमीनी पहुंच (Publicity & Outreach)",
            desc: "आधुनिक व पारंपरिक जनसंचार: सामाजिक संदेशों के लिए नुक्कड़ नाटक, दृश्यता के लिए रोड शो और स्थायी प्रभाव के लिए वॉल व शॉप ब्रांडिंग।"
          },
          {
            title: "3. डेटा और रणनीति (Research & Survey)",
            desc: "तथ्यों पर आधारित रणनीतिक निर्णय: सर्वे के जरिए जनता की असली समस्याओं और सरकारी योजनाओं की जमीनी स्थिति को सटीकता से समझना।"
          }
        ]
      },
      hybridModel: {
        title: "व्यावसायिक और सामाजिक तालमेल (The Hybrid Model)",
        desc: "मानवाधिकार के उद्देश्य को जनशक्ति सेवाओं के साथ जोड़ने पर एक शक्तिशाली 'Social Enterprise' (सामाजिक उद्यम) उभरता है। एक तरफ हम सेवाएं प्रदान कर रोजगार व रेवेन्यू उत्पन्न कर रहे हैं, और दूसरी तरफ उसी मैनपॉवर और संसाधनों का उपयोग सीधे सामाजिक सुधारों और मानवाधिकार सुरक्षा के लिए कर रहे हैं।"
      }
    },
    services: {
      title: "हमारे कार्यक्रम और सेवाएं",
      list: [
        { title: "कानूनी वकालत", desc: "उन लोगों के लिए विशेषज्ञ कानूनी सहायता जिनके अधिकारों से समझौता किया गया है।" },
        { title: "शिक्षा का अधिकार", desc: "यह सुनिश्चित करना कि प्रत्येक बच्चे की बिना किसी भेदभाव के गुणवत्तापूर्ण शिक्षा तक पहुँच हो।" },
        { title: "महिला सशक्तिकरण", desc: "महिलाओं के सामाजिक, आर्थिक और कानूनी अधिकारों पर केंद्रित कार्यक्रम।" },
        { title: "पर्यावरण न्याय", desc: "सभी समुदायों के लिए स्वच्छ और सुरक्षित वातावरण के अधिकार के लिए लड़ना।" }
      ]
    },
    driverWelfare: {
      title: "ड्राइवर वेलफेयर मिशन",
      subtitle: "हम समस्त ड्राइवरों की सुरक्षा और सम्मान के लिए समर्पित हैं।",
      content: [
        "हम समस्त ड्राइवरों को फ्री चेकअप कैंप, फ्री बीमा, एवं परिवार के सभी सदस्यों की सुरक्षा के लिए बीमा प्रदान करेंगे।",
        "ड्राइवरों के साथ होने वाली घटनाओं (जैसे रिश्वतखोरी, मारपीट) पर शीघ्र कार्रवाई करेंगे और पीड़ितों को न्याय दिलाने के लिए उनके साथ खड़े रहेंगे।",
        "आरटीओ, पुलिस अधिकारी या नेताओं द्वारा जबरन मनचाही वसूली, बंधुआ मजदूरी, और उचित भुगतान न देकर मनमाने तरीके से सेवा लेने (जो पूर्णतः गैरकानूनी है) का हम कड़ा विरोध करते हैं।",
        "लंबे रूट की गाड़ियों पर अक्सर दुर्घटना की संभावनाएँ बढ़ जाती हैं जब केवल एक ड्राइवर और एक क्लीनर होते हैं। हम मांग करते हैं कि लंबे रूट की गाड़ियों के लिए कम से कम 3 ड्राइवर हों (300-400 किमी प्रति ड्राइवर), जिससे यात्रा सुरक्षित हो सके और संगठन इस सुरक्षा की जिम्मेदारी लेता है।",
        "जब भारत एक है, संविधान एक है, तो अलग-अलग आरटीओ पर पेपर चेकिंग के नाम पर ड्राइवरों को क्यों लूटा जाता है? यह लूट और भ्रष्टाचार पूरी तरह से बंद होना चाहिए। इसके लिए संगठन 24x7 उपलब्ध है।"
      ]
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "हम आपकी मदद करने और आपकी चिंताओं को सुनने के लिए यहाँ हैं।",
      form: {
        name: "पूरा नाम",
        email: "ईमेल पता",
        message: "आपका संदेश",
        submit: "संदेश भेजें"
      },
      info: {
        address: "केयर ऑफ़ संतोष कुमार राय, सुपुत्र अमर सिंह, वार, बेगमगंज, रायसेन, मध्य प्रदेश, भारत, 464881",
        phone: "9755534989 / 9713354353",
        email: "kshatriyafreedomfigters@gmail.com"
      }
    },
    footer: {
      about: "अपने नायकों का सम्मान, अपने भविष्य की रक्षा। क्षत्रिय विरासत और सार्वभौमिक अधिकारों के लिए समर्पित।",
      quickLinks: "त्वरित लिंक",
      reachUs: "हम तक पहुँचें",
      copyright: "© 2026 क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन। सर्वाधिकार सुरक्षित।"
    },
    privacy: {
      title: "गोपनीयता नीति",
      content: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह गोपनीयता नीति दस्तावेज़ मानवीय अधिकारों के एसोसिएशन द्वारा प्राप्त और एकत्रित की जाने वाली व्यक्तिगत जानकारी के प्रकारों और उसके उपयोग की रूपरेखा तैयार करता है।",
      sections: [
        { title: "सूचना संग्रह", text: "हम आपके द्वारा फ़ॉर्म के माध्यम से सीधे हमें प्रदान की जाने वाली जानकारी, जैसे आपका नाम और ईमेल पता, केवल आपकी पूछताछ का उत्तर देने के लिए एकत्र कर सकते हैं।" },
        { title: "डेटा सुरक्षा", text: "हम आपकी व्यक्तिगत जानकारी की सुरक्षा बनाए रखने के लिए विभिन्न प्रकार के सुरक्षा उपायों को लागू करते हैं।" }
      ]
    },
    faqPg: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      list: [
        { q: "मैं स्वयंसेवक (Volunteer) कैसे बन सकता हूँ?", a: "स्वयंसेवक बनने के लिए, कृपया हमारे संपर्क पृष्ठ पर जाएँ और अपनी पृष्ठभूमि और रुचि के क्षेत्र के साथ हमें एक संदेश भेजें।" },
        { q: "क्या एसोसिएशन कानूनी सहायता प्रदान करता है?", a: "हाँ, हम हाशिए पर रहने वाले वर्गों को मुफ्त या रियायती प्रतिनिधित्व प्रदान करने के लिए समर्पित कानूनी सहायता प्रकोष्ठ (Legal Aid Cells) संचालित करते हैं।" },
        { q: "मैं मानवाधिकार उल्लंघन की रिपोर्ट कैसे करूँ?", a: "आप हमारे संपर्क फ़ॉर्म के माध्यम से या हमारे निकटतम क्षेत्रीय कार्यालय में जाकर उल्लंघन की रिपोर्ट कर सकते हैं।" }
      ]
    },
    labels: {
      clause: "धारा",
      reachUs: "हमसे संपर्क करें",
      address: "पता",
      phone: "फोन",
      email: "ईमेल",
      objectives: "उद्देश्य",
      futureImpact: "भविष्य का प्रभाव"
    },


    moa: {
      title: "संस्था का ज्ञापन (MoA)",
      subtitle: "आधिकारिक चार्टर और उद्देश्य",
      sections: [
        {
          id: "A",
          title: "मुख्य सामाजिक और धर्मार्थ उद्देश्य",
          items: [
            {
              title: "1. शिक्षा का प्रचार",
              points: [
                "भारत भर में स्कूल, कॉलेज (इंजीनियरिंग, मेडिकल, लॉ), आईटीआई और पॉलिटेक्निक की स्थापना और प्रबंधन।",
                "गरीब, एससी/एसटी, ओबीसी और अल्पसंख्यक समुदायों के लिए छात्रवृत्ति और सब्सिडी।",
                "ग्रामीण और मलिन बस्तियों में मुफ्त पुस्तकालय और डिजिटल लर्निंग सेंटर।",
                "मुफ्त किताबें, स्टेशनरी और यूनिफॉर्म वितरण।",
                "प्रौढ़ साक्षरता और अनौपचारिक शिक्षा कार्यक्रम।"
              ]
            },
            {
              title: "2. मानवाधिकार और सामाजिक न्याय",
              points: [
                "गरीबों और वंचितों के लिए कानूनी सहायता केंद्र (Legal Aid Cells)।",
                "अन्याय, अत्याचार और मानवाधिकारों के उल्लंघन के पीड़ितों की सहायता।",
                "लोक अदालतों और कानूनी जागरूकता कार्यशालाओं का आयोजन।",
                "सरकारी योजनाओं और आरटीआई (RTI) के उपयोग के माध्यम से पारदर्शिता सुनिश्चित करना।"
              ]
            },
            {
              title: "3. ड्राइवर वेलफेयर एसोसिएशन",
              points: [
                "सभी प्रकार के वाहन ड्राइवरों के उत्थान के लिए समर्पित संगठन।",
                "ड्राइवरों के लिए स्वास्थ्य और जीवन बीमा कवरेज।",
                "मुफ्त चिकित्सा और नशामुक्ति शिविर।",
                "लंबी दूरी के ड्राइवरों के लिए रैन बसेरों और सस्ते भोजन की व्यवस्था।"
              ]
            },
            {
              title: "4. महिला सशक्तिकरण",
              points: [
                "महिला अधिकारों और स्वास्थ्य के प्रति जागरूकता के लिए 'महिला सम्मेलन'।",
                "स्वयं सहायता समूहों (SHG) के माध्यम से आर्थिक सशक्तिकरण।",
                "कामकाजी महिलाओं के लिए हॉस्टल और क्रेच।",
                "घरेलू हिंसा और दहेज उत्पीड़न के पीड़ितों के लिए परामर्श।"
              ]
            },
            {
              title: "5. संस्कृति और प्रकृति संरक्षण",
              points: [
                "वृक्षारोपण, जल संरक्षण और वर्षा जल संचयन अभियान।",
                "प्राचीन स्मारकों और सांस्कृतिक विरासत का संरक्षण।",
                "राष्ट्रीय ध्वज का सम्मान और महापुरुषों की मूर्तियों/स्मारकों की स्थापना।",
                "जैव विविधता और प्रदूषण नियंत्रण हेतु जागरूकता।"
              ]
            },
            {
              title: "6. गौशाला एवं ग्रामीण विकास",
              points: [
                "बेसहारा गायों के संरक्षण हेतु गौशालाओं का प्रबंधन।",
                "जैविक खाद और बायोगैस का उत्पादन।",
                "गरीबों को न्यूनतम दरों पर दूध और दुग्ध उत्पाद उपलब्ध कराना।"
              ]
            },
            {
              title: "7. कौशल विकास",
              points: [
                "सिलाई, आईटी, इलेक्ट्रिकल और अन्य ट्रेडों में व्यावसायिक प्रशिक्षण।",
                "प्रमाणन और प्लेसमेंट सहायता।"
              ]
            },
            {
              title: "8. वृद्ध, अनाथ और निराश्रित कल्याण",
              points: [
                "छोड़े गए वरिष्ठ नागरिकों के लिए सम्मानजनक वृद्धाश्रम (वृद्ध आश्रम)।",
                "अनाथ और बेघर बच्चों के लिए सुरक्षित बाल आश्रम।"
              ]
            },
            {
              title: "9. विधवा पुनर्वास",
              points: [
                "विधवाओं के लिए कौशल प्रशिक्षण और आत्मनिर्भरता प्रयास।",
                "विधवा पुनर्विवाह को बढ़ावा देना और समर्थन करना।"
              ]
            },
            {
              title: "10. बाल कल्याण एवं शिक्षा का अधिकार",
              points: [
                "बेटी बचाओ, बेटी पढ़ाओ अभियान और आरटीई (RTE) कार्यान्वयन।",
                "बाल श्रमिकों के लिए ब्रिज कोर्स और शिक्षा केंद्र।"
              ]
            },
            {
              title: "11. सामुदायिक रसोई एवं स्वास्थ्य",
              points: [
                "भूख मिटाने के लिए रोटी बैंक और 'नेकी की दीवार' का संचालन।",
                "नियमित रक्तदान शिविर और मुफ्त दवा वितरण।"
              ]
            },
            {
              title: "12. अंगदान जागरूकता",
              points: [
                "अंगदान (नेत्र, हृदय, गुर्दा आदि) के महत्व के प्रति जन जागरूकता।",
                "स्वैच्छिक दाताओं का पंजीकरण।"
              ]
            },
            {
              title: "13. तीर्थ यात्रा एवं परिवहन",
              points: [
                "गरीब और वृद्धों के लिए वार्षिक मुफ्त तीर्थ यात्रा।",
                "आम जनता के लिए सस्ती और सुरक्षित परिवहन सेवा।"
              ]
            },
            {
              title: "14. इवेंट मैनेजमेंट एवं मैनपॉवर",
              points: [
                "व्यावसायिक इवेंट और मैनपॉवर/सुरक्षा सेवाएं।",
                "इससे प्राप्त आय का उपयोग केवल धर्मार्थ कार्यों में किया जाएगा।"
              ]
            },
            {
              title: "15. साइबर सुरक्षा एवं राष्ट्र सुरक्षा",
              points: [
                "साइबर धोखाधड़ी से बचाव और आतंकवाद विरोधी जागरूकता।"
              ]
            },
            {
              title: "16. आपदा प्रबंधन",
              points: [
                "बाढ़, दंगों या महामारी के दौरान राहत कार्य (भोजन, पानी, दवा)।"
              ]
            }
          ]
        },
        {
          id: "VI",
          title: "आकस्मिक या सहायक उद्देश्य",
          points: [
            "संस्था के उद्देश्यों के लिए संपत्ति का अधिग्रहण या लीज।",
            "अधिनियम के तहत धन का निवेश।",
            "दान, अनुदान और सदस्यता स्वीकार करना।"
          ]
        },
        {
          id: "VII",
          title: "लाभ का विनियोग",
          points: [
            "आय का उपयोग केवल उद्देश्यों को बढ़ावा देने के लिए किया जाएगा।",
            "सदस्यों को कोई लाभांश नहीं; केवल उचित पारिश्रमिक।"
          ]
        }
      ]
    }
  }
}

function App() {
  const [lang, setLang] = useState('hi')
  const [page, setPage] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const text = `*Contact Form Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`
    window.open(`https://wa.me/919755534989?text=${text}`, '_blank')
  }

  const t = content[lang]

  const NavItem = ({ id, label }) => (
    <span
      className={`nav-item ${page === id ? 'active' : ''}`}
      onClick={() => { setPage(id); window.scrollTo(0, 0); }}
    >
      {label}
    </span>
  )

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div className="animate-slide">
            <section className="hero-slider">
              <div className="container hero-text">
                <span className="hindi-text" style={{ fontSize: '1.2rem', color: 'var(--primary-saffron)' }}>
                  {content.hi.hero.title}
                </span>
                <h2>{t.hero.title}</h2>
                <p>{t.hero.subtitle}</p>
                <button className="btn btn-saffron" onClick={() => setPage('about')}>{t.hero.cta}</button>
              </div>
            </section>

            <section className="section-padding">
              <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h3 className="hindi-text">{content.hi.about.title}</h3>
                  <h2>{t.about.title}</h2>
                </div>
                <div className="contact-container">
                  <div className="card">
                    <p>{t.about.description}</p>
                  </div>
                  <div className="card" style={{ background: 'var(--primary-blue)', color: 'white' }}>
                    <h3 style={{ color: 'var(--primary-saffron)' }}>{t.mission.title}</h3>
                    <p>{t.mission.statement}</p>
                    <button className="btn btn-saffron" style={{ marginTop: '1.5rem' }} onClick={() => setPage('mission')}>{t.hero.cta}</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-padding bg-gray">
              <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t.services.title}</h2>
                <div className="footer-grid">
                  {t.services.list.map((s, i) => (
                    <div className="card" key={i}>
                      <h4 style={{ color: 'var(--primary-blue)' }}>{s.title}</h4>
                      <p style={{ fontSize: '0.9rem' }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{t.driverWelfare.subtitle}</h3>
                  <h2>{t.driverWelfare.title}</h2>
                </div>
                <div className="card" style={{ borderLeft: '5px solid var(--alert-red)', background: 'var(--bg-light)' }}>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {t.driverWelfare.content.map((point, i) => (
                      <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--alert-red)', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '-2px' }}>•</span>
                        <span style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )
      case 'about':
        return (
          <div className="container section-padding animate-slide">
            <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.about.title}</h3>
            <h1>{t.about.title}</h1>
            <div className="card" style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{t.about.description}</p>
              <p>{t.about.background}</p>
            </div>
          </div>
        )
      case 'mission':
        return (
          <div className="container section-padding animate-slide">
            <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.mission.title}</h3>
            <h1>{t.mission.title}</h1>
            <div className="card" style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontStyle: 'italic' }}>"{t.mission.statement}"</p>
              <h3>{t.labels.objectives}:</h3>
              <ul style={{ marginTop: '1rem' }}>
                {t.mission.objectives.map((obj, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>✓</span> {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      case 'vision':
        return (
          <div className="container section-padding animate-slide">
            <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.vision.title}</h3>
            <h1>{t.vision.title}</h1>
            <div className="card" style={{ marginTop: '2rem', borderLeft: '5px solid var(--primary-saffron)' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{t.vision.statement}</p>
              <h3 style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>{t.labels.futureImpact}:</h3>
              <p>{t.vision.impact}</p>
            </div>

            {t.vision.manifesto && (
              <div style={{ marginTop: '4rem' }}>
                <div className="fighters-grid">
                  {t.vision.manifesto.map((item, i) => (
                    <div className="card" key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {t.vision.bigPicture && (
              <div className="card" style={{ marginTop: '3rem', background: 'var(--primary-blue)', color: 'white' }}>
                <h2 style={{ color: 'var(--primary-saffron)', marginBottom: '1rem' }}>{t.vision.bigPicture.title}</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{t.vision.bigPicture.intro}</p>
                <ul style={{ listStyleType: 'none', padding: '0 0 0 1rem' }}>
                  {t.vision.bigPicture.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--alert-red)', fontSize: '1.5rem' }}>★</span>
                      <span style={{ fontSize: '1.05rem' }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', borderLeft: '4px solid var(--primary-saffron)' }}>
                  <strong>{t.vision.bigPicture.conclusion}</strong>
                </div>
              </div>
            )}

            {t.vision.implementation && (
              <div style={{ marginTop: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{t.vision.implementation.title}</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>{t.vision.implementation.intro}</p>
                <div className="fighters-grid">
                  {t.vision.implementation.levels.map((level, i) => (
                    <div className="card" key={i} style={{ borderTop: '4px solid var(--primary-saffron)' }}>
                      <h3 style={{ color: 'var(--primary-blue)' }}>{level.title}</h3>
                      <p>{level.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="card" style={{ marginTop: '2rem', background: 'var(--bg-light)', textAlign: 'center', border: '1px dashed var(--primary-saffron)' }}>
                  <strong style={{ fontSize: '1.2rem', color: 'var(--alert-red)' }}>{t.vision.implementation.conclusion}</strong>
                </div>
              </div>
            )}

            {t.vision.servicesVision && (
              <div style={{ marginTop: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t.vision.servicesVision.title}</h2>
                <div className="fighters-grid">
                  {t.vision.servicesVision.points.map((pt, i) => (
                    <div className="card" key={i}>
                      <h3 style={{ color: 'var(--primary-blue)' }}>{pt.title}</h3>
                      <p style={{ marginTop: '0.8rem' }}>{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {t.vision.hybridModel && (
              <div className="card" style={{
                marginTop: '4rem',
                background: 'linear-gradient(135deg, var(--primary-green), #245225)',
                color: 'white',
                textAlign: 'center',
                padding: '3rem 2rem'
              }}>
                <h2 style={{ color: 'var(--primary-saffron)', marginBottom: '1.5rem', fontSize: '2rem' }}>{t.vision.hybridModel.title}</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                  {t.vision.hybridModel.desc}
                </p>
              </div>
            )}
          </div>
        )
      case 'services':
        const sImgs = [s1, s2, s3, s4, s5, s6, wa1, wa2, wa3, wa4, wa5, wa6, wa7, wa8, wa9, wa10, wa11, wa12, wa13, wa14, wa15, wa16, wa17, wa18];
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.services.title}</h1>

            <div className="services-marquee" style={{ marginTop: '2rem' }}>
              <div className="marquee-track">
                {[...sImgs, ...sImgs].map((img, i) => (
                  <img key={i} src={img} alt="Service" className="marquee-img" />
                ))}
              </div>
            </div>

            <div className="footer-grid" style={{ marginTop: '3rem' }}>
              {t.services.list.map((s, i) => (
                <div className="card" key={i}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏛️</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.contact.title}</h1>
            <p style={{ marginBottom: '3rem' }}>{t.contact.subtitle}</p>
            <div className="contact-container">
              <div className="card">
                <form onSubmit={handleWhatsApp}>
                  <div className="form-group">
                    <label>{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      placeholder={t.contact.form.name} 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      placeholder={t.contact.form.email} 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.contact.form.message}</label>
                    <textarea 
                      rows="5" 
                      placeholder={t.contact.form.message}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-blue">{t.contact.form.submit}</button>
                </form>
              </div>
              <div className="card" style={{ background: 'var(--bg-light)' }}>
                <h3>{t.labels.reachUs}</h3>
                <div style={{ marginTop: '2rem' }}>
                  <p><strong>{t.labels.address}:</strong><br />{t.contact.info.address}</p><br />
                  <p><strong>{t.labels.phone}:</strong><br />{t.contact.info.phone}</p><br />
                  <p><strong>{t.labels.email}:</strong><br />{t.contact.info.email}</p>
                </div>
              </div>

            </div>
          </div>
        )
      case 'moa':
        return (
          <div className="container section-padding animate-slide">
            <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)' }}>{content.hi.moa.title}</h3>
            <h1>{t.moa.title}</h1>
            <p className="subtitle">{t.moa.subtitle}</p>

            <div className="moa-content" style={{ marginTop: '3rem' }}>
              {t.moa.sections.map((section, idx) => (
                <div key={idx} className="card" style={{ marginBottom: '3rem', borderTop: '5px solid var(--primary-blue)' }}>
                  <h2 style={{ color: 'var(--primary-saffron)', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                    {t.labels.clause} {section.id}: {section.title}
                  </h2>


                  {section.items ? (
                    section.items.map((item, iidx) => (
                      <div key={iidx} style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>{item.title}</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                          {item.points.map((p, pidx) => (
                            <li key={pidx} style={{ marginBottom: '0.5rem' }}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                      {section.points.map((p, pidx) => (
                        <li key={pidx} style={{ marginBottom: '0.5rem' }}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      case 'privacy':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.privacy.title}</h1>
            <div className="card" style={{ marginTop: '2rem' }}>
              <p>{t.privacy.content}</p>
              {t.privacy.sections.map((sec, idx) => (
                <div key={idx}>
                  <h3 style={{ marginTop: '2rem' }}>{sec.title}</h3>
                  <p>{sec.text}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'freedomFighters':
        const fighters = [
          {
            name: "Chhatrapati Shivaji Maharaj",
            nameHi: "छत्रपति शिवाजी महाराज",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Shivaji_British_Museum.jpg",
            desc: [
              "Founded the mighty Maratha Empire in western India.",
              "Pioneered modern naval warfare and advanced administrative systems.",
              "Renowned for using innovative guerrilla warfare (Shiva sutra).",
              "Promoted religious tolerance, women's honor, and social justice."
            ],
            descHi: [
              "पश्चिमी भारत में शक्तिशाली मराठा साम्राज्य की स्थापना की।",
              "आधुनिक नौसैनिक युद्ध और उन्नत प्रशासनिक प्रणालियों का बीड़ा उठाया।",
              "नवीन छापामार युद्ध रणनीति (शिव सूत्र) के उपयोग के लिए प्रसिद्ध।",
              "धार्मिक सहिष्णुता, महिलाओं के सम्मान और सामाजिक न्याय को बढ़ावा दिया।"
            ]
          },
          {
            name: "Sambhaji Maharaj",
            nameHi: "संभाजी महाराज",
            image: sambhaji_historical,
            desc: [
              "The second Chhatrapati of the Maratha Empire, known for extraordinary valor.",
              "Defended the Maratha kingdom brilliantly against the massive Mughal army.",
              "Fought 120 battles without losing a single territory to enemies.",
              "Showed ultimate sacrifice, accepting martyrdom rather than surrendering his faith."
            ],
            descHi: [
              "मराठा साम्राज्य के दूसरे छत्रपति, जो असाधारण वीरता के लिए जाने जाते हैं।",
              "विशाल मुग़ल सेना के विरुद्ध मराठा साम्राज्य की शानदार रक्षा की।",
              "दुश्मनों से एक भी क्षेत्र खोए बिना 120 लड़ाईयाँ लड़ीं।",
              "परम त्याग दिखाया, और अपने विश्वास को त्यागने के बजाय शहादत स्वीकार की।"
            ]
          },
          {
            name: "Rani Padmavati",
            nameHi: "रानी पद्मावती",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Rani_Padmini.jpg",
            desc: [
              "The legendary Queen of Chittor, globally renowned for her exceptional beauty.",
              "Exhibited indomitable courage and profound devotion to her kingdom.",
              "Faced the invading forces of Alauddin Khalji with unmatched bravery.",
              "Led the ultimate sacrifice of Jauhar to protect her eternal honor."
            ],
            descHi: [
              "चित्तौड़ की प्रसिद्ध रानी, जो अपनी असाधारण सुंदरता के लिए जानी जाती थीं।",
              "अपने राज्य के प्रति अदम्य साहस और गहरी भक्ति का प्रदर्शन किया।",
              "अद्वितीय बहादुरी के साथ अलाउद्दीन खिलजी की हमलावर सेना का सामना किया।",
              "अपने शाश्वत सम्मान की रक्षा के लिए जौहर के अंतिम बलिदान का नेतृत्व किया।"
            ]
          },
          {
            name: "Maharana Pratap",
            nameHi: "महाराणा प्रताप",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Maharana_Pratap_cropped.jpg",
            desc: [
              "The courageous Rajput ruler of Mewar who embodied absolute freedom.",
              "Fought heroically against Mughal expansion to protect Rajputana's independence.",
              "Fought the legendary Battle of Haldighati using brilliant military strategies.",
              "Chose immense hardship in the forests over submitting to foreign rule."
            ],
            descHi: [
              "मेवाड़ के साहसी क्षत्रिय शासक जिन्होंने पूर्ण स्वतंत्रता का प्रतीक बनाया।",
              "राजपूताना की स्वतंत्रता की रक्षा के लिए मुगल विस्तार के खिलाफ वीरतापूर्वक लड़ाई लड़ी।",
              "शानदार सैन्य रणनीतियों का उपयोग करके हल्दीघाटी का प्रसिद्ध युद्ध लड़ा।",
              "विदेशी शासन के सामने झुकने के बजाय जंगलों में अपार कष्ट सहना चुना।"
            ]
          },
          {
            name: "Prithviraj Chauhan",
            nameHi: "पृथ्वीराज चौहान",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Posthumous_painting_depicting_Prithviraj_Chauhan_from_Kota.jpg",
            desc: [
              "A legendary warrior king of the Chahamana dynasty with unmatched valor.",
              "Ruled vast territories from his capitals in Ajmer and Delhi.",
              "Celebrated for his immense chivalry and mastery of the Shabdabhedi Baan.",
              "Led the heroic resistance against early foreign invasions at Tarain."
            ],
            descHi: [
              "चाहमान वंश के एक महान योद्धा राजा जिनकी वीरता अद्वितीय थी।",
              "अजमेर और दिल्ली में अपनी राजधानियों से विशाल क्षेत्रों पर शासन किया।",
              "अपनी अपार वीरता और शब्दभेदी बाण की महारत के लिए प्रसिद्ध।",
              "तराइन में शुरुआती विदेशी आक्रमणों के खिलाफ साहसी प्रतिरोध का नेतृत्व किया।"
            ]
          },
          {
            name: "Rani Durgavati",
            nameHi: "रानी दुर्गावती",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Rani_Durgavati.jpg",
            desc: [
              "The courageous ruling Queen of Gondwana known for wise administration.",
              "Highly skilled in warfare, hunting, and managing state affairs.",
              "Defended her kingdom fiercely against the powerful Mughal Empire.",
              "Sacrificed her own life on the battlefield to prevent being captured."
            ],
            descHi: [
              "गोंडवाना की साहसी शासक रानी जो बुद्धिमान प्रशासन के लिए जानी जाती थीं।",
              "युद्ध, शिकार और राज्य के मामलों के प्रबंधन में अत्यधिक कुशल।",
              "शक्तिशाली मुग़ल साम्राज्य के विरुद्ध अपने राज्‍य की डटकर रक्षा की।",
              "बंदी बनाए जाने से बचने के लिए युद्धभूमि में अपने प्राणों की आहुति दे दी।"
            ]
          },
          {
            name: "Ahilyabai Holkar",
            nameHi: "अहिल्याबाई होलकर",
            image: ahilyabai_historical,
            desc: [
              "The noble and visionary Queen of the Malwa kingdom.",
              "Personally led her armies into battle to defend her territories.",
              "Rebuilt countless destroyed temples and restored ancient Hindu heritage.",
              "Established robust social infrastructure blending governance with deep compassion."
            ],
            descHi: [
              "मालवा राज्य की नेक और दूरदर्शी रानी।",
              "अपने क्षेत्रों की रक्षा के लिए व्यक्तिगत रूप से अपनी सेनाओं का युद्ध में नेतृत्व किया।",
              "अनगिनत नष्ट हुए मंदिरों का पुनर्निर्माण किया और प्राचीन हिंदू विरासत को बहाल किया।",
              "गहरी करुणा के साथ शासन का सम्मिश्रण करते हुए मजबूत सामाजिक बुनियादी ढांचे की स्थापना की।"
            ]
          },
          {
            name: "Bappa Rawal",
            nameHi: "बप्पा रावल",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Bappa_Rawal.jpg",
            desc: [
              "The legendary founder of the illustrious Guhila dynasty of Mewar.",
              "Served as a formidable defender of the northwestern Indian frontier.",
              "Played a critical role in successfully repelling the early Arab invasions.",
              "Established an enduring and powerful legacy of Kshatriya valor in Rajasthan."
            ],
            descHi: [
              "मेवाड़ के शानदार गुहिल राजवंश के प्रसिद्ध संस्थापक।",
              "उत्तर-पश्चिमी भारतीय सीमा के एक शक्तिशाली रक्षक के रूप में कार्य किया।",
              "शुरुआती अरब आक्रमणों को सफलतापूर्वक पीछे हटाने में महत्वपूर्ण भूमिका निभाई।",
              "राजस्थान में क्षत्रिय वीरता की एक स्थायी और शक्तिशाली विरासत स्थापित की।"
            ]
          },
          {
            name: "Rana Sanga",
            nameHi: "राणा सांगा",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Rana_Sanga_of_Mewar.jpg",
            desc: [
              "The incredibly powerful ruler of Mewar and a strategic military genius.",
              "United numerous Rajput clans to present a formidable united front.",
              "Fought many battles fiercely despite losing an arm, an eye, and a leg.",
              "Remains an awe-inspiring symbol of perseverance and Rajput resistance."
            ],
            descHi: [
              "मेवाड़ के अविश्वसनीय रूप से शक्तिशाली शासक और एक रणनीतिक सैन्य प्रतिभा।",
              "एक मजबूत संयुक्त मोर्चा पेश करने के लिए कई राजपूत गुटों को एकजुट किया।",
              "एक हाथ, एक आँख और एक पैर खोने के बावजूद कई युद्ध डटकर लड़े।",
              "दृढ़ता और राजपूत प्रतिरोध का एक विस्मयकारी प्रतीक बने हुए हैं।"
            ]
          },
          {
            name: "Hemu Vikramaditya",
            nameHi: "हेमू विक्रमादित्य",
            image: hemu_historical,
            desc: [
              "A brilliant military commander who rose from humble beginnings to the throne.",
              "Remains the last Hindu emperor to conquer and rule Delhi.",
              "Won an astonishing 22 consecutive battles across North India.",
              "Assumed the ancient title of Vikramaditya, showcasing indigenous power."
            ],
            descHi: [
              "एक शानदार सैन्य कमांडर जो विनम्र शुरुआत से सिंहासन तक पहुंचे।",
              "दिल्ली को जीतने और शासन करने वाले अंतिम हिंदू सम्राट बने हुए हैं।",
              "उत्तर भारत में एक आश्चर्यजनक 22 लगातार लड़ाइयाँ जीतीं।",
              "स्वदेशी शक्ति का प्रदर्शन करते हुए विक्रमादित्य की प्राचीन उपाधि धारण की।"
            ]
          }
        ];

        return (
          <div className="container section-padding animate-slide">
            <h1 style={{ textAlign: 'center', marginBottom: '4rem' }}>{t.nav.freedomFighters}</h1>

            <div className="fighters-grid">
              {fighters.map((f, i) => (
                <div className="fighter-card" key={i}>
                  <div className="fighter-image">
                    <img src={f.image} alt={f.name} />
                  </div>
                  <div className="fighter-content">
                    <h3 className="hindi-text" style={{ color: 'var(--primary-saffron)', fontSize: '1.1rem' }}>{f.nameHi}</h3>
                    <h2>{f.name}</h2>
                    <div style={{ marginTop: '1rem' }}>
                      {(lang === 'en' ? f.desc : f.descHi).map((line, idx) => (
                        <p key={idx} style={{ marginBottom: '0.4rem', fontSize: '0.95rem', display: 'flex' }}>
                          <span style={{ marginRight: '0.5rem', color: 'var(--primary-saffron)' }}>•</span>
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'faq':
        return (
          <div className="container section-padding animate-slide">
            <h1>{t.faqPg.title}</h1>
            <div style={{ marginTop: '2rem' }}>
              {t.faqPg.list.map((item, i) => (
                <div className="card" key={i} style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--primary-saffron)' }}>{item.q}</h4>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="app-root">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div>📞 {t.contact.info.phone} | ✉️ {t.contact.info.email}</div>
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>
            {lang === 'en' ? 'हिंदी में बदलें' : 'SWITCH TO ENGLISH'}
          </button>
        </div>
      </div>

      <header className="main-header" style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #fffbf2 100%)',
        borderBottom: '4px solid var(--primary-saffron)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}>
        <div className="container header-inner" style={{ alignItems: 'center' }}>
          <div className="logo" style={{ background: 'none', flexShrink: 0 }}>
            <img src={logo} alt="KFF & HRA Logo" style={{ height: '150px', width: 'auto', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="org-names" style={{ flexGrow: 1, textAlign: 'center' }}>
            <div style={{ 
              position: 'relative', 
              display: 'inline-block', 
              marginBottom: '15px',
              padding: '10px 25px',
              border: '4px double #D4AF37',
              borderRadius: '8px',
              background: 'rgba(212, 175, 55, 0.03)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
              <h1 className="hindi-text" style={{ 
                margin: 0, 
                fontSize: '2.8rem', 
                fontWeight: '900',
                color: '#D4AF37',
                textShadow: '1px 1px 0px #fff, 2px 2px 4px rgba(0,0,0,0.15)',
                letterSpacing: '0.5px'
              }}>
                क्षत्रिय स्वतंत्रता सेनानी एवं मानवाधिकार एसोसिएशन
              </h1>
            </div>
            <div className="dual-color-banner" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="banner-content">
                <div className="banner-en-text">KSHATRIYA FREEDOM FIGHTERS & HUMAN RIGHTS ASSOCIATION</div>
                <div className="banner-tagline hindi-text">(वीरता की विरासत का सम्मान, मानवता के अधिकारों की रक्षा)</div>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <button className="btn btn-saffron" onClick={() => setPage('contact')}>{t.nav.contact}</button>
          </div>
        </div>
      </header>

      <nav className="nav-bar">
        <div className="container nav-links">
          <NavItem id="home" label={t.nav.home} />
          <NavItem id="about" label={t.nav.about} />
          <NavItem id="mission" label={t.nav.mission} />
          <NavItem id="vision" label={t.nav.vision} />
          <NavItem id="services" label={t.nav.services} />
          <NavItem id="freedomFighters" label={t.nav.freedomFighters} />
          <NavItem id="moa" label={t.nav.moa} />
          <NavItem id="faq" label={t.nav.faq} />
          <NavItem id="contact" label={t.nav.contact} />
        </div>
      </nav>

      <div className="news-marquee">
        <div className="marquee-text">
          {t.news}
        </div>
      </div>

      <main>
        {renderPage()}
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>{t.nav.about}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{t.footer.about}</p>
            </div>
            <div className="footer-col">
              <h3>{t.footer.quickLinks}</h3>
              <ul className="footer-links">
                <li><a onClick={() => setPage('home')}>{t.nav.home}</a></li>
                <li><a onClick={() => setPage('about')}>{t.nav.about}</a></li>
                <li><a onClick={() => setPage('mission')}>{t.nav.mission}</a></li>
                <li><a onClick={() => setPage('vision')}>{t.nav.vision}</a></li>
                <li><a onClick={() => setPage('services')}>{t.nav.services}</a></li>
                <li><a onClick={() => setPage('freedomFighters')}>{t.nav.freedomFighters}</a></li>
                <li><a onClick={() => setPage('moa')}>{t.nav.moa}</a></li>
                <li><a onClick={() => setPage('privacy')}>{t.nav.privacy}</a></li>
              </ul>

            </div>
            <div className="footer-col">
              <h3>{t.footer.reachUs}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                {t.contact.info.address}<br /><br />
                {t.labels.phone}: {t.contact.info.phone}<br />
                {t.labels.email}: {t.contact.info.email}
              </p>

            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
