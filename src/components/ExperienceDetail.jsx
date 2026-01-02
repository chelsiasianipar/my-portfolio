import { useParams, Link } from "react-router-dom";

const ExperienceDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#2563eb" }}>
        ← Back to portfolio
      </Link>

      <h1 style={{ marginTop: "20px" }}>Experience Detail</h1>
      <p><strong>Project ID:</strong> {id}</p>

      <p>
        This page is dedicated to showing detailed information about a selected
        project. You can later enhance this page with images, descriptions,
        responsibilities, and tools used.
      </p>
    </div>
  );
};

export default ExperienceDetail;
