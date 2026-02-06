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
  featuresAndBenefits?: string;
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
    name: "Accuzen\u2122",
    tagline: "Gentle on Skin – Tough on Acne",
    shortDescription: "Anti-acne oil control face wash with AHA + BHA exfoliants for clear, healthy skin.",
    description: "A clinically advanced anti-acne face wash designed to deliver visible clarity and long-lasting oil control. This multi-action formula deeply cleanses pores, reduces active acne, and helps prevent future breakouts while maintaining the skin's natural balance. Formulated with a powerful blend of dermatologically proven actives including Salicylic Acid (BHA), Mandelic Acid (AHA), Niacinamide, Zinc PCA, and Licorice Extract, Accuzen™ works at multiple levels to purify, calm, and refine acne-prone skin. It gently exfoliates dead skin cells, unclogs pores, controls excess sebum, soothes inflammation, and helps fade post-acne marks leaving the skin fresh, clear, and visibly healthier.",
    featuresAndBenefits: "This advanced anti-acne face wash combines deep cleansing action with powerful skin clarifying benefits. Featuring a potent blend of dermatologically proven actives, Accuzen™ is designed to fight the multiple factors responsible for acne, excess oil, clogged pores, and post-acne marks, while keeping the skin balanced and healthy.\n\nFor Accuzen™, we have created a unique multi-active complex featuring Salicylic Acid (BHA), Mandelic Acid (AHA), Niacinamide, Zinc PCA, and Licorice Extract. These highly effective ingredients work in perfect synergy to target acne at its root, regulate sebum production, calm inflammation, and improve overall skin texture and tone.\n\nSalicylic Acid penetrates deep into the pores to dissolve excess oil and impurities, while Mandelic Acid gently exfoliates the skin surface, promoting cell renewal and preventing pore blockage. Niacinamide strengthens the skin barrier, reduces redness, and helps fade post-acne marks. Zinc PCA controls excess sebum and minimizes shine, and Licorice Extract soothes the skin while enhancing brightness and clarity.\n\nWith such a powerful combination of acne fighting and skin refining ingredients, this advanced cleanser is built to help you win the battle against acne, oiliness, and dull skin. It reveals a clearer, smoother, and healthier-looking complexion while being gentle enough for daily use.",
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
      { name: "Salicylic Acid (BHA)", description: "A powerful oil-soluble exfoliant that penetrates deep into pores to dissolve excess sebum, dead skin cells, and impurities. It helps unclog pores, reduce active acne, prevent future breakouts, and calm inflammation for clearer, healthier-looking skin." },
      { name: "Mandelic Acid (AHA)", description: "A gentle alpha hydroxy acid with a larger molecular structure that exfoliates slowly and evenly, making it suitable for acne-prone and sensitive skin. It promotes skin renewal, refines texture, and helps prevent pore congestion while minimizing irritation." },
      { name: "Niacinamide (Vitamin B3)", description: "A multi-functional skin repair ingredient that strengthens the skin barrier, regulates oil production, reduces redness, and visibly improves uneven tone and post-acne marks. It also helps minimize the appearance of enlarged pores and supports smoother skin texture." },
      { name: "Zinc PCA", description: "A bioavailable form of zinc combined with PCA that helps control excess sebum, inhibit acne-causing bacteria, and reduce shine while maintaining skin hydration balance." },
      { name: "Licorice Root Extract (Glycyrrhiza glabra)", description: "A natural skin-soothing and brightening botanical known for its anti-inflammatory and antioxidant properties. It helps calm irritation and improve the appearance of dark spots and post-acne pigmentation." },
      { name: "Panthenol (Pro-Vitamin B5)", description: "A deeply hydrating and soothing ingredient that supports skin repair and reduces dryness or irritation commonly associated with acne treatments." },
      { name: "Sodium PCA & Glycerin", description: "Naturally occurring moisturizing factors that attract and retain moisture, ensuring effective cleansing without stripping the skin." }
    ],
    fullIngredients: "Aqua, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Glycerin, Hydroxyethyl Urea, Coco-Glucoside, Decyl Glucoside, Sodium PCA, Triethanolamine, PEG-150, Hydrogenated Castor Oil, Propanediol, Zinc PCA, Niacinamide, Phenoxyethanol (and) Ethylhexylglycerin (Euxyl K 120), Mandelic Acid, Panthenol, Glycyrrhiza Glabra (Licorice) Root Extract, Salicylic Acid, Disodium EDTA, Alpha-Arbutin, Menthol, Fragrance."
  },
  {
    id: "clarinex-glow",
    name: "Clarinex\u2122 Glow",
    tagline: "Bright & Clear Complexion Face Wash",
    shortDescription: "Brightening face wash that cleanses deeply while enhancing skin radiance and clarity.",
    description: "A clinically advanced brightening face wash designed to cleanse deeply while enhancing skin radiance and clarity. This multi-action formula helps reduce pigmentation, dark spots, and dullness, leaving the skin visibly brighter, smoother, and more even-toned. Formulated with a powerful blend of skin brightening and botanical actives including Alpha Arbutin, Kojic Acid Dipalmitate, Glutathione, Licorice Extract, Centella Asiatica, Ginseng Extract, and Rice Water, Clarinex™ Glow works at multiple levels to purify, repair, and illuminate the complexion. It gently cleanses impurities, supports melanin regulation, soothes irritation, and boosts natural glow revealing a fresh, luminous, and healthy looking skin.",
    featuresAndBenefits: "This advanced brightening face wash combines deep cleansing action with powerful complexion-enhancing benefits. Featuring a potent blend of dermatologically proven brightening agents and botanical extracts, Clarinex™ Glow is designed to fight the multiple factors responsible for dullness, uneven tone, and pigmentation while keeping the skin balanced and healthy.\n\nFor Clarinex™ Glow, we have created a unique multi-active brightening complex featuring Alpha Arbutin, Kojic Acid Dipalmitate, Glutathione, Licorice Extract, Willow Bark Extract, Centella Asiatica, Ginseng Extract, and Rice Water Extract. These highly effective ingredients work in perfect synergy to regulate melanin production, gently exfoliate, calm inflammation, and restore skin luminosity.\n\nAlpha Arbutin and Kojic Acid Dipalmitate help reduce pigmentation and dark spots, while Glutathione provides antioxidant protection and supports skin brightness. Licorice Extract and Centella Asiatica calm the skin and improve clarity. Willow Bark Extract offers gentle exfoliation, and Ginseng with Rice Water revitalizes and nourishes the skin for a naturally glowing complexion.\n\nWith such a powerful combination of brightening, soothing, and revitalizing ingredients, Clarinex™ Glow is built to help you achieve a clearer, smoother, and more luminous complexion while being gentle enough for daily use.",
    image: clarinexGlowImg,
    category: "Face Wash",
    keyBenefits: [
      "Helps reduce pigmentation and dark spots",
      "Brightens dull, tired-looking skin",
      "Promotes a clear and even skin tone",
      "Enhances natural glow and radiance",
      "Gently cleanses without stripping moisture",
      "Soothes and nourishes the skin",
      "Suitable for daily use"
    ],
    keyIngredients: [
      { name: "Alpha Arbutin", description: "A gold standard brightening ingredient that helps reduce melanin production, improving the appearance of dark spots, pigmentation, and uneven skin tone." },
      { name: "Kojic Acid Dipalmitate", description: "A stable and gentle derivative of kojic acid that enhances skin brightness and supports long-term pigmentation control." },
      { name: "Glutathione", description: "A powerful antioxidant known for its skin-brightening and detoxifying properties, promoting a radiant and healthy glow." },
      { name: "Licorice Root Extract (Glycyrrhiza glabra)", description: "Soothes the skin, reduces redness, and helps improve the appearance of dark spots and discoloration." },
      { name: "Willow Bark Extract (Salix alba)", description: "Provides gentle exfoliation, helping remove dead skin cells and refine skin texture." },
      { name: "Centella Asiatica (CICA) Extract", description: "Supports skin repair, soothes irritation, and strengthens the skin barrier." },
      { name: "Ginseng Extract (Panax ginseng)", description: "Revitalizes tired skin, improves circulation, and boosts natural radiance." },
      { name: "Rice Water Extract (Oryza sativa)", description: "Traditionally known for enhancing skin brightness, softness, and smooth texture." }
    ],
    fullIngredients: "Aqua (Water), Glycerin, Propylene Glycol, Myristic Acid, Stearic Acid, Lauric Acid, Glyceryl Monostearate, Alpha-Arbutin, Kojic Acid Dipalmitate, Glycyrrhiza Glabra (Licorice) Root Extract, Glutathione, Glycol Stearate, Potassium Sorbate, Decyl Glucoside, Propanediol, Salix Alba (Willow) Bark Extract, Centella Asiatica Extract, Cocamidopropyl Betaine, Polyquaternium-7, Phenoxyethanol, Panax Ginseng Root Extract, Oryza Sativa (Rice) Extract, Disodium EDTA, Color, Fragrance."
  },
  {
    id: "clarinex-tx",
    name: "Clarinex\u2122-TX",
    tagline: "Target Pigment – Restores Even Tone",
    shortDescription: "Advanced de-pigmentation cream targeting stubborn pigmentation, dark spots, and uneven skin tone.",
    description: "A clinically advanced depigmentation cream designed to target stubborn pigmentation, dark spots, and uneven skin tone. This multi-action formula works at the source of hyperpigmentation while improving skin clarity and radiance, leaving the skin visibly brighter, smoother, and more even-toned. Formulated with a powerful blend of dermatologically proven brightening and corrective actives including Tranexamic Acid, Kojic Acid Dipalmitate, Alpha Arbutin, L-Glutathione, Niacinamide, Vitamin C (MAP), Mulberry Extract, and Sodium Hyaluronate, Clarinex-TX works at multiple levels to reduce pigmentation, inhibit excess melanin production, and restore natural skin luminosity. It helps fade dark spots, correct uneven tone, soothe inflammation, and provide antioxidant protection, revealing clearer, healthier, and radiant looking skin.",
    featuresAndBenefits: "This advanced depigmentation cream combines targeted pigment correction with powerful skin-brightening and skin-soothing benefits. Featuring a potent blend of clinically proven depigmenting agents and antioxidants, Clarinex-TX is designed to fight the multiple causes of pigmentation while maintaining skin balance and comfort.\n\nFor Clarinex-TX, we have created a unique Multi-Active Pigment Correction Complex featuring Tranexamic Acid, Kojic Acid Dipalmitate, Alpha Arbutin, L-Glutathione, Niacinamide, Vitamin C (MAP), and Mulberry Extract. These highly effective ingredients work in perfect synergy to regulate melanin production, reduce existing pigmentation, protect against oxidative stress, and enhance skin radiance.\n\nTranexamic Acid helps suppress melanin synthesis and reduces pigmentation intensity. Kojic Acid Dipalmitate and Alpha Arbutin support long-term brightening and spot reduction. L-Glutathione and Vitamin E provide strong antioxidant protection. Niacinamide and Vitamin C (MAP) improve skin tone, clarity, and texture, while Mulberry Extract enhances overall brightness and evenness.\n\nWith such a powerful combination of depigmenting, brightening, and antioxidant ingredients, Clarinex-TX is built to deliver visible correction of pigmentation and restore a clear, radiant complexion.",
    image: clarinexTxImg,
    category: "Treatment Cream",
    keyBenefits: [
      "Helps reduce dark spots and hyperpigmentation",
      "Improves uneven skin tone and discoloration",
      "Enhances skin brightness and clarity",
      "Provides antioxidant protection",
      "Supports skin repair and renewal",
      "Hydrates and soothes the skin",
      "Suitable for daily use",
      "Ideal for pigmentation-prone and dull skin"
    ],
    keyIngredients: [
      { name: "Tranexamic Acid", description: "A clinically proven depigmenting agent that helps reduce melasma, dark spots, and uneven skin tone by inhibiting melanin production and suppressing melanin synthesis." },
      { name: "Kojic Acid Dipalmitate", description: "A stable and gentle form of kojic acid that promotes skin brightening and long-term pigmentation control." },
      { name: "Alpha Arbutin", description: "A gold-standard brightening ingredient that reduces melanin formation and improves discoloration." },
      { name: "L-Glutathione", description: "A powerful antioxidant that supports skin brightening, detoxification, and radiance." },
      { name: "Niacinamide (Vitamin B3)", description: "Improves uneven tone, strengthens the skin barrier, and enhances skin clarity." },
      { name: "Vitamin C (Magnesium Ascorbyl Phosphate)", description: "A stable vitamin C derivative that brightens skin and supports collagen health." },
      { name: "Mulberry Extract", description: "A natural brightening botanical that helps regulate melanin production and improve skin tone." },
      { name: "Sodium Hyaluronate", description: "Provides deep hydration and maintains skin plumpness and comfort." }
    ],
    fullIngredients: "Tranexamic Acid, Kojic Acid Dipalmitate, Alpha Arbutin, L-Glutathione, Niacinamide, Magnesium Ascorbyl Phosphate (Vitamin C), Mulberry Extract, Sodium Hyaluronate, and other cosmetic ingredients."
  },
  {
    id: "clarinex-forte",
    name: "Clarinex\u2122-Forte",
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
    name: "Heliozen\u2122",
    tagline: "Ultimate Sun Protection Companion",
    shortDescription: "Broad spectrum SPF 50+ PA+++ sunscreen with UVA/UVB and blue light protection.",
    description: "A clinically advanced, next-generation sunscreen designed to provide complete photoprotection against UVA, UVB, HEV (Blue Light), Visible Light, and Infrared (IR) radiation. Heliozen™ not only shields the skin from environmental damage but also strengthens the skin barrier and maintains long-lasting hydration. Powered by an innovative blend of Mineral + Hybrid UV filters including Zinc Oxide (Nano), Titanium Dioxide (Micronized), Tinosorb S, and Tinosorb M, along with Iron Oxides for visible light protection, Heliozen™ delivers superior broad-spectrum defense with a lightweight, cosmetically elegant finish. Enriched with Niacinamide, Ceramide, Sodium Hyaluronate, Vitamin E, Shea Butter, and Aloe Vera, it protects, repairs, hydrates, and soothes the skin, making it ideal for daily dermatological use.",
    featuresAndBenefits: "Heliozen™ features a Multi-Defense Photoprotection System that combines advanced mineral and organic filters with skin-repair actives and antioxidants for complete sun and environmental protection.\n\n• Zinc Oxide & Titanium Dioxide reflect and scatter harmful UV rays.\n• Tinosorb S & Tinosorb M provide high-performance UVA and UVB absorption for long-lasting protection.\n• Iron Oxides protect against visible light and help prevent pigmentation and melasma.\n• Niacinamide & Ceramide repair and strengthen the skin barrier.\n• Sodium Hyaluronate & Glycerin deliver deep hydration.\n• Vitamin E offers antioxidant protection against free radicals.\n• Shea Butter & Aloe Vera soothe, nourish, and calm sun-stressed skin.\n\nThis powerful synergy ensures complete environmental defense while keeping the skin healthy, hydrated, and comfortable.",
    image: heliozenImg,
    category: "Sun Protection",
    keyBenefits: [
      "Provides broad-spectrum protection against UVA & UVB",
      "Protects against Blue Light (HEV), Visible Light, and IR radiation",
      "Helps prevent pigmentation, photoaging, and sun damage",
      "Strengthens skin barrier and improves skin resilience",
      "Deeply hydrates and maintains moisture balance",
      "Soothes and calms sun-exposed skin",
      "Non-greasy, lightweight, and suitable for daily use",
      "Suitable for all skin types, including sensitive skin"
    ],
    keyIngredients: [
      { name: "Zinc Oxide (Nano)", description: "A broad-spectrum mineral UV filter that protects against UVA and UVB while being gentle on sensitive skin." },
      { name: "Titanium Dioxide (Micronized)", description: "Provides strong UVB protection and enhances overall sun defense." },
      { name: "Tinosorb S & Tinosorb M", description: "Advanced hybrid UV filters that offer superior and photostable UVA and UVB protection." },
      { name: "Iron Oxides", description: "Shield skin from visible light and help prevent pigmentation and melasma." },
      { name: "Niacinamide", description: "Strengthens the skin barrier, reduces redness, and supports even skin tone." },
      { name: "Ceramide", description: "Restores and protects the skin's natural moisture barrier." },
      { name: "Sodium Hyaluronate", description: "Provides deep hydration and improves skin plumpness." },
      { name: "Vitamin E", description: "An antioxidant that protects against environmental damage." },
      { name: "Shea Butter", description: "Nourishes and softens the skin while preventing moisture loss." },
      { name: "Aloe Vera", description: "Soothes irritation and calms sun-exposed skin." }
    ],
    fullIngredients: "Aqua, Zinc Oxide (Nano), Titanium Dioxide (Micronized), Tinosorb M, Tinosorb S, Coolin, Iron Oxide, Niacinamide, Ceramide, Sodium Hyaluronate, Vitamin E, Cyclomethicone, Dimethicone Crosspolymer, Glyceryl Stearate, Ceteryl Alcohol, Steareth-2, Steareth-21, Phenoxyethanol, Ethylhexyl-glycerin, Glycerin, Shea Butter, Aloe Vera, Fragrance."
  },
  {
    id: "dewnix-hydra",
    name: "Dewnix\u2122-Hydra",
    tagline: "Barrier Support Moisturizer – Deep Hydration, Lasting Comfort",
    shortDescription: "Barrier support moisturizer for intense hydration and skin barrier repair.",
    description: "A clinically advanced barrier repair moisturizer designed to provide intense hydration while restoring and strengthening the skin's natural protective barrier. This multi-action formula helps relieve dryness, tightness, and sensitivity, leaving the skin soft, smooth, calm, and comfortably nourished. Formulated with a powerful blend of skin barrier repairing and hydrating actives including Ceramide 3B, Pentavitin, Bio-Peptide, Low Molecular Weight Hyaluronic Acid, Oat Leaf Extract, Panthenol, Shea Butter, and Aloe Vera, Dewnix-Hydra™ works at multiple levels to repair, protect, and deeply moisturize the skin. It replenishes lost moisture, locks in long lasting hydration, soothes irritation, and strengthens the skin barrier, revealing healthier, plumper, and more resilient skin.",
    featuresAndBenefits: "This advanced barrier support moisturizer combines intensive hydration with powerful skin-repair benefits. Featuring a potent blend of dermatologically proven moisturizing agents, lipids, and soothing botanicals, Dewnix-Hydra is designed to combat the multiple causes of dryness, barrier damage, and skin discomfort while keeping the skin balanced and protected.\n\nFor Dewnix-Hydra, we have created a unique Multi-Barrier Repair Complex featuring Ceramide 3B, Pentavitin, Bio-Peptide, Sodium Hyaluronate (LMW), Oat Leaf Extract, Panthenol, Shea Butter, and Aloe Vera. These highly effective ingredients work in perfect synergy to restore the skin's lipid barrier, provide deep hydration, calm irritation, and enhance overall skin resilience.\n\nCeramide 3B helps rebuild the skin's natural barrier and prevent moisture loss. Pentavitin binds moisture to the skin for long lasting hydration. Low Molecular Weight Hyaluronic Acid deeply hydrates and plumps the skin. Bio-Peptides support skin repair and regeneration. Oat Leaf Extract, Aloe Vera, and Panthenol soothe irritation and reduce sensitivity, while Shea Butter nourishes and protects against dryness.\n\nWith such a powerful combination of barrier-repairing, hydrating, and soothing ingredients, Dewnix-Hydra is built to restore comfort, strength, and hydration to dry and sensitive skin while being gentle enough for everyday use.",
    image: dewnixHydraImg,
    category: "Moisturizer",
    keyBenefits: [
      "Provides deep and long-lasting hydration",
      "Repairs and strengthens the skin barrier",
      "Relieves dryness, tightness, and sensitivity",
      "Soothes and calms irritated skin",
      "Improves skin softness and smoothness",
      "Supports healthy, resilient skin",
      "Suitable for daily use",
      "Ideal for dry, sensitive, and compromised skin"
    ],
    keyIngredients: [
      { name: "Ceramide 3B", description: "A skin identical lipid that helps repair and strengthen the skin barrier, preventing moisture loss and improving skin resilience." },
      { name: "Pentavitin (Saccharide Isomerate)", description: "A powerful moisture binding ingredient that provides long lasting hydration and improves skin smoothness and comfort." },
      { name: "Bio-Peptide", description: "Supports skin regeneration and helps improve overall skin texture and strength." },
      { name: "Sodium Hyaluronate (Low Molecular Weight)", description: "Deeply penetrates the skin to deliver intense hydration and improve plumpness and elasticity." },
      { name: "Oat Leaf Extract (Avena sativa)", description: "Soothes irritation, reduces redness, and calms dry, sensitive skin." },
      { name: "Panthenol (Pro-Vitamin B5)", description: "Hydrates, repairs, and strengthens the skin while improving softness and elasticity." },
      { name: "Shea Butter (Butyrospermum parkii)", description: "Nourishes and protects the skin, preventing moisture loss and dryness." },
      { name: "Aloe Vera (Aloe barbadensis)", description: "Soothes, hydrates, and refreshes irritated or stressed skin." }
    ],
    fullIngredients: "Aqua (Water), Mineral Oil, Cetearyl Isononanoate, Butylene Glycol, Cetearyl Alcohol, Dimethicone, Avena Sativa (Oat) Leaf Extract, Glycerin, Petrolatum, Polysorbate 60, Glyceryl Stearate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Phenoxyethanol, Piper Methysticum (Kava) Stem Extract, Sodium Stearoyl Glutamate, Xanthan Gum, Hamamelis Virginiana (Witch Hazel) Extract, Tocopheryl Acetate (Vitamin E), Glycyrrhiza Glabra (Licorice) Root Extract, Paeonia Lactiflora Root Extract, Portulaca Oleracea Extract, Pueraria Thunbergiana Root Extract, Glycine Soja (Soybean) Sterols, Bio-Peptide, Aloe Barbadensis Leaf Juice, Ceramide 3B, Pentavitin, Sodium Hyaluronate, Panthenol, Shea Butter."
  },
  {
    id: "dewnix-sr",
    name: "Dewnix\u2122-SR",
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
    name: "Dewnix\u2122-Elixia",
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
  phone: "+91-9676615828",
  email: "info@epiole.com",
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
  vision: "At EPIOLE TRANSDERMIC, our vision is to redefine skin and hair care through science-led innovation powered by advanced Novel Drug Delivery Systems (NDDS). We strive to set new benchmarks in derma-pharmaceutical care by engineering formulations that deliver active ingredients precisely and effectively to their biological site of action—where real therapeutic change occurs. Our goal is to move beyond conventional cosmetics and establish clinically validated, dermatologist-trusted solutions that offer predictable, measurable results. By integrating pharmaceutical research, cutting-edge delivery technologies, and evidence-based actives, we aim to make professional-grade skin and hair care both accessible and reliable for everyday use. We envision a future where personal care is guided by science, not trends—where healthy skin and hair are achieved through targeted treatment, barrier restoration, and long-term biological health. To make clinical-grade care a part of daily life, for everyone.",
  mission: "At EPIOLE TRANSDERMIC, our mission is to develop premium, science-driven skin and hair care solutions that address real dermatological and scalp concerns with clinical precision and therapeutic efficacy. We are committed to advancing formulation science through Novel Drug Delivery Systems (NDDS) that enhance penetration, optimize bioavailability, and ensure controlled, targeted release of active ingredients for superior performance and safety. Every product we create is built on evidence-based actives, rigorous research, stability testing, and dermatologist-led validation. Our focus is simple: deliver measurable results, not cosmetic claims. By maintaining pharmaceutical-grade quality standards, strict safety protocols, and consistent product performance, we strive to earn the trust of healthcare professionals and consumers alike. Our mission is to be a reliable partner in every individual's journey toward healthier skin, stronger hair, and lasting confidence—making clinical-grade care accessible for everyday life."
};
