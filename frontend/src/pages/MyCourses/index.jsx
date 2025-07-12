//react
import { useEffect, useState } from "react";

//components
import { Card, CourseCard } from "../../components/card/courseCard";

//axios
import axios from "axios";
//URL
import { API_URL } from "../../config";
import { LogoAndButton } from "../../components/LogoAndButton";
import { NavBar } from "../../layout/navBar";
//MUI library

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/Buttons/button";
import { Containers } from "../../components/Container";
import { CardSkeleton } from "../../components/Loading/LoadingCard";

const MyCourses = () => {
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?._id;

  const [myCourses, setMyCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_URL}/enrollments?user=${userId}`, {
          withCredentials: true,
        });

        if (res) {
          setMyCourses(res.data.data.docs);
        }

      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }

    };
    getData();
  }, []);

  return (
    <div>
      <ToastContainer />

      <LogoAndButton />
      <NavBar />
      <Containers>
        <h2 style={{ textAlign: "center", margin: "16px" }}>قائمة دوراتي</h2>

        <div
          className="myCourses-grid"
          style={{ display: "flex", flexWrap: "wrap" }}
        >

          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)

          ) : myCourses.length === 0 ? (
            <p style={{ textAlign: "center", width: "100%" }}>لا توجد عناصر.</p>
            
          ) : (
            myCourses?.map((item) => (
              <CourseCard
                key={item.course._id}
                item={item.course}
                id={item.course._id}
                imgSrc={item.course.img || "/assets/img/logo.png"}
                name={item.course.name}
                starIcon={item.course.averageRating}
                price={item.course.price}
                priceAfterDiscount={item.course.priceAfterDiscount}
                teacherName={item.course.teacher?.name}
                teacherImg={item.course.teacher?.img || "/assets/img/logo.png"}
                branch={item.course.branches.map((b) => b.name).join(" | ")}
                subject={item.course.subject?.name}
              />
            ))
          )
          }

        </div>
        
      </Containers>
    </div>
  );
};

export default MyCourses;
