// src/data/guidelines.ts

// Define an interface for the structure of a medication guideline
interface MedicationGuideline {
  medicationName: string;
  dosageGuidelines: string;
  administrationGuidelines: string;
  warnings: string;
}

// Static data for medication guidelines
const guidelines: MedicationGuideline[] = [
  {
    medicationName: "Ibuprofen",
    dosageGuidelines: "200-400 mg every 4-6 hours as needed. Do not exceed 1200 mg in 24 hours.",
    administrationGuidelines: "Take with food or milk to prevent stomach upset.",
    warnings: "Avoid use in patients with severe renal impairment or active gastrointestinal bleeding."
  },
  {
    medicationName: "Amoxicillin",
    dosageGuidelines: "250-500 mg every 8 hours or 500-875 mg every 12 hours.",
    administrationGuidelines: "Can be taken with or without food.",
    warnings: "Use with caution in patients with a history of penicillin allergy."
  },
  // Add more guidelines as needed
];

// Function to fetch guidelines from an external source
// This is a placeholder function and should be implemented to fetch real data
async function fetchGuidelines(): Promise<MedicationGuideline[]> {
  // Example: Fetch data from an API
  // const response = await fetch('https://api.example.com/guidelines');
  // const data = await response.json();
  // return data;

  // For now, return the static guidelines
  return guidelines;
}

// Export the static guidelines and the fetch function
export { guidelines, fetchGuidelines };
