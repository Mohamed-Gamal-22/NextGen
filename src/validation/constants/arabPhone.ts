export const arabCountries = [
  { iso: "EG", country: "مصر", flag: "🇪🇬", dialCode: "+20" },
  { iso: "MA", country: "المغرب", flag: "🇲🇦", dialCode: "+212" },
  { iso: "DZ", country: "الجزائر", flag: "🇩🇿", dialCode: "+213" },
  { iso: "TN", country: "تونس", flag: "🇹🇳", dialCode: "+216" },
  { iso: "LY", country: "ليبيا", flag: "🇱🇾", dialCode: "+218" },
  { iso: "MR", country: "موريتانيا", flag: "🇲🇷", dialCode: "+222" },
  { iso: "SD", country: "السودان", flag: "🇸🇩", dialCode: "+249" },
  { iso: "SO", country: "الصومال", flag: "🇸🇴", dialCode: "+252" },
  { iso: "DJ", country: "جيبوتي", flag: "🇩🇯", dialCode: "+253" },
  { iso: "KM", country: "جزر القمر", flag: "🇰🇲", dialCode: "+269" },
  { iso: "JO", country: "الأردن", flag: "🇯🇴", dialCode: "+962" },
  { iso: "LB", country: "لبنان", flag: "🇱🇧", dialCode: "+961" },
  { iso: "SY", country: "سوريا", flag: "🇸🇾", dialCode: "+963" },
  { iso: "IQ", country: "العراق", flag: "🇮🇶", dialCode: "+964" },
  { iso: "KW", country: "الكويت", flag: "🇰🇼", dialCode: "+965" },
  { iso: "SA", country: "السعودية", flag: "🇸🇦", dialCode: "+966" },
  { iso: "YE", country: "اليمن", flag: "🇾🇪", dialCode: "+967" },
  { iso: "OM", country: "عمان", flag: "🇴🇲", dialCode: "+968" },
  { iso: "PS", country: "فلسطين", flag: "🇵🇸", dialCode: "+970" },
  { iso: "AE", country: "الإمارات", flag: "🇦🇪", dialCode: "+971" },
  { iso: "BH", country: "البحرين", flag: "🇧🇭", dialCode: "+973" },
  { iso: "QA", country: "قطر", flag: "🇶🇦", dialCode: "+974" },
] as const;

export const arabCountryDialCodes = arabCountries.map(
  (country) => country.dialCode,
);
export const localPhoneRegex = /^[0-9()\-\s]{6,15}$/;

type PhoneRule = {
  lengths: number[];
  prefixes?: string[];
};

export const arabLocalPhoneRules: Record<string, PhoneRule> = {
  "+20": { lengths: [10], prefixes: ["10", "11", "12", "15"] }, // Egypt mobile
  "+212": { lengths: [9], prefixes: ["6", "7"] }, // Morocco mobile
  "+213": { lengths: [9], prefixes: ["5", "6", "7"] }, // Algeria mobile
  "+216": { lengths: [8], prefixes: ["2", "4", "5", "9"] }, // Tunisia mobile
  "+218": { lengths: [9], prefixes: ["9"] }, // Libya mobile
  "+222": { lengths: [8], prefixes: ["2", "3", "4"] }, // Mauritania mobile
  "+249": { lengths: [9], prefixes: ["9"] }, // Sudan mobile
  "+252": { lengths: [8, 9], prefixes: ["6", "7", "8", "9"] }, // Somalia mobile
  "+253": { lengths: [8], prefixes: ["7"] }, // Djibouti mobile
  "+269": { lengths: [7], prefixes: ["3"] }, // Comoros mobile
  "+962": { lengths: [9], prefixes: ["7"] }, // Jordan mobile
  "+961": {
    lengths: [8],
    prefixes: ["70", "71", "76", "78", "79", "81", "03"],
  }, // Lebanon
  "+963": { lengths: [9], prefixes: ["9"] }, // Syria mobile
  "+964": { lengths: [10], prefixes: ["7"] }, // Iraq mobile
  "+965": { lengths: [8], prefixes: ["5", "6", "9"] }, // Kuwait mobile
  "+966": { lengths: [9], prefixes: ["5"] }, // Saudi Arabia mobile
  "+967": { lengths: [9], prefixes: ["7"] }, // Yemen mobile
  "+968": { lengths: [8], prefixes: ["7", "9"] }, // Oman mobile
  "+970": { lengths: [9], prefixes: ["56", "59"] }, // Palestine mobile
  "+971": { lengths: [9], prefixes: ["50", "52", "54", "55", "56", "58"] }, // UAE mobile
  "+973": { lengths: [8], prefixes: ["3"] }, // Bahrain mobile
  "+974": { lengths: [8], prefixes: ["3", "5", "6", "7"] }, // Qatar mobile
};
