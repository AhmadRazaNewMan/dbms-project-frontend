import "./Programs.css";
// import program_1 from '../../assets/program-1.png';
// import program_2 from '../../assets/program-2.png';
// import program_3 from '../../assets/program-3.png';
// import program_icon_1 from '../../assets/program-icon-1.png'
// import program_icon_2 from '../../assets/program-icon-2.png'
// import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <>
      <h1 className="text-white text-center text-4xl p-3 font-semibold">Our Programms</h1>
      <div className="Programs">
        <div className="program">
          <img
          src="https://i.postimg.cc/43jX5ctR/program-1-DA-Ev-TPy.png
          "
            alt=""
          />
          <div className="caption">
            <img src="https://i.postimg.cc/gkC6BwWd/download-3.png" alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>

        <div className="program">
          <img
          src="https://i.postimg.cc/7h3PbL58/program-2-DRqw-F0-EM.png
          "
            alt=""
          />

          <div className="caption">
            <img src="https://i.postimg.cc/Dwq0mBb4/download-1.png" alt="" />
            <p>Master Degree</p>
          </div>
        </div>

        <div className="program">
          <img
          src="https://i.postimg.cc/fLXDgbjt/program-3-C0g4-YULi.png
          "
            alt=""
          />
          <div className="caption">
            <img src="https://i.postimg.cc/gkC6BwWd/download-3.png" alt="" />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
