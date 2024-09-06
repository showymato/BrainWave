  const medicines = [
      {
        "generic_name": "Paracetamol",
        "common_brands": [
          "Crocin",
          "Tylenol",
          "Calpol"
        ],
        "composition": "500 mg of Paracetamol, excipients: Starch, Microcrystalline Cellulose, Magnesium Stearate"
      },
      {
        "generic_name": "Ibuprofen",
        "common_brands": [
          "Brufen",
          "Advil",
          "Motrin"
        ],
        "composition": "400 mg of Ibuprofen, excipients: Lactose, Starch, Magnesium Stearate"
      },
      {
        "generic_name": "Amoxicillin",
        "common_brands": [
          "Amoxil",
          "Moxatag",
          "Augmentin"
        ],
        "composition": "500 mg of Amoxicillin, excipients: Cellulose, Starch, Magnesium Stearate"
      },
      {
        "generic_name": "Metformin",
        "common_brands": [
          "Glucophage",
          "Riomet",
          "Fortamet"
        ],
        "composition": "500 mg of Metformin, excipients: Cellulose, Magnesium Stearate, Sodium Starch Glycolate"
      },
      {
        "generic_name": "Omeprazole",
        "common_brands": [
          "Prilosec",
          "Losec",
          "Omez"
        ],
        "composition": "20 mg of Omeprazole, excipients: Lactose, Hypromellose, Magnesium Stearate"
      },
      {
        "generic_name": "Insulin",
        "common_brands": [
          "Humulin",
          "Lantus",
          "Novolog"
        ],
        "composition": "100 units/mL of Insulin, excipients: Water for Injection, Sodium Chloride"
      },
      {
        "generic_name": "Hydroxychloroquine",
        "common_brands": [
          "Plaquenil",
          "HCQS",
          "Quensyl"
        ],
        "composition": "200 mg of Hydroxychloroquine, excipients: Starch, Cellulose, Magnesium Stearate"
      },
      {
        "generic_name": "Doxorubicin",
        "common_brands": [
          "Adriamycin",
          "Doxil",
          "Caelyx"
        ],
        "composition": "50 mg of Doxorubicin, excipients: Sodium Chloride, Water for Injection"
      },
      {
        "generic_name": "Imatinib",
        "common_brands": [
          "Gleevec"
        ],
        "composition": "400 mg of Imatinib, excipients: Lactose, Cellulose, Magnesium Stearate"
      },
      {
        "generic_name": "Sildenafil",
        "common_brands": [
          "Viagra",
          "Revatio",
          "Cenforce"
        ],
        "composition": "100 mg of Sildenafil, excipients: Lactose, Cellulose, Magnesium Stearate"
      },
      {
        "generic_name": "Bortezomib",
        "common_brands": [
          "Velcade"
        ],
        "composition": "3.5 mg of Bortezomib, excipients: Sodium Chloride, Water for Injection"
      },
      {
        "generic_name": "Amlodipine",
        "common_brands": [
          "Norvasc",
          "Amlocard",
          "Amlost"
        ],
        "composition": "5 mg of Amlodipine, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Lisinopril",
        "common_brands": [
          "Zestril",
          "Prinivil"
        ],
        "composition": "10 mg of Lisinopril, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Losartan",
        "common_brands": [
          "Cozaar",
          "Losacar",
          "Losa"
        ],
        "composition": "50 mg of Losartan, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Simvastatin",
        "common_brands": [
          "Zocor",
          "Simcor",
          "Vytorin"
        ],
        "composition": "20 mg of Simvastatin, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Atorvastatin",
        "common_brands": [
          "Lipitor",
          "Atorva",
          "Toran"
        ],
        "composition": "40 mg of Atorvastatin, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Clopidogrel",
        "common_brands": [
          "Plavix",
          "Clopilet",
          "Clopigrel"
        ],
        "composition": "75 mg of Clopidogrel, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Diazepam",
        "common_brands": [
          "Valium",
          "Diazem",
          "Relanium"
        ],
        "composition": "10 mg of Diazepam, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Lorazepam",
        "common_brands": [
          "Ativan",
          "Lorazepam",
          "Temesta"
        ],
        "composition": "2 mg of Lorazepam, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Prednisone",
        "common_brands": [
          "Deltasone",
          "Sterapred",
          "Predsol"
        ],
        "composition": "10 mg of Prednisone, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Ciprofloxacin",
        "common_brands": [
          "Cipro",
          "Ciplox",
          "Ciproxin"
        ],
        "composition": "500 mg of Ciprofloxacin, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Azithromycin",
        "common_brands": [
          "Zithromax",
          "Azithral",
          "Azithrocin"
        ],
        "composition": "500 mg of Azithromycin, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Cetirizine",
        "common_brands": [
          "Zyrtec",
          "Cetzine",
          "Cetriz"
        ],
        "composition": "10 mg of Cetirizine, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Loratadine",
        "common_brands": [
          "Claritin",
          "Lora",
          "Lorfast"
        ],
        "composition": "10 mg of Loratadine, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Ranitidine",
        "common_brands": [
          "Zantac",
          "Ranidom",
          "Rani"
        ],
        "composition": "150 mg of Ranitidine, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Buspirone",
        "common_brands": [
          "Buspar",
          "Busparon"
        ],
        "composition": "10 mg of Buspirone, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Methotrexate",
        "common_brands": [
          "Trexall",
          "Methotrexate",
          "Rheumatrex"
        ],
        "composition": "10 mg of Methotrexate, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Sulfasalazine",
        "common_brands": [
          "Azulfidine",
          "Sulfazine",
          "Sulfasal"
        ],
        "composition": "500 mg of Sulfasalazine, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Tamoxifen",
        "common_brands": [
          "Nolvadex",
          "Tamofen",
          "Tamox"
        ],
        "composition": "20 mg of Tamoxifen, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Cyclophosphamide",
        "common_brands": [
          "Cytoxan",
          "Endoxan",
          "Neosar"
        ],
        "composition": "50 mg of Cyclophosphamide, excipients: Sodium Chloride, Water for Injection"
      },
      {
        "generic_name": "Rituximab",
        "common_brands": [
          "Rituxan",
          "Mabthera",
          "Ruxience"
        ],
        "composition": "100 mg of Rituximab, excipients: Sodium Chloride, Water for Injection"
      },
      {
        "generic_name": "Erythromycin",
        "common_brands": [
          "Erythrocin",
          "Ilosone",
          "Erythro"
        ],
        "composition": "250 mg of Erythromycin, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Vancomycin",
        "common_brands": [
          "Vancocin",
          "Vancoled",
          "Vancovent"
        ],
        "composition": "500 mg of Vancomycin, excipients: Sodium Chloride, Water for Injection"
      },
      {
        "generic_name": "Gentamicin",
        "common_brands": [
          "Garamycin",
          "Gentak",
          "Gentocin"
        ],
        "composition": "80 mg of Gentamicin, excipients: Sodium Chloride, Water for Injection"
      },
      {
        "generic_name": "Tetracycline",
        "common_brands": [
          "Sumycin",
          "Tetralysal",
          "Panmycin"
        ],
        "composition": "250 mg of Tetracycline, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Nifedipine",
        "common_brands": [
          "Procardia",
          "Adalat",
          "Nifedical"
        ],
        "composition": "30 mg of Nifedipine, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Hydrochlorothiazide",
        "common_brands": [
          "Microzide",
          "Hydrodiuril",
          "Esidrix"
        ],
        "composition": "25 mg of Hydrochlorothiazide, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Spironolactone",
        "common_brands": [
          "Aldactone",
          "Spironol",
          "Aldactazide"
        ],
        "composition": "100 mg of Spironolactone, excipients: Cellulose, Lactose, Magnesium Stearate"
      },
      {
        "generic_name": "Furosemide",
        "common_brands": [
          "Lasix",
          "Furocot",
          "Frusol"
        ],
        "composition": "40 mg of Furosemide, excipients: Cellulose, Lactose, Magnesium Stearate"
      }
    ]

export default medicines;