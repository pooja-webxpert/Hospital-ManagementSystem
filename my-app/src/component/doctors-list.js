const DoctorsList = [
  { id: 1, name: "Dr. John Smith" },
  { id: 2, name: "Dr. Emily Johnson" },
  { id: 3, name: "Dr. Michael Brown" },
  { id: 4, name: "Dr. Sarah Davis" },
  { id: 5, name: "Dr. David Wilson" },
  { id: 6, name: "Dr. Jennifer Garcia" },
  { id: 7, name: "Dr. William Martinez" },
  { id: 8, name: "Dr. Patricia Rodriguez" },
  { id: 9, name: "Dr. Daniel Hernandez" },
  { id: 10, name: "Dr. Linda Lopez" },
  { id: 11, name: "Dr. James Gonzalez" },
  { id: 12, name: "Dr. Barbara Perez" },
  { id: 13, name: "Dr. Christopher Anderson" },
  { id: 14, name: "Dr. Elizabeth Taylor" },
  { id: 15, name: "Dr. Charles Thomas" },
  { id: 16, name: "Dr. Nancy White" },
  { id: 17, name: "Dr. Joseph Harris" },
  { id: 18, name: "Dr. Karen Clark" },
  { id: 19, name: "Dr. Steven Lewis" },
  { id: 20, name: "Dr. Michelle Robinson" },
  // { id: 21, name: "Dr. Anthony Hall" },
  // { id: 22, name: "Dr. Jessica Allen" },
  // { id: 23, name: "Dr. Matthew Young" },
  // { id: 24, name: "Dr. Olivia King" },
  // { id: 25, name: "Dr. Andrew Wright" },
  // { id: 26, name: "Dr. Laura Scott" },
  // { id: 27, name: "Dr. Robert Green" },
  // { id: 28, name: "Dr. Jessica Adams" },
  // { id: 29, name: "Dr. Brian Baker" },
  // { id: 30, name: "Dr. Samantha Nelson" },
  // { id: 31, name: "Dr. Justin Carter" },
  // { id: 32, name: "Dr. Megan Mitchell" },
  // { id: 33, name: "Dr. Tyler Perez" },
  // { id: 34, name: "Dr. Emily Roberts" },
  // { id: 35, name: "Dr. Kevin Turner" },
  // { id: 36, name: "Dr. Rebecca Phillips" },
  // { id: 37, name: "Dr. Eric Campbell" },
  // { id: 38, name: "Dr. Rachel Parker" },
  // { id: 39, name: "Dr. George Edwards" },
  // { id: 40, name: "Dr. Amy Collins" },
  // { id: 41, name: "Dr. Charles Stewart" },
  // { id: 42, name: "Dr. Jessica Sanchez" },
  // { id: 43, name: "Dr. Ronald Morris" },
  // { id: 44, name: "Dr. Katherine Rogers" },
  // { id: 45, name: "Dr. Timothy Reed" },
  // { id: 46, name: "Dr. Dorothy Cook" },
  // { id: 47, name: "Dr. Brian Morgan" },
  // { id: 48, name: "Dr. Patricia Bell" },
  // { id: 49, name: "Dr. Daniel Murphy" },
  // { id: 50, name: "Dr. Sandra Cooper" },
];

export default DoctorsList;
export const ActionList = [
  { value: "Accept", label: "Accept" },
  { value: "Pending", label: "Pending" },
];
export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
export const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

