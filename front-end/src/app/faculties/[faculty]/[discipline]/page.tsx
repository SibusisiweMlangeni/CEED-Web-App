import SectionBanner from "@/components/shared/Banner";
import { Courses, FacultiesData } from "@/data/CoursesData";
import DisciplineSection from "@/components/faculties/DisciplineSection";
import { slugToText } from '@/lib/utils';
import { getFacultyByName, getDisciplineFromFaculty } from "@/lib/utils";
import Donate from "@/components/about/Donate";

interface Props {
  params: Promise<{ faculty: string; discipline: string }>;
}

const DisciplinePage = async ({params}: Props) => {
    const {discipline, faculty} = await params;

    console.log(discipline);
    console.log(faculty);

    const chosenFaculty = getFacultyByName(FacultiesData, faculty);
    const disciplineData = getDisciplineFromFaculty(chosenFaculty, discipline);

    console.log(disciplineData);
    console.log(disciplineData?.courses);
    const displayCourses = disciplineData ? disciplineData.courses : [];

    return (
        <div className="mt-[120px]">
            <SectionBanner 
                title={discipline ? `${slugToText(discipline)}`: `Discipline` }
                description="Data for the discipline page will go here..."
                backgroundImage="/img/section-image-1.png"
            />

            <DisciplineSection courses={displayCourses} />

            <Donate />
        </div>
    );
}

export default DisciplinePage;