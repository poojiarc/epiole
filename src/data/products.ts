// Product data for EPIOLE TRANSDERMIC

import accuzenImg from "@/assets/products/accuzen.jpg";
import clarinexGlowImg from "@/assets/products/clarinex-glow.jpg";
import clarinexTxImg from "@/assets/products/clarinex-tx.jpg";
import clarinexForteImg from "@/assets/products/clarinex-forte.jpg";
import heliozenImg from "@/assets/products/heliozen.jpg";
import dewnixHydraImg from "@/assets/products/dewnix-hydra.jpg";
import dewnixSrImg from "@/assets/products/dewnix-sr.png";
import dewnixElixiaImg from "@/assets/products/dewnix-elixia.png";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  keyBenefits: string[];
  keyIngredients: {
    name: string;
    description: string;
  }[];
  fullIngredients?: string;
  isUpcoming?: boolean;
}

export const products: Product[] = [
  {
    id: "accuzen",
    name: "Accuzen™",
    tagline: "Gentle on Skin – Tough on Acne",
    shortDescription: "Anti-acne oil control face wash with AHA + BHA exfoliants for clear, healthy skin.",
    description: "A clinically advanced anti-acne face wash designed to deliver visible clarity and long-lasting oil control. This multi-action formula deeply cleanses pores, reduces active acne, and helps prevent future breakouts while maintaining the skin's natural balance. Formulated with a powerful blend of dermatologically proven actives including Salicylic Acid (BHA), Mandelic Acid (AHA), Niacinamide, Zinc PCA, and Licorice Extract, Accuzen™ works at multiple levels to purify, calm, and refine acne-prone skin.",
    image: accuzenImg,
    category: "Face Wash",
    keyBenefits: [
      "Unclogs pores and targets acne at its source",
      "Controls excess oil and shine",
      "Reduces inflammation and redness",
      "Helps fade post-acne marks and pigmentation",
      "Gentle on skin, tough on acne",
      "Suitable for oily, acne-prone, and combination skin"
    ],
    keyIngredients: [
      { name: "Salicylic Acid (BHA)", description: "A powerful oil-soluble exfoliant that penetrates deep into pores to dissolve excess sebum, dead skin cells, and impurities." },
      { name: "Mandelic Acid (AHA)", description: "A gentle alpha hydroxy acid with a larger molecular structure that exfoliates slowly and evenly, suitable for sensitive skin." },
      { name: "Niacinamide (Vitamin B3)", description: "Strengthens the skin barrier, regulates oil production, reduces redness, and visibly improves uneven tone and post-acne marks." },
      { name: "Zinc PCA", description: "Helps control excess sebum, inhibit acne-causing bacteria, and reduce shine while maintaining skin hydration balance." },
      { name: "Licorice Root Extract", description: "Soothes inflammation and improves the appearance of dark spots and post-acne pigmentation." }
    ],
    fullIngredients: "Aqua, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Glycerin, Hydroxyethyl Urea, Coco-Glucoside, Decyl Glucoside, Sodium PCA, Triethanolamine, PEG-150, Hydrogenated Castor Oil, Propanediol, Zinc PCA, Niacinamide, Phenoxyethanol, Ethylhexylglycerin, Mandelic Acid, Panthenol, Glycyrrhiza Glabra (Licorice) Root Extract, Salicylic Acid, Disodium EDTA, Alpha-Arbutin, Menthol, Fragrance."
  },
  {
    id: "clarinex-glow",
    name: "Clarinex™ Glow",
    tagline: "Cleans Deep – Shines Bright",
    shortDescription: "Brightening face wash that cleanses deeply while enhancing skin radiance and clarity.",
    description: "A clinically advanced brightening face wash designed to cleanse deeply while enhancing skin radiance and clarity. This multi-action formula helps reduce pigmentation, dark spots, and dullness, leaving the skin visibly brighter, smoother, and more even-toned. Formulated with Alpha Arbutin, Kojic Acid Dipalmitate, Glutathione, Licorice Extract, Centella Asiatica, Ginseng Extract, and Rice Water.",
    image: clarinexGlowImg,
    category: "Face Wash",
    keyBenefits: [
      "Helps reduce pigmentation and dark spots",
      "Brightens dull, tired-looking skin",
      "Promotes a clear and even skin tone",
      "Enhances natural glow and radiance",
      "Gently cleanses without stripping moisture",
      "Suitable for daily use"
    ],
    keyIngredients: [
      { name: "Alpha Arbutin", description: "A gold standard brightening ingredient that helps reduce melanin production, improving the appearance of dark spots and uneven skin tone." },
      { name: "Kojic Acid Dipalmitate", description: "A stable and gentle derivative of kojic acid that enhances skin brightness and supports long-term pigmentation control." },
      { name: "Glutathione", description: "A powerful antioxidant known for its skin-brightening and detoxifying properties." },
      { name: "Centella Asiatica Extract", description: "Supports skin repair, soothes irritation, and strengthens the skin barrier." },
      { name: "Rice Water Extract", description: "Traditionally known for enhancing skin brightness, softness, and smooth texture." }
    ],
    fullIngredients: "Aqua (Water), Glycerin, Propylene Glycol, Myristic Acid, Stearic Acid, Lauric Acid, Glyceryl Monostearate, Alpha-Arbutin, Kojic Acid Dipalmitate, Glycyrrhiza Glabra (Licorice) Root Extract, Glutathione, Glycol Stearate, Potassium Sorbate, Decyl Glucoside, Propanediol, Salix Alba (Willow) Bark Extract, Centella Asiatica Extract, Cocamidopropyl Betaine, Polyquaternium-7, Phenoxyethanol, Panax Ginseng Root Extract, Oryza Sativa (Rice) Extract, Disodium EDTA, Color, Fragrance."
  },
  {
    id: "clarinex-tx",
    name: "Clarinex-TX™",
    tagline: "Target Pigment – Restores Even Tone",
    shortDescription: "Advanced de-pigmentation cream targeting stubborn pigmentation and dark spots.",
    description: "A clinically advanced depigmentation cream designed to target stubborn pigmentation, dark spots, and uneven skin tone. This multi-action formula works at the source of hyperpigmentation while improving skin clarity and radiance. Formulated with Tranexamic Acid, Kojic Acid Dipalmitate, Alpha Arbutin, L-Glutathione, Niacinamide, Vitamin C (MAP), Mulberry Extract, and Sodium Hyaluronate.",
    image: clarinexTxImg,
    category: "Treatment Cream",
    keyBenefits: [
      "Helps reduce dark spots and hyperpigmentation",
      "Improves uneven skin tone and discoloration",
      "Enhances skin brightness and clarity",
      "Provides antioxidant protection",
      "Supports skin repair and renewal",
      "Ideal for pigmentation-prone and dull skin"
    ],
    keyIngredients: [
      { name: "Tranexamic Acid", description: "A clinically proven depigmenting agent that helps reduce melasma, dark spots, and uneven skin tone by inhibiting melanin production." },
      { name: "Kojic Acid Dipalmitate", description: "Promotes skin brightening and long-term pigmentation control." },
      { name: "Alpha Arbutin", description: "Reduces melanin formation and improves discoloration." },
      { name: "L-Glutathione", description: "A powerful antioxidant that supports skin brightening and radiance." },
      { name: "Vitamin C (MAP)", description: "A stable vitamin C derivative that brightens skin and supports collagen health." },
      { name: "Niacinamide", description: "Improves uneven tone, strengthens the skin barrier, and enhances skin clarity." }
    ]
  },
  {
    id: "clarinex-forte",
    name: "Clarinex-Forte™",
    tagline: "Target Pigmentation – Restore Radiance",
    shortDescription: "Nutraceutical supplement with L-Glutathione and antioxidants for skin clarity.",
    description: "A premium nutraceutical formulated to support skin brightness from within. Featuring Liposomal L-Glutathione, Resveratrol, Melatonin, and a powerful antioxidant & multi-vitamin complex, Clarinex-Forte helps maintain skin clarity and even tone while providing antioxidant protection against environmental stressors.",
    image: clarinexForteImg,
    category: "Nutraceutical",
    keyBenefits: [
      "Supports reduction in the appearance of uneven tone",
      "Maintains skin clarity and even tone",
      "Provides antioxidant protection against environmental stressors",
      "Suitable for both men and women",
      "Lactose free and gluten free"
    ],
    keyIngredients: [
      { name: "L-Glutathione (Liposomal Form)", description: "A master antioxidant that helps brighten the skin, fights oxidative stress, and detoxifies the body." },
      { name: "Resveratrol", description: "A powerful antioxidant that helps reduce melanin production and protects against environmental damage." },
      { name: "Melatonin", description: "Supports cellular repair, enhances skin radiance, and protects against oxidative damage." },
      { name: "Antioxidant & Multi Vitamin Complex", description: "Nourishes and energizes the skin, providing overall skin health benefits." }
    ]
  },
  {
    id: "heliozen",
    name: "Heliozen™",
    tagline: "Ultimate Sun Protection Companion",
    shortDescription: "Broad spectrum SPF 50+ PA+++ sunscreen with UVA/UVB and blue light protection.",
    description: "A clinically advanced, next-generation sunscreen designed to provide complete photoprotection against UVA, UVB, HEV (Blue Light), Visible Light, and Infrared (IR) radiation. Powered by Zinc Oxide, Titanium Dioxide, Tinosorb S & M, and enriched with Niacinamide, Ceramide, and Sodium Hyaluronate for complete protection and skin care.",
    image: heliozenImg,
    category: "Sun Protection",
    keyBenefits: [
      "Provides broad-spectrum protection against UVA & UVB",
      "Protects against Blue Light (HEV), Visible Light, and IR radiation",
      "Helps prevent pigmentation, photoaging, and sun damage",
      "Strengthens skin barrier and improves skin resilience",
      "Non-greasy, lightweight, and suitable for daily use",
      "Suitable for all skin types, including sensitive skin"
    ],
    keyIngredients: [
      { name: "Zinc Oxide (10%)", description: "A broad-spectrum mineral UV filter that protects against UVA and UVB while being gentle on sensitive skin." },
      { name: "Titanium Dioxide (4%)", description: "Provides strong UVB protection and enhances overall sun defense." },
      { name: "Tinosorb S & M (3% each)", description: "Advanced hybrid UV filters that offer superior and photostable UVA and UVB protection." },
      { name: "Iron Oxides", description: "Shield skin from visible light and help prevent pigmentation and melasma." },
      { name: "Niacinamide & Ceramide", description: "Repair and strengthen the skin barrier while providing hydration." }
    ],
    fullIngredients: "Aqua, Zinc Oxide (Nano), Titanium Dioxide (Micronized), Tinosorb M, Tinosorb S, Coolin, Iron Oxide, Niacinamide, Ceramide, Sodium Hyaluronate, Vitamin E, Cyclomethicone, Dimethicone Crosspolymer, Glyceryl Stearate, Ceteryl Alcohol, Steareth-2, Steareth-21, Phenoxyethanol, Ethylhexyl-glycerin, Glycerin, Shea Butter, Aloe Vera, Fragrance."
  },
  {
    id: "dewnix-hydra",
    name: "Dewnix-Hydra™",
    tagline: "Deep Hydration – Lasting Comfort",
    shortDescription: "Barrier support moisturizer for intense hydration and skin barrier repair.",
    description: "A clinically advanced barrier repair moisturizer designed to provide intense hydration while restoring and strengthening the skin's natural protective barrier. Formulated with Ceramide 3B, Pentavitin, Bio-Peptide, Low Molecular Weight Hyaluronic Acid, Oat Leaf Extract, Panthenol, Shea Butter, and Aloe Vera for complete skin care.",
    image: dewnixHydraImg,
    category: "Moisturizer",
    keyBenefits: [
      "Provides deep and long-lasting hydration",
      "Repairs and strengthens the skin barrier",
      "Relieves dryness, tightness, and sensitivity",
      "Soothes and calms irritated skin",
      "Suitable for dry, sensitive, and compromised skin",
      "Non-comedogenic and dermatologically tested"
    ],
    keyIngredients: [
      { name: "Ceramide 3B", description: "Rebuilds and strengthens the skin barrier, helps retain moisture, and prevents water loss." },
      { name: "Pentavitin", description: "Provides 72-hour deep hydration by locking in moisture, giving dry and sensitive skin soothing relief." },
      { name: "Hyaluronic Acid (LMW)", description: "Low molecular weight Hyaluronic Acid deeply hydrates, plumps the skin, and improves elasticity." },
      { name: "Oat Leaf Extract", description: "Rich in antioxidants and beta-glucan, soothes irritation, strengthens skin barrier, and aids in moisture retention." },
      { name: "Panthenol (Pro-Vitamin B5)", description: "Hydrates, repairs, and strengthens the skin while improving softness and elasticity." }
    ]
  },
  {
    id: "dewnix-sr",
    name: "Dewnix-SR™",
    tagline: "Ultimate Moisturising Serum",
    shortDescription: "Advanced moisturizing serum with multi-molecular hyaluronic acid complex.",
    description: "An advanced moisturizing serum featuring a multi-molecular hyaluronic acid complex combined with Niacinamide 3%, Zinc PCA, Betaine, Beta Glucan, Panthenol, Ceramide Complex 3:1:1, and Ectoin for complete hydration and skin barrier support.",
    image: dewnixSrImg,
    category: "Serum",
    keyBenefits: [
      "Multi-level hydration with different molecular weight hyaluronic acids",
      "Strengthens and supports skin barrier function",
      "Reduces skin sensitivity and irritation",
      "Improves skin texture and smoothness",
      "Suitable for all skin types",
      "30ml bottle with dropper for precise application"
    ],
    keyIngredients: [
      { name: "Multi-Molecular Hyaluronic Acid", description: "Different molecular weights penetrate various skin layers for comprehensive hydration." },
      { name: "Niacinamide 3%", description: "Strengthens skin barrier, reduces redness, and improves overall skin texture." },
      { name: "Ceramide Complex 3:1:1", description: "Optimal ratio of ceramides for maximum barrier repair and protection." },
      { name: "Ectoin", description: "Natural stress-protection molecule that shields skin from environmental damage." },
      { name: "Beta Glucan", description: "Powerful antioxidant that soothes and calms sensitive skin." }
    ],
    isUpcoming: true
  },
  {
    id: "dewnix-elixia",
    name: "Dewnix-Elixia™",
    tagline: "Target Barrier Damage – Restores Skin Integrity",
    shortDescription: "Barrier repair and skin recovery cream with ceramide complex.",
    description: "A specialized barrier repair and skin recovery cream designed to target barrier damage and restore skin integrity. Features a powerful Ceramide Complex, Multi-Molecular HA, Madecassoside, Allantoin, Ectoin, and Betaine to repair and strengthen the skin barrier, provide deep hydration with TEWL control, and calm redness and sensitivity.",
    image: dewnixElixiaImg,
    category: "Treatment Cream",
    keyBenefits: [
      "Repairs & strengthens skin barrier",
      "Deep hydration + TEWL control",
      "Calms redness & sensitivity",
      "Restores skin integrity",
      "Suitable for compromised and post-procedure skin"
    ],
    keyIngredients: [
      { name: "Ceramide Complex", description: "Essential lipids that repair and strengthen the skin's protective barrier." },
      { name: "Multi-Molecular HA", description: "Multiple weights of hyaluronic acid for comprehensive hydration at all skin levels." },
      { name: "Madecassoside", description: "Powerful centella-derived ingredient that calms inflammation and supports healing." },
      { name: "Allantoin", description: "Soothes irritation and promotes skin regeneration." },
      { name: "Ectoin & Betaine", description: "Natural molecules that protect cells from stress and maintain hydration." }
    ],
    isUpcoming: true
  }
];