export const department = [
  { value: "Cardiology", label: "Cardiology" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Endocrinology", label: "Endocrinology" },
  { value: "General Surgery", label: "General Surgery" },
  { value: "Nephrology", label: "Nephrology" },
  { value: "Obstetrics and Gynecology (OB/GYN)", label: "Obstetrics and Gynecology (OB/GYN)" },
  { value: "Ophthalmology", label: "Ophthalmology" },
  { value: "Radiology", label: "Radiology" },
  { value: "Psychiatry", label: "Psychiatry" },
  { value: "Otolaryngology (ENT) ", label: "Otolaryngology (ENT) " },
  { value: "Infectious Disease", label: "Infectious Disease" },
  { value: "Gastroenterology", label: "Gastroenterology" },
];
export const TreatmentDetails = [
  { value: "Cardiology", label: "Cardiology" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Endocrinology", label: "Endocrinology" },
  { value: "General Surgery", label: "General Surgery" },
  { value: "Nephrology", label: "Nephrology" },
  { value: "Obstetrics and Gynecology (OB/GYN)", label: "Obstetrics and Gynecology (OB/GYN)" },
  { value: "Ophthalmology", label: "Ophthalmology" },
  { value: "Radiology", label: "Radiology" },
  { value: "Psychiatry", label: "Psychiatry" },
  { value: "Otolaryngology (ENT)", label: "Otolaryngology (ENT)" },
  { value: "Infectious Disease", label: "Infectious Disease" },
  { value: "Gastroenterology", label: "Gastroenterology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Oncology", label: "Oncology" },
  { value: "Hematology", label: "Hematology" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Orthopedics", label: "Orthopedics" },
  { value: "Pulmonology", label: "Pulmonology" },
  { value: "Urology", label: "Urology" },
  { value: "Rheumatology", label: "Rheumatology" },
  { value: "Anesthesiology", label: "Anesthesiology" },
  { value: "Emergency Medicine", label: "Emergency Medicine" },
  { value: "Pain Management", label: "Pain Management" },
  { value: "Plastic Surgery", label: "Plastic Surgery" },
  { value: "Physical Medicine and Rehabilitation", label: "Physical Medicine and Rehabilitation" },
  { value: "Allergy and Immunology", label: "Allergy and Immunology" },
  { value: "Pathology", label: "Pathology" },
  { value: "Sports Medicine", label: "Sports Medicine" },
  { value: "Vascular Surgery", label: "Vascular Surgery" },
  { value: "Geriatrics", label: "Geriatrics" },
  { value: "Palliative Care", label: "Palliative Care" },
  { value: "Family Medicine", label: "Family Medicine" },
  { value: "Internal Medicine", label: "Internal Medicine" },
  { value: "Thoracic Surgery", label: "Thoracic Surgery" },
  { value: "Neonatology", label: "Neonatology" },
  { value: "Clinical Genetics", label: "Clinical Genetics" },
];

export const Medicines = [
  { value: "Paracetamol", label: "Paracetamol" },
  { value: "Amoxicillin", label: "Amoxicillin" },
  { value: "Ibuprofen", label: "Ibuprofen" },
  { value: "Cetirizine", label: "Cetirizine" },
  { value: "Metformin", label: "Metformin" },
  { value: "Aspirin", label: "Aspirin" },
  { value: "Loratadine", label: "Loratadine" },
  { value: "Omeprazole", label: "Omeprazole" },
  { value: "Clarithromycin", label: "Clarithromycin" },
  { value: "Atorvastatin", label: "Atorvastatin" },
  { value: "Hydroxyzine", label: "Hydroxyzine" },
  { value: "Ranitidine", label: "Ranitidine" },
  { value: "Azithromycin", label: "Azithromycin" },
  { value: "Ciprofloxacin", label: "Ciprofloxacin" },
  { value: "Simvastatin", label: "Simvastatin" },
  { value: "Losartan", label: "Losartan" },
  { value: "Levothyroxine", label: "Levothyroxine" },
  { value: "Furosemide", label: "Furosemide" },
  { value: "Clindamycin", label: "Clindamycin" },
  { value: "Prednisolone", label: "Prednisolone" },
  { value: "Albuterol", label: "Albuterol" },
  { value: "Gabapentin", label: "Gabapentin" },
  { value: "Doxycycline", label: "Doxycycline" },
  { value: "Carvedilol", label: "Carvedilol" },
  { value: "Pantoprazole", label: "Pantoprazole" },
  { value: "Amlodipine", label: "Amlodipine" },
  { value: "Metoprolol", label: "Metoprolol" },
  { value: "Hydrochlorothiazide", label: "Hydrochlorothiazide" },
  { value: "Venlafaxine", label: "Venlafaxine" },
  { value: "Escitalopram", label: "Escitalopram" },
  { value: "Citalopram", label: "Citalopram" },
  { value: "Baclofen", label: "Baclofen" },
  { value: "Lisinopril", label: "Lisinopril" },
  { value: "Sertraline", label: "Sertraline" },
  { value: "Tamsulosin", label: "Tamsulosin" },
  { value: "Clopidogrel", label: "Clopidogrel" },
  { value: "Warfarin", label: "Warfarin" },
  { value: "Propranolol", label: "Propranolol" },
  { value: "Meloxicam", label: "Meloxicam" },
  { value: "Nitroglycerin", label: "Nitroglycerin" },
  { value: "Bisoprolol", label: "Bisoprolol" },
  { value: "Fluoxetine", label: "Fluoxetine" },
  { value: "Duloxetine", label: "Duloxetine" },
  { value: "Lorazepam", label: "Lorazepam" },
  { value: "Diazepam", label: "Diazepam" },
  { value: "Tramadol", label: "Tramadol" },
  { value: "Morphine", label: "Morphine" },
  { value: "Acetaminophen", label: "Acetaminophen" },
  { value: "Allopurinol", label: "Allopurinol" },
  { value: "Levofloxacin", label: "Levofloxacin" }
];
