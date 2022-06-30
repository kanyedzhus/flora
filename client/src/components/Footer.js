import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    // Footer
    <footer className="bg-light text-center text-gray">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Google --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* <!-- Github --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Form --> */}
        <section className="">
          <form action="">
            {/* <!--Grid row--> */}
            <div className="row d-flex justify-content-center">
              {/* <!--Grid column--> */}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-5 col-12">
                {/* <!-- Email input --> */}
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example21">
                    Email address
                  </label>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-auto">
                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </form>
        </section>
        {/* <!-- Section: Form --> */}

        {/* <!-- Section: Text --> */}
        <section className="mb-4">
          <p>
            This is a project that was created by Joy Williams, Maria Maclagan
            and Kanykei Dzhusupova at CodeOp, a full stack development bootcamp
            in Barcelona.
          </p>
        </section>
        {/* <!-- Section: Text --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        // style="background-color: rgba(0, 0, 0, 0.2);"
      >
        {year} © Flora
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
