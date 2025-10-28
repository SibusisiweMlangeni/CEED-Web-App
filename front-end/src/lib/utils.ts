import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Discipline, Faculty, Course } from "@/data/CoursesData";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
};

export const HandlePageChange = (page: number, totalPages: number, setCurrent: Function) => {
    if (page >= 1 && page <= totalPages) {
      setCurrent(page);
    }
};

export const slugToText = (slug: string): string => {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s+/g, "");
}

export function getFacultyByName(faculties: Faculty[], name: string): Faculty | undefined {
  const normalizedSearch = normalizeName(name);

  faculties.map(faculty => console.log(normalizeName(faculty.name)))
  return(faculties.find(faculty => normalizeName(faculty.name) === normalizedSearch));
}

export function getDisciplineFromFaculty(faculty: Faculty | undefined, name: string): Discipline | undefined {
  if (faculty == undefined) return undefined;

  const normalizedSearch = normalizeName(name);

  faculty.disciplines.map(discipline => console.log(normalizeName(discipline.name)))
  return(faculty?.disciplines.find(discipline => normalizeName(discipline.name) === normalizedSearch));
}

export const extractAllCourses = (faculties: Faculty[]): Course[] => {
  if (!faculties || faculties.length === 0) return [];

  const allCourses: Course[] = [];

  faculties.forEach((faculty) => {
    faculty.disciplines?.forEach((discipline) => {
      discipline.courses?.forEach((course) => {
        allCourses.push({
          ...course,
          tags: [
            ...(course.tags || []),
            discipline.name,
            faculty.name
          ],
          details: {
            ...course.details,
            category: course.details?.category || discipline.name,
            subject: course.details?.subject || faculty.name,
          },
        });
      });
    });
  });

  return allCourses;
};

const getFacultyIcon = (facultyName: string): string => {
  const name = facultyName.toLowerCase();
  if (name.includes('humanities') || name.includes('arts') || name.includes('social')) return 'bx bx-book';
  if (name.includes('science')) return 'bx bx-flask';
  if (name.includes('engineering') || name.includes('built environment')) return 'bx bx-building';
  if (name.includes('health') || name.includes('medicine')) return 'bx bx-heart';
  if (name.includes('law')) return 'bx bx-gavel';
  if (name.includes('commerce') || name.includes('business') || name.includes('economics')) return 'bx bx-bar-chart';
  if (name.includes('education')) return 'bx bx-graduation';
  if (name.includes('agricultural') || name.includes('environmental')) return 'bx bx-leaf';
  if (name.includes('theology') || name.includes('religion')) return 'bx bx-cross';
  if (name.includes('information') || name.includes('communication technology') || name.includes('ict')) return 'bx bx-laptop';
  if (name.includes('design') || name.includes('architecture')) return 'bx bx-palette';
  if (name.includes('veterinary')) return 'bx bx-paw';
  if (name.includes('military')) return 'bx bx-shield';
  if (name.includes('maritime') || name.includes('ocean')) return 'bx bx-water';
  return 'bx bx-book'; // fallback
};