export const upcomingProducts = products.filter(p => p.isUpcoming);
export const availableProducts = products.filter(p => !p.isUpcoming);

export const companyInfo = {
  name: "EPIOLE TRANSDERMIC",
  parent: "CURETIQUE LIFE SCIENCES PRIVATE LIMITED",
  phone: "+91-7396988934",
  email: "sayadbasha@gmail.com",
  address: {
    line1: "Unit No 405–411, Bizness Square",
    line2: "Jubilee Enclave, Madhapur",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    zip: "500081"
  },
  businessHours: "Monday to Saturday: 9 AM – 9 PM",
  whatsapp: "7396988934",
  whatsappLink: "https://wa.me/message/DD6TU5UXU4CYH1",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com"
  }
};

export const brandContent = {
  vision: "At EPIOLE TRANSDERMIC, our vision is to revolutionize skincare through cutting-edge transdermal technology that delivers active ingredients precisely where they are needed most. We aspire to set new standards in dermatological science by creating formulations that are clinically effective, dermatologist-trusted, and accessible to everyone. Our goal is to empower individuals to achieve healthy, radiant skin through products that combine advanced research with the finest ingredients. We envision a world where skincare is not just about appearance but about nurturing the skin's health from within, making clinical-grade care a part of everyday life.",
  mission: "Our mission at EPIOLE TRANSDERMIC is to develop premium, science-backed skincare solutions that address real skin concerns with precision and care. We are committed to leveraging the latest advancements in transdermal delivery systems to ensure optimal absorption and efficacy of our formulations. Every product we create is the result of rigorous research, clinical testing, and a deep understanding of dermatological needs. We strive to build trust with our customers by delivering consistent results, maintaining the highest quality standards, and prioritizing skin safety. Our mission is to be a trusted partner in every individual's journey toward healthier, more confident skin."
};
