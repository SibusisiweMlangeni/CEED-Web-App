'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { MenuFacultyItem } from '@/data/CoursesData';
import Donate from '../about/Donate';

interface FacultiesSectionProps {
  menuItems: MenuFacultyItem[];
}

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

const FacultiesSection = ({menuItems}: FacultiesSectionProps) => {
  const createSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/[^a-z0-9\-]/g, '');
  };

  return (
    <div className="faculties-section pt-100 pb-70">
      <div className="container mb-[100px]">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>Explore Academic Disciplines</h2>
        </div>

        <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
                <p className="lead">
                Discipline explainer information should go here ...
                </p>
            </div>
        </div>

        <div className="row g-4">
            {menuItems.map((faculty, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <Link
                            href={`/faculties/${createSlug(faculty.name)}`}
                            >
                            <div className="position-relative">
                                <img
                                    src={`/assets/img/all-img/faculty-1.png`}
                                    className="card-img-top"
                                    alt={faculty.name}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                        </Link>

                        <div className="card-body d-flex flex-column">
                            <Link
                                href={`/faculties/${createSlug(faculty.name)}`}
                                >
                                <h5 className="card-title mb-3">{faculty.name}</h5>
                            </Link>
                        <ul className="list-unstyled mb-0">
                            {faculty.disciplines.map((discipline, i) => (
                            <li key={i} className="mb-2">
                                <Link
                                href={`/faculties/${createSlug(faculty.name)}/${createSlug(discipline)}`}
                                className="text-decoration-none text-dark hover-text-primary d-inline-flex align-items-center"
                                >
                                <i className="bx bx-right-arrow-alt me-2"></i>
                                {discipline}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
                ))}
        </div>
      </div>

      <Donate />
    </div>
  );
};

export default FacultiesSection;