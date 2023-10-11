import React from 'react';

const Aboutus = () => {
  return (
    <div className="container containerabout">
      <section className="about" id="about">
        <div className="w-35">
          <img
            className="image"
            src="https://preview.colorlib.com/theme/agenda/images/logo-2.png.webp"
            alt="aboutus"
          ></img>
        </div>

        <div className="content w-50">
          <h2 className="headings text-black">
            What is Agenda and why choose our services?
          </h2>
          <p className="p">
            Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis
            dui. Nullam tellus risus, pellentesque at facilisis et, scelerisque
            sit amet metus. Duis vel semper turpis, ac tempus libero. Maecenas
            id ultrices risus. Aenean nec ornare ipsum, lacinia volutpat urna.
            Maecenas ut aliquam purus, quis sodales dolor.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
