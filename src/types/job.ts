export interface Job {
  id: number;
  job_title: string;
  company_name: string;
  location: string;
  job_type: string;
  salary_min: number;
  salary_max: number;
  application_deadline: string;
  title: string;
  logo: string;
  logoBackground: string;
  logoContainerClass?: string;
  experience: string;
  locationType: string;
  salary: string;
  postedTime: string;
  description: string;
}