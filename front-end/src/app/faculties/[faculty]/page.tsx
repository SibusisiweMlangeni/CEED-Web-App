import Link from 'next/link';
import Image from 'next/image';

import { Faculty, Discipline, FacultiesData } from '@/data/CoursesData';
import SectionBanner from '@/components/shared/Banner';
import Donate from '@/components/about/Donate';
import { createSlug, slugToText, getFacultyByName } from '@/lib/utils';

interface Props {
  params: Promise<{ faculty: string; }>;
}

const FacultyPage = async ({params}: Props) => {
  const {faculty} = await params;

  const chosenFaculty = getFacultyByName(FacultiesData, faculty);

  const allDisciplines = chosenFaculty?.disciplines.map((disc) => ({
      ...disc,
      facultyName: chosenFaculty.name,
  }));

  return (
    <div className="mt-[120px]">
        <SectionBanner 
            title={faculty ? `${slugToText(faculty)}`: `Faculty` }
            description="Faculty information will go here."
            backgroundImage="/img/section-image-1.png"
        />
        <div className="disciplines-page pt-100 pb-70">
          <div className="container mb-[100px]">
              <div className="section-title text-center mb-5">
                  <h2>Explore Your Field of Study</h2>
              </div>

              <div className="row mb-5">
                  <div className="col-lg-8 mx-auto text-center">
                      <p className="lead">
                      Our faculties offer a wide range of disciplines designed to equip you with knowledge, skills, and real-world experience.
                      </p>
                  </div>
              </div>

              <div className="row g-4">
              {allDisciplines?.map((discipline) => (
                  <div className="col-lg-6" key={discipline.id}>
                  <div className="card h-100 shadow-sm border-0 rounded-3 hover-shadow">
                      <div className="position-relative">
                      <Image
                          // src={discipline.imageUrl}
                          src="/assets/img/all-img/faculty-1.png"
                          alt={discipline.name}
                          width={500}
                          height={200}
                          className="card-img-top"
                          style={{ objectFit: 'cover', height: '200px' }}
                      />
                      {discipline.featured && (
                          <span className="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 rounded-start">
                          Featured
                          </span>
                      )}
                      </div>
                      <div className="card-body d-flex flex-column">
                      <div className="d-flex align-items-center mb-2">
                          <i className={`${discipline.icon} fs-4 text-primary me-2`}></i>
                          <h5 className="card-title mb-0">{discipline.name}</h5>
                      </div>
                      <p className="text-muted small mb-2">{discipline.code}</p>
                      <p className="mb-3 flex-grow-1">{discipline.description}</p>

                      <div className="d-flex justify-content-between align-items-center mt-auto">
                          <span className="badge bg-light text-dark">
                          {discipline.averageDuration}
                          </span>
                          <span className="text-warning">
                          {Array.from({ length: 5 }).map((_, i) => (
                              <i
                              key={i}
                              className={`bx ${
                                  i < Math.floor(discipline.averageRating)
                                  ? 'bxs-star'
                                  : 'bx-star'
                              }`}
                              ></i>
                          ))}
                          <small className="ms-1">({discipline.averageRating})</small>
                          </span>
                      </div>

                      <Link
                          href={`/faculties/${faculty}/${createSlug(discipline.name)}`}
                          className="btn btn-outline-primary mt-3 w-100"
                      >
                          View Details
                      </Link>
                      </div>
                  </div>
                  </div>
              ))}
              </div>
            </div>

            <Donate />
            <div className="container">
              <div className="text-center mt-5">
              <p>Can’t find your discipline?</p>
              <Link href="/contact" className="default-btn">
                  Contact our team for help.
              </Link>
              </div>
            </div>
        </div>
    </div>
  );
};

export default FacultyPage;