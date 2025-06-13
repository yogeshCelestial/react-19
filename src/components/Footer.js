import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <p>© 2025 Yogesh Chaudhary</p>
    <p>Back to <Link to="/">Home</Link>
    </p>
  </footer>
);

const WithFooterLayout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default WithFooterLayout;
