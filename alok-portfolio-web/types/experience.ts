export interface experience {
  id: number;
  companyName: string;
  jobTitle: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrentJob: boolean;
  description: string;
  displayOrder: number;
  createdAt: string;
}