import PropTypes from "prop-types";

export function Footer(props) {
  return (
    <footer>
      <div className="relative bg-white w-full mt-5">
        <div className="bg-custom-blue-dark text-white w-full mx-auto flex">
          <div className="flex-col justify-between mr-auto ml-8">
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">Contact us</a>
              </div>
            </div>
            <div className="my-8 mr-8">
              <div className="items-center w-full">
                <a href="#">Departments and agencies</a>
              </div>
            </div>
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">Public service and military</a>
              </div>
            </div>
          </div>

          <div className="flex-col justify-between mr-auto">
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">News</a>
              </div>
            </div>
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">Treaties, laws and regulations</a>
              </div>
            </div>
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">Government-wide reporting</a>
              </div>
            </div>
          </div>

          <div className="flex-col justify-between mr-auto">
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">Prime Minister</a>
              </div>
            </div>
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">How government works</a>
              </div>
            </div>
            <div className="my-8 mr-8">
              <div className="w-full">
                <a href="#">Open government</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-6">
          <ul className="flex justify-start">
            <li className="">
              <a href="#">Social media</a>
            </li>
            <li className="px-2">
              <span className="mr-2">•</span>
              <a href="#">Mobile applications</a>
            </li>
            <li className="px-2">
              <span className="mr-2">•</span>
              <a href="#">About Canada.ca</a>
            </li>
            <li className="px-2">
              <span className="mr-2">•</span>
              <a href="#">Terms and conditions</a>
            </li>
            <li className="px-2">
              <span className="mr-2">•</span>
              <a href="#">Privacy</a>
            </li>
          </ul>
          <img src="#" alt="canada.jpg" className="justify-end"></img>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};
