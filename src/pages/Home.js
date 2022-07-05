import { useState } from "react";
import Character from "../resources/character.png";
import Celebration from "../resources/celebration.png";

export default function Home() {
  const [userNickname, setUserNickname] = useState("Amanda");
  const [courses, setCourses] = useState([
    {
      name: "Find your purpose, realise your ambition",
      chapters: [
        {
          chapterNumber: 1,
          title: "Self - Appraisal, Change and Ambition",
          info: "Time for change",
          progress: null,
        },
        {
          chapterNumber: 2,
          title: "What Have I Got to Offer?",
          info: "Self access yourself",
          progress: null,
        },
      ],
    }, {
      name: "This is supposed to be another course",
      chapters: [
        {
          chapterNumber: 1,
          title: "Self - Appraisal, Change and Ambition",
          info: "Time for change",
          progress: null,
        },
        {
          chapterNumber: 2,
          title: "What Have I Got to Offer?",
          info: "Self access yourself",
          progress: null,
        },
      ],
    }
  ]);
  const [unfinishedLessons, setUnfinishedLessons] = useState([
    {
      courseName: "Find your purpose, realise your ambition",
      chapterNumber: 1,
      progress: null,
    },
  ]);
  const [enrolledCourses, setEnrolledCourses] = useState([
    "Find your purpose, realise your ambition",
  ]);

  
 
  return (
    <main>
      <p>Hi {userNickname}</p>
      <img className="character" src={Character} alt="avatar" />
      {unfinishedLessons.length === 0 ? (
        <section className="courses">
          <span>You have no saved work</span>
          <button type="button">Get Started</button>
        </section>
      ) : (
        <section className="courses">
          {unfinishedLessons.map((lesson) => {
            let course = courses.filter(
              (course) => course.name === lesson.courseName
            );
            let chapterDetails = course[0].chapters.filter(
              (chapter) => chapter.chapterNumber === lesson.chapterNumber
            )[0];

            return (
              <div className="lessons">
                <div className="lesson">
                  <div className="more-info">!</div>
                  <h2>Chapter {chapterDetails.chapterNumber}</h2>
                  <p>{chapterDetails.title}</p>
                </div>

                <span>{course.name}</span>
                {/* // Add the library for tracking progress here */}
              </div>
            );
          })}
        </section>
      )}
      {enrolledCourses.length === 0 ? (
        <section>
            <h2>Enrolled courses</h2>
          <p><b>You are not enrolled on any course</b></p>
          <button type="button">Courses</button>
        </section>
      ) : (
        <section className="courses">
            <h2>Enrolled courses</h2>
          {enrolledCourses.map((enrolledCourse) => {
            return (
              <div>
                <p>
                  <b>{enrolledCourse}</b>
                </p>
                {courses.map((course) => {
                  if (course.name === enrolledCourse) {
                    return<div className="lessons">
                      {course.chapters.map((chapter) => {
                         return(
                          <div className="lesson">
                            <div className="more-info">!</div>
                            <h2>Chapter {chapter.chapterNumber}</h2>
                            <p>{chapter.title}</p>
                            <span>{chapter.courseName}</span>
                          </div>
                        );
                      })}
                    </div>;
                  }
                })}
              </div>
            );
          })}
        </section>
      )}
      <section className="welcome">
        <p>
          Presumably, you've joined this programme because you have aspirations,
          dreams or ambitions and maybe you're hoping that the course will help
          you unlock doors to new opportunities.
        </p>
        <p>
          If you are, then you've just taken your first step towards a new and
          exciting future.
        </p>
        <p>Well done you!</p>
        <img className="celebration" src={Celebration} alt="celebration" />
      </section>
    </main>
  );
}
