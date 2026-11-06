/**
 * Shalom Gold — Core Dataset & Utilities
 * Extracted and formatted from https://shalam-gold-app.vercel.app/
 */

window.ShalomData = {
  brand: {
    name: "Shalom Gold",
    tagline: "India’s Premier Gold Savings & Franchise Network",
    phone: "+91 88888 88888",
    email: "care@shalomgold.com",
    address: "142, Sheikh Memon Street, Zaveri Bazaar, Kalbadevi, Mumbai - 400002",
    founded: "1984",
    hallmarkNotice: "100% BIS Hallmarked 916 & 999 Purity",
    buybackGuarantee: "100% Honest Zero-Loss Buyback Guarantee"
  },

  goldRates: {
    "24K": 7990,
    "22K": 7325,
    "18K": 5990,
    "Silver": 98.50,
    updatedAt: "Live Spot (Today)"
  },

  savingsPlans: [
    {
      id: "plan-1yr",
      name: "1 Year Smart Gold Plan",
      durationMonths: 12,
      durationYears: 1,
      paymentMonths: 11,
      benefitMonths: 1,
      minMonthlyAmount: 1000,
      badge: "Most Popular",
      highlight: "Pay for 11 Months · Get 1 Month Added by Shalom Gold",
      description: "Our most sought-after short-term gold accumulation plan designed to steadily build your gold reserve with a guaranteed 1-month bonus contribution.",
      features: [
        "11 Monthly Payments Only",
        "1 Month Shalom Gold Bonus Added",
        "Lock-in Gold Weight or Cash Value",
        "Zero Hidden Fees or Deductions",
        "BIS Hallmarked 916/999 Gold Redemption"
      ],
      terms: [
        "Minimum monthly installment of ₹1,000 in multiples of ₹500.",
        "Pay for 11 consecutive monthly installments on or before the due date.",
        "12th month contribution is fully funded by Shalom Gold as your scheme bonus.",
        "Redeem 100% of accumulated maturity value in 22K/24K coins, bars, or jewellery.",
        "Zero making charges discount privileges on selected collections at redemption."
      ]
    },
    {
      id: "plan-2yr",
      name: "2 Years Wealth Gold Plan",
      durationMonths: 24,
      durationYears: 2,
      paymentMonths: 22,
      benefitMonths: 2,
      minMonthlyAmount: 2000,
      badge: "Double Benefit",
      highlight: "Pay for 22 Months · Get 2 Months Added by Shalom Gold",
      description: "Designed for medium-term family milestones, weddings, or wealth creation with double bonus installments added directly to your gold account.",
      features: [
        "22 Monthly Payments",
        "2 Full Months Shalom Gold Bonus",
        "Priority Delivery for Custom Orders",
        "Special Making Charge Waivers",
        "Direct Digital Passbook Access"
      ],
      terms: [
        "Minimum monthly installment of ₹2,000.",
        "Pay 22 monthly installments continuously.",
        "Shalom Gold credits 2 additional monthly installment amounts as bonus.",
        "Full maturity redemption on the 24th month with price appreciation advantage.",
        "Option to convert to customized designer bridal sets or certified 24K bullion."
      ]
    },
    {
      id: "plan-3yr",
      name: "3 Years Sovereign Gold Plan",
      durationMonths: 36,
      durationYears: 3,
      paymentMonths: 33,
      benefitMonths: 3,
      minMonthlyAmount: 3000,
      badge: "Maximum Return",
      highlight: "Pay for 33 Months · Get 3 Months Added by Shalom Gold",
      description: "A sovereign long-term gold accumulation scheme maximizing bonus contributions for substantial wealth and heirloom jewellery creation.",
      features: [
        "33 Monthly Payments",
        "3 Full Months Shalom Gold Bonus",
        "Highest Scheme Contribution Value",
        "VIP Concierge Redemption",
        "Free Hallmark & Assay Certification"
      ],
      terms: [
        "Minimum monthly installment of ₹3,000.",
        "Pay 33 monthly installments across the 36-month tenure.",
        "Shalom Gold contributes 3 full monthly installments to your accumulated balance.",
        "Eligible for Privé VIP concierge benefits and custom handcrafted jewellery redemption.",
        "Insured storage and digital certificate issued upon successful maturity."
      ]
    },
    {
      id: "plan-4yr",
      name: "4 Years Heritage Gold Plan",
      durationMonths: 48,
      durationYears: 4,
      paymentMonths: 44,
      benefitMonths: 4,
      minMonthlyAmount: 5000,
      badge: "Long Term",
      highlight: "Pay for 44 Months · Get 4 Months Added by Shalom Gold",
      description: "Tailored for higher education funds, child marriage reserves, or institutional long-term physical gold accumulation.",
      features: [
        "44 Monthly Payments",
        "4 Months Bonus Value Added",
        "Dedicated Account Manager",
        "Zero Vaulting Fees",
        "Physical 24K 999.9 Mint Bars or Jewellery"
      ],
      terms: [
        "Minimum monthly installment of ₹5,000.",
        "Pay 44 monthly installments.",
        "4 full monthly installments credited as Shalom Gold bonus.",
        "Redemption in physical 24K 999.9 fine mint bars or hallmarked jewellery."
      ]
    },
    {
      id: "plan-5yr",
      name: "5 Years Legacy Gold Plan",
      durationMonths: 60,
      durationYears: 5,
      paymentMonths: 55,
      benefitMonths: 5,
      minMonthlyAmount: 5000,
      badge: "Generational Wealth",
      highlight: "Pay for 55 Months · Get 5 Months Added by Shalom Gold",
      description: "The ultimate long-term physical asset building program offering 5 months equivalent bonus on your disciplined gold investments.",
      features: [
        "55 Monthly Payments",
        "5 Months Bonus Value Added",
        "Highest Tier Privileges",
        "Complimentary Armed Transit Delivery",
        "Lifetime Privileged Customer Status"
      ],
      terms: [
        "Minimum monthly installment of ₹5,000.",
        "Pay 55 monthly installments.",
        "5 full monthly installments bonus from Shalom Gold.",
        "Lifetime privileged customer status across all Shalom Gold showrooms."
      ]
    }
  ],

  holdAndGrow: {
    title: "Gold Hold & Grow Scheme",
    benefitRate: "2% Monthly Payout",
    tenure: "12 Months Fixed",
    minDepositGrams: 10,
    features: [
      "2% monthly benefit calculated on the deposited gold value paid to your bank account",
      "Held in bank-grade, fully insured Tier-IV vaults with individual custody certificates",
      "Legal bailment contract guaranteeing 100% physical ownership remains yours",
      "Redeem 100% of your physical gold in bullion, coins, or jewellery upon maturity (12 months)"
    ],
    steps: [
      {
        step: 1,
        title: "Buy / Deposit Gold",
        desc: "Purchase or deposit certified 24K bullion or 22K gold with Shalom Gold starting from 10 grams."
      },
      {
        step: 2,
        title: "Store With Shalom Gold",
        desc: "Your physical gold is held in bank-grade insured vaults with complete legal custody agreements."
      },
      {
        step: 3,
        title: "Receive Monthly Benefit",
        desc: "Earn a steady 2% monthly benefit paid directly into your linked bank account every month."
      },
      {
        step: 4,
        title: "Complete 1 Year & Redeem",
        desc: "After 12 months, collect 100% of your physical gold in bars, coins, jewellery, or renew for another year."
      }
    ]
  },

  products: [
    {
      id: "prod-1",
      name: "Vedic Royal Temple Necklace Set",
      category: "Necklaces",
      subCategory: "Temple Jewellery",
      price: 184500,
      oldPrice: 198000,
      purity: "22K",
      weight: 24.5,
      makingCharges: 14760,
      metal: "Yellow Gold",
      gender: "Women",
      occasion: "Bridal",
      collection: "Vedic Temple Heritage",
      img: "https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Bestseller",
      rating: 5,
      reviewsCount: 42,
      description: "A masterpiece of antique South Indian craftsmanship featuring handcrafted motifs of Goddess Lakshmi surrounded by intricate filigree work and auspicious ruby-toned gemstones.",
      hallmarkId: "BIS-HM-916-MUM-8429",
      dimensions: "Chain width: 4.2mm, Center Pendant: 52mm x 45mm"
    },
    {
      id: "prod-2",
      name: "Padmavati Kundan Jhumka Earrings",
      category: "Earrings",
      subCategory: "Jhumkas",
      price: 38900,
      oldPrice: 42500,
      purity: "22K",
      weight: 5.2,
      makingCharges: 3110,
      metal: "Yellow Gold & Kundan",
      gender: "Women",
      occasion: "Festive",
      collection: "The Royal Rajwada",
      img: "https://images.pexels.com/photos/37601639/pexels-photo-37601639.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "New",
      rating: 5,
      reviewsCount: 28,
      description: "Regal 22K gold jhumkas adorned with uncut Polki stones, fine Meenakari enamel on the underside, and cascading freshwater micro-pearl drops.",
      hallmarkId: "BIS-HM-916-DEL-1092",
      dimensions: "Length: 48mm, Bell Diameter: 22mm"
    },
    {
      id: "prod-3",
      name: "Kada Antique Embossed Gold Bangles",
      category: "Bangles",
      subCategory: "Antique Kadas",
      price: 112400,
      oldPrice: 124000,
      purity: "22K",
      weight: 15.1,
      makingCharges: 8990,
      metal: "Yellow Gold",
      gender: "Women",
      occasion: "Bridal",
      collection: "The Royal Rajwada",
      img: "https://images.pexels.com/photos/37485307/pexels-photo-37485307.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Exclusive",
      rating: 5,
      reviewsCount: 19,
      description: "A pair of traditional solid 22K screw-lock kadas intricately carved with floral vines and peacock crests in vintage antique finish.",
      hallmarkId: "BIS-HM-916-BLR-5571",
      dimensions: "Width: 12mm each, Pair Weight: 15.1g"
    },
    {
      id: "prod-4",
      name: "Eternal Solitaire Rose Gold Ring",
      category: "Rings",
      subCategory: "Solitaire Rings",
      price: 48700,
      oldPrice: 54000,
      purity: "18K",
      weight: 4.1,
      makingCharges: 3890,
      metal: "Rose Gold & Diamond",
      gender: "Women",
      occasion: "Office",
      collection: "Contemporary Rose Gold",
      img: "https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Trending",
      rating: 5,
      reviewsCount: 35,
      description: "A contemporary 18K rose gold ring accented with a brilliant-cut certified VVS-EF solitaire, offering subtle sophistication for modern daily luxury.",
      hallmarkId: "BIS-HM-750-IGI-9932",
      dimensions: "Band width: 2.2mm, Center stone: 0.50 ct equivalent"
    },
    {
      id: "prod-5",
      name: "24K (999) Lakshmi Gold Coin - 10 Grams",
      category: "Gold Coins & Bullion",
      subCategory: "Investment Coins",
      price: 79900,
      oldPrice: 81500,
      purity: "24K",
      weight: 10,
      makingCharges: 1500,
      metal: "24K Pure Gold (999)",
      gender: "Unisex",
      occasion: "Investment",
      img: "https://images.pexels.com/photos/8442352/pexels-photo-8442352.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "999 Pure",
      rating: 5,
      reviewsCount: 156,
      description: "Certified 999.0 purity 24 Karat gold coin featuring Goddess Lakshmi with embossed lotuses. Sealed in tamper-proof Certicard packaging with unique serial number and lifetime buyback guarantee.",
      hallmarkId: "BIS-HM-999-NABL-0010",
      dimensions: "Diameter: 25mm, Thickness: 1.4mm"
    },
    {
      id: "prod-6",
      name: "24K (999) Ganesha Gold Coin - 5 Grams",
      category: "Gold Coins & Bullion",
      subCategory: "Investment Coins",
      price: 40200,
      oldPrice: 41000,
      purity: "24K",
      weight: 5,
      makingCharges: 800,
      metal: "24K Pure Gold (999)",
      gender: "Unisex",
      occasion: "Investment",
      img: "https://images.pexels.com/photos/8442352/pexels-photo-8442352.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "999 Pure",
      rating: 5,
      reviewsCount: 94,
      description: "Auspicious Lord Ganesha coin in 24 Karat 999 fineness. Perfect for Diwali, Dhanteras, housewarmings, or long-term wealth preservation.",
      hallmarkId: "BIS-HM-999-NABL-0005",
      dimensions: "Diameter: 20mm, Thickness: 1.1mm"
    },
    {
      id: "prod-7",
      name: "24K (999) Gold Bullion Bar - 50 Grams",
      category: "Gold Coins & Bullion",
      subCategory: "Bullion Bars",
      price: 395000,
      oldPrice: 402000,
      purity: "24K",
      weight: 50,
      makingCharges: 3000,
      metal: "24K Pure Gold (999.9)",
      gender: "Unisex",
      occasion: "Investment",
      img: "https://images.pexels.com/photos/8442352/pexels-photo-8442352.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Exclusive",
      rating: 5,
      reviewsCount: 23,
      description: "Ultra-pure 999.9 investment bullion bar with micro-laser etched serial ID and assay purity certificate. Zero deduction buyback guarantee at all our branches.",
      hallmarkId: "BIS-HM-9999-MINT-0050",
      dimensions: "Dimensions: 42mm x 25mm x 2.6mm"
    },
    {
      id: "prod-8",
      name: "Sacred Bloom Traditional Mangalsutra",
      category: "Mangalsutra",
      subCategory: "Bridal Mangalsutra",
      price: 76500,
      oldPrice: 83000,
      purity: "22K",
      weight: 9.8,
      makingCharges: 6120,
      metal: "Yellow Gold & Black Beads",
      gender: "Women",
      occasion: "Bridal",
      collection: "Eternal Mangalsutras",
      img: "https://images.pexels.com/photos/32780784/pexels-photo-32780784.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Bestseller",
      rating: 5,
      reviewsCount: 51,
      description: "Double-row auspicious black onyx beads hand-knotted with 22K gold wire, holding a divine floral pendant with fine filigree and dangling ghungroo beads.",
      hallmarkId: "BIS-HM-916-HYD-7123",
      dimensions: "Center motif: 34mm x 28mm"
    },
    {
      id: "prod-9",
      name: "Nizamiah Pearl & Emerald Choker",
      category: "Necklaces",
      subCategory: "Chokers",
      price: 215000,
      oldPrice: 235000,
      purity: "22K",
      weight: 28.3,
      makingCharges: 17200,
      metal: "Yellow Gold, Emerald & Pearls",
      gender: "Women",
      occasion: "Bridal",
      collection: "Nizamiah Pearls & Emeralds",
      img: "https://images.pexels.com/photos/28976815/pexels-photo-28976815.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Exclusive",
      rating: 5,
      reviewsCount: 14,
      description: "Inspired by the royal courts of Hyderabad, this choker showcases natural Zambian emeralds, Basra-grade seed pearls, and unblemished 22K hallmarked gold filigree.",
      hallmarkId: "BIS-HM-916-HYD-0419",
      dimensions: "Collar height: 35mm, Emerald weight: 6.4 cts"
    },
    {
      id: "prod-10",
      name: "Imperial Royal Men's Gold Kada Bracelet",
      category: "Bracelets",
      subCategory: "Men's Jewellery",
      price: 142000,
      oldPrice: 154000,
      purity: "22K",
      weight: 18.9,
      makingCharges: 9900,
      metal: "Solid Yellow Gold",
      gender: "Men",
      occasion: "Daily Wear",
      img: "https://images.pexels.com/photos/37485314/pexels-photo-37485314.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "Trending",
      rating: 5,
      reviewsCount: 31,
      description: "Heavy, masculine solid 22K gold kada featuring subtle brushed satin and polished gold beveling with high comfort-fit inner curve.",
      hallmarkId: "BIS-HM-916-PUN-3882",
      dimensions: "Thickness: 5.5mm, Inner Circumference: 7.2 inches"
    },
    {
      id: "prod-11",
      name: "Celestial Lotus Diamond Gold Pendant",
      category: "Pendants",
      subCategory: "Diamond Pendants",
      price: 31500,
      oldPrice: 35000,
      purity: "18K",
      weight: 2.8,
      makingCharges: 2500,
      metal: "Two-Tone 18K Gold",
      gender: "Women",
      occasion: "Daily Wear",
      collection: "Everyday Elegance",
      img: "https://images.pexels.com/photos/30541177/pexels-photo-30541177.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "New",
      rating: 4,
      reviewsCount: 19,
      description: "A graceful lotus blooming in two-tone yellow and white 18K gold, studded with 14 natural conflict-free diamonds with IGI appraisal card.",
      hallmarkId: "BIS-HM-750-MUM-4411",
      dimensions: "Pendant size: 18mm x 14mm"
    },
    {
      id: "prod-12",
      name: "24K (999) Gold Coin - 1 Gram",
      category: "Gold Coins & Bullion",
      subCategory: "Gift Coins",
      price: 8450,
      oldPrice: 8900,
      purity: "24K",
      weight: 1,
      makingCharges: 350,
      metal: "24K Pure Gold (999)",
      gender: "Unisex",
      occasion: "Investment",
      img: "https://images.pexels.com/photos/8442352/pexels-photo-8442352.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "999 Pure",
      rating: 5,
      reviewsCount: 210,
      description: "The ideal corporate gift or auspicious shagun coin. Minted in pure 24 Karat 999 gold in sealed tamper-proof Certicard blister pack.",
      hallmarkId: "BIS-HM-999-NABL-0001",
      dimensions: "Diameter: 12mm"
    },
    {
      id: "prod-13",
      name: "Divine Goddess Antique Gold Necklace",
      category: "Necklaces",
      subCategory: "Antique Jewellery",
      price: 245000,
      oldPrice: 260000,
      purity: "22K",
      weight: 32.5,
      makingCharges: 19600,
      metal: "Yellow Gold",
      gender: "Women",
      occasion: "Bridal",
      collection: "Vedic Temple Heritage",
      img: "https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "New",
      rating: 5,
      reviewsCount: 12,
      description: "An exquisitely crafted antique necklace featuring divine goddess motifs and intricate detailing, perfect for bridal wear.",
      hallmarkId: "BIS-HM-916-MUM-8430",
      dimensions: "Chain width: 5.0mm, Center Pendant: 60mm x 50mm"
    }
  ],

  collections: [
    {
      id: "col-1",
      name: "The Royal Rajwada",
      tagline: "Imperial Kundan, Polki & Meenakari Treasures",
      desc: "Inspired by the regal dynasties of Rajasthan, featuring uncut diamonds set in 22K gold, hand-painted Meenakari enameling on reverse, and timeless bridal majesty.",
      heroImg: "https://images.pexels.com/photos/32934707/pexels-photo-32934707.jpeg?auto=compress&cs=tinysrgb&w=1200",
      piecesCount: "48 Royal Pieces"
    },
    {
      id: "col-2",
      name: "Vedic Temple Heritage",
      tagline: "Sacred Antique Sculptural Gold",
      desc: "Handcrafted by hereditary master sculptors from Tamil Nadu and Karnataka, depicting auspicious deities, divine swans, and sacred temple sanctums in heavy antique finished gold.",
      heroImg: "https://images.pexels.com/photos/20858950/pexels-photo-20858950.jpeg?auto=compress&cs=tinysrgb&w=1200",
      piecesCount: "36 Divine Pieces"
    },
    {
      id: "col-3",
      name: "Contemporary Rose Gold",
      tagline: "Modern Elegance for the Cosmopolitan Woman",
      desc: "Sleek, fluid silhouettes crafted in warm 18K rose gold and brilliant solitaires. Designed for effortless transitions from boardroom elegance to evening cocktail soirees.",
      heroImg: "https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&w=1200",
      piecesCount: "52 Modern Pieces"
    },
    {
      id: "col-4",
      name: "Nizamiah Pearls & Emeralds",
      tagline: "The Opulence of the Deccan Royal Courts",
      desc: "Rich Colombian and Zambian emeralds combined with luminous hand-selected South Sea natural pearls, woven meticulously in 22K yellow gold choker collars and rani haars.",
      heroImg: "https://images.pexels.com/photos/28976815/pexels-photo-28976815.jpeg?auto=compress&cs=tinysrgb&w=1200",
      piecesCount: "24 Heirloom Sets"
    }
  ],

  franchiseData: {
    minimumInvestment: "₹50 Lakhs & Above",
    assetBackedShare: "60% Physical Gold Inventory (₹30 Lakhs)",
    refundableDepositShare: "40% Refundable Deposit (₹20 Lakhs)",
    spaceRequirement: "300 – 1,200 sq. ft. prime retail space",
    keyBenefits: [
      {
        title: "100% Asset-Protected Capital",
        desc: "Out of the starting ₹50 Lakhs investment, ₹30 Lakhs is directly represented by tangible physical gold stock in your boutique and ₹20 Lakhs as refundable deposit."
      },
      {
        title: "Dual Revenue Engine",
        desc: "Earn upfront retail margins on jewellery & coin sales PLUS steady monthly recurring commissions from thousands of gold savings scheme subscribers."
      },
      {
        title: "Turnkey Luxury Architectural Setup",
        desc: "Complete 3D showroom architectural blueprint, high-security display vitrines, biometric vaults, and signature ambient lighting."
      },
      {
        title: "Centralized Lead Gen & Telecalling",
        desc: "Our digital marketing campaigns generate high-intent gold scheme inquiries in your PIN code, which our centralized telecallers warm-transfer to your branch."
      },
      {
        title: "Guaranteed Buyback & Liquidity",
        desc: "Gold never depreciates or becomes obsolete. Enjoy fast stock replenishment, full assay certifications, and complete liquidity backing."
      },
      {
        title: "Comprehensive ERP & Training",
        desc: "End-to-end POS billing software, live spot gold rate feeds, customer passbook sync, and rigorous staff sales training from Shalom Gold Academy."
      }
    ],
    tiers: [
      { name: "Standard Boutique", range: "₹50 Lakhs – ₹75 Lakhs", area: "300 - 500 sq ft" },
      { name: "Prime Showroom", range: "₹75 Lakhs – ₹1.25 Cr", area: "500 - 800 sq ft" },
      { name: "Flagship Hub", range: "₹1.25 Cr – ₹2.5 Cr", area: "800 - 1,500 sq ft" },
      { name: "Master Regional Territory", range: "Above ₹2.5 Cr", area: "Territory Rights" }
    ]
  },

  stores: [
    {
      id: "store-1",
      city: "Mumbai",
      name: "Zaveri Bazaar Flagship Boutique",
      address: "142, Sheikh Memon Street, Zaveri Bazaar, Kalbadevi, Mumbai - 400002",
      timing: "Mon – Sat: 10:30 AM – 8:30 PM | Sun: 11:00 AM – 7:00 PM",
      phone: "+91 22 2341 8888",
      email: "mumbai.zaveri@goldproject.com",
      manager: "Rajesh V. Zaveri",
      features: ["Bridal Lounge", "Gold Purity Testing Karatmeter", "Private VIP Suite", "Valet Parking"]
    },
    {
      id: "store-2",
      city: "Mumbai",
      name: "Bandra Linking Road Luxury Lounge",
      address: "Plot 48, Linking Road, Near Khar Telephone Exchange, Bandra West, Mumbai - 400050",
      timing: "Mon – Sun: 11:00 AM – 9:00 PM",
      phone: "+91 22 2640 7777",
      email: "mumbai.bandra@goldproject.com",
      manager: "Sneha Kapoor",
      features: ["Diamond Solitaire Bar", "Custom Bespoke Studio", "Champagne Hospitality"]
    },
    {
      id: "store-3",
      city: "Delhi",
      name: "South Extension Heritage Mansion",
      address: "E-14, South Extension Part II, Main Ring Road, New Delhi - 110049",
      timing: "Mon – Sun: 10:30 AM – 8:00 PM (Closed Tuesday)",
      phone: "+91 11 4164 9999",
      email: "delhi.southex@goldproject.com",
      manager: "Vikramaditya Oberoi",
      features: ["Polki & Kundan Bridal Vault", "Bullion Investment Counter", "Karatmeter Testing"]
    },
    {
      id: "store-4",
      city: "Bengaluru",
      name: "Commercial Street Flagship",
      address: "76, Commercial Street, Tasker Town, Shivaji Nagar, Bengaluru - 560001",
      timing: "Mon – Sun: 10:30 AM – 8:30 PM",
      phone: "+91 80 2558 3333",
      email: "blr.commstreet@goldproject.com",
      manager: "Ananya Hegde",
      features: ["Temple Jewellery Sanctuary", "Old Gold Exchange Zone", "VIP Consultation Rooms"]
    },
    {
      id: "store-5",
      city: "Chennai",
      name: "T. Nagar Gold Haven",
      address: "33, Usman Road, Panagal Park, T. Nagar, Chennai - 600017",
      timing: "Mon – Sun: 10:00 AM – 9:00 PM",
      phone: "+91 44 2434 2222",
      email: "chennai.tnagar@goldproject.com",
      manager: "Srinivasan Raman",
      features: ["Vedic Antique Vault", "Bullion Gifting Desk", "Bridal Stylist Desk"]
    },
    {
      id: "store-6",
      city: "Hyderabad",
      name: "Lulu Mall Trinity Boutique",
      address: "Lulu Mall, Manjeera Trinity, KPHB, Hyderabad, Telangana",
      timing: "Mon – Sun: 10:30 AM – 9:30 PM",
      phone: "+91 88888 88888",
      email: "care@goldproject.com",
      manager: "Mirza Baig",
      features: ["Nizamiah Pearls & Heritage Section", "High Security Vault Viewings", "Bespoke Custom Orders"]
    },
    {
      id: "store-7",
      city: "Kolkata",
      name: "Park Street Luxury Atelier",
      address: "22A, Park Street, Near Camac Street Crossing, Kolkata - 700016",
      timing: "Mon – Sat: 11:00 AM – 8:00 PM (Closed Sunday)",
      phone: "+91 33 2229 4444",
      email: "kolkata.parkst@goldproject.com",
      manager: "Debashis Mukherjee",
      features: ["Bengali Filigree Crafts Counter", "Assay & Purity Lab", "Bridal Suites"]
    },
    {
      id: "store-8",
      city: "Ahmedabad",
      name: "C.G. Road Elite Galleria",
      address: "Shop 101, Supermall, C.G. Road, Navrangpura, Ahmedabad - 380009",
      timing: "Mon – Sun: 10:30 AM – 8:30 PM",
      phone: "+91 79 2644 1111",
      email: "ahmedabad.cgroad@goldproject.com",
      manager: "Bhavin Patel",
      features: ["Wedding Gold Consultants", "Gold Coin Investment Wing", "Live Karatmeter Testing"]
    }
  ],

  coupons: [
    {
      id: "off-1",
      code: "ROYALGOLD50",
      title: "Flat 50% Off on Making Charges",
      tagline: "On all antique, bridal necklaces & kadas over ₹1,00,000",
      discount: "50% OFF MAKING",
      minPurchase: "₹1,00,000"
    },
    {
      id: "off-2",
      code: "AKSHAYA10",
      title: "Zero Making Charges on Gold Coins",
      tagline: "Buy 5g or 10g 24K (999) certified investment gold coins at zero making fee",
      discount: "0% MAKING FEE",
      minPurchase: "5 Grams Coin"
    },
    {
      id: "off-3",
      code: "BRIDALGLAM",
      title: "Free 1 Gram 24K Gold Coin on Bridal Sets",
      tagline: "Get a complimentary pure 24K Lakshmi Gold Coin on bridal jewellery orders above ₹2,00,000",
      discount: "FREE 1G GOLD COIN",
      minPurchase: "₹2,00,000"
    },
    {
      id: "off-4",
      code: "SWARNA100",
      title: "100% Making Charge Waiver for Scheme Enrollees",
      tagline: "Complete 11 months of Swarna Nidhi Gold Savings and enjoy 100% making charges off on month 12 redemption",
      discount: "100% WAIVER",
      minPurchase: "₹2,500/Month"
    }
  ],

  faqs: [
    {
      q: "How does the 2% monthly benefit work in Gold Hold & Grow?",
      a: "When you purchase or deposit physical gold (minimum 10 grams) with Shalom Gold Vaults for a 12-month tenure, Shalom Gold pays you a monthly benefit of 2% calculated on the deposited gold value directly into your bank account each month."
    },
    {
      q: "What happens to my physical gold during the 1-year tenure?",
      a: "Your gold is held in bank-grade, fully insured tier-IV vaults with individual custody certificates and legal bailment documentation. It remains 100% your property."
    },
    {
      q: "How do the 1 to 5 Year Gold Savings Schemes work?",
      a: "You deposit a fixed installment every month. Shalom Gold adds full monthly installments free of cost as your scheme bonus (1 month added on 1-Year plan, 2 months on 2-Year plan, up to 5 months on 5-Year plan). Upon maturity, you redeem 100% value in certified physical gold jewellery, coins, or bars with making charge waivers."
    },
    {
      q: "How can I verify the purity of gold purchased from Shalom Gold?",
      a: "Every single piece of jewellery and gold bullion is 100% BIS Hallmarked with a 6-digit laser HUID (Hallmark Unique Identification Number). Customers can also verify the gold purity anytime at any Shalom Gold showroom using our computerized spectrometer Karatmeters free of cost."
    },
    {
      q: "What is the minimum investment for a Shalom Gold Franchise?",
      a: "The starting capital requirement is ₹50 Lakhs & above. Crucially, 60% (₹30 Lakhs) is allocated directly into tangible physical gold inventory in your store, and 40% (₹20 Lakhs) is maintained as a refundable security deposit."
    },
    {
      q: "How do I receive my gold after the scheme maturity?",
      a: "You can walk into any of our 8 flagship boutiques across India and redeem your accumulated balance in physical 24K bullion bars, mint coins, or designer 22K jewellery. Doorstep insured courier delivery is also available."
    }
  ],

  testimonials: [
    {
      name: "Dr. Suresh Reddy",
      city: "Hyderabad",
      role: "Franchise Partner & Investor",
      comment: "Partnering with Shalom Gold as a boutique franchisee has been extraordinary. 60% of our investment was in actual physical gold stock, and the recurring monthly scheme enrollees generate predictable cashflow every month.",
      rating: 5
    },
    {
      name: "Meenakshi Sundaram",
      city: "Chennai",
      role: "Swarna Nidhi Scheme Member",
      comment: "I enrolled in the 1-Year Smart Gold plan. Paying for 11 months and having Shalom Gold add the 12th month installment gave me the perfect wedding gift for my daughter with zero making charges!",
      rating: 5
    },
    {
      name: "Vikramaditya Singhania",
      city: "Mumbai",
      role: "Hold & Grow Client (500g)",
      comment: "Instead of keeping my bullion idle in a bank locker paying locker rent, I deposited it in Shalom Gold's Hold & Grow scheme. Receiving a 2% monthly return like clockwork is unmatched.",
      rating: 5
    },
    {
      name: "Pooja Malhotra",
      city: "Delhi",
      role: "Bridal Jewellery Patron",
      comment: "The antique Vedic temple necklace set is magnificent. The BIS hallmark was verified immediately, and their Zaveri Bazaar craftsmanship shines through every detail.",
      rating: 5
    }
  ]
};

// Formatting helpers
window.formatINR = function(num) {
  return "₹" + Number(num).toLocaleString('en-IN');
};

console.log("Shalom Gold dataset loaded successfully.");
